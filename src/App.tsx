import Alert from './components/Alert';
import ListGroup from './components/ListGroup';
import Button from './components/Button/Button';
import { useState } from 'react';

import { BsFillCalendarFill } from 'react-icons/bs';
import Like from './components/Like';

function App() {
  const items = ['New York', 'Los Angeles', 'San Francisco'];

  return (
    <div>
      <Like onClick={() => console.log('clicked')} />
    </div>
  );
}

export default App;
