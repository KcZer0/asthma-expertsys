import Head from 'next/head';

const HeadTitle = ({ title, desc = 'Check your asthma type' }) => {
  const baseTitle = 'Asthma Diagnosis';
  let fullTitle = undefined;
  if (title) fullTitle = `${baseTitle} - ${title}`;

  return (
    <Head>
      <title>{fullTitle ?? baseTitle}</title>
      <meta name="description" content={desc} />
    </Head>
  );
};
export default HeadTitle;
