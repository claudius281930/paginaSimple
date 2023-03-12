import React from "react";
import styles from "./home.module.css";


function Home() {
  return (

    <div className={styles.containerHome}>
      <img className={styles.bannerHome}src="/img/home.png"alt="imagem da pagina inicial" />
    </div>

  );
}

export default Home;
