/* 
  ============================================
  Menu5Page (고객지원 - 온라인 문의 페이지)
  ============================================
  - menu5: 고객지원 > 온라인 문의
  - Hero 배너 + 탭 메뉴 + 문의 폼
  - EmailJS를 사용한 이메일 전송
*/

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import emailjs from '@emailjs/browser';  // 추후 이메일 기능 활성화 시 사용
import { menuData } from '../../data/menuData';
import '../MenuCommon.css';  // 공통 스타일
import './Menu5Page.css';  // 온라인 문의 전용 스타일

function Menu5Page() {
  // 고객지원 메뉴의 submenus 가져오기
  const supportMenu = menuData.find(menu => menu.title === '고객지원');
  const tabs = supportMenu ? supportMenu.submenus : [];
  
  // 현재 URL 경로 가져오기
  const location = useLocation();

  // 폼 상태 관리
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  // 입력값 변경 처리
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 폼 제출 처리
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('준비중으로 전화 문의 부탁드립니다.');
  };

  // 폼 초기화
  const handleReset = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="menu-page">
      {/* Hero Section - 큰 배너 이미지 + 탭 메뉴 */}
      <section 
        className="menu-hero"
        style={{
          backgroundImage: 'url(/menuhero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="menu-hero-overlay"></div>
        <div className="menu-hero-content">
      <h1>고객지원</h1>
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
          <h2 className="content-title">온라인 문의</h2>
          
          <p className="inquiry-intro">
            한일지오이엔지를 찾아주셔서 감사합니다.<br />
            온라인으로 내용을 남겨 주시면 검토 후 빠르게 연락드리겠습니다.
          </p>

          {/* 문의 폼 */}
          <form className="inquiry-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">이름</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="이름을 입력하세요"
                />
              </div>
              <div className="form-group">
                <label htmlFor="company">기업명</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="기업명을 입력하세요"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">이메일</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="이메일을 입력하세요"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">연락처</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="연락처를 입력하세요"
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="message">문의내용</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="문의내용을 입력하세요"
                rows="8"
              ></textarea>
            </div>

            <div className="form-buttons">
              <button type="submit" className="btn-submit">보내기</button>
              <button type="button" className="btn-reset" onClick={handleReset}>취소</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Menu5Page;
