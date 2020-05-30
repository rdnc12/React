import React from 'react';

import Button from '../Button/Button';
import Input from '../Input/Input';

const Form=(props)=> {

    const { inputValue, setInputValue, onSubmit }=props;

  return (
    <form>
      <Input inputValue={inputValue} setInputValue={setInputValue} />
      <Button onSubmit={onSubmit} />
    </form>
  );
}

export default Form;