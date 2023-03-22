import React from 'react';
import { Product, FooterBanner, HeroBanner, Footer } from '@/components';
import { client } from '@/lib/client.js';

const Home = ({ products, banner }) => {
  return (
    <>
      <HeroBanner heroBanner={banner.length && banner[0]} />
      {console.log(banner)}
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Sneakers and more</p>
      </div>
      <div className="products-container">
        {products?.map((item) => (
          <Product key={item._id} product={item} />
        ))}
      </div>
      <FooterBanner footerBanner={banner && banner[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const banner = await client.fetch(bannerQuery);

  return {
    props: {
      products,
      banner,
    },
  };
};
export default Home;
