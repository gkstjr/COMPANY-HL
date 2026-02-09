/* 
  ============================================
  Menu2_3Page (사업분야 - 감리·계측)
  ============================================
  - menu2-3: 사업분야 > 감리·계측
  - Hero 배너 + 탭 메뉴 + 이미지 기반 디자인
*/

import { Link, useLocation } from 'react-router-dom';
import { menuData, getMenuHeroImage } from '../../data/menuData';
import Breadcrumb from '../../components/Breadcrumb';
import '../MenuCommon.css';  // 공통 스타일
import './Menu2Page.css';  // 사업분야 전용 스타일

function Menu2_3Page() {
  // 사업분야 메뉴의 submenus 가져오기
  const businessMenu = menuData.find(menu => menu.title === '사업분야');
  const tabs = businessMenu ? businessMenu.submenus : [];
  
  // 현재 URL 경로 가져오기
  const location = useLocation();
  
  // Hero 이미지 가져오기
  const heroImage = getMenuHeroImage(location.pathname);

  return (
    <div className="menu-page">
      {/* Hero Section - 큰 배너 이미지 + 탭 메뉴 */}
      <section 
        className="menu-hero"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="menu-hero-overlay"></div>
        <div className="menu-hero-content">
          <h1>사업분야</h1>
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
          <h2 className="content-title">감리·계측</h2>
          
          {/* 부서소개 섹션 (맨 위) */}
          <div className="section-wrapper">
            <h3 className="section-title">부서소개</h3>
            <div className="section-content">
              <p>
                지반 공사는 눈에 보이지 않는 지하 공간을 다루기에 설계와 실제 현장 조건 사이의 불확실성이 항상 존재합니다.
                저희 감리·계측사업부는 이러한 간극을 메우고 프로젝트의 완벽한 안전을 담보하는 역할을 수행합니다.
              </p>
              <p>
                오랜 경험을 가진 지반 분야 특급 기술자들과 최첨단 IoT 기반 자동화 계측 시스템을 융합하여, 굴착 중 발생하는
                미세한 지반 거동을 실시간으로 감시합니다. 단순한 데이터 수집을 넘어, 축적된 계측 데이터와 수치해석 결과를
                비교·분석하여 공사 중 발생할 수 있는 위험 징후를 조기에 포착하고 즉각적인 공학적 솔루션을 제공합니다.
              </p>
              <p>
                또한, '지하안전관리에 관한 특별법' 등 강화된 법적 기준을 엄격히 준수하며, 인접 구조물과 지하 매설물의
                안전까지 포괄적으로 관리하여 고객의 자산 보호와 성공적인 사업 완수에 기여하고 있습니다.
              </p>
            </div>
          </div>

          {/* 이미지 섹션 (2개 이미지) */}
          <div className="business-images-section">
            <div className="business-image-item">
              <img src="/businessIntro3-1.jpg" alt="감리·계측 이미지 1" />
            </div>
            <div className="business-image-item">
              <img src="/businessIntro3-2.jpg" alt="감리·계측 이미지 2" />
            </div>
          </div>

          {/* 사업소개 이미지 (맨 아래) */}
          <div className="section-wrapper">
            <h3 className="section-title">사업소개</h3>
            <div className="business-intro-image">
              <img src="/businessIntro3-3.jpg" alt="감리·계측 사업소개" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Menu2_3Page;

