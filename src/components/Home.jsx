import React from 'react'
import imagem_noticia_1_0 from './assets/img/imagem_noticia_1_0.png'
function Home() {
  return (
    <>
    <h1 className='text-center'>BIENVENIDO AL SISTEMA DE GESTION DE LA FARMACIA "LOS REYES"</h1>
    <div>
      <img src={imagem_noticia_1_0} alt="Descripción de la imagen" class="img-fluid mx-auto d-block contenedor"/>
    </div>
    </>
  )
}

export default Home