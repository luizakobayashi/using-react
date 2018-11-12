import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import Card from './components/card/card'
import Menu from './screen/menu/menu';
import Content from './screen/content/content';

/*const pessoas = [{
	nome: "almondega",
	idade: "6 meses",
	local: "meu coraçao"
},{
	nome: "thailon",
	idade: "20 anos",
	local: "meu coraçao"
},
{
	nome: "igor",
	idade: "20 anos",
	local: "ali"
}]*/

/*class App extends Component {
  render() {
    return (
      <div className="App">
       		{pessoas.map((pessoa)=>
				   <Card title = {pessoa.nome} description = {pessoa.idade} footer = {pessoa.local}/>
			)}
      </div>
    );
  }
}

export default App;*/

class App extends Component {
  render() {
    return (
      <div className="App">
	  	<div className="container">
       		<Menu />
			<Content />
		</div>
      </div>
    );
  }
}

export default App;
