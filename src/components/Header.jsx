/* 
  ============================================
  Header 컴포넌트
  ============================================
  - 모든 페이지 상단에 표시되는 네비게이션 바
  - 로고 + 메뉴 (회사소개, 사업분야, 사업실적, 채용안내, 고객지원)
  - 반응형: 모바일에서는 햄버거 메뉴로 변경
*/

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { menuData } from '../data/menuData';  // 전역 메뉴 데이터 import
import './Header.css';

function Header() {
  // 메뉴 데이터는 src/data/menuData.js에서 관리

  // useState: React의 상태관리 Hook
  // isMenuOpen이 true면 모바일 메뉴가 열림, false면 닫힘
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // 메가 메뉴 (전체 서브메뉴) 열림/닫힘
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  // 전체메뉴 오버레이 열림/닫힘
  const [isAllMenuOpen, setIsAllMenuOpen] = useState(false);
  // 모바일에서 열린 서브메뉴 인덱스 (아코디언용)
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);

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

  return (
    <header className="header">
      <div className="header-container">
        {/* 로고 영역 (왼쪽) */}
        <Link to="/" className="logo">
          <span className="logo-text">한일지오이엔지</span>
        </Link>

        {/* 네비게이션 메뉴 (가운데) - 데스크톱용 */}
        <nav 
          className="nav desktop-nav"
          onMouseEnter={() => setIsMegaMenuOpen(true)}
          onMouseLeave={() => setIsMegaMenuOpen(false)}
        >
          {menuData.map((menu, index) => (
            <Link key={index} to={menu.link} className="nav-link">
              {menu.title}
            </Link>
          ))}
        </nav>

        {/* 모바일 메뉴 (햄버거 메뉴) */}
        <nav className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
          {menuData.map((menu, index) => (
            <div key={index} className="mobile-menu-item">
              {/* 메인 메뉴 */}
              <div 
                className="mobile-menu-main"
                onClick={() => toggleMobileSubmenu(index)}
              >
                <span>{menu.title}</span>
                <span className={`mobile-arrow ${openMobileSubmenu === index ? 'open' : ''}`}>
                  ▼
                </span>
              </div>
              
              {/* 서브메뉴 */}
              <div className={`mobile-submenu ${openMobileSubmenu === index ? 'open' : ''}`}>
                {menu.submenus.map((submenu, subIndex) => (
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

        {/* 메가 메뉴 (전체 서브메뉴) */}
        <div 
          className={`mega-menu ${isMegaMenuOpen ? 'active' : ''}`}
          onMouseEnter={() => setIsMegaMenuOpen(true)}
          onMouseLeave={() => setIsMegaMenuOpen(false)}
        >
          <div className="mega-menu-content">
            {menuData.map((menu, index) => (
              <div key={index} className="mega-column">
                <div className="mega-submenu">
                  {menu.submenus.map((submenu, subIndex) => (
                    <Link 
                      key={subIndex} 
                      to={submenu.link}
                      onClick={() => setIsMegaMenuOpen(false)}
                    >
                      {submenu.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

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
        <button className="hamburger" onClick={toggleMenu}>
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
              <h3 className="all-menu-title">{menu.title}</h3>
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

