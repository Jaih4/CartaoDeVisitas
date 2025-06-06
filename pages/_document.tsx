import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          {/* Fonte externa Google Fonts */}
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
            rel="stylesheet"
          />
          {/* Meta tags globais que não mudam por página */}
          <meta name="author" content="Seu Nome" />
        </Head>
        <body>
          <Main /> {/* Conteúdo da página */}
          <NextScript /> {/* Scripts do Next.js */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
