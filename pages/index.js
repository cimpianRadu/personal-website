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
            <article>
              <Heading>Hi there! Nice to see you here 🥰 👀</Heading>
              <Text fontSize="2xl">
                Since you are here, please let me introduce myself. 💁🏻‍♂️
              </Text>
            </article>
          </Flex>
          <Heading textAlign="center">
            I'm Radu Gheorghe Cîmpian, 27 years old and I live in the heart of
            Transylvania 🧛‍♂️ <br /> I build web and mobile applications using
            Javascript technologies. You can check out some of my work here
          </Heading>

          <TechStack />
        </VStack>
      </main>
    </div>
  );
}
