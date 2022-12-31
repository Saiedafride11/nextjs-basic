import Link from 'next/link';
import React from 'react';
import Meta from '../components/Meta';

const Home = ({newsLists}) => {
  return (
    <div>
        <main className="container mt-4">
            <div className="row">
                {
                  newsLists?.map((news) => (
                    <div className="col-md-4 mb-5" key={news.id}>
                        <h3>{news.title.substring(0, 20)}</h3>
                        <p>{news.body.substring(0, 50)}</p>
                        <Link href="/news/[id]" as={`/news/${news.id}`} legacyBehavior>
                          <a className="btn btn-success">Read More</a>
                        </Link>
                    </div>
                  ) )
                }
            </div>
        </main>
    </div>
  );
};

export default Home;


// export const getServerSideProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=12');
//   const newsLists = await res.json();


//   return{
//     props: {
//       newsLists
//     }
//   }
// }

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=12');
  const newsLists = await res.json();


  return{
    props: {
      newsLists
    }
  }
}
