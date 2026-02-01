/* 
  ============================================
  Menu2Page (사업분야 페이지)
  ============================================
  - menu2: 사업분야 메인 페이지
  - Hero 배너 + 탭 메뉴 + 사업분야 카드
*/

import { Link, useLocation } from 'react-router-dom';
import { menuData } from '../../data/menuData';
import Breadcrumb from '../../components/Breadcrumb';
import '../MenuCommon.css';  // 공통 스타일
import './Menu2Page.css';  // 사업분야 전용 스타일

function Menu2Page() {
  // 사업분야 메뉴의 submenus 가져오기
  const businessMenu = menuData.find(menu => menu.title === '사업분야');
  const tabs = businessMenu ? businessMenu.submenus : [];
  
  // 현재 URL 경로 가져오기
  const location = useLocation();

  // 사업분야 데이터
  const businessData = [
    {
      title: '설계 분야',
      image: '/menuhero.jpg',
      items: [
        '지반조사 및 현황측량',
        '지하굴착흙막이 설계',
        '기초설계 및 적용공법',
        '비탈면안정 및 보강공법',
        '연약지반안정 및 처리대책',
        '터널 및 기술제안(건축토아)',
        '지하안전영향평가',
        '사후지하안전영향평가',
        'V.E.(Value Engineering) 검토',
        '용벽 및 토류벽 검토',
        '양압력 및 처리대책 검토',
        '건축구조분야 파트너사 운용'
      ]
    },
    {
      title: '철거 분야',
      image: '/menuhero.jpg',
      items: [
        '건축물 해체 철거',
        '내부 구조물 철거',
        '콘크리트 구조물 철거',
        '석면 제거 작업',
        '폐기물 처리 및 반출',
        '철거 계획 수립',
        '안전 관리 계획 수립',
        '철거 장비 운용',
        '분진 및 소음 관리',
        '주변 구조물 보호 대책'
      ]
    },
    {
      title: '감리 분야',
      image: '/menuhero.jpg',
      items: [
        '건설사업 감리',
        '토목공사 감리',
        '안전관리 감리',
        '품질관리 감리',
        '공정관리 감리',
        '기술지도 및 자문',
        '설계도서 검토',
        '시공계획 검토',
        '준공 검사 업무',
        '하자보수 관리'
      ]
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
          <h2 className="content-title">사업분야</h2>
          
          <p className="business-intro">
            한일지오이엔지는 지하 구조물 철거 및 설계 전문업체로<br />
            굴착 및 기초설계부터 안전점검, 감리업무까지 컨설팅해드립니다.
          </p>

          {/* 사업분야 카드 */}
          <div className="business-cards">
            {businessData.map((business, index) => (
              <div key={index} className="business-card">
                <div className="card-image">
                  <img src={business.image} alt={business.title} />
                </div>
                <h3 className="card-title">{business.title}</h3>
                <ul className="card-items">
                  {business.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Menu2Page;
