# frontend-admin

The One Seoul 관리자(Admin) 프론트엔드. (Next.js App Router, 포트 3001)

## 개발

```bash
npm install
npm run dev      # http://localhost:3001
```

## 구조

```
src/
├── app/          # Next.js App Router (라우트)
├── components/   # 재사용 컴포넌트 (common, layout ...)
├── context/      # React Context
├── hooks/        # 커스텀 훅
├── lib/          # API 클라이언트, 유틸, 상수
└── styles/       # 전역/컴포넌트 스타일
```

import alias: `@/*` → `src/*`
