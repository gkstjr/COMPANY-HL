/* 
  ============================================
  Menu1Page (회사소개 페이지)
  ============================================
  - menu1: 회사소개 메인 페이지
  - Hero 배너 + 탭 메뉴
*/

import { Link, useLocation } from 'react-router-dom';
import { menuData } from '../../data/menuData';
import '../MenuCommon.css';  // 공통 스타일
import './Menu1Page.css';   // 인사말 전용 스타일

function Menu1Page() {
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
          <h2 className="content-title">인사말</h2>
          
          {/* 인사말 섹션 (이미지 + 텍스트) */}
          <div className="greeting-section">
            {/* 왼쪽: 이미지 */}
            <div className="greeting-image">
              <img src="/menu1Image.jpeg" alt="한일지오이엔지" />
            </div>

            {/* 오른쪽: 텍스트 내용 */}
            <div className="greeting-content">
              <h3 className="greeting-title">(주)한일지오이엔지는</h3>
              <p className="greeting-subtitle">
                20년 축적된 기술력과 차별화된 서비스 제공을 통해<br />
                지반설계분야를 선도하는 기업입니다.
              </p>

              <div className="greeting-text">
                <p>
                  2001년 3월 창업이래 지하공작설계분야를 중심으로 지반관련 설계업무 전반에
                  걸쳐 최상의 품질을 제공하기 위해 최선의 노력을 경주해 왔습니다.
                </p>

                <p>
                  또한 빠르게 변화하는 건설시장에 적극적으로 대응하기 위해 끊임없는 도전과
                  업무개선을 통해 철고 진취적인 기업이미지를 만들고 있습니다.
                </p>

                <p>
                  이 모든 성과는 고객님의 아낌없는 지원과 신뢰를 바탕으로 이루어낸 것임을
                  잘지웠고, 항상 시작과 같은 마음으로 앞으로도 지반분야 기술선도에 앞장서는
                  기업이 되겠습니다.
                </p>
              </div>

              <p className="greeting-signature">(주)한일지오이엔지 임직원 일동</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Menu1Page;

