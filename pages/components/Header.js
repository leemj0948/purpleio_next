import Link from 'next/link';

const Header = () => {
  return (
    <section className="form">
      <h1 className="title">AWESOME FOOD STORE</h1>
      <h2 className="menu">
        <Link href="/">
          <a>PLAY</a>
        </Link>
        <Link href="/">
          <a>SHOP</a>
        </Link>
        <Link href="/about">
          <a>ABOUT</a>
        </Link>
        <Link href="/">
          <a>STORE</a>
        </Link>
      </h2>
      <div className="logo">
        <img
          src="https://www.common-ground.co.kr/static/c-top__logo.png"
          alt="logo"
        />
      </div>
      <style jsx>{`
        .form {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 1.5vw 3rem 5vw;
        }
        .menu {
          display: flex;
          justify-content: space-between;
          width: 44%;
          font-family: Gotham A, Gotham B, DIN, sans-serif;
        }
        .title {
          color: #464e9d;
          font-size: 1.75rem;
        }
        a {
          text-decoration: none;
          color: #212529;
          cursor: pointer;
          font-size: 1.2rem;
          font-weight: 900;
        }
        a:visited {
          color: #212529;
        }
        .logo img {
          margin-left: 4rem;
          height: 3.1rem;
          cursor: pointer;
        }
        
      `}</style>
    </section>
  );
};

export default Header;
