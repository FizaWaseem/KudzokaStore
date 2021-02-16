import React, { useState } from 'react';
import TimePicker,{ClearIcon} from 'react-time-picker';
 
function TimePickers() {
  const [value, onChange] = useState('10:00');
 
  return (
    <div>
      <TimePicker
        onChange={onChange}
        value={value}
       
      ></TimePicker>
    
    </div>
  );
}
export {TimePickers};