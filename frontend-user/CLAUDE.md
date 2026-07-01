# CLAUDE.md — frontend-user

The One Seoul 사용자 프론트엔드. 작업 시 아래 내용을 준수한다.

## 기술 스택

- **Next.js 15** (App Router, `--turbopack`)
- **React 19**
- **next-intl** — locale 기반 라우팅 (`src/app/[locale]`), 메시지: `src/messages/{ko,en}`
- **TypeScript** (strict), 경로 별칭 `@/*` → `./src/*`
- **lenis** — 부드러운 스크롤
- **swiper** — 슬라이드/캐러셀 (아래 규칙 참고)

## 프로젝트 구조

```
src/
  app/[locale]/      # locale 라우팅 (layout.tsx, page.tsx)
  app/globals.css
  components/        # 공용 컴포넌트
  hooks/             # 공용 훅
  i18n/              # next-intl 설정 (routing, navigation, request)
  messages/          # 다국어 메시지 (ko, en)
  middleware.ts
```

### 컴포넌트 폴더 구조 — 페이지 전용 컴포넌트는 `_components`로 colocate

- **여러 페이지에서 재사용되는 공용 컴포넌트**만 `src/components`에 둔다.
- **특정 페이지 하나에서만 쓰이는 컴포넌트**는 그 페이지 폴더 아래 `_components/`에 colocate 한다. (Next.js App Router 규칙상 `_`로 시작하는 폴더는 라우팅에서 제외되는 private folder)
  - 예: `about` 페이지 전용 컴포넌트 → `src/app/[locale]/about/_components/`
- 하위 라우트(`about/history/page.tsx` 등) 전용 컴포넌트는 그 라우트 폴더 자체에 `_components`를 둬 가장 좁은 범위에 colocate 한다.
- 새 컴포넌트를 만들기 전 재사용 가능성을 먼저 판단한다: 여러 페이지에서 쓸 여지가 있으면 `src/components`, 해당 페이지 전용이면 `_components`. (기존 공용 컴포넌트 재사용 우선 원칙은 작업 규칙 5번 참고)

```
src/
  components/           # 여러 페이지에서 재사용되는 공용 컴포넌트
  app/[locale]/
    about/
      _components/      # about 페이지 전용 컴포넌트
        Hero.tsx
        Timeline.tsx
      message.ts
      page.tsx
```

## 구현된 공용 기능

### 1. Lenis 부드러운 스크롤

- **`src/components/SmoothScrollProvider.tsx`**
  - 앱 전역에 Lenis 적용. `src/app/[locale]/layout.tsx`에서 `NextIntlClientProvider` 내부를 래핑한다.
  - **라우팅(pathname 변경) 시마다 인스턴스를 파기 후 재생성하여 초기화**한다. 라우팅 직후 스크롤을 최상단으로 리셋.
  - Lenis 인스턴스를 Context로 노출 → **`useLenis()`** 훅으로 어디서든 인스턴스 접근 가능.
  - 스크롤 감도(`duration`, `easing` 등)는 이 파일의 `new Lenis({...})` 옵션에서 조정.
  - Lenis 권장 CSS는 `src/app/globals.css` 상단에 포함됨.

### 2. 모바일 분기 훅

- **`src/hooks/useIsMobile.ts`** — `useIsMobile(breakpoint = 768)`
  - 화면 너비 `<= 768px`이면 `isMobile === true`.
  - SSR 안전(초기값 `false` → 마운트 후 반영), `matchMedia` 구독으로 리사이즈 자동 반영.

### 3. 스크롤 잠금 훅 (팝업/모달용)

- **`src/hooks/useLockScroll.ts`** — `useLockScroll(locked: boolean)`
  - `locked === true`면 `lenis.stop()` (스크롤 차단), `false`면 `lenis.start()` (재개).
  - 언마운트 시 자동 재개. `globals.css`의 `.lenis.lenis-stopped { overflow: hidden }`로 네이티브 스크롤까지 차단.

> 위 훅/Provider는 모두 클라이언트 전용(`"use client"`). 사용하는 컴포넌트에도 `"use client"`가 있어야 한다.

## 다국어 (next-intl)

### 핵심 원칙 — 메시지는 페이지별 `message.ts`로 colocate

- **모든 페이지(메인·서브)는 자기 폴더에 `message.ts` 하나**를 둔다. 한 파일 안에 `ko`/`en`을 함께 작성해 가시성을 높인다. (locale별 폴더/JSON 분리 안 함)
- **메인** 다국어는 `src/app/[locale]/message.ts` **하나**로 관리한다. (전역 공통 `common` + 메인 페이지 `home`)
- **서브페이지**는 해당 **1depth 폴더 최상위에 `message.ts`**를 colocate 한다. 예) `src/app/[locale]/about/message.ts`.
- 모든 `message.ts`는 `src/i18n/messages.ts` 하나가 수집하여 next-intl에 합쳐 넘긴다.

### 설정 개요

- **지원 언어 4종**: `ko`(기본·한국어), `en`(English), `ja`(日本語), `zh`(中文) — `src/i18n/routing.ts`의 `locales`. 언어 선택 UI 표기명은 같은 파일의 `localeLabels` 사용.
- **URL 전략**: `localePrefix: "as-needed"` → ko는 prefix 없이(`/`), 나머지는 prefix(`/en`, `/ja`, `/zh`).
- **라우팅**: `src/middleware.ts`가 `api`/`_next`/정적 파일 제외 모든 경로에 locale 적용.
- **수집/요청**: `src/i18n/messages.ts`의 `getMessages(locale)`가 메인 + 모든 서브페이지 메시지를 병합 → `src/i18n/request.ts`가 이를 로드.
- **타입 안전**: `src/i18n/messages.ts`가 `Messages` 타입을 만들고 `src/global.d.ts`가 next-intl `AppConfig`에 보강 → 키 **자동완성 + 오타 검출** (기준: 기본 언어 ko).

