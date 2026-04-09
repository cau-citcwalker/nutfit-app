# Nutfit

AI 기반 맞춤 영양제 구독 서비스 모바일 앱

## 소개

Nutfit은 Vision LLM 음식 분석, 웨어러블 연동, 소변 스틱 데이터를 활용하여 개인에게 최적화된 영양제를 추천하고 구독 배송하는 서비스입니다.

## 주요 기능

- **AI 음식 분석** — 카메라로 음식을 촬영하면 영양소를 자동 분석
- **맞춤 영양제 추천** — Neo4j 지식그래프 + LangGraph 기반 다차원 추론
- **소변 검사 분석** — 소변 스틱으로 PH, 수분 등 영양 상태 참고 지표 제공
- **웨어러블 연동** — 삼성 헬스, Apple 건강 데이터 통합
- **게이미피케이션** — 캐릭터 육성, XP 레벨업으로 지속 사용 유도
- **편의점 당일 수령** — CU/GS25 편의점 픽업 및 정기 배송 지원

## 기술 스택

- **Frontend**: React Native (Expo)
- **Language**: TypeScript
- **Navigation**: Expo Router
- **Icons**: @expo/vector-icons (Feather)

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npx expo start
```

## 프로젝트 구조

```
nutfit-app/
├── app/                  # Expo Router 파일 기반 라우팅
│   ├── _layout.tsx       # 루트 레이아웃
│   └── (tabs)/           # 하단 탭 네비게이션
│       ├── index.tsx     # 홈
│       ├── analyze.tsx   # 음식 분석
│       ├── report.tsx    # 건강 리포트
│       └── profile.tsx   # 프로필
├── src/
│   ├── components/       # 공통 컴포넌트
│   ├── constants/        # 테마, 상수
│   ├── hooks/            # 커스텀 훅
│   ├── services/         # API, AI 서비스
│   ├── types/            # TypeScript 타입
│   └── utils/            # 유틸리티
└── assets/               # 이미지, 폰트
```

## 라이선스

Private — All rights reserved
