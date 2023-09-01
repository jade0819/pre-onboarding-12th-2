# 원티드 프리온보딩 프론트엔드 인턴십 12차 - 2주 차 과제 (개인)

## 👥 Member Info

### 양음정

<br/>
<br/>

## 💪🏻과제의 목표와 진행 방법

특정 GitHub 레파지토리의 이슈 목록과 각 이슈의 상세 내용을 확인하는 웹 사이트를 구축하는 것으로 출제된 과제의 범위, 요구 사항 등을 분석하여 제시된 개발 조건에 맞춰 기능을 구현

<br/>
<br/>

## ✔️ 배포

- `Netlify` [🔗Link](https://pre-onboarding-12th-week2.netlify.app/)

<br/>
<br/>

## 🛫 시작 가이드

- 실행을 위해 다음 Node version이 필요합니다.
  [Node.js 18.17.0](https://nodejs.org/ca/blog/release/v18.17.0/)

```
git clone https://github.com/jade0819/pre-onboarding-12th-2.git
cd pre-onboarding-12th-2
npm install
npm run start
```

<br/>
<br/>

## 🛠️ 사용한 기술 스택

#### Environment

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Git hub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)
![Source Tree](https://img.shields.io/badge/SOURCE%20TREE-blue?style=for-the-badge&logo=sourcetree)

#### Config

![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

#### Development

![HTML5](https://img.shields.io/badge/HTML-%23F5AF64?style=for-the-badge&logo=html5)
![CSS3](https://img.shields.io/badge/CSS-%230A82FF?style=for-the-badge&logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=black)

<img src="https://img.shields.io/badge/React-61DAFB.svg?&style=for-the-badge&logo=React&logoColor=000"/>
<img src="https://img.shields.io/badge/TailwindCSS-2D79C7?style=for-the-badge&logo=tailwindcss&logoColor=white">
<img src="https://img.shields.io/badge/react router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/>
<img src="https://img.shields.io/badge/GITHUB OCTOKIT-181717?style=for-the-badge&logo=Github&logoColor=white">

<br/>
<br/>

## 🚀 요구사항

- 필수 요구사항

  - [x] 로딩 및 에러 화면 구현

- `/` 이슈 목록 페이지

  - [x] 특정 레파지토리의 이슈 목록 출력
  - [x] open 상태의 이슈 중 코멘트가 많은 순으로 정렬
  - [x] 다섯번째 셀 마다 광고 이미지 출력
  - [x] 화면을 아래로 스크롤 시 추가 이슈 목록 로딩 (Infinite Scroll)

- `/issue:id` 이슈 상세 페이지
  - [x] 이슈의 상세 내용 표시

<br/>
<br/>

## 📈 Best Practice

특정 레파지토리의 이슈 데이터를 가져오는 기능

1. `GitHub REST API`
2. `GitHub Octokit`

- Octokit은 GitHub의 REST API와 상호 작용하기 위해 JavaScript를 사용하여 스크립트를 작성하려는 경우 GitHub에서는 Octokit.js SDK를 사용할 것을 권장하고 있으며, REST API를 사용한 비동기 통신보다 조금 더 빠른 성능을 보장할 수 있어서 `GitHub Octokit`을 선택했습니다.

Infinite Scroll 기능

1. `Scroll Event`
2. `IntersectionObserver API`

- 2가지 방법 중 `IntersectionObserver API`를 관찰 대상이 되는 요소가 뷰포트에 교차되는 순간을 캐치할 수 있고, 비동기로 동작하기 때문에 퍼포먼스 측면에서도 이점이 많기 때문에 선택했습니다.

<br/>
<br/>

## ✨ Assignments별 구현 방식

#### 과제 소개

#### [Assignment 1] 이슈 데이터 가져오기

- Github Octokit 라이브러리 사용
- 비동기 통신 API 호출 로직을 Custom Hook으로 구현해서 코드의 가독성을 높이고, 관심사를 분리함으로써 유지보수에 용의함

#### [Assignment 2] Open 상태인 이슈를, Comment가 가장 많은 순서대로 정렬하여 출력

- GitHub REST API에서 지원하는 Params를 이용하여 정렬

#### [Assignment 3] 이슈 데이터를 출력할 때, 5번째 셀마다 광고 이미지 출력하기

- map 함수의 index 속성을 이용하여 일정 순서마다 지정된 광고 이미지가 출력되도록 구현.

#### [Assignment 4] 이슈 데이터를 출력하는 무한 스크롤 기능 구현하기

- IntersectionObserver API를 사용해서 이슈 목록의 마지막 요소를 관찰자로 등록하고 해당 요소가 뷰포트에 포함될 때 이슈 목록 추가 로딩

#### [Assignment 5] 이슈 상세 페이지 구현

- 이슈 목록에서 특정 이슈의 제목을 클릭 시 이슈 상세 페이지로 이동

#### [Assignment 6] 이슈 상세 페이지의 마크다운 렌더링

- react-markdown 라이브러리를 사용해서 마크다운 표현

#### [Assignment 7] 데이터가 요청 중 로딩 화면을 렌더링

- API 호출 시 로딩 상태를 관리하고 상태값에 따라 로딩화면 렌더링

#### [Assignment 8] 에러 핸들링

- 에러 상태를 관리하여 에러 발생 시 에러화면 렌더링

<br/>
<br/>

## 🔥 과제 진행 방법

- 깃 컨벤션, 브랜치 관리 전략, 코드 구조 및 작성 규칙, 컴포넌트 명명 규칙 등의 팀 코딩 표준에 따라 개인 과제 진행 [🔗 코딩 컨벤션](https://shorturl.at/dAO08)

<br/>
<br/>

## 🐿️ 프로젝트 결과 화면

### 이슈 목록 페이지

![image](https://github.com/jade0819/pre-onboarding-12th-2/assets/88275787/d26413a4-3914-4a86-adde-dabd8e669c63)

### 이슈 상세 페이지

![image](https://github.com/jade0819/pre-onboarding-12th-2/assets/88275787/a2d3e873-50b8-41d1-ac30-2c245d5b689b)

<br/>
<br/>

## 🌲프로젝트 구조

```bash
src/
├── api.js
├── componenjs/
│   ├── Issue/
│   │   ├── IssueDetail.jsx
│   │   ├── IssueDetailContent.jsx
│   │   ├── IssueItem.jsx
│   │   └── IssueList.jsx
│   ├── scroll/
│   │   ├── ScrollToTop.jsx
│   └── UI/
│       ├── Card.jsx
│       ├── CardItem.jsx
│       ├── Error.jsx
│       ├── Loading.jsx
│       ├── LoadingItem.jsx
│       ├── Profile.jsx
│       └── Text.jsx
├── constanjs/
│   └── issuesData.js
├── hooks/
│   │   useFetchIssuData.jsx
│   └── useOnScreen.jsx
├── laout/
│   ├── Header.jsx
│   └── PageLayout.jsx
├── pages/
│   ├── issue/
│   │   ├── IssueDetailPage.jsx
│   │   └── IssuesPage.jsx
│   └── NotFound/
│       └── NotFoundPage.js
├── utils/
│   ├── objUniqueCheck.js
│   └── dateFormat
├── App.jsx
├── index.css
├── index.jsx
└── AppRoutes.jsx
```
