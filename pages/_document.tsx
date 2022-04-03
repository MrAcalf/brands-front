import Document, {
    Html,
    Head,
    Main,
    NextScript,
} from 'next/document';
import { createGetInitialProps } from '@mantine/next';

export default class MyDocument extends Document {
  static initialProps = createGetInitialProps;

  render() {
    return (
      <Html lang="pt-br">
        <Head>
            <link rel="stylesheet" href="https://use.typekit.net/jbz3npw.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
