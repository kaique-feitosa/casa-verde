import styles from './Orientacoes.module.scss';
import imagemPlanta from '../../assets/images/planta-card.png';

const Orientacoes = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imagem}>
        <img src={imagemPlanta} alt="Imagem de uma folha de costela-de-adão" />
      </div>

      <div className={styles.content}>
        <h2>
          Como conseguir <span>minha planta</span>
        </h2>

        <ul>
          <li>
            <div className={styles.circulo}></div>
            <span>Escolha suas plantas</span>
          </li>
          <li>
            <div className={styles.circulo}></div>
            <span>Faça seu pedido</span>
          </li>
          <li>
            <div className={styles.circulo}></div>
            <span>Aguarde na sua casa</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Orientacoes;