// Styles
import { Layout } from '../shared/styles';

// React
import User from '../lib/React/UserContext';

import Meta from './Meta';
import Header from './Header';
import SideInfo from './SideInfo';
import ForceSignIn from './ForceSignIn';

const Page = (props) => (
  <Layout>
    <Meta />
    <User>
      <Header client={props.client} />
      <SideInfo />
      <ForceSignIn>{props.children}</ForceSignIn>
    </User>
  </Layout>
);

export default Page;
