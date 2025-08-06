import React from "react";
import styles from "./Header.module.scss";
import NavBar from "../navbar/NavBar";

// interface de props para o header
interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>{title}</h1>
        </div>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <NavBar />
      </header>
    </>
  );
}
