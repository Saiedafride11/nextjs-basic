import React from 'react';
import { useRouter } from 'next/router';

const BlogPostDetails = () => {
      const router = useRouter()
      const { id } = router.query
      return (
            <div>
                 <h1>This is BlogPostDetails {id}</h1> 
            </div>
      );
};

export default BlogPostDetails;