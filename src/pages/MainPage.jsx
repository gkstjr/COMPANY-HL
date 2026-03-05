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
  
  // 사업분야 데이터 가져오기
  const businessMenu = menuData.find(menu => menu.title === '사업분야');
  const businessItems = businessMenu ? businessMenu.submenus : [];
  
  // 사업분야별 설명
  const businessDescriptions = [
    '지반의 거동을 예측하는 토질 역학과 구조물의 내구성을 보장하는 구조 설계의 조화를 통해, 까다로운 현장 조건에서도 흔들림 없는 건설의 기반을 완성합니다.',
    '정밀한 구조 해석과 체계적인 해체 공법을 바탕으로, 지하구조물 철거 시 발생하는 지반의 미세한 변화까지 통제하여 인접 시설물의 안전을 보장합니다.',
    '철저한 감리 시스템과 정밀 계측 기술을 바탕으로, 보이지 않는 지반 속 위험까지 예측하여 가장 안전하고 신뢰할 수 있는 건설 환경을 제공합니다.'
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

  // 스크롤 감지 (Scroll Indicator 숨김 처리)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  return (
    <div className="main-page">
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
        ===== 2. OVERVIEW Section =====
        - 3개 카드 (About S-TECH, 주요사업, 사업실적)
      */}
      <section className="overview">
        <h2 className="overview-section-title">
          OVERVIEW
        </h2>
        
        <p className="overview-description">
          에스텍엔지니어링을 축적된 지반분야 기술력과 지속적인 관리의 서비스를 통해<br />
          고객만족을 최선을 다하는 철학 업을하입니다.
        </p>

        <div className="overview-grid">
            {/* About S-TECH 카드 */}
            <div 
              className={`overview-card ${visibleCards[0] ? 'visible' : ''}`}
              ref={(el) => (cardRefs.current[0] = el)}
            >
              <div className="overview-image-wrapper">
                <div className="overview-image">
                  <div 
                    className="placeholder-img" 
                    style={{ 
                      backgroundImage: 'url(/overviewImage1.jpg)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  ></div>
                </div>
                <div className="overview-title">
                  <h3>About S-TECH</h3>
                </div>
              </div>
              <div className="overview-divider"></div>
              <div className="overview-content">
                <p>
                  동종업계로서 관련분야 역사 및 기술력을 바탕으로 내수는 외극보시를 보안하기 2042년부터 축적된 노하우를 기준으로 반출하고 있습니다. 신회사와 협력한 업적은 노하우를 기반으로 2024년부터 이루어져 노하리더 거듭되었습니다.
                </p>
              </div>
            </div>

            {/* 주요사업 카드 */}
            <div 
              className={`overview-card ${visibleCards[1] ? 'visible' : ''}`}
              ref={(el) => (cardRefs.current[1] = el)}
            >
              <div className="overview-image-wrapper">
                <div className="overview-image">
                  <div 
                    className="placeholder-img" 
                    style={{ 
                      backgroundImage: 'url(/overviewImage2.jpg)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  ></div>
                </div>
                <div className="overview-title">
                  <h3>주요사업</h3>
                </div>
              </div>
              <div className="overview-divider"></div>
              <div className="overview-content">
                <p>
                  지반공사와 부수로 중진으로 고속도로, 기초, 토목과 비탈등을 받은 안전분야 지하반전성옹지, 사유 등 기술이용, 사업 전문적인 회사가 토대로선대로 시공하는즉좋을일금하여 관리하고 있니다.
                </p>
              </div>
            </div>

            {/* 사업실적 카드 */}
            <div 
              className={`overview-card ${visibleCards[2] ? 'visible' : ''}`}
              ref={(el) => (cardRefs.current[2] = el)}
            >
              <div className="overview-image-wrapper">
                <div className="overview-image">
                  <div 
                    className="placeholder-img" 
                    style={{ 
                      backgroundImage: 'url(/overviewImage3.jpg)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  ></div>
                </div>
                <div className="overview-title">
                  <h3>사업실적</h3>
                </div>
              </div>
              <div className="overview-divider"></div>
              <div className="overview-content">
                <p>
                  2001년 창업으로 지하철공사와 관리로부터 약 2,000여건 사업기간활 활고 약 700여건, 기초굴착 약 2,000건엄, 비탈등양 약 200건, 지반안전정방공사 약 300건으로 성공으로 달성하였습니다.
                </p>
              </div>
            </div>
          </div>
      </section>

      {/* 
        ===== 3. BUSINESS Section =====
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
        ===== 4. INFORMATION Section =====
        - 4개 아이콘 카드
      */}
      <section className="information">
        <div className="container">
          <h2 className="section-title">
            INFORMATION
            <span className="title-underline"></span>
          </h2>
          
          <div className="info-grid">
            {/* About 카드 */}
            <div className="info-card">
              <div className="info-icon">
                <FiHome />
              </div>
              <h3>About</h3>
              <p className="info-description">
                20년 축적된 기술력을 통해<br />
                지반분석분야를 선도하는 기업입니다.
              </p>
            </div>

            {/* Business 카드 */}
            <div className="info-card">
              <div className="info-icon">
                <FiTrendingUp />
              </div>
              <h3>Business</h3>
              <p className="info-description">
                지반보강을 중심으로 토목분야 다양한<br />
                사업영역을 보유한 기업입니다.
              </p>
            </div>

            {/* Project 카드 */}
            <div className="info-card">
              <div className="info-icon">
                <FiSettings />
              </div>
              <h3>Project</h3>
              <p className="info-description">
                기술과 경험으로 다양한 프로젝트를<br />
                성공적으로 수행한 기업입니다.
              </p>
            </div>

            {/* Recruit 카드 */}
            <div className="info-card">
              <div className="info-icon">
                <FiUsers />
              </div>
              <h3>Recruit</h3>
              <p className="info-description">
                가능성이 높은 인재를<br />
                기다리고 있습니다.
              </p>
            </div>
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

