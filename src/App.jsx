import './App.scss';


function App() {
  return (
    <div className="App">

      <div className='header'>

        <div className='flor'>
           <img src="./assets/images/flor.webp" alt="deu merda" />
           <h2> Bem-vindas,   meninas</h2>

        </div>

        
        <div className="saida">
          <h2> Sair </h2>  
        </div>


      </div>

      <div className="filtro">

        <input type="search"/>

            <div className="procurar">
              <img src="./assets/images/procurar.png" alt="" />
            </div>
    
     </div>

   <div>

        <div>
            <h1>{}</h1>
            <h1>{}</h1>
            <h1>{}</h1>
            <h1>{}</h1>

       </div>
   </div>

    </div>
  );
}

export default App;
