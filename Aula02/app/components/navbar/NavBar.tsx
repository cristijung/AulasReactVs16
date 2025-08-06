import TextMenu from "./TextMenu";
import styles from './NavBar.module.scss';

export default function NavBar() {
    return(
        <>
        <nav className={styles.barramenu}>
            <TextMenu href="/" texto="Home | " />
            <TextMenu href="/livros" texto="Galeria de Livros | " />
            <TextMenu href="/estanteVirtual" texto="Estante Virtual | " />
            <TextMenu href="/compras" texto="Compras Online | " />           
            <TextMenu href="/login" texto="Área Exclusiva" />           
        </nav>
        
        </>
    );
}
