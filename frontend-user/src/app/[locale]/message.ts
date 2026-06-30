import type { Locale } from "@/i18n/routing";

/**
 * 메인 다국어 메시지 (전역 공통 + 메인 페이지).
 * - 페이지 종속이 아닌 공통(common)과 메인 페이지(home) 텍스트를 한 파일에서 관리한다.
 * - 서브페이지는 각 폴더의 message.ts에 colocate 하고 src/i18n/messages.ts에 등록한다.
 * - 최상위 key(common, home ...)가 곧 네임스페이스가 된다.
 */
const message = {
  ko: {
    common: {
      header: { home: "홈", language: "언어" },
      footer: { copyright: "© 2026 The One Seoul" },
      actions: { more: "더보기", submit: "확인", cancel: "취소" },
    },
    home: {
      hero: {
        title: "더원 서울",
        subtitle: "여기에 메인 페이지 소개 문구가 들어갑니다.",
      },
      about: {
        title: "소개",
        description: "여기에 소개 서브 카테고리 문구가 들어갑니다.",
      },
    },
    nav: {
      login: "로그인",
      about: { label: "더원서울안과", intro: "병원소개", doctors: "의료진소개", research: "학술발표", equipment: "첨단보유장비", location: "오시는길" },
      retina: { label: "망막 클리닉", floaters: "비문증", detachment: "망막박리", vascular: "망막혈관질환", uveitis: "포도막염", diabetic: "당뇨망막병증", amd: "황반변성", unity: "UNITY<br></br>통합수술시스템" },
      glaucoma: { label: "녹내장 클리닉", clinic: "녹내장 클리닉" },
      cataract: { label: "백내장 클리닉", cataract: "백내장", iol: "인공수정체 탈구", dryeye: "안구건조증" },
      vision: { label: "시력교정술", todaylasek: "투데이 라섹", doctors: "의료진소개", research: "학술발표", equipment: "첨단보유장비", location: "오시는길" },
      myopia: { label: "근시 클리닉", mysight: "마이사이트", dreamlens: "드림렌즈" },
      checkup: { label: "안종합검진", checkup: "안종합검진", dryeye: "안구건조증" },
      support: { label: "고객지원", news: "병원소식", reviews: "수술체험기", booking: "예약문의", notice: "공지사항·이벤트" },
    },
  },
  en: {
    common: {
      header: { home: "Home", language: "Language" },
      footer: { copyright: "© 2026 The One Seoul" },
      actions: { more: "More", submit: "Submit", cancel: "Cancel" },
    },
    home: {
      hero: {
        title: "The One Seoul",
        subtitle: "Your main page intro copy goes here.",
      },
      about: {
        title: "About",
        description: "Your about subcategory copy goes here.",
      },
    },
    nav: {
      login: "Login",
      about: { label: "The One Seoul", intro: "About Us", doctors: "Doctors", research: "Research", equipment: "Equipment", location: "Directions" },
      retina: { label: "Retina", floaters: "Floaters", detachment: "Detachment", vascular: "Vascular Disease", uveitis: "Uveitis", diabetic: "Diabetic Retina", amd: "Macular Degen.", unity: "UNITY<br></br>System" },
      glaucoma: { label: "Glaucoma", clinic: "Glaucoma Clinic" },
      cataract: { label: "Cataract", cataract: "Cataract", iol: "IOL Dislocation", dryeye: "Dry Eye" },
      vision: { label: "Vision Correction", todaylasek: "Today LASEK", doctors: "Doctors", research: "Research", equipment: "Equipment", location: "Directions" },
      myopia: { label: "Myopia", mysight: "MiSight", dreamlens: "Dream Lens" },
      checkup: { label: "Eye Checkup", checkup: "Eye Checkup", dryeye: "Dry Eye" },
      support: { label: "Support", news: "News", reviews: "Reviews", booking: "Booking", notice: "Notice·Events" },
    },
  },
  ja: {
    common: {
      header: { home: "ホーム", language: "言語" },
      footer: { copyright: "© 2026 The One Seoul" },
      actions: { more: "もっと見る", submit: "確認", cancel: "キャンセル" },
    },
    home: {
      hero: {
        title: "ザ・ワン・ソウル眼科",
        subtitle: "ここにメインページの紹介文が入ります。",
      },
      about: {
        title: "紹介",
        description: "ここに紹介サブカテゴリの文言が入ります。",
      },
    },
    nav: {
      login: "ログイン",
      about: { label: "ザ・ワン・ソウル", intro: "病院紹介", doctors: "医療陣", research: "学術発表", equipment: "先端設備", location: "アクセス" },
      retina: { label: "網膜クリニック", floaters: "飛蚊症", detachment: "網膜剝離", vascular: "網膜血管疾患", uveitis: "ぶどう膜炎", diabetic: "糖尿病網膜症", amd: "黄斑変性", unity: "UNITY<br></br>統合手術" },
      glaucoma: { label: "緑内障クリニック", clinic: "緑内障クリニック" },
      cataract: { label: "白内障クリニック", cataract: "白内障", iol: "眼内レンズ脱臼", dryeye: "ドライアイ" },
      vision: { label: "視力矯正", todaylasek: "トゥデイラセック", doctors: "医療陣", research: "学術発表", equipment: "先端設備", location: "アクセス" },
      myopia: { label: "近視クリニック", mysight: "マイサイト", dreamlens: "ドリームレンズ" },
      checkup: { label: "眼総合検診", checkup: "眼総合検診", dryeye: "ドライアイ" },
      support: { label: "サポート", news: "お知らせ", reviews: "手術体験記", booking: "予約問合せ", notice: "お知らせ・イベント" },
    },
  },
  zh: {
    common: {
      header: { home: "首页", language: "语言" },
      footer: { copyright: "© 2026 The One Seoul" },
      actions: { more: "更多", submit: "确认", cancel: "取消" },
    },
    home: {
      hero: {
        title: "The One 首尔眼科",
        subtitle: "此处填写主页介绍文案。",
      },
      about: {
        title: "介绍",
        description: "此处填写介绍子类目文案。",
      },
    },
    nav: {
      login: "登录",
      about: { label: "The One 首尔", intro: "医院介绍", doctors: "医疗团队", research: "学术发表", equipment: "尖端设备", location: "交通指南" },
      retina: { label: "视网膜门诊", floaters: "飞蚊症", detachment: "视网膜脱离", vascular: "视网膜血管病", uveitis: "葡萄膜炎", diabetic: "糖尿病视网膜病变", amd: "黄斑变性", unity: "UNITY<br></br>综合手术" },
      glaucoma: { label: "青光眼门诊", clinic: "青光眼门诊" },
      cataract: { label: "白内障门诊", cataract: "白内障", iol: "人工晶体脱位", dryeye: "干眼症" },
      vision: { label: "视力矫正", todaylasek: "Today LASEK", doctors: "医疗团队", research: "学术发表", equipment: "尖端设备", location: "交通指南" },
      myopia: { label: "近视门诊", mysight: "MiSight", dreamlens: "梦镜" },
      checkup: { label: "眼综合检查", checkup: "眼综合检查", dryeye: "干眼症" },
      support: { label: "客户支持", news: "医院新闻", reviews: "手术体验", booking: "预约咨询", notice: "公告·活动" },
    },
  },
} satisfies Record<Locale, unknown>;

export default message;
