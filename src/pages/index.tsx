import { Container } from '@theme/layout';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Aigo - Agille</title>
        <meta name="description" content="Ferramentas Agille para toda obra!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <Container>Olá mundo!</Container>
      </div>
    </>
  );
}
