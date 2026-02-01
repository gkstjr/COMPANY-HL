/* 
  ============================================
  menuData.js - 전역 메뉴 데이터
  ============================================
  - Header, AboutPage 등에서 공통 사용
  - 한 곳에서만 수정하면 모든 곳에 자동 반영
*/

export const menuData = [
  {
    title: "회사소개",
    link: "/menu1",  // 첫 번째는 _1 없이
    submenus: [
      { title: "인사말", link: "/menu1" },
      { title: "회사연혁", link: "/menu1-2" },
      { title: "조직도", link: "/menu1-3" },
      { title: "찾아오시는 길", link: "/menu1-4" },
    ]
  },
  {
    title: "사업분야",
    link: "/menu2",  // 첫 번째는 _1 없이
    submenus: [
      // { title: "사업분야", link: "/menu2" },
    ]
  },
  {
    title: "사업실적",
    link: "/menu3",  // 첫 번째는 _1 없이
    submenus: [
      // { title: "사업실적", link: "/menu3" },
    ]
  },
  {
    title: "채용안내",
    link: "/menu4",  // 첫 번째는 _1 없이
    submenus: [
      { title: "인재상", link: "/menu4" },
      { title: "채용프로세스", link: "/menu4-2" },
    ]
  },
  {
    title: "고객지원",
    link: "/menu5",  // 첫 번째는 _1 없이
    submenus: [
      { title: "온라인 문의", link: "/menu5" },
    ]
  },
];

