import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: (
      <a href="https://maps.app.goo.gl/VxFG4hYTSP1q7AF58" target="_blank" rel="noopener noreferrer">
        Ubicación
      </a>
    ),
    imgSrc: require('@site/static/img/ubicacion.png').default,
    description: (
      <>
        La IPS está ubicada en el Barrio Armenia, en la dirección Kra 49 #30 - 104. Esta ubicación permite un fácil acceso para los pacientes y colaboradores, brindando servicios de salud en una zona estratégica de la ciudad. 🚑📍
      </>
    ),
  },
  {
    title: (
      <a href="https://cuidadoseguro.com.co/csc3/pqs/" target="_blank" rel="noopener noreferrer">
        Atención al Cliente
      </a>
    ),
    imgSrc: require('@site/static/img/aac.png').default,
    description: (
      <>
        El área de Atención al Cliente en la IPS se encarga de brindar información, gestionar solicitudes y garantizar una experiencia de calidad para los pacientes. Su objetivo es ofrecer un servicio eficiente, resolviendo dudas y mejorando la satisfacción de los usuarios. 📞🤝
      </>
    ),
  },
  {
    title: (
      <a href="https://cuidadoseguro.com.co/csc3/boletin/" target="_blank" rel="noopener noreferrer">
        Boletin Informativo
      </a>
    ),
    imgSrc: require('@site/static/img/noticias.png').default,
    description: (
      <>
        El Boletín Informativo de la IPS ofrece noticias, actualizaciones y comunicados importantes sobre servicios, salud y eventos. Mantente al día con la información relevante para tu bienestar y el de la comunidad. 📰📢
      </>
    ),
  },
];

function Feature({imgSrc, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      <img className={styles.featureImg} src={imgSrc} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
