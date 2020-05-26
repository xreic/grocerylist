// Styles
import { Layout } from '../shared/styles';

// React
import User from '../lib/React/UserContext';

import Meta from './Meta';
import Header from './Header';
import SideInfo from './SideInfo';
import ForceSignIn from './ForceSignIn';
import Safety from './Safety';

const Page = (props) => (
  <Layout>
    <Meta />
    <User>
      <Header client={props.client} />
      <SideInfo />
      <ForceSignIn>{props.children}</ForceSignIn>
      <Safety />
    </User>
  </Layout>
);

export default Page;
