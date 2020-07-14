import React from 'react';

import { Input, Picker } from 'react-input-date-picker';
import 'react-input-date-picker/dist/index.css';

const App = () => {
  return <div>
    <div><Input /></div>
    <div style={{display: 'none'}}><Picker /></div>
  </div>;
};

export default App;
