import Link from 'next/link';
import Layout from './components/Layout';
import Figure from 'react-bootstrap/Figure';

import axios from 'axios';

const Index = ({ data }) => (
  <Layout>
    <div className="form">
      <div className="listTitle">STORE</div>
      <div className="lists">
        {data.map((data) => {
          return (
            <Figure>
              <Figure.Image
                width={180}
                height={180}
                alt="171x180"
                src={data.thumb}
                style={ListStyle}
              />
            </Figure>
          );
        })}
      </div>
    </div>
    <style jsx>{`
      .form {
        margin: 1.5rem 1.75rem;
        text-align: center;
      }
      .lists {
        display: flex;
        margin: 1vw auto;
        justify-content: flex-start;
        flex-direction: row;
        flex-wrap: wrap;
        width: 68vw;
      }
      .listTitle {
        font-family: Gotham A, Gotham B, DIN, sans-serif;
        font-weight: 700;
        font-size: 2rem;
        margin-bottom: 1.75rem;
        text-align: left;
      }
    `}</style>
  </Layout>
);
const ListStyle = {
  margin: '0.5vw',
  borderRadius: '5px',
  cursor: 'pointer',
};
Index.getInitialProps = async function () {
  const res = await axios.get('http://localhost:9000/stores');
  const data = await res.data;

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    data: data,
  };
};

export default Index;
