import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Text, Heading, VStack, Flex, Divider, Box } from '@chakra-ui/react';
import { TechStack, TimeLine } from '../components';
import { TIMELINE_ITEMS } from '../assets/timeline-items';
import { CLUJ_GOOGLE_MAPS } from '../constants';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Radu G CÃ®mpian</title>
        <link rel="icon" href="/logo.ico" />
      </Head>

      <main className={styles.main}>
        <VStack spacing="12">
          <Flex justifyContent="center">
            <article style={{ textAlign: 'center' }}>
              <Heading>Hi there! Nice to see you here ð¥° ð</Heading>
              <Text fontSize="2xl">
                Since you are here, please let me introduce myself. ðð»ââï¸
              </Text>
            </article>
          </Flex>
          <Heading textAlign="center">
            I'm Radu Gheorghe CÃ®mpian, 27 years old and I live in{' '}
            <a
              className={styles.underlinedLink}
              target="_blank"
              href={CLUJ_GOOGLE_MAPS}
            >
              {' '}
              heart of Transylvania ð§ââï¸
            </a>{' '}
            <br />
            <br />
            <article>
              I'm an experinced software engineer specialized on building
              beautiful applications using Javascript ecosystem. I contribuited
              on building digital products in various domains from
              <i> education </i> ð <i>, agriculture </i>ð to{' '}
              <i>betting & gambling </i>ð°
              <Divider borderWidth={3} marginY={8} />
              Bellow are some of my favorite tools for building apps ð§°
            </article>
          </Heading>
          <br />
          <TechStack />
          <Divider borderWidth={3} marginY={8} />
          <Heading> Here is my work experience journey up until now ð§­</Heading>
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
