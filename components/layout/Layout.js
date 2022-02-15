import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar brand='U.N.I.S.H.F' />
      {children}
    </>
  );
};

export default Layout;
