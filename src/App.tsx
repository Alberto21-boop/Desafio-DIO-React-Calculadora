import { ThemeProvider } from 'styled-components';
import { Container, Content, Row } from './styles';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { useState } from 'react';

export function App() {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState<string | null>(null);
  const [operator, setOperator] = useState<string | null>(null);


  const handleAddNumber = (number: string) => {
    setCurrentNumber(prev => (prev === '0' ? number : `${prev}${number}`));
  };


  const handleOperation = (op: string) => {
    setFirstNumber(currentNumber);
    setOperator(op);
    setCurrentNumber('0');
  };

  const handleEquals = () => {
    if (firstNumber !== null && operator) {
      const num1 = parseFloat(firstNumber);
      const num2 = parseFloat(currentNumber);
      let result = 0;

      switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num1 / num2;
          break;
        default:
          break;
      }

      setCurrentNumber(result.toString());
      setFirstNumber(null);
      setOperator(null);
    }
  };


  const handleClear = () => {
    setCurrentNumber('0');
    setFirstNumber(null);
    setOperator(null);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Container>
        <Content>
          <Input value={currentNumber} />
          <Row>
            <Button label="C" onClick={handleClear} />
            <Button label="/" onClick={() => handleOperation("/")} />
            <Button label="*" onClick={() => handleOperation("*")} />
            <Button label="-" onClick={() => handleOperation("-")} />
          </Row>
          <Row>
            <Button label="7" onClick={() => handleAddNumber("7")} />
            <Button label="8" onClick={() => handleAddNumber("8")} />
            <Button label="9" onClick={() => handleAddNumber("9")} />
            <Button label="+" onClick={() => handleOperation("+")} />
          </Row>
          <Row>
            <Button label="3" onClick={() => handleAddNumber("3")} />
            <Button label="4" onClick={() => handleAddNumber("4")} />
            <Button label="5" onClick={() => handleAddNumber("5")} />
            <Button label="6" onClick={() => handleAddNumber("6")} />
          </Row>
          <Row>
            <Button label="0" onClick={() => handleAddNumber("0")} />
            <Button label="1" onClick={() => handleAddNumber("1")} />
            <Button label="2" onClick={() => handleAddNumber("2")} />
            <Button label="=" onClick={handleEquals} />
          </Row>
        </Content>
      </Container>
    </ThemeProvider>
  )
}

