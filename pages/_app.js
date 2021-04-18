import '../styles/globals.css';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { Header, Footer } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <Box bgGradient="linear(to-t, #e74c3c, #000000)">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Box>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
