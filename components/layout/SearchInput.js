import React from 'react';
import styled from 'styled-components';

const SearchInput = props => {
  let input;
  const onChangeHandler = () => {
    props.onSearch(input.value);
  };
  return <Input ref={n => (input = n)} onChange={onChangeHandler} placeholder='Search hero' />;
};

export default SearchInput;

const Input = styled.input`
  width: 80%;
  height: 30px;
  border-radius: 0;
  border: 2px solid #eee;
  outline: none;

  &:focus {
    border-radius: 0;
    border: 1px solid #754abe;
    //outline: 1px solid #754abe;
  }
`;
