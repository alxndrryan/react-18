import Alert from './components/Alert';
import ListGroup from './components/ListGroup';
import Button from './components/Button/Button';
import { useState } from 'react';

import { BsFillCalendarFill } from 'react-icons/bs';
import Like from './components/Like';
import NavBar from './components/NavBar';
import Cart from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState(['Product1', 'Product2']);

  return (
    <div>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div>
  );
}

export default App;
