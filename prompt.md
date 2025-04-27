역할: 당신은 숙련된 프론트엔드 개발자입니다. 저의 지시에 따라 Astro 기반의 개인 블로그를 구축하는 작업을 도와주세요.

목표: Astro 프레임워크를 사용하여 개인 블로그를 구축합니다. 이 블로그는 React 컴포넌트와 TypeScript를 사용하며, UI 요소는 Shadcn UI를 활용합니다. 최종 결과물은 제 개인 GitHub 저장소의 gh-pages 브랜치에 배포될 수 있도록 설정되어야 합니다.

디렉토리: ./today-i-learn (electrical-earth로 설정되면 안 됨, 경로는 ./today-i-learn 이 되어야 함)

기술 스택:

패키지매니저: pnpm 프레임워크: Astro UI 프레임워크 통합: React (@astrojs/react) 언어: TypeScript UI 라이브러리: Shadcn UI (React 버전) 배포 타겟: GitHub Pages (gh-pages 브랜치) 요구사항 및 단계별 작업:

Astro 프로젝트 초기화:

최신 Astro 버전을 사용하여 새 프로젝트를 생성해주세요. 템플릿은 "Empty" 또는 "Blog" 중 적절한 것을 선택하되, TypeScript 지원을 포함하도록 설정해주세요. (strict 또는 strictest TypeScript 설정 권장) Astro의 기본 설정을 확인하고 필요한 경우 조정합니다. React 통합 추가:

@astrojs/react 통합을 설치하고 Astro 설정 파일 (astro.config.mjs 또는 astro.config.ts)에 추가해주세요. Shadcn UI 설정:

프로젝트에 Shadcn UI (React 버전)를 설치하고 초기화해주세요. tailwind.config.js (또는 .ts), postcss.config.js, globals.css 등 필요한 설정 파일이 올바르게 생성되고 구성되었는지 확인해주세요. Shadcn UI 컴포넌트를 가져와서 사용할 수 있는지 간단한 테스트 컴포넌트 (예: Button)를 만들어 확인해주세요. 이 테스트 컴포넌트는 React로 작성되어야 합니다. 기본 블로그 구조 생성:

Layout: 모든 페이지에서 공유될 기본 레이아웃 (src/layouts/BaseLayout.astro)을 생성해주세요. 여기에는 기본적인 HTML 구조, 전역 CSS (Shadcn UI의 globals.css 포함), 그리고 페이지 콘텐츠가 들어갈 이 포함되어야 합니다. Index 페이지: 블로그 게시물 목록을 보여줄 인덱스 페이지 (src/pages/index.astro)를 생성해주세요. 초기에는 마크다운 파일이나 간단한 데이터 배열을 사용하여 게시물 목록을 표시하도록 구현합니다. (실제 마크다운 렌더링은 추후 단계에서 진행해도 됩니다.) 게시물 상세 페이지: 개별 블로그 게시물을 보여줄 동적 라우트 페이지 (src/pages/posts/[slug].astro)를 생성해주세요. 이 페이지는 마크다운 파일로부터 콘텐츠를 가져와 렌더링해야 합니다. getStaticPaths 함수를 사용하여 마크다운 파일 기반으로 경로를 생성하도록 구현해주세요. React 컴포넌트 활용: 레이아웃이나 페이지 내에서 간단한 React 컴포넌트 (예: 헤더, 푸터 또는 Shadcn UI 버튼)를 사용하는 예시를 포함해주세요. (예: src/components/Header.tsx) GitHub Pages 배포 설정:

astro.config.mjs (또는 .ts) 파일에 GitHub Pages 배포를 위한 설정을 추가해주세요. site 옵션에는 배포될 최종 URL (예: https://<YOUR_USERNAME>.github.io)을 설정해야 합니다. base 옵션에는 저장소 이름 (예: /<YOUR_REPOSITORY_NAME>)을 설정해야 합니다. (개인 계정의 루트 도메인 .github.io에 직접 배포할 경우 base는 필요 없을 수 있습니다. 이 부분은 제 저장소 구조에 맞게 조정이 필요할 수 있으니, 일단 저장소 이름을 base로 설정하는 것을 기본으로 진행해주세요.) output: 'static' 설정이 되어 있는지 확인합니다. (Astro의 기본값일 수 있음) 빌드된 파일들이 gh-pages 브랜치에 푸시될 수 있도록 필요하다면 GitHub Actions 워크플로우 파일 (.github/workflows/deploy.yml) 생성을 제안하거나 직접 생성해주세요. (Astro 문서의 GitHub Pages 배포 가이드 참고) 진행 방식:

각 단계를 순서대로 진행해주세요. 각 단계 완료 후 변경 사항을 확인하고, 필요하다면 저에게 질문하거나 다음 단계 진행 여부를 물어봐 주세요. 명령어 실행, 파일 생성/수정 등 필요한 작업을 직접 수행해주세요. 오류 발생 시 원인을 파악하고 해결 방안을 제시해주세요.
