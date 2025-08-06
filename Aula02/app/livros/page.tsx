import Image from "next/image";
import styles from "./Livros.module.scss";
import ImgGato from "../../public/gato3.jpg";

export default function Livros() {
  return (
    <>
      <h1>Galeria de Livros</h1>
      <div className={styles.container}>
        Aqui vão os livros.
        <br />
        <button className={styles.btn}>Adicionar à estante virtual</button>
        <hr />
        <img src="./gato3.jpg" alt="Um Gato" width="200" height="auto" />
        <hr />
        <div>
        <Image
          src={ImgGato}
          alt="Um gato frajola"
          width={500}
          height={500}
          //fill={true} //atributo alternativo de width e height
          style={{ objectFit: "cover" }}
          quality={99} //define a qualidade da imagem para 99%
          placeholder='blur'
        />
        </div>
      </div>
    </>
  );
}
