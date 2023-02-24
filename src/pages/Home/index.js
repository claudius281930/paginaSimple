import React from "react";
import styles from "./home.module.css";


function Home() {
  return (

    <div className={styles.containerHome}>

      <section className={styles.banner}>

        <img className={styles.bannerHome}
          src="/img/home.png"
          alt="imagem da pagina inicial" />
      </section>

      <section className={styles.promotion}>

        <img className={styles.promotionImgs}
           src="/img/carossel/1-preco.png"
          alt="imagem um com preços promocionais" />

        <img className={styles.promotionImgs}
           src="/img/carossel/2-preco.png"
          alt="imagem dois com preços promocionais" />

      </section>
    </div>

  );
}

export default Home;
