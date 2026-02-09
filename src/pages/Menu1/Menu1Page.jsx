/* 
  ============================================
  Menu1Page (회사소개 페이지)
  ============================================
  - menu1: 회사소개 메인 페이지
  - Hero 배너 + 탭 메뉴
*/

import { Link, useLocation } from 'react-router-dom';
import { menuData, getMenuHeroImage } from '../../data/menuData';
import Breadcrumb from '../../components/Breadcrumb';
import '../MenuCommon.css';  // 공통 스타일
import './Menu1Page.css';   // 인사말 전용 스타일

function Menu1Page() {
  // 회사소개 메뉴의 submenus 가져오기
  const aboutMenu = menuData.find(menu => menu.title === '회사소개');
  const tabs = aboutMenu ? aboutMenu.submenus : [];
  
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
          <h2 className="content-title">인사말</h2>
          
          {/* 인사말 섹션 (이미지 + 텍스트) */}
          <div className="greeting-section">
            {/* 왼쪽: 이미지 */}
            <div className="greeting-image">
              <img src="/ceoImage.png" alt="한일지오이엔지" />
            </div>

            {/* 오른쪽: 텍스트 내용 */}
            <div className="greeting-content">
              {/* 강조된 인사말 */}
              <div className="greeting-intro">
                <p className="greeting-intro-line">안녕하십니까.</p>
                <p className="greeting-intro-line">당사 홈페이지를 찾아주신 여러분 반갑습니다.</p>
              </div>

              {/* 본문 내용 */}
              <div className="greeting-text">
                <p>
                  (주)한일지오이엔지는 2002년 패기와 경륜을 가진 지반분야 전문가들이 모여
                  토목설계 엔지니어링분야 중심의 회사설립을 시작으로, 도심지 지하굴착분야의
                  설계, 공사 시 굴토감리, 계측업무에 이르기까지 꾸준히 사업영역을 확장하며
                  지속적인 성장을 이뤄 왔습니다.
                </p>

                <p>
                  사회의 발전에 따라 건설업계 선배들이 만들어 둔 건축물을 철거하는 업무가
                  본격화됨에 따라 지하 구조물 철거를 위한 최적화 설계 및 감리 업무의 특화를 위해,
                  철거 전문업체들의 요구사항과 현장 여건에 최적화한 공사 방법을 도입하려
                  각고의 노력을 다하고 있습니다.
                </p>

                <p>
                  앞으로도 토목 관련 분야 및 지하구조물의 신규와 철거를 위한 지하 굴착
                  공법들의 특징들이 현장에 적절하게 도입될 수 있도록 함으로써, 사회적
                  손실을 최소화 할 수 있는 전문엔지니어링 업체로서의 역활을 하고자 합니다.
                </p>

                <p>
                  기술인으로서의 사명감을 갖고, 지하굴착 분야는 물론 지반과 관련된 문제들도
                  축적된 경험과 문제해결을 위한 열정으로 주어진 일에 최선을 다할 것을 약속드립니다.
                </p>
              </div>

              {/* 마무리 인사 */}
              <p className="greeting-closing">감사합니다.</p>

              {/* 서명 */}
              <p className="greeting-signature">
                <span className="signature-title">대 표 이 사</span>
                <span className="signature-name">한  정  훈</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Menu1Page;

