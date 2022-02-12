import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/undraw_feeling_of_joy.svg').default,
    description: (
      <>
        Automata was designed and built from scratch with ease of use in mind.
        Only prerequisites are the core concepts that make automata.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('../../static/img/undraw_coding.svg').default,
    description: (
      <>
        Automata let's you define automation tasks, and gurantees their reliable execution.
        Leave the cloud operations and plumbing to Automata, you focus on you.
      </>
    ),
  },
  {
    title: 'Power of Cloud',
    Svg: require('../../static/img/undraw_powerful.svg').default,
    description: (
      <>
        Workflows are run on powerful cluster of machines, you define your compute resource needs, we will provide! 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
