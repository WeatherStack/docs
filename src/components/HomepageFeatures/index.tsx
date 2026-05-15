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
        WeatherStack is built to store and process your data securely, so you don't have to worry about if your data is safe.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_organizing-data.svg').default,
    description: (
      <>
        WeatherStack lets you focus on building your own weather station, without the hastle of building the server software.
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
