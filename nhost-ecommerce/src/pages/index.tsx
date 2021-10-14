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
      
      <main className='flex'>
        
        <Sidebar />
        <div className="max-w-6xl mx-auto py-6 sm:px-6 lg:px-8">
        
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          {/* Replace with your content */}
          <div className="px-4 py-6 sm:px-0">
            <Table />
          </div>
          <div className="px-4 py-6 sm:px-0">
            <Form />
          </div>
          {/* /End replace */}
        </div>
      </main>
    </>
  );
}

export default Index;
