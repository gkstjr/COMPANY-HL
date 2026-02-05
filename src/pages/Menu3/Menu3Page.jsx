/* 
  ============================================
  Menu3Page (사업실적 페이지)
  ============================================
  - menu3: 사업실적 메인 페이지
  - Hero 배너 + 탭 메뉴 + 게시판 형태
*/

import { useState, useMemo } from 'react';
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

  // 게시판 데이터 (모든 프로젝트를 개별 항목으로 변환)
  const allProjects = [
    // 2025년
    { id: 1, title: '송도세브란스병원 PIT부 굴착을 위한 가설 흙막이 설계용역', year: '2025', client: '세브란스병원' },
    { id: 2, title: '창녕박물관 복합문화관 기본 설계 및 실시설계용역', year: '2025', client: '창녕군' },
    { id: 3, title: '한남동 726-53번지 근린생활시설 및 단독주택 토목설계용역', year: '2025', client: '개발사' },
    // 2024년
    { id: 4, title: '삼전동 7-8외3필지 에스텍스시템 잠실사옥 토목변경설계용역', year: '2024', client: '에스텍스시템' },
    { id: 5, title: '송림 6구역 도시환경정비사업 흙막이 변경설계용역', year: '2024', client: '정비사업조합' },
    { id: 6, title: '목동서로 201 목동KT타워 지하층 해체공사 토목설계용역', year: '2024', client: 'KT' },
    // 2023년
    { id: 7, title: '금산행복드림센터 흙막이 실시설계용역', year: '2023', client: '금산군' },
    { id: 8, title: '신당동 368-76외 2필지 토목설계용역', year: '2023', client: '개발사' },
    { id: 9, title: '동소문동6가 164 근린생활시설 토목설계용역', year: '2023', client: '개발사' },
    // 2022년
    { id: 10, title: '장안동 청년주택 토목설계용역', year: '2022', client: '서울시' },
    { id: 11, title: '김포한강신도시B2-1-4,5 업무시설용지 오피스텔 설계용역', year: '2022', client: '개발사' },
    { id: 12, title: '영등포동3가 24-4번지 오피스텔 토목설계용역', year: '2022', client: '개발사' },
    // 2021년
    { id: 13, title: '미곡 미라클프라자 토목설계용역', year: '2021', client: '개발사' },
    { id: 14, title: '역촌1구역 주택재건축정비사업 토목설계용역', year: '2021', client: '정비사업조합' },
    { id: 15, title: '천호1 도시환경정비사업 토목설계용역', year: '2021', client: '정비사업조합' },
    // 2020년
    { id: 16, title: '마포구1구역 제28,29지구 도시환경정비사업 토목설계용역', year: '2020', client: '정비사업조합' },
    { id: 17, title: '광명시 철산동 주상복합 개발사업 토목설계용역', year: '2020', client: '개발사' },
    // 2019년
    { id: 18, title: '양평동1가 설계용역', year: '2019', client: '개발사' },
    { id: 19, title: '용산 흙막이 설계용역', year: '2019', client: '개발사' },
    { id: 20, title: '양평동1가 217-14 토목설계용역', year: '2019', client: '개발사' },
    // 2018년
    { id: 21, title: '성수동 2가 289-20 토목설계용역', year: '2018', client: '개발사' },
    { id: 22, title: '성수동 2가 273-13 토목설계용역', year: '2018', client: '개발사' },
    // 2017년
    { id: 23, title: '장안동 지식산업센터 토목설계용역', year: '2017', client: '개발사' },
    { id: 24, title: '연남동 근린생활시설 토목설계용역', year: '2017', client: '개발사' },
    // 2016년
    { id: 25, title: '성수동 1가 13-209 토목설계용역', year: '2016', client: '개발사' },
    { id: 26, title: '성수동 1가 656-75 토목설계 변경용역', year: '2016', client: '개발사' },
    // 2015년
    { id: 27, title: '여의도동 14-25 토목설계용역', year: '2015', client: '개발사' },
    { id: 28, title: '마포구 공덕동 24-1 토목설계용역', year: '2015', client: '개발사' },
    // 2014년
    { id: 29, title: '이태원동 19-47 토목설계용역', year: '2014', client: '개발사' },
    { id: 30, title: '선릉로 146길 29 오피스텔 토목설계용역', year: '2014', client: '개발사' },
    // 2013년
    { id: 31, title: '정릉동 239-34외 1필지 토목설계용역', year: '2013', client: '개발사' },
    { id: 32, title: '강남구 논현동 79-5 토목설계용역', year: '2013', client: '개발사' },
    // 2012년
    { id: 33, title: '명동 눈스퀘어 흙막이 변경설계용역', year: '2012', client: '개발사' },
    { id: 34, title: '성동구 성수동 1가 656-75 토목설계용역', year: '2012', client: '개발사' },
    { id: 35, title: '방배동 421-1외 6필지 토목설계용역', year: '2012', client: '개발사' },
    // 2011년
    { id: 36, title: '김포 고촌 수기마을 코오롱아파트 흙막이 설계용역', year: '2011', client: '코오롱' },
    { id: 37, title: '구로구 고척동 104-8외 1필지 토목설계용역', year: '2011', client: '개발사' },
    { id: 38, title: '원효로 2가 72-10 근린생활시설 토목설계용역', year: '2011', client: '개발사' },
    // 2010년
    { id: 39, title: '인천 남동구 논현동 448번지 운동시설 및 업무시설 설계 및 기술용역', year: '2010', client: '개발사' },
    { id: 40, title: 'IS동서 성수동 아파트형 공장 토목설계 용역', year: '2010', client: 'IS동서' },
    { id: 41, title: '코스트코 울산점 설계용역', year: '2010', client: '코스트코' },
    // 2009년
    { id: 42, title: '길음구역 도시정비사업 기본 설계용역', year: '2009', client: '정비사업조합' },
    { id: 43, title: '쌍문동 코오롱아파트 흙막이 설계용역', year: '2009', client: '코오롱' },
    { id: 44, title: '파주 효성아파트 흙막이 설계용역', year: '2009', client: '효성' },
    // 2008년
    { id: 45, title: '도촌동 시너세스빌딩 신축공사 흙막이설계 용역', year: '2008', client: '개발사' },
    { id: 46, title: '백석동 1313-3,4호 동아제약 일산지점 흙막이설계 변경 용역', year: '2008', client: '동아제약' },
    { id: 47, title: '김포시 고촌면 세종빌딩 흙막이설계 용역', year: '2008', client: '개발사' },
    // 2007년
    { id: 48, title: '대치동 항진빌딩 신축공사 설계 용역', year: '2007', client: '개발사' },
    { id: 49, title: '월곡 2구역 도시정비구역지정 PRD설계 용역', year: '2007', client: '정비사업조합' },
    { id: 50, title: '청북지구 B9블럭 공동주택 토목설계', year: '2007', client: '개발사' },
    // 2006년
    { id: 51, title: '힐튼남해골프&스파리조트 흙막이 설계, 수량산출 및 내역서 용역', year: '2006', client: '힐튼' },
    { id: 52, title: '서울시 종로구 평창동 577-9일대 업무/미술관 신축공사 흙막이 설계 용역', year: '2006', client: '개발사' },
    { id: 53, title: '성남 태평동 주거복합 흙막이 설계용역', year: '2006', client: '개발사' },
    // 2005년
    { id: 54, title: '광주 이마트 흙막이 설계용역', year: '2005', client: '이마트' },
    { id: 55, title: '부산 대연동 태평양 아파트 흙막이설계, 수량산출 및 내역서', year: '2005', client: '태평양' },
    { id: 56, title: '하남 풍산지구 B-7블럭 아파트 흙막이 설계변경용역', year: '2005', client: '개발사' },
    // 2004년
    { id: 57, title: '부평 삼산 프라자 흙막이 설계 용역', year: '2004', client: '개발사' },
    { id: 58, title: '평창동 원각사 흙막이 설계 용역', year: '2004', client: '개발사' },
    { id: 59, title: '덕소벽산 아파트 흙막이 설계, 수량산출 및 내역서', year: '2004', client: '벽산' },
    // 2003년
    { id: 60, title: '한남동 고급빌라 흙막이 설계용역', year: '2003', client: '개발사' },
    { id: 61, title: '공덕 3지구 삼성아파트 흙막이 설계용역', year: '2003', client: '삼성' },
    { id: 62, title: '기산동 이랜드 사옥 흙막이 설계, 수량산출 및 내역서 용역', year: '2003', client: '이랜드' },
    // 2002년
    { id: 63, title: '부산 광안동 SK뷰 설계용역', year: '2002', client: 'SK' },
    { id: 64, title: '서초동 업무시설 설계, 수량산출 및 내역서 용역', year: '2002', client: '삼성물산' },
    // 2001년
    { id: 65, title: '신도림 LG아파트 흙막이 설계용역', year: '2001', client: 'LG' },
    { id: 66, title: '성균관대학교 인문사회과학 캠퍼스 법학관 신축공사 토목설계용역', year: '2001', client: '성균관대' },
    { id: 67, title: '광명 시립도서관 지반조사, 토목설계 및 흙막이 설계용역', year: '2001', client: '광명시' },
    // 2000년
    { id: 68, title: '대전둔산 E-MART 지질조사, 흙막이 설계, 대지조성, 현황측량', year: '2000', client: '이마트' },
    { id: 69, title: '신세계 가양 E-MART 증축공사 토목설계, 지질조사', year: '2000', client: '신세계' },
    { id: 70, title: '신세계 충주 E-MART 토목 흙막이 설계', year: '2000', client: '신세계' },
    // 1999년
    { id: 71, title: '상봉 E-MART 신축설계 지질조사 및 흙막이 설계용역', year: '1999', client: '이마트' },
    { id: 72, title: '서부재활센터 지반조사 및 흙막이 설계', year: '1999', client: '재활센터' },
    { id: 73, title: '신세계 동인천 E-MART 설계용역', year: '1999', client: '신세계' },
    // 1998년
    { id: 74, title: '성북종합문화센터 토목설계 용역(흙막이 설계)', year: '1998', client: '성북구' },
    { id: 75, title: '신정동 아파트 흙막이 설계용역 (1단지)', year: '1998', client: '개발사' },
    { id: 76, title: '신정동 아파트 흙막이 설계용역 (2단지)', year: '1998', client: '개발사' },
    // 1997년
    { id: 77, title: '에이스 구로동 아파트형공장 신축공사 흙막이 설계', year: '1997', client: '개발사' },
    { id: 78, title: '울산프로젝트 시외버스터미널 토목공사 기본 및 실시설계', year: '1997', client: '울산시' },
    { id: 79, title: '시그마Ⅲ(가칭)토류구조물 설계용역', year: '1997', client: '개발사' },
    // 1996년
    { id: 80, title: '롯데덕산온천 휴양콘도미니엄 현황측량, 지반조사 및 흙막이 설계용역', year: '1996', client: '롯데' },
    { id: 81, title: '증권예탁원 일산사옥(유가증권 보관센타)신축공사 지하흙막이 설계', year: '1996', client: '증권예탁원' },
    { id: 82, title: '수원장안전문대 체육관 및 흙막이 설계용역', year: '1996', client: '전문대' },
    // 1995년
    { id: 83, title: '서울종합터미널 지하터파기 추가 설계', year: '1995', client: '터미널' },
    { id: 84, title: '구로주상복합건물 신축공사 흙막이 설계', year: '1995', client: '개발사' },
    { id: 85, title: '군인공제회빌딩 흙막이 설계', year: '1995', client: '군인공제회' },
    // 1994년
    { id: 86, title: '금호종합기술연구원 신축공사', year: '1994', client: '금호' },
    { id: 87, title: '기아그룹사옥 신축공사 지하터파기, 감리, 계측 용역', year: '1994', client: '기아' },
    { id: 88, title: '일산프리젠트(프라자)빌딩 신축공사 흙막이 현장감리 계측관리 분석용역', year: '1994', client: '개발사' },
  ];

  // 상태 관리
  const [selectedPeriod, setSelectedPeriod] = useState('all'); // 'all', '2021-', '2011-2020', '2001-2010'
  const [searchInput, setSearchInput] = useState(''); // 입력 중인 검색어
  const [searchQuery, setSearchQuery] = useState(''); // 실제 검색에 사용되는 검색어
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // 필터링된 데이터
  const filteredProjects = useMemo(() => {
    let filtered = [...allProjects];

    // 년도 필터
    if (selectedPeriod === '2021-') {
      filtered = filtered.filter(p => parseInt(p.year) >= 2021);
    } else if (selectedPeriod === '2011-2020') {
      filtered = filtered.filter(p => parseInt(p.year) >= 2011 && parseInt(p.year) <= 2020);
    } else if (selectedPeriod === '2001-2010') {
      filtered = filtered.filter(p => parseInt(p.year) >= 2001 && parseInt(p.year) <= 2010);
    } else if (selectedPeriod === '1994-2000') {
      filtered = filtered.filter(p => parseInt(p.year) >= 1994 && parseInt(p.year) <= 2000);
    }

    // 검색 필터
    if (searchQuery.trim()) {
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.client.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // 최신년도부터 정렬 (내림차순)
    filtered.sort((a, b) => {
      if (b.year !== a.year) {
        return parseInt(b.year) - parseInt(a.year);
      }
      return b.id - a.id;
    });

    return filtered;
  }, [selectedPeriod, searchQuery, allProjects]);

  // 페이지네이션
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  // 페이지 변경 시 스크롤 상단으로
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 검색어 입력 (실시간 검색 안 함)
  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  // 검색 실행 (버튼 클릭 또는 Enter 키)
  const handleSearch = () => {
    setSearchQuery(searchInput);
    setCurrentPage(1);
  };

  // Enter 키로 검색
  const handleSearchKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // 기간 변경 시 첫 페이지로
  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
    setCurrentPage(1);
  };

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
          <h2 className="content-title">사업실적</h2>

          {/* 기간 필터 탭 */}
          <div className="period-tabs">
            <button 
              className={`period-tab ${selectedPeriod === 'all' ? 'active' : ''}`}
              onClick={() => handlePeriodChange('all')}
            >
              전체
            </button>
            <button 
              className={`period-tab ${selectedPeriod === '2021-' ? 'active' : ''}`}
              onClick={() => handlePeriodChange('2021-')}
            >
              2021년부터~
            </button>
            <button 
              className={`period-tab ${selectedPeriod === '2011-2020' ? 'active' : ''}`}
              onClick={() => handlePeriodChange('2011-2020')}
            >
              2020년~2011년
            </button>
            <button 
              className={`period-tab ${selectedPeriod === '2001-2010' ? 'active' : ''}`}
              onClick={() => handlePeriodChange('2001-2010')}
            >
              2010년~2001년
            </button>
            <button 
              className={`period-tab ${selectedPeriod === '1994-2000' ? 'active' : ''}`}
              onClick={() => handlePeriodChange('1994-2000')}
            >
              2000년~설립일
            </button>
          </div>

          {/* 검색 및 정보 */}
          <div className="board-header">
            <div className="board-info">
              총 {filteredProjects.length}건 {currentPage}/{totalPages}page
            </div>
            <div className="board-search">
              <input
                type="text"
                placeholder="제목 검색"
                value={searchInput}
                onChange={handleSearchChange}
                onKeyPress={handleSearchKeyPress}
                className="search-input"
              />
              <button className="search-button" onClick={handleSearch}>검색</button>
            </div>
          </div>

          {/* 게시판 테이블 */}
          <div className="board-table-wrapper">
            <table className="board-table">
              <thead>
                <tr>
                  <th className="col-no">NO</th>
                  <th className="col-title">용역명</th>
                  <th className="col-year">수행연도</th>
                  <th className="col-client">발주처</th>
                </tr>
              </thead>
              <tbody>
                {currentProjects.length > 0 ? (
                  currentProjects.map((project, index) => (
                    <tr key={project.id}>
                      <td className="col-no">{filteredProjects.length - startIndex - index}</td>
                      <td className="col-title">{project.title}</td>
                      <td className="col-year">{project.year}</td>
                      <td className="col-client">{project.client}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="no-data">검색 결과가 없습니다.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* 페이지네이션 */}
          {totalPages > 0 && (
            <div className="pagination">
              <button
                className="pagination-btn"
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
              >
                «
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ))}
              <button
                className="pagination-btn"
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
              >
                »
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Menu3Page;
