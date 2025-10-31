# 토목 시공 회사 소개 웹사이트

토목 시공 분야 회사를 위한 반응형 정적 웹사이트입니다.

## 🎯 프로젝트 특징

- ✅ **React 기반**: 재사용 가능한 컴포넌트 구조
- ✅ **반응형 디자인**: 모바일, 태블릿, 데스크톱 대응
- ✅ **정적 페이지**: 백엔드 없이 순수 프론트엔드
- ✅ **초보자 친화적**: 간단하고 명확한 코드 구조
- ✅ **5개 페이지**: 회사소개, 사업분야, 사업실적, 채용안내, 고객지원

## 📁 프로젝트 구조

```
company-hl/
├─ public/
│  └─ images/              # 이미지 파일 (로고, 배경, 프로젝트 등)
├─ src/
│  ├─ components/          # 공통 컴포넌트
│  │  ├─ Header.jsx        # 헤더 (네비게이션)
│  │  ├─ Footer.jsx        # 푸터
│  │  └─ Layout.jsx        # 레이아웃 래퍼
│  ├─ pages/               # 페이지 컴포넌트
│  │  ├─ MainPage.jsx      # 메인 (회사소개)
│  │  ├─ BusinessPage.jsx  # 사업분야
│  │  ├─ PortfolioPage.jsx # 사업실적
│  │  ├─ CareersPage.jsx   # 채용안내
│  │  └─ ContactPage.jsx   # 고객지원
│  ├─ styles/
│  │  └─ variables.css     # 전역 CSS 변수
│  ├─ App.jsx              # 라우팅 설정
│  └─ index.css            # 전역 스타일
```

## 🚀 실행 방법

### 1. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173` 접속

### 2. 빌드 (배포용)

```bash
npm run build
```

빌드 결과물은 `dist/` 폴더에 생성됩니다.

### 3. 빌드 미리보기

```bash
npm run preview
```

## 🎨 커스터마이징 가이드

### 색상 변경

`src/styles/variables.css` 파일에서 색상 변수를 수정하세요:

```css
:root {
  --primary-color: #D2691E;    /* 메인 색상 */
  --dark-bg: #3A4F5F;          /* 다크 배경 */
  /* ... */
}
```

### 이미지 추가

1. `public/images/` 폴더에 이미지 업로드
2. 컴포넌트에서 경로 참조: `/images/파일명.jpg`

#### 필요한 이미지:
- `hero.jpg` - 메인 배경 이미지 (1920x800px 권장)
- `project1.jpg ~ project4.jpg` - 프로젝트 이미지 (800x600px 권장)
- `logo.png` - 회사 로고 (투명 배경 권장)

### 내용 수정

각 페이지 파일(`src/pages/`)에서 텍스트와 구조를 직접 수정하세요.

## 📱 반응형 브레이크포인트

- **모바일**: ~ 768px
- **태블릿**: 768px ~ 1024px
- **데스크톱**: 1024px ~

## 🌐 배포 방법

### GitHub Pages (추천)

1. `package.json`에 배포 스크립트 추가:
```json
"scripts": {
  "deploy": "vite build && gh-pages -d dist"
}
```

2. GitHub Pages 배포:
```bash
npm install gh-pages --save-dev
npm run deploy
```

### Netlify

1. Netlify에 GitHub 저장소 연결
2. Build command: `npm run build`
3. Publish directory: `dist`

### 리눅스 서버

1. 빌드:
```bash
npm run build
```

2. `dist/` 폴더를 서버로 업로드
3. Nginx 설정 예시:
```nginx
server {
  listen 80;
  server_name your-domain.com;
  root /path/to/dist;
  
  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

## 🛠️ 기술 스택

- **React** 18
- **React Router** 6
- **Vite** - 빌드 도구
- **CSS3** - 스타일링

## 📖 React 기본 개념 설명

### 컴포넌트 (Component)
- UI를 재사용 가능한 조각으로 나눈 것
- 예: `Header`, `Footer`는 모든 페이지에서 재사용

### Props
- 부모 컴포넌트에서 자식으로 데이터를 전달하는 방법
- 예: `<Layout>` 안에 `children`으로 페이지 전달

### React Router
- 페이지 간 이동을 새로고침 없이 처리
- 예: `/` → MainPage, `/business` → BusinessPage

## 🔧 문제 해결

### 페이지 새로고침 시 404 에러
- 서버 설정에서 모든 경로를 `index.html`로 리다이렉트 필요
- Netlify는 자동 처리, Nginx는 위 설정 참고

### 이미지가 안 보일 때
- 경로가 `/images/파일명`인지 확인
- `public/images/` 폴더에 이미지가 있는지 확인

## 📞 도움이 필요하면

각 파일에 주석으로 상세한 설명이 포함되어 있습니다. 코드를 읽으며 이해해보세요!

---

**Made with ❤️ for 토목 시공 회사**
