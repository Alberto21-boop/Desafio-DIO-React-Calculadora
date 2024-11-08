import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  height: 75px;
  background-color: ${(props) => props.theme.colors['brand-input']};

  display: flex;
  align-items: center;
  justify-content: flex-end;

  font-size: ${(props) => props.theme.textSizes['title-title-m']};
  font-family: Roboto;

  /* input {
    width: 100%;
    height: 75px;
    background-color: ${(props) => props.theme.colors['brand-input']};
    border: 0;
    float: right;
    clear: both;
    padding: 0 10px;

    font-size: ${(props) => props.theme.textSizes['title-title-m']};
    font-family: Roboto;

  } */
`
export const StyledInput = styled.input`
    width: 100%;
    height: 75px;
    background-color: ${(props) => props.theme.colors['brand-input']};
    border: 0;
    float: right;
    clear: both;
    padding: 0 10px;

    font-size: ${(props) => props.theme.textSizes['title-title-m']};
    font-family: Roboto;
`