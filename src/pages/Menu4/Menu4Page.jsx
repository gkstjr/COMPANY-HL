/* 
  ============================================
  Menu4Page (채용안내 - 인재상 페이지)
  ============================================
  - menu4: 채용안내 > 인재상
  - Hero 배너 + 탭 메뉴 + 인재상 내용
*/

import { Link, useLocation } from 'react-router-dom';
import { menuData, getMenuHeroImage } from '../../data/menuData';
import Breadcrumb from '../../components/Breadcrumb';
import '../MenuCommon.css';  // 공통 스타일
import './Menu4Page.css';  // 인재상 전용 스타일

function Menu4Page() {
  // 채용안내 메뉴의 submenus 가져오기
  const careersMenu = menuData.find(menu => menu.title === '채용안내');
  const tabs = careersMenu ? careersMenu.submenus : [];
  
  // 현재 URL 경로 가져오기
  const location = useLocation();
  
  // Hero 이미지 가져오기
  const heroImage = getMenuHeroImage(location.pathname);

  // 인재상 데이터
  const talentData = [
    {
      number: '01',
      title: '전문성',
      items: [
        '기술적 전문성을 바탕으로 최상의 품질을 제공합니다.',
        '끊임없는 학습과 연구로 전문역량을 강화합니다.',
        '현장 경험과 이론을 융합하여 실용적 해결책을 제시합니다.'
      ]
    },
    {
      number: '02',
      title: '책임감',
      items: [
        '프로젝트에 대한 책임감을 가지고 최선을 다합니다.',
        '안전을 최우선으로 하며 품질 기준을 준수합니다.',
        '고객과의 약속을 지키고 신뢰를 구축합니다.'
      ]
    },
    {
      number: '03',
      title: '협업',
      items: [
        '팀워크를 통해 시너지를 창출합니다.',
        '열린 소통으로 문제를 함께 해결합니다.',
        '서로 존중하며 협력하는 조직문화를 만들어갑니다.'
      ]
    },
    {
      number: '04',
      title: '혁신',
      items: [
        '새로운 기술과 방법론에 도전합니다.',
        '창의적 사고로 효율성을 높입니다.',
        '변화를 두려워하지 않고 적극적으로 대응합니다.'
      ]
    }
  ];

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
          <Breadcrumb />
          <h2 className="content-title">인재상</h2>
          
          <p className="talent-intro">
            한일지오이엔지는 전문성과 책임감을 바탕으로<br />
            협업과 혁신을 통해 함께 성장하는 인재를 찾습니다.
      </p>

          {/* 인재상 리스트 */}
          <div className="talent-list">
            {talentData.map((talent, index) => (
              <div key={index} className="talent-item">
                <div className="talent-header">
                  <span className="talent-number">{talent.number}</span>
                  <h3 className="talent-title">{talent.title}</h3>
                </div>
                <ul className="talent-description">
                  {talent.items.map((item, idx) => (
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

export default Menu4Page;
