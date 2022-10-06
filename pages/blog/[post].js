import Link from 'next/link';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import useFetch from '../../hooks/useFetch';
import NewLoader from '../../components/lib/loader/NewLoader.component';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import Footer from '../../components/lib/footer/Footer.component';

const Post = () => {
  const router = useRouter();
  const query = router.query;
  const [postData, setPostData] = useState({});
  const { data, status, isLoading, isSuccess } = useFetch(
    'get-single-post',
    query.post
  );

  /* ====== watch for data changes */
  useEffect(() => {
    isSuccess && setPostData(data.data.data);
    console.log(postData);
  }, [data, status]);

  return (
    <div className='flex flex-col relative items-center w-full min-h-screen bg-gray-100'>
      {/* ====== Post hero  */}
      <Hero
        className='flex gap-5 flex-col px-16 lg:px-56 py-32 w-full  justify-start  bg-center h-[65vh] lg:h-[70vh] min-h-[600px] relative'
        src={postData.attributes?.image.data.attributes.url}
      >
        {isLoading && <NewLoader />}
        {/* ====== back button */}
        <Link href='/blog' passHref>
          <a className='absolute top-8 left-8  lg:left-44 text-red-400 font-bold text-sm lg:text-lg py-1 px-4 lg:6 border border-red-400 rounded-lg shadow-lg'>
            Back
          </a>
        </Link>
        <h1 className='text-3xl text-white lg:text-7xl font-primary font-black'>
          {postData.attributes?.Title}
        </h1>
        <div className=''>
          <h3 className='text-gray-100/80 text-lg font-medium font-secondary '>
            Author: &nbsp;
            <b>
              {postData.attributes?.Author.data.attributes.firstname} &nbsp;
              {postData.attributes?.Author.data.attributes.lastname}
            </b>
          </h3>
          <h3 className='text-blue-200 text-lg font-medium font-secondary '>
            Date:{' '}
            <time dateTime={postData.datetime}>
              {new Date(postData.attributes?.createdAt).toLocaleString(
                'en-us',
                {
                  dateStyle: 'medium',
                }
              )}
            </time>
          </h3>
        </div>
      </Hero>

      {/* ====== post content */}
      <article className='flex h-auto py-32 px-10 rounded-2xl shadow-2xl mb-24 bg-gradient-to-b from-indigo-50 to-white w-[95%] gap-20 items-center flex-col justify-center z-20 -mt-64 lg:-mt-96 relative '>
        {isLoading && <NewLoader />}
        <div className='w-full max-w-5xl text-gray-600 text-lg prose-h1:font-primary prose lg:prose-lg prose-p:text-gray-600 prose-h1:text-indigo-600 prose-img:shadow-xl prose-img:rounded-xl prose-h1:font-bold prose-p:font-secondary'>
          <ReactMarkdown escapeHtml={false}>
            {postData?.attributes?.Content}
          </ReactMarkdown>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default Post;

const Hero = styled.header`
  background: ${({ src }) =>
    `linear-gradient(to bottom, rgba(10,40,60,0.65), rgba(10,40,60,0.65)), url(${src})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`;
