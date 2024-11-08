import styled from 'styled-components';

export const ButtonContainer = styled.button`
  padding: 20px;
  border: 1px solid ${(props) => props.theme.colors['brand-button']};
  background-color: ${(props) => props.theme.colors['brand-base-button']};
  color: ${(props) => props.theme.colors['brand-color-button']};
  font-size: ${(props) => props.theme.textSizes['title-title-m']};
  font-weight: 700;
  flex: 1;

  &:hover {
    opacity: 0.6;
  }
`