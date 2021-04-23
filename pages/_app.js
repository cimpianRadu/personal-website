import '../styles/globals.css';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { Header, Footer } from '../components';
import theme from '../theme/index';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        {/* <Box bgGradient="linear(to-t, #e74c3c, #000000)"> */}
        <Box>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Box>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
