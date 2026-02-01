/* 
  ============================================
  Menu3Page (사업실적 페이지)
  ============================================
  - menu3: 사업실적 메인 페이지
  - Hero 배너 + 탭 메뉴 + 연도별 사업실적 카드
*/

import { Link, useLocation } from 'react-router-dom';
import { menuData } from '../../data/menuData';
import Breadcrumb from '../../components/Breadcrumb';
import '../MenuCommon.css';  // 공통 스타일
import './Menu3Page.css';  // 사업실적 전용 스타일

function Menu3Page() {
  // 사업실적 메뉴의 submenus 가져오기
  const portfolioMenu = menuData.find(menu => menu.title === '사업실적');
  const tabs = portfolioMenu ? portfolioMenu.submenus : [];
  
  // 현재 URL 경로 가져오기
  const location = useLocation();

  // 사업실적 데이터 (연도별 3개씩)
  // 첫 3개만 이미지 있음
  const portfolioData = [
    {
      year: '2025',
      hasImage: true,
      image: '/menuhero.jpg',
      projects: [
        '송도세브란스병원 PIT부 굴착을 위한 가설 흙막이 설계용역',
        '창녕박물관 복합문화관 기본 설계 및 실시설계용역',
        '한남동 726-53번지 근린생활시설 및 단독주택 토목설계용역'
      ]
    },
    {
      year: '2024',
      hasImage: true,
      image: '/menuhero.jpg',
      projects: [
        '삼전동 7-8외3필지 에스텍스시템 잠실사옥 토목변경설계용역',
        '송림 6구역 도시환경정비사업 흙막이 변경설계용역',
        '목동서로 201 목동KT타워 지하층 해체공사 토목설계용역'
      ]
    },
    {
      year: '2023',
      hasImage: true,
      image: '/menuhero.jpg',
      projects: [
        '금산행복드림센터 흙막이 실시설계용역',
        '신당동 368-76외 2필지 토목설계용역',
        '동소문동6가 164 근린생활시설 토목설계용역'
      ]
    },
    {
      year: '2022',
      hasImage: false,
      projects: [
        '장안동 청년주택 토목설계용역',
        '김포한강신도시B2-1-4,5 업무시설용지 오피스텔 설계용역',
        '영등포동3가 24-4번지 오피스텔 토목설계용역'
      ]
    },
    {
      year: '2021',
      hasImage: false,
      projects: [
        '미곡 미라클프라자 토목설계용역',
        '역촌1구역 주택재건축정비사업 토목설계용역',
        '천호1 도시환경정비사업 토목설계용역'
      ]
    },
    {
      year: '2020',
      hasImage: false,
      projects: [
        '마포구1구역 제28,29지구 도시환경정비사업 토목설계용역',
        '광명시 철산동 주상복합 개발사업 토목설계용역'
      ]
    },
    {
      year: '2019',
      hasImage: false,
      projects: [
        '양평동1가 설계용역',
        '용산 흙막이 설계용역',
        '양평동1가 217-14 토목설계용역'
      ]
    },
    {
      year: '2018',
      hasImage: false,
      projects: [
        '성수동 2가 289-20 토목설계용역',
        '성수동 2가 273-13 토목설계용역'
      ]
    },
    {
      year: '2017',
      hasImage: false,
      projects: [
        '장안동 지식산업센터 토목설계용역',
        '연남동 근린생활시설 토목설계용역'
      ]
    },
    {
      year: '2016',
      hasImage: false,
      projects: [
        '성수동 1가 13-209 토목설계용역',
        '성수동 1가 656-75 토목설계 변경용역'
      ]
    },
    {
      year: '2015',
      hasImage: false,
      projects: [
        '여의도동 14-25 토목설계용역',
        '마포구 공덕동 24-1 토목설계용역'
      ]
    },
    {
      year: '2014',
      hasImage: false,
      projects: [
        '이태원동 19-47 토목설계용역',
        '선릉로 146길 29 오피스텔 토목설계용역'
      ]
    },
    {
      year: '2013',
      hasImage: false,
      projects: [
        '정릉동 239-34외 1필지 토목설계용역',
        '강남구 논현동 79-5 토목설계용역'
      ]
    },
    {
      year: '2012',
      hasImage: false,
      projects: [
        '명동 눈스퀘어 흙막이 변경설계용역',
        '성동구 성수동 1가 656-75 토목설계용역',
        '방배동 421-1외 6필지 토목설계용역'
      ]
    },
    {
      year: '2011',
      hasImage: false,
      projects: [
        '김포 고촌 수기마을 코오롱아파트 흙막이 설계용역',
        '구로구 고척동 104-8외 1필지 토목설계용역',
        '원효로 2가 72-10 근린생활시설 토목설계용역'
      ]
    },
    {
      year: '2010',
      hasImage: false,
      projects: [
        '인천 남동구 논현동 448번지 운동시설 및 업무시설 설계 및 기술용역',
        'IS동서 성수동 아파트형 공장 토목설계 용역',
        '코스트코 울산점 설계용역'
      ]
    },
    {
      year: '2009',
      hasImage: false,
      projects: [
        '길음구역 도시정비사업 기본 설계용역',
        '쌍문동 코오롱아파트 흙막이 설계용역',
        '파주 효성아파트 흙막이 설계용역'
      ]
    },
    {
      year: '2008',
      hasImage: false,
      projects: [
        '도촌동 시너세스빌딩 신축공사 흙막이설계 용역',
        '백석동 1313-3,4호 동아제약 일산지점 흙막이설계 변경 용역',
        '김포시 고촌면 세종빌딩 흙막이설계 용역'
      ]
    },
    {
      year: '2007',
      hasImage: false,
      projects: [
        '대치동 항진빌딩 신축공사 설계 용역',
        '월곡 2구역 도시정비구역지정 PRD설계 용역',
        '청북지구 B9블럭 공동주택 토목설계'
      ]
    },
    {
      year: '2006',
      hasImage: false,
      projects: [
        '힐튼남해골프&스파리조트 흙막이 설계, 수량산출 및 내역서 용역',
        '서울시 종로구 평창동 577-9일대 업무/미술관 신축공사 흙막이 설계 용역',
        '성남 태평동 주거복합 흙막이 설계용역'
      ]
    },
    {
      year: '2005',
      hasImage: false,
      projects: [
        '광주 이마트 흙막이 설계용역',
        '부산 대연동 태평양 아파트 흙막이설계, 수량산출 및 내역서',
        '하남 풍산지구 B-7블럭 아파트 흙막이 설계변경용역'
      ]
    },
    {
      year: '2004',
      hasImage: false,
      projects: [
        '부평 삼산 프라자 흙막이 설계 용역',
        '평창동 원각사 흙막이 설계 용역',
        '덕소벽산 아파트 흙막이 설계, 수량산출 및 내역서'
      ]
    },
    {
      year: '2003',
      hasImage: false,
      projects: [
        '한남동 고급빌라 흙막이 설계용역',
        '공덕 3지구 삼성아파트 흙막이 설계용역',
        '기산동 이랜드 사옥 흙막이 설계, 수량산출 및 내역서 용역'
      ]
    },
    {
      year: '2002',
      hasImage: false,
      projects: [
        '부산 광안동 SK뷰 설계용역',
        '서초동 업무시설 설계용역'
      ]
    },
    {
      year: '2001',
      hasImage: false,
      projects: [
        '신도림 LG아파트 흙막이 설계용역',
        '성균관대학교 인문사회과학 캠퍼스 법학관 신축공사 토목설계용역',
        '광명 시립도서관 지반조사, 토목설계 및 흙막이 설계용역'
      ]
    },
    {
      year: '2000',
      hasImage: false,
      projects: [
        '대전둔산 E-MART 지질조사, 흙막이 설계, 대지조성, 현황측량',
        '신세계 가양 E-MART 증축공사 토목설계, 지질조사',
        '신세계 충주 E-MART 토목 흙막이 설계'
      ]
    },
    {
      year: '1999',
      hasImage: false,
      projects: [
        '상봉 E-MART 신축설계 지질조사 및 흙막이 설계용역',
        '서부재활센터 지반조사 및 흙막이 설계',
        '신세계 동인천 E-MART 설계용역'
      ]
    },
    {
      year: '1998',
      hasImage: false,
      projects: [
        '성북종합문화센터 토목설계 용역(흙막이 설계)',
        '신정동 아파트 흙막이 설계용역 (1단지)',
        '신정동 아파트 흙막이 설계용역 (2단지)'
      ]
    },
    {
      year: '1997',
      hasImage: false,
      projects: [
        '에이스 구로동 아파트형공장 신축공사 흙막이 설계',
        '울산프로젝트 시외버스터미널 토목공사 기본 및 실시설계',
        '시그마Ⅲ(가칭)토류구조물 설계용역'
      ]
    },
    {
      year: '1996',
      hasImage: false,
      projects: [
        '롯데덕산온천 휴양콘도미니엄 현황측량, 지반조사 및 흙막이 설계용역',
        '증권예탁원 일산사옥(유가증권 보관센타)신축공사 지하흙막이 설계',
        '수원장안전문대 체육관 및 흙막이 설계용역'
      ]
    },
    {
      year: '1995',
      hasImage: false,
      projects: [
        '서울종합터미널 지하터파기 추가 설계',
        '구로주상복합건물 신축공사 흙막이 설계',
        '군인공제회빌딩 흙막이 설계'
      ]
    },
    {
      year: '1994',
      hasImage: false,
      projects: [
        '금호종합기술연구원 신축공사',
        '기아그룹사옥 신축공사 지하터파기, 감리, 계측 용역',
        '일산프리젠트(프라자)빌딩 신축공사 흙막이 현장감리 계측관리 분석용역'
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
      <h1>사업실적</h1>
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
          <h2 className="content-title">주요 사업실적</h2>

          {/* 사업실적 카드 */}
          <div className="portfolio-cards">
            {portfolioData.map((portfolio, index) => (
              <div key={index} className={`portfolio-card ${portfolio.hasImage ? 'with-image' : 'no-image'}`}>
                {portfolio.hasImage && (
                  <div className="portfolio-image">
                    <img src={portfolio.image} alt={`${portfolio.year}년 사업실적`} />
                  </div>
                )}
                <h3 className="portfolio-year">{portfolio.year}</h3>
                <ul className="portfolio-projects">
                  {portfolio.projects.map((project, idx) => (
                    <li key={idx}>{project}</li>
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

export default Menu3Page;
