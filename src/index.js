import React from 'react';
import styles from './styles.module.css';
import InputDatePicker from './InputDatePicker';
import Picker from './InputDatePicker/Picker';
import Input from './InputDatePicker/Input';
import DropdownButton from './views/DateView/DropdownButton';

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>;
};

export default InputDatePicker;
export { Picker, Input, DropdownButton };
