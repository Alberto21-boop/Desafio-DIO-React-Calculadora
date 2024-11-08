import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 100vh;
background: ${(props) => props.theme.colors['base-background']};
color: ${(props) => props.theme.colors['base-text']};
display: flex;
align-items: center;
justify-content: center;
`;

export const Content = styled.div`
background-color: ${(props) => props.theme.colors['base-background-color']};
width: 13%;
`;

export const Row = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
`;

export const Column = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 align-items: center;
`;