/* 
  ============================================
  App.jsx - 메인 애플리케이션 컴포넌트
  ============================================
  - React Router로 페이지 라우팅 설정
  - Layout으로 모든 페이지를 감싸서 Header/Footer 공통 적용
  
  라우팅 설명:
  - BrowserRouter: 브라우저의 주소창을 이용한 라우팅
  - Routes: 여러 Route를 감싸는 컨테이너
  - Route: 경로(path)와 컴포넌트(element)를 매칭
    예: path="/" => MainPage 표시
        path="/business" => BusinessPage 표시
*/

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './pages/MainPage';
import BusinessPage from './pages/BusinessPage';
import PortfolioPage from './pages/PortfolioPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* 메인 페이지 (회사소개) */}
          <Route path="/" element={<MainPage />} />
          
          {/* 사업분야 */}
          <Route path="/business" element={<BusinessPage />} />
          
          {/* 사업실적 */}
          <Route path="/portfolio" element={<PortfolioPage />} />
          
          {/* 채용안내 */}
          <Route path="/careers" element={<CareersPage />} />
          
          {/* 고객지원 */}
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
