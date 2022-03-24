import Container from "../../components/container";
import Layout from "../../components/layout";
import Head from "next/head";
import { checkToken, getToken } from "../../lib/token";
import { useRouter } from "next/router";
import { useEffect } from "react";

import MainUI from "../../components/mainUI";
import MainContent from "../../components/mainContent";
const Index = () => {
  const router = useRouter();

  useEffect(() => {
    checkUserToken();
  }, []);
  const checkUserToken = async () => {
    try {
      const check = await checkToken();

      if (!check) router.replace("/");
    } catch (error) {
      router.replace("/");
    }
  };

  return (
    <>
      <Layout>
        <Head>
          <title>main</title>
        </Head>
        <Container>
          <MainUI>
            <MainContent></MainContent>
          </MainUI>
        </Container>
      </Layout>
    </>
  );
};

export default Index;
