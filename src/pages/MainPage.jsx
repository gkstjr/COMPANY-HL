/* 
  ============================================
  MainPage (메인/회사소개 페이지)
  ============================================
  새로운 디자인 기반 섹션 구성:
  1. Hero Section - 이미지 슬라이더 (5개 이미지 자동 전환)
  2. OVERVIEW Section - 3개 카드 (About, 주요사업, 사업실적)
  3. INFORMATION Section - 4개 아이콘 카드
  4. PARTNERS Section - 파트너사 로고
*/

import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiTrendingUp, FiSettings, FiUsers, FiChevronLeft, FiChevronRight, FiArrowRight } from 'react-icons/fi';
import { menuData } from '../data/menuData';
import Footer from '../components/Footer';
import './MainPage.css';

function MainPage() {
  // 슬라이더 상태 관리
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // 카드 애니메이션 상태 관리
  const [visibleCards, setVisibleCards] = useState([false, false, false]);
  const cardRefs = useRef([]);

  // 스크롤 상태 관리 (Scroll Indicator 표시 여부)
  const [isScrolled, setIsScrolled] = useState(false);

  // 사업분야 슬라이더 상태 관리
  const [currentBusiness, setCurrentBusiness] = useState(0);
  
  // 섹션 인디케이터 상태 관리
  const [currentSection, setCurrentSection] = useState(0);
  
  // 사업분야 데이터 가져오기
  const businessMenu = menuData.find(menu => menu.title === '사업분야');
  const businessItems = businessMenu ? businessMenu.submenus : [];
  
  // 사업분야별 설명
  const businessDescriptions = [
    '지반의 거동을 예측하는 토질 역학과 구조물의 내구성을 보장하는 구조 설계의 조화를 통해, 까다로운 현장 조건에서도 흔들림 없는 건설의 기반을 완성합니다.',
    '정밀한 구조 해석과 체계적인 해체 공법을 바탕으로, 지하구조물 철거 시 발생하는 지반의 미세한 변화까지 통제하여 인접 시설물의 안전을 보장합니다.',
    '철저한 감리 시스템과 정밀 안전진단 기술을 바탕으로, 보이지 않는 지반 속 위험까지 예측하여 가장 안전하고 신뢰할 수 있는 건설 환경을 제공합니다.'
  ];

  // 슬라이더 이미지 데이터
  // 권장 이미지 크기: 1920x1080px (FullHD, 16:9 비율)
  // 파일 형식: JPG 또는 WebP
  // 용량: 200-500KB (최적화 권장)
  const slides = [
    {
      title: "한일지오이엔지",
      // subtitle: "1920x1080px 권장",
      image: "/mainSlide1.jpg",  // public 폴더에 저장
      name: "애니메이션1"
    },
    {
      title: "한일지오이엔지",
      // subtitle: "1920x1080px 권장",
      image: "/mainSlide2.jpg",  // public 폴더에 저장
      name: "애니메이션2"
    },
    {
      title: "한일지오이엔지",
      // subtitle: "1920x1080px 권장",
      image: "/mainSlide3.jpg",  // public 폴더에 저장
      name: "애니메이션3"
    },
    {
      title: "한일지오이엔지",
      // subtitle: "1920x1080px 권장",
      image: "/mainSlide4.jpg",  // public 폴더에 저장
      name: "애니메이션4"
    },
    {
      title: "한일지오이엔지",
      // subtitle: "1920x1080px 권장",
      image: "/mainSlide5.jpg",  // public 폴더에 저장
      name: "애니메이션5"
    }
  ];

  // 자동 슬라이드 (5초마다)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  // 사업분야 자동 슬라이드 (5초마다)
  useEffect(() => {
    const businessTimer = setInterval(() => {
      setCurrentBusiness((prev) => (prev + 1) % businessItems.length);
    }, 5000);

    return () => clearInterval(businessTimer);
  }, [businessItems.length]);

  // 섹션 스크롤 감지 (현재 섹션 추적)
  useEffect(() => {
    const mainPageElement = document.querySelector('.main-page');
    if (!mainPageElement) return;

    const handleScroll = () => {
      const scrollTop = mainPageElement.scrollTop;
      const scrollHeight = mainPageElement.scrollHeight;
      const windowHeight = window.innerHeight;
      
      // 현재 섹션 계산 (0: Hero, 1: About, 2: Overview, 3: Business, 4: Recruit, 5: Footer)
      // 마지막 섹션(Footer) 감지를 위해 하단 근처면 5로 설정
      if (scrollTop + windowHeight >= scrollHeight - 50) {
        setCurrentSection(5); // Footer
      } else {
        const sectionIndex = Math.round(scrollTop / windowHeight);
        setCurrentSection(Math.min(sectionIndex, 4)); // 최대 4까지만
      }
      
      // Scroll Indicator 숨김 처리
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    mainPageElement.addEventListener('scroll', handleScroll);
    return () => mainPageElement.removeEventListener('scroll', handleScroll);
  }, []);

  // 인디케이터 클릭
  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
  };

  // 사업분야 슬라이더 제어
  const handleBusinessPrev = () => {
    setCurrentBusiness((prev) => (prev - 1 + businessItems.length) % businessItems.length);
  };

  const handleBusinessNext = () => {
    setCurrentBusiness((prev) => (prev + 1) % businessItems.length);
  };

  // 스크롤 애니메이션 (Intersection Observer)
  useEffect(() => {
    const mainPageElement = document.querySelector('.main-page');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.indexOf(entry.target);
          if (index !== -1) {
            if (entry.isIntersecting) {
              // 화면에 들어오면: 순차적으로 나타나도록 딜레이 적용
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, index * 200); // 0ms, 200ms, 400ms
            } else {
              // 화면 밖으로 나가면: 다시 숨김 (애니메이션 재실행 준비)
              setVisibleCards((prev) => {
                const newState = [...prev];
                newState[index] = false;
                return newState;
              });
            }
          }
        });
      },
      {
        root: mainPageElement, // 스크롤 컨테이너 지정
        threshold: 0.2, // 카드의 20%가 보이면 트리거
        rootMargin: '0px'
      }
    );

    // 모든 카드 관찰 시작
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    // 클린업
    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  // 섹션 정의
  const sections = [
    { id: 0, label: 'HOME' },
    { id: 1, label: 'ABOUT' },
    { id: 2, label: 'OVERVIEW' },
    { id: 3, label: 'BUSINESS' },
    { id: 4, label: 'RECRUIT' },
    { id: 5, label: 'INFO' }
  ];

  // 섹션 클릭 핸들러
  const handleSectionClick = (index) => {
    const mainPageElement = document.querySelector('.main-page');
    if (mainPageElement) {
      mainPageElement.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="main-page">
      {/* 섹션 네비게이션 인디케이터 */}
      <div className="section-nav-indicator">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`section-nav-item ${currentSection === section.id ? 'active' : ''}`}
            onClick={() => handleSectionClick(section.id)}
          >
            <span className="section-nav-dot"></span>
            <span className="section-nav-label">{section.label}</span>
          </div>
        ))}
      </div>

      {/* 
        ===== 1. Hero Section (슬라이더) =====
        - 5개 이미지 자동 전환
        - 하단 인디케이터
      */}
      <section className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ 
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="hero-overlay"></div>
          </div>
        ))}

        {/* Scroll down 텍스트 + 인디케이터 */}
        <div className={`scroll-indicator ${isScrolled ? 'hidden' : ''}`}>
          <span className="scroll-down-text-span">Scroll down</span>
        </div>

        {/* 슬라이드 인디케이터 (왼쪽 하단) */}
        <div className="slider-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => handleIndicatorClick(index)}
              aria-label={`슬라이드 ${index + 1}로 이동`}
            />
          ))}
        </div>

        {/* 슬라이드 텍스트 (중앙 하단) */}
        <div className="hero-slide-text">
          <p className="hero-slide-title">Deep Insight, Perfect Solution</p>
          <p className="hero-slide-subtitle">지하 공간의 새로운 가치를 창조하는 엔지니어링 파트너.</p>
        </div>

      </section>

      {/* 
        ===== 2. ABOUT US Section =====
        - 회사 소개 배너
      */}
      <section className="about-us-section">
        <div className="about-us-content">
          <h2 className="about-us-title">ABOUT US</h2>
          <p className="about-us-subtitle">설계부터 철거까지, 현장을 가장 잘 아는 든든한 파트너</p>
          <p className="about-us-description">
            (주)한일지오이엔지는 단순한 도면 작성을 넘어, 철저한 지반 조사와 구조적 안정성 검토를<br />
            거쳐 실제 시공 시 발생할 수 있는 오차를 제로화하는 실무 중심의 맞춤형 설계를 수행합니다.
          </p>
          <Link to="/menu1" className="about-us-button">
            VIEW MORE
            <FiArrowRight className="arrow-icon" />
          </Link>
        </div>
      </section>

      {/* 
        ===== 3. OVERVIEW Section =====
        - 3개 카드 (About S-TECH, 주요사업, 사업실적)
      */}
      <section className="overview">
        {/* 헤더 영역 */}
        <div className="overview-header">
          <h2 className="overview-title">PROJECTS</h2>
        </div>

        <div className="overview-grid">
            {/* About S-TECH 카드 */}
            <div 
              className={`overview-card ${visibleCards[0] ? 'visible' : ''}`}
              ref={(el) => (cardRefs.current[0] = el)}
            >
              <div className="overview-card-image">
                <img src="/main-section2-1.jpg" alt="About S-TECH" />
              </div>
              <div className="overview-card-content">
                <h3 className="overview-card-title">양양 수리풍력단지 옹벽 구조물 변경설계</h3>
              </div>
            </div>

            {/* 주요사업 카드 */}
            <div 
              className={`overview-card ${visibleCards[1] ? 'visible' : ''}`}
              ref={(el) => (cardRefs.current[1] = el)}
            >
              <div className="overview-card-image">
                <img src="/main-section2-2.jpg" alt="주요사업" />
              </div>
              <div className="overview-card-content">
                <h3 className="overview-card-title">목동 KT타워 지하층 해체공사</h3>
              </div>
            </div>

            {/* 사업실적 카드 */}
            <div 
              className={`overview-card ${visibleCards[2] ? 'visible' : ''}`}
              ref={(el) => (cardRefs.current[2] = el)}
            >
              <div className="overview-card-image">
                <img src="/main-section2-3.jpg" alt="사업실적" />
              </div>
              <div className="overview-card-content">
                <h3 className="overview-card-title">송도세브란스병원 정밀안전진단</h3>
              </div>
            </div>
          </div>

        {/* VIEW MORE 버튼 */}
        <div className="overview-button-container">
          <Link to="/menu3" className="overview-view-more">
            VIEW MORE
            <FiArrowRight className="arrow-icon" />
          </Link>
        </div>
      </section>

      {/* 
        ===== 4. BUSINESS Section =====
        - 사업분야 프리뷰 슬라이더
      */}
      <section className="business-preview">
        {/* 왼쪽 화살표 */}
        <button className="business-arrow business-arrow-left" onClick={handleBusinessPrev}>
          <FiChevronLeft />
        </button>

        {/* 오른쪽 화살표 */}
        <button className="business-arrow business-arrow-right" onClick={handleBusinessNext}>
          <FiChevronRight />
        </button>

        <div className="business-container">
          {/* 왼쪽: 이미지 */}
          <div className="business-image">
            <img 
              key={currentBusiness}
              src={`/main-business${currentBusiness + 1}.jpg`}
              alt={businessItems[currentBusiness]?.title || '사업분야'}
              className="business-image-slide"
            />
          </div>

          {/* 오른쪽: 설명 */}
          <div className="business-content">
            <span key={`label-${currentBusiness}`} className="business-label business-fade-in">BUSINESS</span>
            <h2 key={`title-${currentBusiness}`} className="business-title business-fade-in">
              {businessItems[currentBusiness]?.title}
            </h2>
            <p key={`desc-${currentBusiness}`} className="business-description business-fade-in">
              {businessDescriptions[currentBusiness]}
            </p>
            
            {/* VIEW MORE 버튼 */}
            <Link 
              key={`btn-${currentBusiness}`}
              to={businessItems[currentBusiness]?.link || '/menu2'} 
              className="business-view-more business-fade-in"
            >
              VIEW MORE
              <FiArrowRight className="arrow-icon" />
            </Link>
          </div>
        </div>
      </section>

      {/* 
        ===== 5. RECRUIT Section =====
        - 왼쪽: 텍스트 콘텐츠 + 버튼
        - 오른쪽: 이미지
      */}
      <section className="recruit">
        <div className="recruit-container">
          {/* 왼쪽: 콘텐츠 */}
          <div className="recruit-content">
            <h2 className="recruit-title">RECRUIT</h2>
            
            <div className="recruit-text">
              <p className="recruit-highlight">
                (주)한일지오이엔지와 함께 전문성과 책임감을 바탕으로<br />
                협업과 혁신을 통해 함께 성장하는 인재를 찾습니다.
              </p>
              
              <p className="recruit-description">
                최상의 엔지니어링 기술자들이 모인 (주)한일지오이엔지에서 경력을 쌓아가고  <br />
                싶으시다면 지원해주시면 그에 보답하겠습니다.            
              </p>
            </div>

            <div className="recruit-buttons">
              <Link to="/menu4" className="recruit-btn">
                <FiUsers className="btn-icon" />
                <span>인재상</span>
                <FiArrowRight className="arrow-icon" />
              </Link>
              <Link to="/menu4-2" className="recruit-btn">
                <FiUsers className="btn-icon" />
                <span>채용안내</span>
                <FiArrowRight className="arrow-icon" />
              </Link>
            </div>

          </div>

          {/* 오른쪽: 이미지 */}
          <div className="recruit-image">
            <img src="/main-section4.jpg" alt="채용 이미지" />
          </div>
        </div>

        {/* 협업사 로고 띠 */}
        <div className="partners-strip">
          <div className="partners-container">
            {[1, 2, 3, 4, 5, 6, 7].map((index) => (
              <div key={index} className="partner-logo">
                <img src={`/partners${index}.png`} alt={`협업사 ${index}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ===== 5. Footer Section =====
        - 푸터를 마지막 섹션으로 포함
      */}
      <Footer />
    </div>
  );
}

export default MainPage;

