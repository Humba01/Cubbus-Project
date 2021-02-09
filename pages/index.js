import { React } from 'react';
import { ReactDOM } from 'react-dom';
import styles from './Fonts.module.css';
import styles2 from './Reset.module.css';
import styles3 from './Cabecalho.module.css';

function wcube() {
  return (
    <section className={styles3.cabecalho_cont}>
      <h1 className={styles3.cabecalho}>HN WCube</h1>
    </section>
  )
}

export default wcube;