import Layout from './components/Layout';
import Bar from './components/Bar';
import { ErrorIcons } from './components/icons';

const Error = () => {
  const Timer = () => {
    setTimeout(GoMain, 5000);
  };
  const GoMain = () => {
    location.replace('/');
  };
  Timer();

  return (
    <Layout>
      <Bar text="ERROR" />
      <div className="message">
        <ErrorIcons />
        <h1>잘못된 페이지 접근입니다!</h1>
        <p>
          <bold>5초후</bold>에 <span className="cover">STORE</span> 페이지로
          이동합니다.
        </p>
      </div>
      <style jsx>{`
        .message {
          margin: 2vw 3vw;
          width: 100%;
          height: 300px;
          text-align: center;
        }
        h1 {
          color: red;
          margin: 2vw;
        }
        p {
          font-size: 1.5rem;
        }
        .cover {
          color: blue;
        }
      `}</style>
    </Layout>
  );
};

export default Error;
