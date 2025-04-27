# Today I Learn

## 📦 설치된 패키지 및 버전

### 주요 의존성

- astro: latest
- react: latest
- react-dom: latest
- sass: ^1.87.0
- tailwindcss: latest

### 개발 의존성

- eslint: latest
- prettier: ^3.5.3
- stylelint: ^16.19.1
- typescript: latest

## 🛠️ 개발 도구 설정

### ESLint

- JavaScript/TypeScript 코드 린팅
- React/Astro 컴포넌트 린팅
- `.eslintrc.json` 설정 파일 사용

### Prettier

- 코드 포맷팅
- `.prettierrc` 설정 파일 사용
- astro 플러그인 통합

### Stylelint

- SCSS/CSS 린팅
- `.stylelintrc.json` 설정 파일 사용
- prettier 통합

## 📁 프로젝트 구조

```text
today-i-learn/
├── .astro/              # Astro 빌드 캐시
├── .vscode/             # VS Code 설정
├── node_modules/        # 의존성 패키지
├── public/              # 정적 파일
├── src/                 # 소스 코드
│   ├── components/      # 재사용 가능한 컴포넌트
│   ├── content/         # 콘텐츠 데이터
│   ├── layouts/         # 페이지 레이아웃
│   ├── pages/           # 라우팅 페이지
│   ├── shared/          # 공유 유틸리티
│   ├── styles/          # 스타일시트
│   ├── consts.ts        # 상수 정의
│   └── content.config.ts # 콘텐츠 설정
├── .eslintrc.json       # ESLint 설정
├── .prettierrc          # Prettier 설정
├── .stylelintrc.json    # Stylelint 설정
├── astro.config.mjs     # Astro 설정
├── package.json         # 프로젝트 메타데이터
├── pnpm-lock.yaml       # 패키지 잠금 파일
└── tsconfig.json        # TypeScript 설정
```

## 🚀 개발 스크립트

```bash
# 개발 서버 실행
pnpm dev

# 프로덕션 빌드
pnpm build

# 린트 실행
pnpm lint

# 코드 포맷팅
pnpm format
```

## lint 설정 상세

### [설정]

```
ESLint v9에 맞춰 새로운 설정 파일 형식(eslint.config.js)으로 변경
⬇️
TypeScript, React, JSX A11y 관련 ESLint 플러그인 설치 및 설정
⬇️
Astro 파일을 위한 ESLint 설정 추가
⬇️
package.json의 lint 스크립트에서 .astro 파일 제외 (Astro 파일은 별도의 파서가 필요하므로)
```

### [출처]

- https://eslint.org/docs/latest/use/configure/migration-guide (상) 공식문서
- https://ota-meshi.github.io/eslint-plugin-astro/user-guide/ (상) 공식문서
- https://typescript-eslint.io/getting-started (상) 공식문서

## stylelint 설정

### 설치

```
pnpm add -D stylelint stylelint-config-standard-scss stylelint-prettier stylelint-config-prettier prettier prettier-plugin-astro
```

### stylelintrc.json

```
{
  "extends": [
    "stylelint-config-standard-scss",
    "stylelint-prettier/recommended",
    "stylelint-config-prettier"
  ],
  "rules": {
    "prettier/prettier": true
  }
}
```
