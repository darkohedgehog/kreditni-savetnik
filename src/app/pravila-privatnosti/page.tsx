import CookiesStatement from '@/components/privacy/CookiesStatement'
import Privacy from '@/components/privacy/Privacy'
import React from 'react'
import siteMetadata from '../utils/siteMetaData';

export async function generateMetadata() {
    const pageTitle = "Pravila privatnosti";
    const pageDescription = "Pročitajte o pravilima privatnosti";
  
    return {
      title: pageTitle,
      description: pageDescription,
      openGraph: {
        title: pageTitle,
        description: pageDescription,
        url: `${siteMetadata.siteUrl}/pravila-privatnosti`,
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
        canonical: `${siteMetadata.siteUrl}/pravila-privatnosti`,
      },
    };
  }

const PrivacyPage = () => {
  return (
    <>
    <Privacy />
    <CookiesStatement  />
    </>
  )
}

export default PrivacyPage