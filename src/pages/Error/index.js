import React, { Fragment } from "react";
import styles from './error.module.css'

function Error(){
    return(
        <Fragment>
            <h1 className={styles.pageError}>
                Esta página não exite.
            </h1>
            <span className={styles.msgError}>Use o nemu de navagação(no canto superior direito
                da navegação) para ser direcionado
                a uma de nossas páginas.
            </span>
        </Fragment>
    )
}
export default Error;