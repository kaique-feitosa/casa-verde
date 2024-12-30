import styles from './Ofertas.module.scss';
import plantas from '../../assets/data/plantas.json';
import Oferta from './Oferta';

const Ofertas = () => {
  return (
    <section className={styles.container}>
      <h2>
        Conheça nossas <span>ofertas</span>
      </h2>

      <div className={styles.ofertas}>
        {plantas.map(planta => {
          return <Oferta key={planta.id} {...planta} />
        })}
      </div>
    </section>
  );
}

export default Ofertas;