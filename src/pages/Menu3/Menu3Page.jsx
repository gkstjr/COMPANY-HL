/* 
  ============================================
  Menu3Page (사업실적 페이지)
  ============================================
  - menu3: 사업실적 메인 페이지
  - Hero 배너 + 탭 메뉴
*/

import { Link, useLocation } from 'react-router-dom';
import { menuData } from '../../data/menuData';
import '../MenuCommon.css';  // 공통 스타일

function Menu3Page() {
  // 사업실적 메뉴의 submenus 가져오기
  const portfolioMenu = menuData.find(menu => menu.title === '사업실적');
  const tabs = portfolioMenu ? portfolioMenu.submenus : [];
  
  // 현재 URL 경로 가져오기
  const location = useLocation();

  return (
    <div className="menu-page">
      {/* Hero Section - 큰 배너 이미지 + 탭 메뉴 */}
      <section 
        className="menu-hero"
        style={{
          backgroundImage: 'url(/menuhero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="menu-hero-overlay"></div>
        <div className="menu-hero-content">
          <h1>사업실적</h1>
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
          <h2 className="content-title">사업실적1</h2>
          <p className="content-text">
            사업실적 내용이 들어갈 예정입니다.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Menu3Page;
