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
        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js! Radu's site</a>
        </h1> */}
        <Heading>Hi there! Nice to see you here 🥰 👀</Heading>
        <Text>Since you are here, please let me introduce myself. 💁🏻‍♂️</Text>
        <Heading>
          I'm Radu Cîmpian, UI sofware engineer and I build web and mobile
          applications
        </Heading>
        <Heading>Tech stack that I used for building products</Heading>
        <Text>
          React JS, React Native, GraphQL, Next.js, Redux, Mobx State Tree
        </Text>
      </main>
    </div>
  );
}
