import Link, { LinkProps } from "next/link";
import styles from './TextMenu.module.scss';

interface TextLinkProps extends LinkProps {
    texto: string;
    href: string;
    textname?: string;
}

export default function TextMenu({ texto, href, ...rest}: TextLinkProps) {
    return(
        <>
        <Link href={href} {...rest} className={styles.textmenu}>{texto}</Link>
        </>
    );
}