import React from 'react'
import dynamic from 'next/dynamic';
import siteMetadata from '../utils/siteMetaData';


const CreditPageComponent = dynamic(() => import('@/components/krediti/CreditPageComponent'));

export async function generateMetadata() {
  const pageTitle = "Krediti";
  const pageDescription = "Pročitajte o uobičajenim aplikacijama za kredit";

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `${siteMetadata.siteUrl}/krediti`,
      siteName: siteMetadata.title,
      images: [`${siteMetadata.siteUrl}/social-media.png`],
      locale: "sr_SR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [`${siteMetadata.siteUrl}/social-media.png`], 
    },
    alternates: {
      canonical: `${siteMetadata.siteUrl}/krediti`,
    },
  };
}


const CreditPage = () => {
  return (
    <>
     <CreditPageComponent />
    </>
  )
}

export default CreditPage