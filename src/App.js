import React from 'react';
import Menu from './components/Menu';
import dadosIniciais from './data/dados_iniciais.json'
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel'

function App() {
  return (
    <div>
      <Menu />

      <BannerMain
        videoTile={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Pentágono divulga vídeos de OVNIs filmados por pilotos da Marinha dos EUA!"}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

    </div >
  );
}

export default App;
