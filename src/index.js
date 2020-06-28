import React from 'react';
import styles from './styles.module.css';
import InputDatePicker from './InputDatePicker.component';
import Picker from './picker/Picker.component';

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>;
};

export default InputDatePicker;
export { Picker };
