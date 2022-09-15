import './Components/styles.css';
import movie from './Components/movie.json';
import Peliculas from './Components/Peliculas';

function App() {
  return (
    <div>
       <article id="Titulo">
          <h1>Cartelera</h1>
       </article>
     <hr/>
     {movie.map(peli =>
     <Peliculas
         img={peli.img}
         titulo={peli.titulo}
         actores={peli.actores}
         sinopsis={peli.sinopsis}
         duracion={peli.duracion}
         generos={peli.generos}
         criticas={peli.criticas} 
        ></Peliculas>)
     }
    </div>
  );
}


export default App;
