/* 
  ============================================
  MainPage (메인/회사소개 페이지)
  ============================================
  디자인 이미지 기반 섹션 구성:
  1. Hero Section - 큰 배경 이미지 + 메인 메시지
  2. Information Section - 4개 카드 (ABOUT, BUSINESS, PROJECT, RECRUIT)
  3. Project Gallery - 프로젝트 포트폴리오
  4. Testimonials - 고객 후기
*/

import './MainPage.css';

function MainPage() {
  return (
    <div className="main-page">
      {/* 
        ===== 1. Hero Section =====
        - 배경: 건설 현장 이미지
        - 메인 타이틀 + 서브 타이틀
      */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>YOUR TOTAL GROUND ENGINEERING PARTNER</h1>
          <p>터파운데이션을 보장해드립니다.</p>
        </div>
      </section>

      {/* 
        ===== 2. Information Section =====
        - 4개 정보 카드 (ABOUT, BUSINESS, PROJECT, RECRUIT)
      */}
      <section className="information">
        <div className="container">
          <h2 className="section-title">INFORMATION</h2>
          
          <div className="info-grid">
            {/* ABOUT 카드 */}
            <div className="info-card">
              <div className="info-icon">📋</div>
              <h3>ABOUT</h3>
              <p className="info-description">
                축적된 기술력을 통해<br />
                지반공사분야를 선도하는 기업입니다.
              </p>
            </div>

            {/* BUSINESS 카드 */}
            <div className="info-card">
              <div className="info-icon">🏗️</div>
              <h3>BUSINESS</h3>
              <p className="info-description">
                지반보강 중심으로 토목분야 다양한<br />
                사업영역을 보유한 기업입니다.
              </p>
            </div>

            {/* PROJECT 카드 */}
            <div className="info-card">
              <div className="info-icon">⚙️</div>
              <h3>PROJECT</h3>
              <p className="info-description">
                기술과 경험으로 다양한 프로젝트를<br />
                성공적으로 수행한 기업입니다.
              </p>
            </div>

            {/* RECRUIT 카드 */}
            <div className="info-card">
              <div className="info-icon">👥</div>
              <h3>RECRUIT</h3>
              <p className="info-description">
                가능성이 높은 인재를<br />
                기다리고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ===== 3. Project Gallery =====
        - 프로젝트 포트폴리오 4개
      */}
      <section className="projects">
        <div className="container">
          <div className="project-grid">
            {/* 프로젝트 카드 1 */}
            <div className="project-card">
              <div className="project-image" style={{ fontSize: '3rem' }}>
                🏗️
              </div>
              <div className="project-info">
                <h3>도로 건설 프로젝트</h3>
                <p>주요 간선도로 건설 공사를 성공적으로 완료하였습니다.</p>
                <button className="btn-primary">READ MORE</button>
              </div>
            </div>

            {/* 프로젝트 카드 2 */}
            <div className="project-card">
              <div className="project-image" style={{ fontSize: '3rem' }}>
                🌉
              </div>
              <div className="project-info">
                <h3>교량 시공 프로젝트</h3>
                <p>대규모 교량 시공을 안전하게 진행하였습니다.</p>
                <button className="btn-primary">READ MORE</button>
              </div>
            </div>

            {/* 프로젝트 카드 3 */}
            <div className="project-card">
              <div className="project-image" style={{ fontSize: '3rem' }}>
                🚇
              </div>
              <div className="project-info">
                <h3>지하철 공사</h3>
                <p>도심 지하철 노선 공사를 완료하였습니다.</p>
                <button className="btn-primary">READ MORE</button>
              </div>
            </div>

            {/* 프로젝트 카드 4 */}
            <div className="project-card">
              <div className="project-image" style={{ fontSize: '3rem' }}>
                🏢
              </div>
              <div className="project-info">
                <h3>건물 기초 공사</h3>
                <p>대형 건물의 지반 보강 공사를 수행하였습니다.</p>
                <button className="btn-primary">READ MORE</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ===== 4. Testimonials (고객 후기) =====
      */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title light">WHAT OUR CUSTOMERS SAY</h2>
          
          <div className="testimonial-grid">
            {/* 후기 카드 1 */}
            <div className="testimonial-card">
              <p className="testimonial-text">
                "전문성과 신뢰성을 갖춘 최고의 파트너입니다."
              </p>
              <p className="testimonial-author">- A건설</p>
            </div>

            {/* 후기 카드 2 */}
            <div className="testimonial-card">
              <p className="testimonial-text">
                "기술력과 경험이 뛰어난 기업입니다."
              </p>
              <p className="testimonial-author">- B종합건설</p>
            </div>

            {/* 후기 카드 3 */}
            <div className="testimonial-card">
              <p className="testimonial-text">
                "항상 믿고 맡길 수 있는 회사입니다."
              </p>
              <p className="testimonial-author">- C개발</p>
            </div>

            {/* 후기 카드 4 */}
            <div className="testimonial-card">
              <p className="testimonial-text">
                "안전하고 빠른 시공이 인상적이었습니다."
              </p>
              <p className="testimonial-author">- D건설</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainPage;

