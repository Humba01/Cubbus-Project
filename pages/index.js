import { React } from 'react';
import { ReactDOM } from 'react-dom';
import styles from './Fonts.module.css';
import styles from './Reset.module.css';
import styles from './Cabecalho.module.css';

function wcube() {
  return (
    <section className={styles.cabecalho_cont}>
      <h1 className={styles.cabecalho}>HN WCube</h1>
    </section>
  )
}

export default wcube;