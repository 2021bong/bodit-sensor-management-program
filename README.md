# Bodit 2team ❤️‍🔥

### **[배포링크](https://SeanKim05.github.io/bodit-team2/)**

## JUSTCODE 6기 기업협업 1주차 2번째 과제-바딧- 2팀

<br />

## 1. 개발 기간 🗓

- **개발 기간** : 2022.10.07 ~ 2022.10.09(3일)
  <br />
  <br />

## 2. 팀원 및 협업 방식 🤹

**팀원**

- 김유현
- 박기호
- 봉원희
- 이은지
- 서지원

**협업 방식**

- **[팀 노션](https://www.notion.so/wecode/aae6c129b9c448c0a0ded1c5fb783437?p=602aa7e403c545d2a05f178d6424a37a&pm=c)**
  <br />
  <br />

## 3. 프로그램 실행 방법 및 파일 프로젝트 구조 🚧

### 프로그램 실행 방법

<br />

1.  터미널을 키고 원하는 폴더 경로로 이동해 레포지토리를 클론 받습니다.

```
git clone https://github.com/SeanKim05/bodit-team2.git
```

<br />

2.  클론이 다 받아지고 나면 패키지를 다운 받습니다.

```
npm i
```

<br />

3.  프로젝트를 실행합니다.

```
npm start
```

<br />

4. 브라우저가 켜지고 프로젝트를 확인 할 수 있습니다.
   <br />
   <br />

### 파일 프로젝트 구조

- `public/data`: Mock 데이터 폴더
- `src/pages/main`: 메인 페이지 파일 폴더
- `src/pages/graph`: 그래프 페이지 파일 폴더
- `src/styles`: 전역 스타일 관리 폴더
   <br />
   <br />

## 4. 적용 기술 및 구현 기능 🛠

<br />

### 4-1. 적용 기술

- JavaScript
- React.js
- react-router-dom
- styled-components
- fortawesome
- chart.js (차트 라이브러리)
- react-chartjs-2
- eact-zoom-pan-pinch (확대 축소 버튼 라이브러리)
- react-calendar (달력 라이브러리)
- react-datepicker
- date-fns
- moment
- react-csv (csv 라이브러리)
- gh-pages (배포라이브러리)

<br />

### 4-2. 구현 기능

- ✅ 첫번째 페이지 _(/ )_

  - 김유현
    - 테이블
      - 배터리 상태에 따른 값 렌더링
      - 마우스 hover시 row 스타일 변경

  <br />

  - 박기호
    - 테이블
      - (배터리/카드넘버/펌웨어 버젼/하드웨어 버젼) 드롭다운 메뉴 적용
      - 드롭다운 메뉴에서 해당 데이터 렌더링

  <br />

  - 이은지
    - 테이블
      - 메인화면 UI
      - 필터가 없는 테이블의 각 th 클릭 시 정렬
      - 필터가 있는 테이블의 th는 sort img 클릭시 정렬

  <br />

- ✅ 두번째 페이지 _(/graph)_

  - 김유현
    - 차트
      - 버튼 클릭시 그래프 zoom in/out 기능 추가

  <br />

  - 봉원희
    - 차트
      - 데이터에 기반한 기온, 습도, 압력 그래프
      - 온도에 따라 기온 그래프 색상이 다르도록 구현
    - export
      - export 버튼 UI
      - export 버튼을 클릭하면 csv 파일 다운로드 기능
    - UI
      - 페이지 전체 레이아웃

  <br />

  - 서지원

    - 달력

      - 모달창(해당 날짜 클릭시 사라짐)
      - react-datepicker 라이브러리로 구현
      - moment.js로 날짜 구현

    - UI
      - 반응형 구현
      - 데이터 없을 때 UI
