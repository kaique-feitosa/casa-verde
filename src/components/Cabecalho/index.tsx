import logo from '../../assets/images/logo.svg';
import styles from './Cabecalho.module.scss';

const Cabecalho = () => {
  return (
    <header className={styles.cabecalho}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo Casa Verde" />
      </div>

      <nav className={styles.menu}>
        <ul>
          <li>
            <a href="#">Como fazer</a>
          </li>
          <li>
            <a href="#">Ofertas</a>
          </li>
          <li>
            <a href="#">Depoimentos</a>
          </li>
          <li>
            <a href="#">Vídeos</a>
          </li>
          <li>
            <a href="#">Meu carrinho</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Cabecalho;