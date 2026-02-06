/* 
  ============================================
  Menu2Page (사업분야 페이지)
  ============================================
  - menu2: 사업분야 메인 페이지
  - Hero 배너 + 탭 메뉴 + 사업분야 섹션
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

  // 사업분야 데이터
  const businessData = [
    {
      title: '지반·구조 설계',
      image: '/menu2_1Image.png',
      imagePosition: 'left', // 이미지 왼쪽
      categories: [
        {
          categoryTitle: '조사업무',
          items: [
            '지반조사 및 현황측량',
            'GPR탐사 및 관로 CCTV 촬영',
            '3D Scaner를 이용한 구조물 입체측량'
          ]
        },
        {
          categoryTitle: '지하굴착',
          items: [
            '설계 및 기술지원',
            '현장 최적화를 위한 기술지원',
            '계측결과를 통한 공사관리 기술지원'
          ]
        }
      ]
    },
    {
      title: '지하구조물 철거',
      image: '/menu2_2Image.png',
      imagePosition: 'right', // 이미지 오른쪽
      categories: [
        {
          categoryTitle: '철거심의 설계·협의',
          items: [
            '철거를 위한 지하굴착 설계',
            '현장 여건을 고려한 적정 장비 조합 검토',
            '공사를 위한 법리검토(신고, 허가, 심의절차 등)',
            '지하수 처리 방안 수립',
            '철거심의를 위한 토목분야 대관업무협업'
          ]
        },
        {
          categoryTitle: '철거공사 현장지원',
          items: [
            '철거현장 감리업무',
            '설계와 다른 여건에서의 시공방안 검토',
            '정기적인 현장 기술지원'
          ]
        }
      ]
    },
    {
      title: '감리·계측',
      image: '/menu2_3Image.png',
      imagePosition: 'left', // 이미지 왼쪽
      categories: [
        {
          categoryTitle: '감리',
          items: [
            '건진법에 의한 굴토감리',
            '철거공사 현장 감리',
            '사전설계도서 검토',
            '안전확인을 위한 도서 검토',
            '시공계획서 검토',
            '신규 또는 계량 공법에 대한 사업성 검토'
          ]
        },
        {
          categoryTitle: '계측',
          items: [
            '지하굴착 계측업무(수동·자동)',
            '지하철 계측(유지관리)',
            '구조물 안전진단(파트너사 운용)'
          ]
        }
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
          
          {/* 사업분야 섹션 */}
          <div className="business-sections">
            {businessData.map((business, index) => (
              <div 
                key={index} 
                className={`business-section ${business.imagePosition === 'right' ? 'reverse' : ''}`}
              >
                {/* 이미지 */}
                <div className="business-image">
                  <img src={business.image} alt={business.title} />
                </div>

                {/* 텍스트 내용 */}
                <div className="business-content">
                  <h3 className="business-title">{business.title}</h3>
                  
                  <div className="business-categories-wrapper">
                    {business.categories.map((category, catIndex) => (
                      <div key={catIndex} className="business-category">
                        <h4 className="category-title">-{category.categoryTitle}</h4>
                        <ul className="category-items">
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <span className="item-bullet">·</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Menu2Page;
