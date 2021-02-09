import { React } from 'react';

function wcube() {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"/>
      <section style={cabecalho.cabecalhoCont}>
        <h1 style={cabecalho.titulo}>HN WCube</h1>
      </section>
    </div>
  )
}

export default wcube;

let cabecalho = {
  cabacalhoCont: {
    margin: '0px',
    width: '100vw',
    marginTop: '-20px',
    backgroundColor: '#000000'
  },
  titulo: {
    fontFamily: 'Ubuntu',
    fontWeight: '100',
    backgroundColor: '#6600ff',
    color: '#ffffff'
  }
}