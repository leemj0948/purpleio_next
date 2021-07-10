import Link from 'next/link';

const Header = () => {
  return (
    <footer className="form">
      <div className="line"></div>
      <div className="links">
        <img
          src="https://www.common-ground.co.kr/static/c-footer__logo.svg"
          alt="logo"
        />
        <div className="sns">
          <img src="" alt="facebook" />
          <img src="" alt="instargram" />
        </div>
      </div>
      <div className="title">AWESOME FOOD STORE</div>
      <div className="context"></div>
      <div className="copy">@ 2020 이명진</div>
      <style jsx>{`
        .line {
          background-color: #eee;
          height: 7px;
          margin: 0 1.75rem;
        }
        .links {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 1.75rem;
          max-width: 100%;
          width: 100%;
        }
        .links img {
          height: 3vw;
        }
      `}</style>
    </footer>
  );
};

export default Header;
