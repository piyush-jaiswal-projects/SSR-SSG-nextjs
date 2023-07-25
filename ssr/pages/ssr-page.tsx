// pages/ssr-page.tsx
import React from 'react';
import { GetServerSideProps, NextPage } from 'next';

interface SSRPageProps {
  serverData: string;
}

const SSRPage: NextPage<SSRPageProps> = ({ serverData }) => {
  return (
    <div>
      <h1>Server-Side Rendered Page</h1>
      <p>Data from the server is: {serverData}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<SSRPageProps> = async () => {
  // Fetch data from an API or perform any other server-side operations
  const serverData = 'This data is coming from the server!';

  return {
    props: {
      serverData,
    },
  };
};

export default SSRPage;
