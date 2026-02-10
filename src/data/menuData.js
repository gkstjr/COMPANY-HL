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
    heroImage: "/menuHero1.jpg",
    submenus: [
      { title: "인사말", link: "/menu1" },
      { title: "조직도", link: "/menu1-3" },
      { title: "찾아오시는 길", link: "/menu1-4" },
    ]
  },
  {
    title: "사업분야",
    link: "/menu2",  // 첫 번째는 _1 없이
    heroImage: "/menuHero2.jpg",
    submenus: [
      { title: "지반·구조 설계", link: "/menu2" },
      { title: "지하구조물 철거", link: "/menu2-2" },
      { title: "감리·계측", link: "/menu2-3" },
    ]
  },
  {
    title: "사업실적",
    link: "/menu3",  // 첫 번째는 _1 없이
    heroImage: "/menuHero3.jpg",
    submenus: [
      // { title: "사업실적", link: "/menu3" },
    ]
  },
  {
    title: "채용안내",
    link: "/menu4",  // 첫 번째는 _1 없이
    heroImage: "/menuHero4.jpg",
    submenus: [
      { title: "인재상", link: "/menu4" },
      { title: "채용프로세스", link: "/menu4-2" },
    ]
  },
  {
    title: "고객지원",
    link: "/menu5",  // 첫 번째는 _1 없이
    heroImage: "/menuHero5.jpg",
    submenus: [
      { title: "온라인 문의", link: "/menu5" },
    ]
  },
];

// 유틸리티 함수: 경로에 따라 hero 이미지 가져오기
export const getMenuHeroImage = (pathname) => {
  // 메인 메뉴 경로 매핑
  const menuMap = {
    '/menu1': '/menuHero1.jpg',
    '/menu1-3': '/menuHero1.jpg',
    '/menu1-4': '/menuHero1.jpg',
    '/menu2': '/menuHero2.jpg',
    '/menu2-2': '/menuHero2.jpg',
    '/menu2-3': '/menuHero2.jpg',
    '/menu3': '/menuHero3.jpg',
    '/menu4': '/menuHero4.jpg',
    '/menu4-2': '/menuHero4.jpg',
    '/menu5': '/menuHero5.jpg',
  };

  // 정확한 경로 매칭
  if (menuMap[pathname]) {
    return menuMap[pathname];
  }

  // menuData에서 찾기
  const menu = menuData.find(m => {
    if (m.link === pathname) return true;
    return m.submenus.some(sub => sub.link === pathname);
  });

  return menu ? menu.heroImage : '/menuhero.jpg'; // 기본값
};

