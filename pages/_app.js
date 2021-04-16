import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Navigation } from '../components/Navigation';
import { Header } from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <Header />
        <Navigation />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
