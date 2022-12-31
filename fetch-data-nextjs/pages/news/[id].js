import React from 'react';
import Meta from '../../components/Meta';
// import { useRouter } from 'next/router';

const BlogPostDetails = ({newsItem}) => {
      // const router = useRouter()
      // const { id } = router.query
      return (
            <div>
                  <Meta title={newsItem.title} key={newsItem.title} description={newsItem.body}/>
                 <main className="container mt-4">
                        <div className="row">
                              <h1>{newsItem.title}</h1>
                              <p>{newsItem.body}</p>
                        </div>
                  </main>
            </div>
      );
};

export default BlogPostDetails;


// export const getServerSideProps = async (context) => {
//       const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + context.params.id);
//       const newsItem = await res.json();
    
//       return{
//         props: {
//           newsItem
//         }
//       }
//     }

export const getStaticProps = async (context) => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + context.params.id);
      const newsItem = await res.json();
    
      return{
        props: {
          newsItem
        }
      }
    }
    
export const getStaticPaths = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const newsList = await res.json();
      const ids = newsList.map(newsItem => newsItem.id);
      const paths = ids.map(id => ({params: {id: id.toString()}}));
    
      return{
      //   paths: [{params: {id: "1"}}]
        paths,
        fallback: false
      }
    }
    