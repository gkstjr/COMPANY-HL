/* 
  ============================================
  Header 컴포넌트
  ============================================
  - 모든 페이지 상단에 표시되는 네비게이션 바
  - 로고 + 메뉴 (회사소개, 사업분야, 사업실적, 채용안내, 고객지원)
  - 반응형: 모바일에서는 햄버거 메뉴로 변경
*/

import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  // useState: React의 상태관리 Hook
  // isMenuOpen이 true면 모바일 메뉴가 열림, false면 닫힘
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 햄버거 메뉴 토글 함수
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* 로고 영역 */}
        <Link to="/" className="logo">
          <span className="logo-text">회사 로고</span>
        </Link>

        {/* 햄버거 메뉴 버튼 (모바일에서만 보임) */}
        <button className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* 네비게이션 메뉴 */}
        {/* isMenuOpen이 true면 'active' 클래스 추가 */}
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            회사소개
          </Link>
          <Link to="/business" onClick={() => setIsMenuOpen(false)}>
            사업분야
          </Link>
          <Link to="/portfolio" onClick={() => setIsMenuOpen(false)}>
            사업실적
          </Link>
          <Link to="/careers" onClick={() => setIsMenuOpen(false)}>
            채용안내
          </Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            고객지원
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;

