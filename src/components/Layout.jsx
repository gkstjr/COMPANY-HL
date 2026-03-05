/* 
  ============================================
  Layout 컴포넌트
  ============================================
  - Header + 페이지 콘텐츠 + Footer를 감싸는 래퍼
  - 모든 페이지에서 공통으로 사용
  - children: React의 특수한 prop으로, 이 컴포넌트 사이에 들어가는 내용
  
  사용 예시:
  <Layout>
    <MainPage />
  </Layout>
  => children에 MainPage가 들어감
*/

import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

function Layout({ children }) {
  const location = useLocation();
  const isMainPage = location.pathname === '/';

  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        {children}
      </main>
      {/* 메인페이지가 아닐 때만 Footer 표시 */}
      {!isMainPage && <Footer />}
    </div>
  );
}

export default Layout;

