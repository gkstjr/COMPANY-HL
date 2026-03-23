/* 
  ============================================
  Header 컴포넌트
  ============================================
  - 모든 페이지 상단에 표시되는 네비게이션 바
  - 로고 + 메뉴 (회사소개, 사업분야, 사업실적, 채용안내, 고객지원)
  - 반응형: 모바일에서는 햄버거 메뉴로 변경
*/

import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { menuData } from '../data/menuData';  // 전역 메뉴 데이터 import
import './Header.css';

function Header() {
  // 메뉴 데이터는 src/data/menuData.js에서 관리

  // useState: React의 상태관리 Hook
  // isMenuOpen이 true면 모바일 메뉴가 열림, false면 닫힘
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // 전체메뉴 오버레이 열림/닫힘
  const [isAllMenuOpen, setIsAllMenuOpen] = useState(false);
  // 모바일에서 열린 서브메뉴 인덱스 (아코디언용)
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);
  // hover 비활성화 상태
  const [isHoverDisabled, setIsHoverDisabled] = useState(false);
  // 헤더 색상 변경 상태 (스크롤 위치에 따라)
  const [isDarkHeader, setIsDarkHeader] = useState(false);
  const headerContainerRef = useRef(null);
  
  const location = useLocation();
  const isMainPage = location.pathname === '/';

  // 햄버거 메뉴 토글 함수
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenMobileSubmenu(null); // 메뉴 닫을 때 서브메뉴도 초기화
  };

  // 전체메뉴 열기/닫기
  const toggleAllMenu = () => {
    setIsAllMenuOpen(!isAllMenuOpen);
  };

  // 모바일 서브메뉴 토글 (아코디언)
  const toggleMobileSubmenu = (index) => {
    setOpenMobileSubmenu(openMobileSubmenu === index ? null : index);
  };

  // 페이지 변경 시 hover 비활성화
  useEffect(() => {
    setIsHoverDisabled(true);
  }, [location.pathname]);

  // 메인페이지에서 스크롤 위치에 따라 헤더 색상 변경
  useEffect(() => {
    if (!isMainPage) {
      setIsDarkHeader(false);
      return;
    }

    const handleScroll = () => {
      // main-page 요소의 스크롤 감지
      const mainPage = document.querySelector('.main-page');
      if (!mainPage) return;

      const scrollY = mainPage.scrollTop;
      const heroHeight = window.innerHeight;

      // hero 섹션을 벗어나면 어두운 헤더
      if (scrollY > heroHeight * 0.5) {
        setIsDarkHeader(true);
      } else {
        setIsDarkHeader(false);
      }
    };

    const mainPage = document.querySelector('.main-page');
    if (mainPage) {
      mainPage.addEventListener('scroll', handleScroll);
      return () => mainPage.removeEventListener('scroll', handleScroll);
    }
  }, [isMainPage]);

  // 메뉴 클릭 시 hover 비활성화
  const handleMenuClick = () => {
    setIsHoverDisabled(true);
  };

  // 모바일 메뉴가 열린 상태에서 헤더 바깥을 누르면 메뉴 닫기
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleOutsideClick = (event) => {
      if (!headerContainerRef.current) return;
      if (!headerContainerRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setOpenMobileSubmenu(null);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick, { passive: true });

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [isMenuOpen]);

  // header에서 마우스 이동 시 hover 활성화
  const handleMouseMove = () => {
    if (isHoverDisabled) {
      setIsHoverDisabled(false);
    }
  };

  // 로고 클릭 시 메인페이지면 스크롤 맨 위로
  const handleLogoClick = (e) => {
    if (isMainPage) {
      e.preventDefault();
      const mainPage = document.querySelector('.main-page');
      if (mainPage) {
        mainPage.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`header ${isDarkHeader ? 'dark' : ''}`}>
      <div 
        ref={headerContainerRef}
        className={`header-container ${isHoverDisabled ? 'hover-disabled' : ''}`}
        onMouseMove={handleMouseMove}
      >
        {/* 로고 영역 (왼쪽) */}
        <Link to="/" className="logo" onClick={handleLogoClick}>
          <img src="/logoImage.png" alt="한일지오이엔지" className="logo-img" />
          <img src="/logoText.png" alt="한일지오이엔지" className="logo-text-img" />
        </Link>

        {/* 네비게이션 메뉴 (가운데) - 데스크톱용 */}
        <nav className="nav desktop-nav">
          <ul className="nav-list">
            {menuData.map((menu, index) => (
              <li key={index} className="nav-item">
                <Link to={menu.link} className="nav-link" onClick={handleMenuClick}>
                  {menu.title}
                </Link>
                {/* 각 nav-item 안에 서브메뉴 배치 */}
                <ul className="nav-submenu">
                  {menu.submenus && menu.submenus.map((submenu, subIndex) => (
                    <li key={subIndex}>
                      <Link to={submenu.link} onClick={handleMenuClick}>
                        {submenu.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            
            {/* 전체 서브메뉴 배경 */}
            <div className="nav-submenu-bg"></div>
          </ul>
        </nav>

        {/* 모바일 메뉴 (햄버거 메뉴) */}
        <nav className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
          {menuData.map((menu, index) => (
            <div key={index} className="mobile-menu-item">
              {/* 메인 메뉴 */}
              {menu.submenus && menu.submenus.length > 0 ? (
                <div
                  className="mobile-menu-main"
                  onClick={() => toggleMobileSubmenu(index)}
                >
                  <span>{menu.title}</span>
                  <span className={`mobile-arrow ${openMobileSubmenu === index ? 'open' : ''}`}>
                    <span className="mobile-arrow-icon" aria-hidden="true" />
                  </span>
                </div>
              ) : (
                <Link
                  to={menu.link}
                  className="mobile-menu-main"
                  onClick={toggleMenu}
                >
                  <span>{menu.title}</span>
                </Link>
              )}
              
              {/* 서브메뉴 */}
              <div className={`mobile-submenu ${openMobileSubmenu === index ? 'open' : ''}`}>
                {(menu.submenus || []).map((submenu, subIndex) => (
                  <Link 
                    key={subIndex} 
                    to={submenu.link}
                    onClick={toggleMenu}
                  >
                    {submenu.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* 전체메뉴 버튼 (오른쪽) */}
        <button className="menu-all-btn" onClick={toggleAllMenu}>
          <span className="menu-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span className="menu-text"></span>
        </button>

        {/* 햄버거 메뉴 버튼 (모바일에서만 보임) */}
        <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label={isMenuOpen ? '모바일 메뉴 닫기' : '모바일 메뉴 열기'}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* 전체메뉴 오버레이 */}
      <div className={`all-menu-overlay ${isAllMenuOpen ? 'active' : ''}`}>
        <button className="all-menu-close" onClick={toggleAllMenu}>
          <span>✕</span>
        </button>

        <div className="all-menu-content">
          {menuData.map((menu, index) => (
            <div key={index} className="all-menu-column">
              <Link to={menu.link} onClick={toggleAllMenu} className="all-menu-title">
                {menu.title}
              </Link>
              <ul className="all-menu-list">
                {menu.submenus.map((submenu, subIndex) => (
                  <li key={subIndex}>
                    <Link to={submenu.link} onClick={toggleAllMenu}>
                      {submenu.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;

