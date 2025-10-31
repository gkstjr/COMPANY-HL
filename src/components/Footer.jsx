/* 
  ============================================
  Footer 컴포넌트
  ============================================
  - 모든 페이지 하단에 표시
  - 저작권 정보, 법적 고지사항 링크
  - 디자인 이미지의 푸터 섹션 참고
*/

import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* 저작권 정보 */}
        <p className="copyright">
          Copyright © 2023 Estator. All rights reserved.
        </p>

        {/* 링크 (Privacy Policy, Legal Notice 등) */}
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <span className="separator">|</span>
          <a href="#legal">Legal Notice</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

