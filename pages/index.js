import * as React from 'react';

// import ChakraProvider component that will wrap indexjs
import { ChakraProvider } from '@chakra-ui/react';

export default function Home() {
  return (
    <ChakraProvider>
      <div>
        <h1>Hello World</h1>
      </div>
    </ChakraProvider>
  );
}
