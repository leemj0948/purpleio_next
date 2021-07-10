import Link from 'next/link';
import Layout from './components/Layout';

import Figure from 'react-bootstrap/Figure';

const Index = () => (
  <Layout>
    <p>index page</p>
    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="https://s3.ap-northeast-2.amazonaws.com/images.brandsites/common-ground/uploads/00000000354.png"
      />
    </Figure>
  </Layout>
);

export default Index;
