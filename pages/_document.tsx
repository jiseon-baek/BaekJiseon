import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="ko">
        <Head> 
          <link
              href="https://unpkg.com/aos@2.3.1/dist/aos.css"
              rel="stylesheet"
            />
          <meta name="keywords" content="프론트엔드, 프론트엔드 포트폴리오, frontend, frontend portfolio"/>
          <meta name="description" content="Author: JiseonBaek, Description: This is the frontend portfolio for seeking jobs."/>
          <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
        </Head>
        <body>
        
          
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;