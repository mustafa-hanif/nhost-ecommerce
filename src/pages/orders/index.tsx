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
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowNarrowLeftIcon,
  ArrowLeftIcon,
} from '@heroicons/react/outline';

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
        <div className="max-w-6xl mx-auto py-6 sm:px-6 lg:px-8">
          <div>
            <div className="md:grid md:grid-cols-2 md:gap-2">
              <div className="md:col-span-1">
                <div className="flex items-center">
                  <ArrowLeftIcon
                    className="mr-3 h-7 w-7 p-1 text-gray-600 border border-gray-400 rounded-md"
                    aria-hidden="true"
                  />
                  <h1 className="text-2xl font-bold text-gray-900 mr-2">
                    #1001
                  </h1>
                  <div className="rounded-full py-1 px-2 bg-yellow-200 flex items-center text-sm mr-1">
                    <div className="rounded-full p-1 border-2 w-2 border-coolGray-800 mr-1"></div>
                    <div>Authorized</div>
                  </div>
                  <div className="rounded-full py-1 px-2 bg-orange-200 flex items-center text-sm mr-1">
                    <div>Expiring</div>
                  </div>
                  <div className="rounded-full py-1 px-2 bg-yellow-200 flex items-center text-sm mr-1">
                    <div className="rounded-full p-1 border-2 w-2 border-coolGray-800 mr-1"></div>
                    <div>Unfulfilled</div>
                  </div>
                </div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-1">
                <div className="md:col-span-1">
                  <div className="flex items-center space-x-4 justify-end">
                    <div className="text-gray-800 font-semibold">Restock</div>
                    <div className="text-gray-800 font-semibold">Edit</div>
                    <div className="text-gray-800 font-semibold">
                      More Actions
                    </div>
                    <div className="flex items-center divide-x-2 divide-gray-500 divide-opacity-100">
                      <ChevronLeftIcon
                        className="h-7 w-7 p-1 text-gray-400"
                        aria-hidden="true"
                      />{' '}
                      <ChevronRightIcon
                        className="h-7 w-7 p-1 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="m-0 p-0 ml-10 text-gray-500">
                March 27, 2017 at 5:19p pm from Online Store
              </div>
            </div>
          </div>

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
