import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase';
import List from './components/List';

function App() {
const name = 'Victor'
let nome = 'Lurdes'

const newName = name.toUpperCase()// deixa em letra maiuscula meu nome

function sum(a, b) {
return a + b
}


const url = "https://via.placeholder.com/150"

  return (
    <div className="App">
    <h1>Testando css</h1>
    <Frase />
    <Frase />
    <p>Olá, {newName}</p>
    <p>Olá {nome}</p>
    <p>Soma: {sum(2 + 2)}</p>
    <p>Divisao: {4 * 2}</p>
    <p>Multiplicador: {5 / 2}</p>
    <p>Subtração: {200 - 145}</p>
    <img src={url} alt= "Minha imagem" /> 
    <HelloWorld />
    <SayMyName nome= "Maite" />
    <SayMyName nome= "Lurdes" />
    <SayMyName nome= "Victor" />
    <SayMyName nome= "Pai" />
    <SayMyName nome= "Mãe" />
    <Pessoa 
    foto="http://via.placeholder.com/150"
    nome="Victor" 
    idade="28" 
    profissao="Programador"
    />
    </div>
  )
  }

export default App;