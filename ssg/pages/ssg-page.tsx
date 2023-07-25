// pages/ssg-page.tsx
import React from 'react';
import { GetStaticProps, NextPage } from 'next';

interface SSGPageProps {
  serverData: string;
}

const SSGPage: NextPage<SSGPageProps> = ({ serverData }) => {
  return (
    <div>
      <h1>Static Site Generation Page</h1>
      <p>Data from the server: {serverData}</p>
    </div>
  );
};

export const getStaticProps: GetStaticProps<SSGPageProps> = async () => {
  // Fetch data from an API or perform any other server-side operations
  const serverData = 'This data is statically generated at build time!';

  return {
    props: {
      serverData,
    },
  };
};

export default SSGPage;
