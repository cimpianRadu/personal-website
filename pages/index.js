import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Text, Heading, VStack, Flex } from '@chakra-ui/react';
import { TechStack } from '../components';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <VStack spacing="12">
          <Flex justifyContent="center">
            <article style={{ textAlign: 'center' }}>
              <Heading>Hi there! Nice to see you here 🥰 👀</Heading>
              <Text fontSize="2xl">
                Since you are here, please let me introduce myself. 💁🏻‍♂️
              </Text>
            </article>
          </Flex>
          <Heading textAlign="center">
            I'm Radu Gheorghe Cîmpian, 27 years old and I live in the{' '}
            <a href="https://goo.gl/maps/iiwcpDQ7eWaqRsDn6">
              {' '}
              heart of Transylvania 🧛‍♂️
            </a>{' '}
            <br /> I'm a software engineer who loves to build web and mobile
            applications using Javascript ecosystem. Bellow are some of my
            favorite tools for building apps.
          </Heading>

          <TechStack />
        </VStack>
      </main>
    </div>
  );
}
