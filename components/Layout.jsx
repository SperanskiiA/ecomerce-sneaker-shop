import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <Head>
          <title>Fancy Store</title>
        </Head>
        <header>
          <Navbar />
        </header>
      </div>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
