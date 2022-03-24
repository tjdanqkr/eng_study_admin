import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import Login from "../components/login";

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Eng_Study</title>
        </Head>

        <Login />
      </Layout>
    </>
  );
};

export default Index;
