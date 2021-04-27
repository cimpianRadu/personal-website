import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Text, Heading } from '@chakra-ui/react';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section>
          <Heading>Hi there! Nice to see you here 🥰 👀</Heading>
          <Text>Since you are here, please let me introduce myself. 💁🏻‍♂️</Text>
        </section>
        <section>
          <Heading>
            I'm Radu Gheorghe Cîmpian, 27 years old, I live in the heart of
            Transylvania 🧛‍♂️ and I build web and mobile applications using
            Javascript technologies.
          </Heading>
        </section>
        <section>
          <Heading textAlign="center">
            Tech stack that I used for building products
          </Heading>
          <Text>
            React JS, React Native, REST API, GraphQL, Next.js, Redux, Mobx
            State Tree
          </Text>
        </section>
      </main>
    </div>
  );
}
