import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Secure and Reliable',
    Svg: require('@site/static/img/undraw_invite-only.svg').default,
    description: (
      <>
        WeatherStack is built on a secure and reliable infrastructure, ensuring your weather data is always available and protected.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_organizing-data.svg').default,
    description: (
      <>
        WeatherStack lets you focus on your weather data without worrying about the underlying infrastructure.
      </>
    ),
  },
  {
    title: 'Push Your Data Further',
    Svg: require('@site/static/img/undraw_uploading.svg').default,
    description: (
      <>
        WeatherStack provides powerful APIs to push your weather data to various platforms and applications, such as Wunderground.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
