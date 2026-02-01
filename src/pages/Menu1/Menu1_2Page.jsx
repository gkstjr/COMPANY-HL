/* 
  ============================================
  Menu1_2Page (회사연혁 페이지)
  ============================================
  - menu1-2: 회사소개 > 회사연혁
  - Hero 배너 + 탭 메뉴 + 연도별 타임라인
*/

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { menuData } from '../../data/menuData';
import '../MenuCommon.css';  // 공통 스타일
import './Menu1_2Page.css';  // 회사연혁 전용 스타일

function Menu1_2Page() {
  // 회사소개 메뉴의 submenus 가져오기
  const aboutMenu = menuData.find(menu => menu.title === '회사소개');
  const tabs = aboutMenu ? aboutMenu.submenus : [];
  
  // 현재 URL 경로 가져오기
  const location = useLocation();

  // 연도 필터 상태 (기본값: 최신년도)
  const [activeFilter, setActiveFilter] = useState('2020~2024');

  // 연혁 데이터
  const historyData = [
    {
      year: 2024,
      items: [
        { month: '06', text: '경기지방중소기업청 표창 수상' },
        { month: '05', text: '한국지하공학회 감사패 수상' },
        { month: '03', text: '서울교통공사 우수협력업체 선정' },
        { month: '02', text: '중소벤처기업부 기술혁신형(INNO-BIZ) 기업 인증' },
      ],
      image: '/menuhero.jpg',
      imageCaption: 'IPARK'
    },
    {
      year: 2023,
      items: [
        { month: '12', text: '철도시설공단 우수협력업체 선정' },
        { month: '10', text: '중소기업기술혁신개발사업 선정' },
        { month: '08', text: '서울시설공단 우수협력업체 선정' },
        { month: '06', text: 'ISO 9001:2015 품질경영시스템 인증' },
        { month: '03', text: '기술혁신형 중소기업(INNO-BIZ) 재인증' },
      ],
      image: '/menuhero.jpg',
      imageCaption: '아파트 단지'
    },
    {
      year: 2022,
      items: [
        { month: '10', text: '국가연구개발사업 우수성과 50선 선정' },
        { month: '07', text: '중소벤처기업부 장관 표창' },
        { month: '04', text: 'ISO 14001 환경경영시스템 인증' },
      ],
      image: '/menuhero.jpg',
      imageCaption: '건설 현장'
    },
    {
      year: 2021,
      items: [
        { month: '09', text: '벤처기업확인서(연구개발형) 갱신' },
        { month: '05', text: '기업부설연구소 설립 인정서 재인정' },
      ],
      image: '/menuhero.jpg',
      imageCaption: '연구시설'
    },
    {
      year: 2020,
      items: [
        { month: '12', text: '대한민국 엔지니어링 대상 수상' },
      ],
    },
    {
      year: 2019,
      items: [
        { month: '11', text: '국가연구개발사업 성과확산 우수기관 선정' },
        { month: '08', text: '중소벤처기업부 기술혁신대전 장관표창' },
      ],
      image: '/menuhero.jpg',
      imageCaption: '경기장'
    },
  ];

  // 필터링된 연혁 데이터
  const filteredHistory = historyData.filter(item => {
    if (activeFilter === '1990~2009') return item.year >= 1990 && item.year <= 2009;
    if (activeFilter === '2010~2019') return item.year >= 2010 && item.year <= 2019;
    if (activeFilter === '2020~2024') return item.year >= 2020 && item.year <= 2024;
    return true;
  });

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
          <h2 className="content-title">회사연혁</h2>
          
          {/* 연도 필터 탭 */}
          <div className="history-filters">
            {['2020~2024', '2010~2019', '1990~2009'].map(filter => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* 연혁 타임라인 */}
          <div className="history-timeline">
            {filteredHistory.map((item, index) => (
              <div key={index} className="timeline-item">
                {/* 왼쪽: 연도 */}
                <div className="timeline-year">
                  <h3>{item.year}</h3>
                </div>

                {/* 중간: 월별 내용 */}
                <div className="timeline-content">
                  <ul className="history-list">
                    {item.items.map((detail, idx) => (
                      <li key={idx}>
                        <span className="month">{detail.month}</span>
                        <span className="text">{detail.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 오른쪽: 이미지 (있는 경우만) */}
                {item.image && (
                  <div className="timeline-image">
                    <img src={item.image} alt={item.imageCaption} />
                    <p className="image-caption">{item.imageCaption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Menu1_2Page;

