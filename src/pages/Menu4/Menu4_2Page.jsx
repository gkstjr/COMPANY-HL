/* 
  ============================================
  Menu4_2Page (채용프로세스 페이지)
  ============================================
  - menu4-2: 채용안내 > 채용프로세스
  - Hero 배너 + 탭 메뉴 + 채용 단계
*/

import { Link, useLocation } from 'react-router-dom';
import { menuData } from '../../data/menuData';
import '../MenuCommon.css';  // 공통 스타일
import './Menu4_2Page.css';  // 채용프로세스 전용 스타일

function Menu4_2Page() {
  // 채용안내 메뉴의 submenus 가져오기
  const careersMenu = menuData.find(menu => menu.title === '채용안내');
  const tabs = careersMenu ? careersMenu.submenus : [];
  
  // 현재 URL 경로 가져오기
  const location = useLocation();

  // 채용 프로세스 단계
  const processSteps = [
    {
      step: 'STEP 01',
      title: '서류전형',
      description: '지원서 및 자기소개서 검토',
      duration: '1주 내외'
    },
    {
      step: 'STEP 02',
      title: '실무면접',
      description: '직무 관련 전문성 및 실무 역량 평가',
      duration: '2주 내외'
    },
    {
      step: 'STEP 03',
      title: '임원면접',
      description: '인성 및 조직 적합도 평가',
      duration: '1주 내외'
    },
    {
      step: 'STEP 04',
      title: '최종합격',
      description: '처우 협의 및 입사일 확정',
      duration: '협의 후 결정'
    }
  ];

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
          <h1>채용안내</h1>
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
          <h2 className="content-title">채용프로세스</h2>
          
          <p className="process-intro">
            한일지오이엔지의 채용 절차는 다음과 같습니다.<br />
            모든 단계는 지원자의 역량과 잠재력을 공정하게 평가합니다.
          </p>

          {/* 채용 프로세스 단계 */}
          <div className="process-steps">
            {processSteps.map((item, index) => (
              <div key={index} className="process-step-wrapper">
                <div className="process-step">
                  <div className="step-label">{item.step}</div>
                  <h3 className="step-title">{item.title}</h3>
                  <p className="step-description">{item.description}</p>
                  <span className="step-duration">{item.duration}</span>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="step-arrow">→</div>
                )}
              </div>
            ))}
          </div>

          {/* 안내사항 */}
          <div className="process-notice">
            <h3>안내사항</h3>
            <ul>
              <li>전형 일정은 지원 현황에 따라 변경될 수 있습니다.</li>
              <li>각 전형 결과는 개별 통보해 드립니다.</li>
              <li>제출하신 서류는 반환되지 않으며, 채용 목적 외에는 사용하지 않습니다.</li>
              <li>허위 사실이 발견될 경우 합격이 취소될 수 있습니다.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Menu4_2Page;

