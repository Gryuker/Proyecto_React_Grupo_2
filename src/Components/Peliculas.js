import React from 'react';

class Peliculas extends React.Component{
render(){
  return (
    <>
        <section class="Pelicula">
          <article class="Portada">
            <img src= {this.props.img} alt="" />
          </article>
          <article class="Sinopsis">
            <h1> {this.props.titulo} </h1>
            <ul class="Actores">{this.props.actores}</ul>
            <p> {this.props.sinopsis} </p>
            <ul>
              <li>Duracion: {this.props.duracion} </li>
              <li>Generos: {this.props.generos} </li>
            </ul>
            <p>{this.props.criticas}</p>
          </article>
        </section>
      </>
  );
}
}

export default Peliculas;
