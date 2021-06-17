import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Text, Heading, VStack, Flex } from '@chakra-ui/react';
import { TechStack } from '../components';
import { TimeLine } from '../components';
import { TIMELINE_ITEMS } from '../assets/timeline-items';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Radu G Cîmpian</title>
        <link rel="icon" href="/logo.ico" />
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
            <a
              className={styles.underlinedLink}
              target="_blank"
              href="https://goo.gl/maps/iiwcpDQ7eWaqRsDn6"
            >
              {' '}
              heart of Transylvania 🧛‍♂️
            </a>{' '}
            <br /> I'm a software engineer who loves to build web and mobile
            applications using Javascript ecosystem. Bellow are some of my
            favorite tools for building apps.
          </Heading>
          <TechStack />

          <Flex
            flex={1}
            minHeight="full"
            alignItems="center"
            flexDirection="column"
          >
            <TimeLine items={TIMELINE_ITEMS} />
          </Flex>
        </VStack>
      </main>
    </div>
  );
}
