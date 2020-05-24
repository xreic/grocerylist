import { createContext, useState } from 'react';

const ShoppingContext = createContext({});

const Shopping = (props) => {
  const [isShopping, setIsShopping] = useState(true);

  return (
    <ShoppingContext.Provider value={{ isShopping, setIsShopping }}>
      {props.children}
    </ShoppingContext.Provider>
  );
};

export default Shopping;

export { ShoppingContext };
