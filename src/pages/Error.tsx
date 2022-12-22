import { useLocation, Link } from 'react-router-dom';

export default function Error() {
  const location = useLocation();
  const errorMessage = location.state.message;
  return (
    <div>
      <h1>{errorMessage} 요청이 실패하였습니다. 잠시후 다시 시도해주세요</h1>
      <Link to="/">
        <button type="button">Home으로</button>
      </Link>
    </div>
  );
}
