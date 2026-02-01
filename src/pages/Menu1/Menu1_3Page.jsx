/* 
  ============================================
  Menu1_3Page (조직도 페이지)
  ============================================
  - menu1-3: 회사소개 > 조직도
  - Hero 배너 + 탭 메뉴 + 조직도 이미지
*/

import { Link, useLocation } from 'react-router-dom';
import { menuData } from '../../data/menuData';
import Breadcrumb from '../../components/Breadcrumb';
import '../MenuCommon.css';  // 공통 스타일
import './Menu1_3Page.css';  // 조직도 전용 스타일

function Menu1_3Page() {
  // 회사소개 메뉴의 submenus 가져오기
  const aboutMenu = menuData.find(menu => menu.title === '회사소개');
  const tabs = aboutMenu ? aboutMenu.submenus : [];
  
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
          <Breadcrumb />
          <h2 className="content-title">조직도</h2>
          
          {/* 조직도 이미지 */}
          <div className="organization-wrapper">
            <img 
              src="/menu1_3Image.jpeg" 
              alt="한일지오이엔지 조직도" 
              className="organization-image"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Menu1_3Page;

