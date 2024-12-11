import React from 'react';

const Header = () => {
  return <header><h1>Welcome to Our Page</h1></header>;
};

const Footer = () => {
  return <footer><p>© 2024</p></footer>;
};

const Page = ({ isLoggedIn }) => {
    const items = ['Apple', 'Banana', 'Cherry']
  return (
    <div>
      <Header />
      <main>
        <h2>Page Content</h2>
        <div>
      {isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Log In</h1>}
    </div>
    <div>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
