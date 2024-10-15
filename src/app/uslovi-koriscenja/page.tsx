import TermsOfUse from '@/components/terms/TermsOfUse'
import React from 'react'
import siteMetadata from '../utils/siteMetaData';


export async function generateMetadata() {
  const pageTitle = "Uslovi korišćenja";
  const pageDescription = "Pročitajte Uslove korišćenja";

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `${siteMetadata.siteUrl}/uslovi-koriscenja`,
      siteName: siteMetadata.title,
      images: [`${siteMetadata.siteUrl}/social-media.png`],
      locale: "sr-Latn-RS",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [`${siteMetadata.siteUrl}/social-media.png`], 
    },
    alternates: {
      canonical: `${siteMetadata.siteUrl}/uslovi-koriscenja`,
    },
  };
}

const TermsPage = () => {
  return (
    <>
   <TermsOfUse />
    </>
  )
}

export default TermsPage