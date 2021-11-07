import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useAuth } from '@nhost/react-auth';
import { Flex } from 'src/components';
import { APP_NAME, APP_DESCRIPTION } from '@/lib/constants';
import Navigation from '@/components/Navigation';
import Table from '@/components/Table';
import Form from '@/components/Form';
import Sidebar from '@/components/Sidebar';
import AddProducts from '../components/UI/AddProducts';

import Routes from '../components/Routes/Routes';

function Index() {
  const router = useRouter();
  const { signedIn } = useAuth();

  if (signedIn) {
    router.push('/home');
    return <div>Redirecting...</div>;
  }

  return (
    <>
       
      <Head>
        <title>{APP_NAME}</title>
        <meta name="description" content={APP_DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="flex">
        <Sidebar />
        <Routes/>
      </main>
            
    </>
  );
}

export default Index;
