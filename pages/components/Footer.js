import Link from 'next/link';
import { FACEBOOK } from './icons';
import { INSTARGRAM } from './icons';

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
          <FACEBOOK />
          <INSTARGRAM />
        </div>
      </div>
      <div className="title">AWESOME FOOD STORE</div>
      <div className="context">
        <p>코오롱인더스트리(주)FnC부문 커먼그라운드</p>
        <p>대표이사: 유석진</p>
        <p>법인등록번호: 321-85-00020</p>
        <p>서울특별시 강남구 삼성로 518 (삼성동)</p>
      </div>
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
        .copy {
          color: #868e96;
          font-size: 0.8rem;
          margin: 2rem 1.75rem;
        }
        .context {
          padding-left: 2vw;
          width: 601px;
        }
        .title {
          margin: 1vw 2vw;
        }
        .sns {
          display: flex;
          justify-content: space-evenly;
          width: 15vw;
        }
        .sns::before {
          background-color: #dee2e6;
          content: '';
          height: 1.5rem;
          margin: 0 1.25rem 0 1.6rem;
          width: 1px;
        }
        p {
          display: inline-block;
          margin: 0.3rem 0;
          color: #868e96;
          font-size: 0.8rem;
        }
        p::after {
          display: inline-block;
          margin: -0.1rem 0.5rem;
          width: 1px;
          height: 0.8rem;
          background-color: #dee2e6;
          content: '';
        }
      `}</style>
    </footer>
  );
};

export default Header;
