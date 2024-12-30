import { ReactNode } from "react";
import styles from "./PaginaBase.module.scss";

interface PaginaBaseProps {
  children: ReactNode;
}

const PaginaBase = ({ children }: PaginaBaseProps) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default PaginaBase;