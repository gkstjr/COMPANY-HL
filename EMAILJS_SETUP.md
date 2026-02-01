# EmailJS 설정 가이드

온라인 문의 기능을 사용하기 위해 EmailJS를 설정해야 합니다.

## 1단계: EmailJS 계정 생성

1. https://www.emailjs.com/ 접속
2. "Sign Up" 클릭하여 무료 계정 생성
3. 이메일 인증 완료

## 2단계: Email Service 연결

1. Dashboard에서 "Email Services" 클릭
2. "Add New Service" 클릭
3. Gmail 또는 원하는 이메일 서비스 선택
4. 회사 이메일(hanilgeo@hanilgeo.com) 연결
5. **Service ID**를 복사해두기

## 3단계: Email Template 생성

1. Dashboard에서 "Email Templates" 클릭
2. "Create New Template" 클릭
3. 다음 템플릿 내용 사용:

```
Subject: [온라인 문의] {{from_name}}님의 문의

From: {{from_name}}
Company: {{from_company}}
Email: {{from_email}}
Phone: {{from_phone}}

Message:
{{message}}
```

4. **Template ID**를 복사해두기

## 4단계: Public Key 확인

1. Dashboard에서 "Account" 클릭
2. "API Keys" 섹션에서 **Public Key** 복사

## 5단계: 환경 변수 설정

프로젝트 루트에 `.env` 파일 생성:

```bash
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

위에서 복사한 값들을 입력하세요.

## 6단계: 개발 서버 재시작

```bash
npm start
```

환경 변수 변경 후에는 반드시 서버를 재시작해야 합니다!

## 주의사항

- `.env` 파일은 절대 Git에 커밋하지 마세요 (이미 .gitignore에 포함됨)
- 배포 시에는 Vercel/Netlify 등의 환경 변수 설정에 동일한 값을 입력하세요
- 무료 플랜은 월 200개 이메일까지 전송 가능합니다

## 테스트

1. http://localhost:3000/menu5 접속
2. 문의 폼 작성
3. "보내기" 클릭
4. 성공 메시지 확인
5. 설정한 이메일 계정에서 문의 메일 확인

## 문제 해결

- 이메일이 안 오면 EmailJS Dashboard의 "Usage" 탭에서 전송 기록 확인
- 콘솔에 에러가 뜨면 Service ID, Template ID, Public Key 재확인
- Gmail 사용 시 "보안 수준이 낮은 앱" 허용 필요할 수 있음

