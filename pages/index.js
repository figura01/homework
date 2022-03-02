import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Launch from './Launch';

const Home = ()  => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Homework Maespirit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Launch API V2 !
        </h1>

        <Launch />

      </main>

    </div>
  )
}

export default Home;