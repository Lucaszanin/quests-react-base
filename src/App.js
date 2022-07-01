import './App.css';
import Button from './components/button/button';
import Card from './components/card/card';

function App() {
  return (
    <>
      <Card>
        <h2>O Poder do REACT</h2>
        <p>É possivel também enviar informações de dentro dos componentes filhos para o componente pai atravéz de uma função.
          A Outra forma de fazer um evento é passando ele como uma prop do nosso componente.</p>
      </Card>
      <Button></Button>
    </>
  );
}

export default App;
