// Context
import Shopping from '../lib/React/ShoppingContext';
import Status from '../lib/React/StatusContext';

// Components
import GroceryFormLayout from '../components/GroceryFormLayout';
import GroceryList from '../components/GroceryList';

const Home = () => (
  <Shopping>
    <Status>
      <GroceryFormLayout />
      <GroceryList />
    </Status>
  </Shopping>
);

export default Home;
