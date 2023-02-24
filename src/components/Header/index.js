import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import styles from "./Header.module.css";


function Header() {
  const [exibirNav, setExibirNav] = useState(false)//quando for > 600
  const [mobile, setMobile] = useState(window.innerWidth <= 600)//quando for <= 600

  useEffect(() => {
    function handleResize() {
      setMobile(window.innerWidth <= 600);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);//useEffect exige dois parametro 


  return (

    <header className={styles.container}>
      {/* verifica se a tela é <= 600 utilizando a tag JSX*/}
      {mobile ? (

        <button className={styles.mobileMenuButton}
          /*setExibirNav verifica em seu parametro se a tela é exatamente <= 600 */
          onClick={() => setExibirNav(!exibirNav)
          }>

          <img className={styles.toggle} src='../img/burg.png' alt='menu' />
        </button>) : (/* apatir daqui o que será renderizado na tela <= 600 */

        <nav className={styles.navegation}>

          <ul className={styles.navegationList}>
            <li className="navegationList_itens">
              <Link to="/">Home</Link>
            </li>

            <li className="navegationList_itens">
              <Link to="/supercilios">Super Cílios</Link>
            </li>

            <li className="navegationList_itens">
              <Link to="/portifolio">Portifólio</Link>
            </li>

            <li className="navegationList_itens">
              <Link to="/contato">Contato</Link>
            </li>

          </ul>

        </nav>
      )}{/* final da lista de navegação para tlas <= 600*/}

      {/* A logica aqui é para exibir o menu padrão para telas > 600 */}
      {mobile && exibirNav && (
        <nav className={styles.navegation}
          style={
            { display: exibirNav ? "block" : "none" }
          }>

          <ul className={styles.navegationList}>
            <li className="navegationList_itens">
              <Link to="/">Home</Link>
            </li>

            <li className="navegationList_itens">
              <Link to="/supercilios">Super Cílios</Link>
            </li>

            <li className="navegationList_itens">
              <Link to="/portifolio">Portifólio</Link>
            </li>

            <li className="navegationList_itens">
              <Link to="/contato">Contato</Link>
            </li>

          </ul>

        </nav>
      )}{/* final da lista de navegação para telas padrão > 600 */}
    </header>

  );
}
export default Header;
