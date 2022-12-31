import Head from 'next/head';

const Meta = ({title, keywords, description}) => {
      return (
            <Head>
                  <title>{title}</title>
                  <meta charset="utf-8"/>
                  <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                  <meta name="viewport" content="width=device-width, initial-scale=1" />
                  <meta name="description" content={description} />
                  <meta name="keywords" content={keywords} />
            </Head>
      );
};

export default Meta;


Meta.defaultProps = {
     title: 'Crypto News',
     keywords: 'Crypto News Crypto Coin Crypto Money Bitcoin Blockchain',
     description: 'Be updated on latest news of crypto world'
}