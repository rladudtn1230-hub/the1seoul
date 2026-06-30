/**
 * GNB(헤더) 메뉴 구성. (Figma 메뉴 구성도 기준)
 * - label/subtitle 텍스트는 하드코딩하지 않고 i18n "nav" 네임스페이스 키로 참조한다.
 *   상위 라벨: nav.<key>.label / 하위 라벨: nav.<key>.<child.key>
 * - href 는 locale-aware 라우팅(@/i18n/navigation 의 Link)에 사용한다.
 *   2depth 페이지는 아직 미구현이라 상위(1depth) 경로로 연결한다. (추후 세부 경로로 교체)
 */
export type SubMenuItem = { key: string; href: string };
export type MenuItem = { key: string; href: string; children: SubMenuItem[] };

export const MENU: MenuItem[] = [
  {
    key: "about",
    href: "/about",
    children: [
      { key: "intro", href: "/about" },
      { key: "doctors", href: "/about" },
      { key: "research", href: "/about" },
      { key: "equipment", href: "/about" },
      { key: "location", href: "/about" },
    ],
  },
  {
    key: "retina",
    href: "/retina",
    children: [
      { key: "floaters", href: "/retina" },
      { key: "detachment", href: "/retina" },
      { key: "vascular", href: "/retina" },
      { key: "uveitis", href: "/retina" },
      { key: "diabetic", href: "/retina" },
      { key: "amd", href: "/retina" },
      { key: "unity", href: "/retina" },
    ],
  },
  {
    key: "glaucoma",
    href: "/glaucoma",
    children: [{ key: "clinic", href: "/glaucoma" }],
  },
  {
    key: "cataract",
    href: "/cataract",
    children: [
      { key: "cataract", href: "/cataract" },
      { key: "iol", href: "/cataract" },
      { key: "dryeye", href: "/cataract" },
    ],
  },
  {
    key: "vision",
    href: "/vision-correction",
    children: [
      { key: "todaylasek", href: "/vision-correction" },
      { key: "doctors", href: "/vision-correction" },
      { key: "research", href: "/vision-correction" },
      { key: "equipment", href: "/vision-correction" },
      { key: "location", href: "/vision-correction" },
    ],
  },
  {
    key: "myopia",
    href: "/myopia",
    children: [
      { key: "mysight", href: "/myopia" },
      { key: "dreamlens", href: "/myopia" },
    ],
  },
  {
    key: "checkup",
    href: "/checkup",
    children: [
      { key: "checkup", href: "/checkup" },
      { key: "dryeye", href: "/checkup" },
    ],
  },
  {
    key: "support",
    href: "/support",
    children: [
      { key: "news", href: "/support" },
      { key: "reviews", href: "/support" },
      { key: "booking", href: "/support" },
      { key: "notice", href: "/support" },
    ],
  },
];
