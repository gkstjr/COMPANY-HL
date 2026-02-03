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
        {/* 왼쪽: 로고 및 회사명 */}
        <div className="footer-left">
          <div className="footer-logo">
            <div className="logo-icon">
              <img src="/logoImage.png" alt="한일지오이엔지 로고" />
            </div>
            <div className="logo-text-container">
              <span className="logo-text-footer">(주)한일지오이엔지</span>
              <span className="footer-slogan">지하 구조물 철거 및 설계 전문기업</span>
            </div>
          </div>
        </div>

        {/* 오른쪽: 정보 */}
        <div className="footer-right">
          {/* 첫 번째 줄: 주소 및 사업자번호 */}
          <div className="footer-info">
            <p>
              서울특별시 성동구 성수이로 51, 4층 404호 (04781)
            </p>
          </div>

          {/* 두 번째 줄: 연락처 */}
          <div className="footer-info">
            <p>
              Tel : 02-2057-6264
              <span className="separator">|</span>
              Fax : 02-568-3923
              <span className="separator">|</span>
              E-mail : <a href="mailto:info@hanilgeo.com">hanilgeo@hanilgeo.com</a>
            </p>
          </div>

          {/* 저작권 */}
          <div className="footer-copyright">
            <p>Copyright © 한일지오이엔지. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

