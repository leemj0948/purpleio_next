import Link from 'next/link';
import React, { useState } from 'react';
import Layout from './components/Layout';
import Figure from 'react-bootstrap/Figure';
import ModalOption from './components/ModalOption';
import Bar from './components/Bar';

import axios from 'axios';

const Index = ({ data }) => {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [clickId,setClickId] = useState('')
  function handleShow(id) {
    setClickId(data[id-1])
    setShow(true);
  }
  return (
    <Layout>
      <Bar text='STORE'/>
      <div className="form">
        <div className="listTitle">STORE</div>
        <div className="lists">
          {data.map((data) => {
            const {id,thumb} = data
            return (
              <Figure key={id}>
                <Figure.Image
                  width={180}
                  height={180}
                  alt="171x180"
                  src={thumb}
                  style={ListStyle}
                  onClick={() => handleShow(id)}
                />
              </Figure>
            );
          })}
        </div>
        <ModalOption show={show} setShow={setShow} fullscreen={fullscreen} clickId={clickId}/>
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
};

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
