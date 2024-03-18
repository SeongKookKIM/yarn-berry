import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home입니다.</h1>
      <Link to="/my">마이페이지 이동</Link>
    </div>
  );
}

export default Home;
