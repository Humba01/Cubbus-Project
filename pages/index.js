import { React } from 'react';
import styles3 from './Cabecalho.module.css';

function wcube() {
  return (
    <body>
      <link rel="stylesheet" href="../css/fonts.css"></link>
      <section className={styles3.cabecalho_cont}>
        <h1 className={styles3.cabecalho}>HN WCube</h1>
      </section>
    </body>
  )
}

export default wcube;