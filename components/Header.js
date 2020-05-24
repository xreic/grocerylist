// Dependencies
import Router from 'next/router';
import NProgress from 'nprogress';

// NProgress
Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

// React
import Nav from './Nav';

const Header = (props) => (
  <React.Fragment>
    <img src="/grocery-bags.png" alt="Image of Grocery Bags" />
    <Nav {...props} />
  </React.Fragment>
);
export default Header;
