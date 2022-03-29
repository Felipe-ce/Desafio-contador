import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
}

body{
  font-family: sans-serif;
  font-size: 1.25rem;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
button{
  font-size: 2rem;
  paddinsg: .5rem;
  background-color: #c9557b;
  width: 40px;
  height: 40px;
  color: #fff;
  border: none;
  margin-top: 1.5rem;
  border-radius: 50%;
}
button + button {
  margin-left: 1rem;
}
h1{
  font-size: 1.5rem;
  color: #606060;
}
h2{
  margin-top: 1.5rem;
  font-size: 3rem;
}
`;

const Container = styled.div`
  width: 50vh;
  height: 50vh;
  border-radius: 50%;
  background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default class App extends React.Component {
  state = {
    contador: 0,
  };

  adicionar = () => {
    let { contador } = this.state;
    this.setState({
      contador: contador < 10 ? contador + 1 : contador,
    });
  };

  remover = () => {
    let { contador } = this.state;
    this.setState({
      contador: contador > 0 ? contador - 1 : contador,
    });
  };

  limpar = () => {
    this.setState({
      contador: 0,
    });
  };

  render() {
    return (
      <Container>
        <GlobalStyle />
        <h1>Contador</h1>
        <h2>{this.state.contador}</h2>
        <div>
          <button onClick={this.adicionar}>+</button>
          <button onClick={this.remover}>-</button>
          <button onClick={this.limpar}>C</button>
        </div>
      </Container>
    );
  }
}

//npm install --save styled-components
