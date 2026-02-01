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
import Menu1Page from './pages/Menu1/Menu1Page';
import Menu1_2Page from './pages/Menu1/Menu1_2Page';
import Menu1_3Page from './pages/Menu1/Menu1_3Page';
import Menu1_4Page from './pages/Menu1/Menu1_4Page';
import Menu2Page from './pages/Menu2/Menu2Page';
import Menu3Page from './pages/Menu3/Menu3Page';
import Menu4Page from './pages/Menu4/Menu4Page';
import Menu4_2Page from './pages/Menu4/Menu4_2Page';
import Menu5Page from './pages/Menu5/Menu5Page';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* 메인 페이지 */}
          <Route path="/" element={<MainPage />} />
          
          {/* menu1: 회사소개 */}
          <Route path="/menu1" element={<Menu1Page />} />
          <Route path="/menu1-2" element={<Menu1_2Page />} />
          <Route path="/menu1-3" element={<Menu1_3Page />} />
          <Route path="/menu1-4" element={<Menu1_4Page />} />
          
          {/* menu2: 사업분야 */}
          <Route path="/menu2" element={<Menu2Page />} />
          
          {/* menu3: 사업실적 */}
          <Route path="/menu3" element={<Menu3Page />} />
          
          {/* menu4: 채용안내 */}
          <Route path="/menu4" element={<Menu4Page />} />
          <Route path="/menu4-2" element={<Menu4_2Page />} />
          
          {/* menu5: 고객지원 */}
          <Route path="/menu5" element={<Menu5Page />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
