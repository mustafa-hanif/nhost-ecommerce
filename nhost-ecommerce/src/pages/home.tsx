import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useAuth } from '@nhost/react-auth';
import { Flex } from 'src/components';
import { APP_NAME, APP_DESCRIPTION } from '@/lib/constants';

function Home() {
  const router = useRouter();
  const { signedIn } = useAuth();

  useEffect(() => {
    if (!signedIn) {
      router.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signedIn]);
  

  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta name="description" content={APP_DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex direction="column" width="100%" padding="20px">
        You are logged in {signedIn}
      </Flex>
    </>
  );
}

export default Home;
