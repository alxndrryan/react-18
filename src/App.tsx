import Alert from './components/Alert';
import ListGroup from './components/ListGroup';
import Button from './components/Button/Button';
import { useState } from 'react';

import { BsFillCalendarFill } from 'react-icons/bs';

function App() {
  const items = ['New York', 'Los Angeles', 'San Francisco'];

  return (
    <div>
      <BsFillCalendarFill color="red" size="40" />
      <Button onClick={() => {}}>My Button</Button>
    </div>
  );
}

export default App;
