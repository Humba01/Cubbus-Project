import { React } from 'react';
import { ReactDOM } from 'react-dom';
import './Fonts.module.css';
import './Reset.module.css';

function wcube() {
  return (
    <section style={cabecalho.setorCabecalho}>
      <h1>HN-WCube</h1>
    </section>
  )
}

const cabecalho = {
  setorCabecalho: {
    backgroundColor: "#000000",
    color: "#ffffff",
    fontFamily: "Ubuntu-Light"
  }
};

export default wcube;