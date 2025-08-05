import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <div>
        <h1>Exemplo de Navegação no NextJs</h1>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/contato">Entre em contato</Link>
          </li>
          <li>
            <Link href="/about">Quem Somos</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
