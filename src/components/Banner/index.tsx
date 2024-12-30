import styles from './Banner.module.scss';
// import imagem from '../../assets/images/planta-banner.png';

const Banner = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>Sua casa com as <span>melhores
          plantas</span></h1>

        <p>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>

        <div role='form' aria-label='Cadastro na newsletter' className={styles.newsletter}>
          <input
            id='email'
            type="email"
            placeholder='Insira seu e-mail'
          />
          <i className="bi bi-envelope"></i>
          <button >Assinar newsletter</button>
        </div>
      </div>
    </section>
  );
}

export default Banner;