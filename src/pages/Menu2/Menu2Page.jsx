/* 
  ============================================
  Menu2Page (사업분야 - 지반·구조 설계)
  ============================================
  - menu2: 사업분야 > 지반·구조 설계
  - Hero 배너 + 탭 메뉴 + 이미지 기반 디자인
*/

import { Link, useLocation } from 'react-router-dom';
import { menuData, getMenuHeroImage } from '../../data/menuData';
import Breadcrumb from '../../components/Breadcrumb';
import '../MenuCommon.css';  // 공통 스타일
import './Menu2Page.css';  // 사업분야 전용 스타일

function Menu2Page() {
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
          <h2 className="content-title">지반·구조 설계</h2>
          
          {/* 부서소개 섹션 (맨 위) */}
          <div className="section-wrapper">
            <h3 className="section-title">부서소개</h3>
            <div className="section-content">
              <p>
                도심지 고층화와 지하공간 개발 수요가 급증함에 따라, 지하굴착은 단순한 토공사를 넘어 프로젝트의 성패를 
                좌우하는 핵심 공정으로 자리 잡았습니다. 복잡한 도심지 지반 조건과 인접 구조물의 영향을 정밀하게 분석하여,
                대심도 지하굴착시 발생할 수 있는 리스크를 원천적으로 차단합니다.
              </p>
              <p>
                특히 흙막이 가시설의 최적 설계를 통해 공기 단축과 공사비 절감을 실현하고 있으며,
                3차원 지반 거동 해석과 자동화 계측 관리 시스템을 연계하여 시공 중 안정성을 실시간으로 확보하고 있습니다.
                난공사 구간에서도 검증된 기술력으로 고객의 자산을 보호하고 성공적인 프로젝트 완수를 약속드립니다.
      </p>
            </div>
          </div>

          {/* 이미지 섹션 (2개 이미지) */}
          <div className="business-images-section">
            <div className="business-image-item">
              <img src="/businessIntro1-1.jpg" alt="지반·구조 설계 이미지 1" />
            </div>
            <div className="business-image-item">
              <img src="/businessIntro1-2.jpg" alt="지반·구조 설계 이미지 2" />
            </div>
          </div>

          {/* 사업소개 이미지 (맨 아래) */}
          <div className="section-wrapper">
            <h3 className="section-title">사업소개</h3>
            <div className="business-intro-image">
              <img src="/businessIntro1-3.jpg" alt="지반·구조 설계 사업소개" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Menu2Page;
