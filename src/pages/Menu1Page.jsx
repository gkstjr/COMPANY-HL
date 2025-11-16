/* 
  ============================================
  Menu1Page (회사소개 페이지)
  ============================================
  - menu1: 회사소개 메인 페이지
  - Hero 배너 + 탭 메뉴
*/

import { Link, useLocation } from 'react-router-dom';
import { menuData } from '../data/menuData';
import './Menu1Page.css';

function Menu1Page() {
  // 회사소개 메뉴의 submenus 가져오기
  const aboutMenu = menuData.find(menu => menu.title === '회사소개');
  const tabs = aboutMenu ? aboutMenu.submenus : [];
  
  // 현재 URL 경로 가져오기
  const location = useLocation();

  return (
    <div className="menu-page">
      {/* Hero Section - 큰 배너 이미지 + 탭 메뉴 */}
      <section className="menu-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>회사소개</h1>
        </div>
        
        {/* 탭 메뉴 (배너 안쪽 하단) */}
        <nav className="menu-tabs">
          {tabs.map((tab, index) => (
            <Link 
              key={index} 
              to={tab.link} 
              className={`tab-item ${location.pathname === tab.link ? 'active' : ''}`}
            >
              {tab.title}
            </Link>
          ))}
        </nav>
      </section>

      {/* 메인 콘텐츠 */}
      <section className="menu-content">
        <div className="container">
          <h2 className="content-title">회사소개</h2>
          <p className="content-text">
            한일지오이엔지를 방문해 주셔서 감사합니다.<br />
            상세 내용은 상단 메뉴를 선택해주세요.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Menu1Page;