### 파일 구조

```
src/
  i18n/
    routing.ts        # locales, defaultLocale
    navigation.ts     # Link/useRouter/usePathname/redirect 래퍼
    request.ts        # getMessages(locale) 로드
    messages.ts       # ★ 수집기: 메인 + 서브페이지 message.ts 등록 / Messages 타입
  app/[locale]/
    message.ts        # ★ 메인 다국어 (common + home), ko/en 한 파일
    page.tsx
    about/            # ← 샘플 서브페이지 (이 구조를 그대로 복제해 새 페이지 작성)
      message.ts      # ★ 서브페이지 다국어 (colocate), ko/en 한 파일
      page.tsx
```

> **등록은 수동(명시) 방식**이다. 폴더 자동 스캔은 turbopack 안정성 이슈로 쓰지 않는다. 서브페이지를 만들면 반드시 `src/i18n/messages.ts`의 `pages`에 import + 한 줄 등록해야 메시지가 로드된다. `about` 페이지가 등록 예시이자 동작하는 샘플이다.

### `message.ts` 작성 형식

```ts
import type { Locale } from "@/i18n/routing";

// 최상위 key(또는 등록 네임스페이스)가 곧 useTranslations 네임스페이스가 된다.
const message = {
  ko: { title: "소개", description: "..." },
  en: { title: "About", description: "..." },
} satisfies Record<Locale, unknown>;

export default message;
```

### 서브페이지 추가 절차

1. `src/app/[locale]/<subpage>/message.ts` 생성 (위 형식, ko/en 모두 작성).
2. `src/i18n/messages.ts`에 **import 후 `pages`에 한 줄 등록**. key가 네임스페이스가 된다.
   ```ts
   import about from "@/app/[locale]/about/message";
   const pages = { about } satisfies Record<string, Record<Locale, unknown>>;
   ```
3. 사용: `useTranslations("about")` / `getTranslations("about")`.

> 메인의 `home`/`common`처럼 중첩 네임스페이스가 필요하면 `message.ts`의 key를 중첩(`home: { hero: {...} }`)하고 `"home.hero"`로 접근한다.

### 사용 방법

- **서버 컴포넌트**: `getTranslations`
  ```tsx
  import { getTranslations, setRequestLocale } from "next-intl/server";
  setRequestLocale(locale);              // 정적 렌더링 활성화 위해 필요
  const t = await getTranslations("home.hero");
  ```
- **클라이언트 컴포넌트**: `useTranslations`
  ```tsx
  "use client";
  import { useTranslations } from "next-intl";
  const t = useTranslations("common");
  ```
- **링크/라우팅**: 항상 `src/i18n/navigation.ts` 래퍼(`Link`, `useRouter`, `usePathname`, `redirect`)를 사용. (`next/link`·`next/navigation` 직접 사용 금지)

### 다국어 작업 규칙

- **레이아웃 우선·간결 번역**: 번역 문구는 **레이아웃이 깨지지 않는 선에서 최대한 간소화된 단어**로 작성한다. 단, 무조건 줄이지 말고 **문맥상 자연스럽고 말이 되는** 표현을 유지한다. (특히 언어별 길이 차이가 큰 `ja`/`zh`/`en`에서 GNB·버튼 등 폭이 고정된 영역 주의)
- **텍스트 하드코딩 금지**. 모든 노출 문구는 해당 페이지 `message.ts`에 둔다.
- **메시지 값 타입은 `ReactNode` 허용**: `message.ts`를 `string`으로만 제한하지 말고 `ReactNode`까지 허용해 **문구 안에 태그(`<br/>`, `<strong>` 등)를 직접 넣을 수 있게** 한다. JSX가 들어간 메시지는 `t()`가 아니라 `t.rich()`(또는 컴포넌트로 직접 작성)로 렌더한다.
  - 예: `satisfies Record<Locale, unknown>` 유지(값 타입을 좁히지 않음) → 값에 `<>...<br/>...</>` 같은 ReactNode 사용 가능.
- **이미지 `src`/`alt`는 다국어 처리 불필요**. 이미지 경로와 대체 텍스트는 `message.ts`에 넣지 않고 컴포넌트에서 직접 지정한다. (언어 무관 고정값)
- **`ko`/`en` 양쪽 키를 항상 동일하게** 유지한다. (한쪽만 추가하면 타입 에러/런타임 누락)
- 서브페이지 메시지는 그 페이지 폴더에 colocate. 메인/공통 텍스트만 `[locale]/message.ts`에.
- 새 언어 추가: `routing.ts`의 `locales` + `localeLabels`에 추가 → 모든 `message.ts`에 해당 locale 키 추가.
- 키 구조/이름은 ko 기준(`Messages` 타입의 원천)으로 맞춘다.

## 작업 규칙

1. **슬라이드 요소는 왠만하면 `swiper`를 사용**한다. 직접 캐러셀을 구현하지 말 것.
2. **반응형 대응**을 항상 고려한다. (모바일 분기는 `useIsMobile` 활용, 768px 기준)
3. **Figma MCP 작업 후 디자인과 일치하는지 한 번 더 검토**한다.
4. **Figma의 이미지 소스 사용 시 이미지를 변형하지 않고 그대로 사용**한다. (리사이즈/크롭/색보정 등 임의 변형 금지)
5. **기존에 있는 컴포넌트를 최대한 활용**한다. 새로 만들기 전에 `src/components`를 먼저 확인할 것.
