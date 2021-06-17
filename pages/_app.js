import '../styles/globals.css';
import { ChakraProvider, Box, Flex } from '@chakra-ui/react';
import { Header, Footer } from '../components';
import theme from '../theme/index';

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ minHeight: '100vh' }}>
      <ChakraProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default MyApp;
