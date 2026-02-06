/* 
  ============================================
  Breadcrumb (브레드크럼 네비게이션)
  ============================================
  - 현재 페이지의 경로를 보여주는 컴포넌트
  - menuData에서 자동으로 경로 정보를 가져옴
  - 모든 메뉴 페이지에서 공통 사용
*/

import { Link, useLocation } from 'react-router-dom';
import { menuData } from '../data/menuData';
import './Breadcrumb.css';

function Breadcrumb({ additionalItem = null }) {
  const location = useLocation();
  const currentPath = location.pathname;

  // 현재 경로에 해당하는 메뉴 정보 찾기
  const getBreadcrumbItems = () => {
    const items = [];

    // menuData에서 현재 경로와 일치하는 메뉴 찾기
    for (const menu of menuData) {
      // 서브메뉴에서 먼저 찾기 (우선순위 높음)
      if (menu.submenus && menu.submenus.length > 0) {
        const submenu = menu.submenus.find(sub => sub.link === currentPath);
        if (submenu) {
          // 메인 메뉴 추가 (클릭 가능)
          items.push({ title: menu.title, link: menu.link });
          // 서브메뉴 추가 (현재 페이지이므로 클릭 불가)
          items.push({ title: submenu.title, link: null });
          return items;
        }
      }

      // 서브메뉴에서 못 찾았으면 메인 메뉴의 링크와 일치하는지 체크
      if (menu.link === currentPath) {
        items.push({ title: menu.title, link: null });
        return items;
      }
    }

    return items;
  };

  const items = getBreadcrumbItems();

  // 메인 페이지거나 매칭되는 메뉴가 없으면 브레드크럼 표시 안 함
  if (currentPath === '/' || items.length === 0) {
    return null;
  }

  return (
    <nav className="breadcrumb">
      <Link to="/" className="breadcrumb-item">HOME</Link>
      {items.map((item, index) => (
        <span key={index}>
          <span className="breadcrumb-separator">&gt;</span>
          {item.link ? (
            <Link to={item.link} className="breadcrumb-item">
              {item.title}
            </Link>
          ) : (
            <span className="breadcrumb-item current">{item.title}</span>
          )}
        </span>
      ))}
      {additionalItem && (
        <span>
          <span className="breadcrumb-separator">&gt;</span>
          <span className="breadcrumb-item current">{additionalItem}</span>
        </span>
      )}
    </nav>
  );
}

export default Breadcrumb;

