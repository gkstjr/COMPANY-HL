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
        {/* 첫 번째 줄: 인증 정보 */}
        <div className="footer-info">
          <p>
            엑지니어링평등증제 제 10-001108호 
            <span className="separator">|</span>
            인건전전문기업 제 291호 
            <span className="separator">|</span>
            지하안전영향평가 전문기업 서울 제 11호
          </p>
        </div>

        {/* 두 번째 줄: 주소 및 사업자번호 */}
        <div className="footer-info">
          <p>
            04099 서울특별시 마포구 서강로 82 정상 JL빌딩, 6층
            <span className="separator">|</span>
            사업자번호 : 220-86-09157
          </p>
        </div>

        {/* 세 번째 줄: 연락처 */}
        <div className="footer-info">
          <p>
            Tel : 02-717-5784
            <span className="separator">|</span>
            Fax : 02-717-4330
            <span className="separator">|</span>
            E-mail : <a href="mailto:stech@s-tech.co.kr">stech@s-tech.co.kr</a>
            <a href="mailto:stech@s-tech.co.kr" className="mail-link">[메일함]</a>
          </p>
        </div>

        {/* 저작권 */}
        <div className="footer-copyright">
          <p>Copyright S-TECH Consulting group. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

