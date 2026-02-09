/* 
  ============================================
  Menu2_2Page (사업분야 - 지하구조물 철거)
  ============================================
  - menu2-2: 사업분야 > 지하구조물 철거
  - Hero 배너 + 탭 메뉴 + 이미지 기반 디자인
*/

import { Link, useLocation } from 'react-router-dom';
import { menuData, getMenuHeroImage } from '../../data/menuData';
import Breadcrumb from '../../components/Breadcrumb';
import '../MenuCommon.css';  // 공통 스타일
import './Menu2Page.css';  // 사업분야 전용 스타일

function Menu2_2Page() {
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
          <h2 className="content-title">지하구조물 철거</h2>
          
          {/* 부서소개 섹션 (맨 위) */}
          <div className="section-wrapper">
            <h3 className="section-title">부서소개</h3>
            <div className="section-content">
              <p>
                도심지 재개발과 재건축이 활발해짐에 따라 기존 지하구조물의 안전하고 효율적인 해체는 신축 사업의 성패를
                가르는 첫 단추가 되었습니다. 복잡한 도심지 환경과 인접 건물을 고려한 최적의 해체 공법을 제시합니다.
              </p>
              <p>
                강화된 법적 기준에 부합하는 정밀한 해체계획 수립 및 심의부터, 예측 불가능한 변수가 많은 철거 현장의 기술
                지원까지, 철거 전 과정에 걸쳐 원스톱 엔지니어링 솔루션을 제공합니다. 단순한 파괴가 아닌, 안전하고
                친환경적인 공간 재생의 토대를 마련해 드립니다.
              </p>
            </div>
          </div>

          {/* 이미지 섹션 (2개 이미지) */}
          <div className="business-images-section">
            <div className="business-image-item">
              <img src="/businessIntro2-1.jpg" alt="지하구조물 철거 이미지 1" />
            </div>
            <div className="business-image-item">
              <img src="/businessIntro2-2.jpg" alt="지하구조물 철거 이미지 2" />
            </div>
          </div>

          {/* 사업소개 이미지 (맨 아래) */}
          <div className="section-wrapper">
            <h3 className="section-title">사업소개</h3>
            <div className="business-intro-image">
              <img src="/businessIntro2-3.jpg" alt="지하구조물 철거 사업소개" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Menu2_2Page;

