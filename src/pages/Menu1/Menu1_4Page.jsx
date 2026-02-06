/* 
  ============================================
  Menu1_4Page (찾아오시는 길 페이지)
  ============================================
  - menu1-4: 회사소개 > 찾아오시는 길
  - Hero 배너 + 탭 메뉴 + 카카오맵
*/

import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { menuData, getMenuHeroImage } from '../../data/menuData';
import Breadcrumb from '../../components/Breadcrumb';
import '../MenuCommon.css';  // 공통 스타일
import './Menu1_4Page.css';  // 찾아오시는 길 전용 스타일

function Menu1_4Page() {
  // 회사소개 메뉴의 submenus 가져오기
  const aboutMenu = menuData.find(menu => menu.title === '회사소개');
  const tabs = aboutMenu ? aboutMenu.submenus : [];
  
  // 현재 URL 경로 가져오기
  const location = useLocation();
  
  // Hero 이미지 가져오기
  const heroImage = getMenuHeroImage(location.pathname);

  // 지도를 표시할 div 참조
  const mapContainer = useRef(null);

  // 카카오맵 초기화
  useEffect(() => {
    console.log('=== 카카오맵 초기화 시작 ===');
    
    // 카카오맵 API가 로드되지 않았을 경우 대기
    if (!window.kakao || !window.kakao.maps) {
      console.warn('⚠️ 카카오맵 API가 아직 로드되지 않았습니다.');
      
      const checkKakaoMaps = setInterval(() => {
        if (window.kakao && window.kakao.maps) {
          console.log('✅ 카카오맵 API 로드 완료!');
          clearInterval(checkKakaoMaps);
          initMap();
        }
      }, 100);
      
      return () => clearInterval(checkKakaoMaps);
    } else {
      console.log('✅ 카카오맵 API가 이미 로드되어 있습니다.');
      initMap();
    }

    function initMap() {
      try {
        // 성수이로 51의 좌표
        const latitude = 37.540276;
        const longitude = 127.055100;

        // 지도 옵션 설정
        const options = {
          center: new window.kakao.maps.LatLng(latitude, longitude),
          level: 3 // 확대 레벨 (1~14, 숫자가 작을수록 확대)
        };

        // 지도 생성
        const map = new window.kakao.maps.Map(mapContainer.current, options);
        console.log('✅ 지도 생성 성공!');

        // 마커 생성
        const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition
        });

        // 마커를 지도에 표시
        marker.setMap(map);
        console.log('✅ 마커 표시 완료!');

        // 인포윈도우 생성 (회사명 및 주소 표시)
        const infowindow = new window.kakao.maps.InfoWindow({
          content: '<div style="padding:10px; font-size:14px; font-weight:bold;">한일지오이엔지<br/><span style="font-size:12px; font-weight:normal;">성수이로 51, 4층 404호</span></div>'
        });

        // 인포윈도우를 마커 위에 표시
        infowindow.open(map, marker);
        console.log('✅ 카카오맵 초기화 완료!');
      } catch (error) {
        console.error('❌ 카카오맵 초기화 오류:', error);
      }
    }
  }, []);

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
          <Breadcrumb />
          <h2 className="content-title">찾아오시는 길</h2>
          
          {/* 카카오맵 */}
          <div className="map-wrapper">
            <div ref={mapContainer} className="kakao-map"></div>
          </div>

          {/* 위치 및 연락처 */}
          <div className="contact-info">
            {/* 주소 섹션 */}
            <div className="info-section">
              <h3 className="section-label">주소</h3>
              <div className="section-value">
              <div className="direction-item">
              서울특별시 성동구 성수이로 51, 4층 404호 (04781)
              <p>(성수2가 서울숲 한라시그마밸리 1차)</p>
                </div>
              
              </div>
            </div>

            {/* 전화번호 섹션 */}
            <div className="info-section">
              <div className="section-label-group">
                <h3 className="section-label">전화번호</h3>
                <h3 className="section-label">Fax</h3>
              </div>
              <div className="section-value">
                <p>02-2057-6264</p>
                <p>02-568-3923</p>
              </div>
            </div>

            {/* 찾아오시는 길 섹션 */}
            <div className="info-section">
              <h3 className="section-label">찾아오시는 길</h3>
              <div className="section-value">
                <div className="direction-item">
                  <strong>지하철</strong>
                  <p>2호선 성수역 3번 출구 (도보 10분)</p>
                </div>

                <div className="direction-item">
                  <strong>버스</strong>
                  <p>지선버스 : 성동13, 2224, 2413</p>
                  <p>간선버스 : 302, 241</p>
                </div>

                <div className="direction-item">
                  <strong>자가운전</strong>
                  <p>1. 성수대교 방면에서 오실 때<br/>
                  성수대교 → 성수역 사거리에서 우회전 → 성수이로 51</p>
                  <p>2. 청담대교 방면에서 오실 때<br/>
                  청담대교 → 성수역 사거리에서 좌회전 → 성수이로 51</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Menu1_4Page;

