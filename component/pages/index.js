import Link from 'next/link';
import React from 'react';
import Meta from '../components/Meta';

const Home = () => {
  return (
    <div>
        <Meta title="Crypto News Home 222" keywords="Etherium, Blockchain, Bitcoin" description="crypto it is the world lorem ipsum"/>
        <h1>This is Home</h1>
        <div className="col-md-4 mb-5">
            <h3>Title</h3>
            <p>Body</p>
            <Link href="/news/[id]" as={`/news/`} legacyBehavior>
              <a className="btn btn-success">Read More</a>
            </Link>
        </div>
    </div>
  );
};

export default Home;
