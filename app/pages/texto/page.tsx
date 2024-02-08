// PAGINA INICIAL
import styles from "@/styles/styles.module.css";
import Link from "next/link";

export default function Test() {
  return (
    <div className={styles.testPage}>
      <div className={styles.centerContent}>
        <h1 className={styles.pageTitle}>Pagina de Informacioon</h1>
        <p className={styles.pageText}>
          Este es un texto de ejemplo para la página de prueba. Puedes agregar más
          contenido aquí.
        </p>
       
      </div>
    </div>
  );
}
