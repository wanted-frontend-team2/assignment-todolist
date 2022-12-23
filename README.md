# TodoList

> 로그인만으로 간단하게 투두리스트를 작성하고 수정할 수 있는 프로젝트입니다.

[서비스 바로가기](https://web-wanted-frontend-team2-todolist-20z52flc0k1c1p.gksl2.cloudtype.app/, "Todo App")

<br>

## 사용 스택

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/> <img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/> <img src="https://img.shields.io/badge/styled components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/>

<br>

## 세부 기능
### 회원가입

![회원가입](https://user-images.githubusercontent.com/70076564/209350048-8c903099-f6d3-4a6f-b87c-4a0497db8028.gif)

- 회원가입 시 이메일과 비밀번호 유효성 검사를 진행합니다.
  - 동료학습에 중점을 두고 최소 요구조건만 달성하기 위해 비밀번호 재확인과 상세한 유효성 검사는 기능에서 제외했습니다.
  - 재사용성을 고려해 custom hook으로 분리했습니다.
  - 확장성과 유효성 검사의 본질을 고려해 정규식으로 검사합니다.
  - 관리해야 할 상태값의 수를 줄이고 input 태그의 기본 기능을 활용하기 위해 유효성 검사 결과를 변수에 담지 않고 바로 로직을 실행합니다. 
- 유효성 검사를 통과해야 버튼이 활성화됩니다.
- 입력값 변동에 따른 즉각적인 에러메세지 노출을 위해 입력값 처리는 제어 컴포넌트 방식을 사용했습니다.

<br>

### 로그인
![로그인](https://user-images.githubusercontent.com/70076564/209350088-16e5d01a-b1c0-443c-ba5e-895cd3fc3d1e.gif)

- 회원가입과 동일한 조건의 유효성 검사를 진행합니다.
- 마찬가지로 유효성 검사를 통과해야 버튼이 활성화됩니다.
- 자동 로그인이 작동하여 로그인 되어있으면 TodoList 페이지로 이동합니다.
- 에러메세지 노출 여부에 따라 UI 위치가 변하지 않도록 했습니다.

<br>

### TodoList 추가
![리스트 추가](https://user-images.githubusercontent.com/70076564/209350101-17b39e6c-70fe-4c80-8919-f78862f98dfe.gif)

- 입력창에 입력한 뒤 추가 버튼을 누르면 목록에 추가됩니다.

<br>

### TodoList 수정
![리스트 수정](https://user-images.githubusercontent.com/70076564/209350103-69d24f73-c87f-4620-866c-2f774d5765ef.gif)

- 수정 아이콘을 누르면 입력이 활성화됩니다.
- 취소 버튼을 누르면 수정 사항이 취소되고 확인 버튼을 누르면 수정사항이 반영됩니다.
- 수정 내용을 이전과 비교하여 변경사항이 없으면 요청을 보내지 않습니다.

<br>

### TodoList 삭제
![리스트 삭제](https://user-images.githubusercontent.com/70076564/209350115-9e3949a1-4aa3-4692-b851-a08df8ce8c43.gif)

- 삭제 아이콘을 누르면 항목이 삭제됩니다.
- 삭제 후 리스트를 다시 불러오기 위한 요청을 보내지 않고 낙관적 업데이트를 합니다.

<br><Br>

### 기타 고려한 항목
- 페이지 컴포넌트는 비즈니스 로직 없이 해당 페이지의 컴포넌트들을 모아 렌더링 해주는 역할만 하도록 했습니다.
  - 따라서 페이지 컴포넌트에서 useEffect가 노출되지 않도록 리다이렉트를 custom hook으로 구현한 뒤 App.js에서 호출했습니다.
  - 로그인된 상태로 로그인페이지에 접속하면 todoList 페이지로 리다이렉트되며 로그아웃하면 로그인 페이지로 리다이렉트됩니다.
- api 통신 함수를 컴포넌트에서 분리했습니다.
  - try-catch 구문으로 에러를 핸들링하고 에러 발생 시 사용자에게 알립니다.
  - 유연한 에러 처리를 위해 axios를 사용했습니다.
  - 가독성을 위해 async-await 구문을 사용했습니다.

<Br><Br>

## 설치 및 실행 방법

```javascript
git clone https://github.com/wanted-frontend-team2/1-1.git
npm i
npm run start
```

- 3000번 포트에서 시작됩니다.

<br><Br>

## 팀원
<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/DongWooKim97"><img src="https://avatars.githubusercontent.com/u/66302122?v=4" width="100px;" alt="김동우 프로필"/><br /><sub><b>김동우</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/trondi"><img src="https://avatars.githubusercontent.com/u/42338190?v=4" width="100px;" alt="김수경 프로필"/><br /><sub><b>김수경</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/Elenapark"><img src="https://avatars.githubusercontent.com/u/60565155?v=4" width="100px;" alt="박성은 프로필"/><br /><sub><b>박성은</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/Iandayy"><img src="https://avatars.githubusercontent.com/u/104152583?v=4" width="100px;" alt="박수연 프로필"/><br /><sub><b>박수연</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/ahn0min"><img src="https://avatars.githubusercontent.com/u/89904226?v=4" width="100px;" alt="안영민 프로필"/><br /><sub><b>안영민</b></sub></a><br /></td>
     <tr/>
      <td align="center"><a href="https://github.com/heony704"><img src="https://avatars.githubusercontent.com/u/36994104?v=4" width="100px;" alt="이승헌 프로필"/><br /><sub><b>이승헌</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/Jooseulgi"><img src="https://avatars.githubusercontent.com/u/54945205?v=4" width="100px;" alt="주슬기 프로필"/><br /><sub><b>주슬기</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/dukjjang"><img src="https://avatars.githubusercontent.com/u/102455275?v=4" width="100px;" alt="진현덕 프로필"/><br /><sub><b>진현덕</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/cofla159"><img src="https://avatars.githubusercontent.com/u/70076564?v=4" width="100px;" alt="황채림 프로필"/><br /><sub><b>황채림</b></sub></a><br /></td>
    </tr>
  </tbody>
</table>
