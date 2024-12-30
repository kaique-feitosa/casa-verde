import IPlanta from '../../../interface/IPlanta';
import styles from './Oferta.module.scss';

const Oferta = (props: IPlanta) => {
  const { imagem, titulo, preco } = props;

  return (
    <div className={styles.oferta}>
      <div 
        className={styles.imagem} 
        role='img' aria-label={titulo} 
        style={{backgroundImage: `url(${imagem})`}}
      >
      </div>

      <div className={styles.infos}>
        <h4>{titulo}</h4>
        <span>R$ {preco},00</span>
        <a href="#">Comprar <i className="bi bi-arrow-right"></i></a>
      </div>
    </div>
  )
}

export default Oferta;