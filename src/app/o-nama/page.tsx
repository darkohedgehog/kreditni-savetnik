import dynamic from 'next/dynamic';
import siteMetadata from '../utils/siteMetaData';


const AboutUs = dynamic(() => import('@/components/about/AboutUs'));

export async function generateMetadata() {
  const pageTitle = "Blog";
  const pageDescription = "Pročitajte najvovije vijesti sa našeg bloga";

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `${siteMetadata.siteUrl}/o-nama`,
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
      canonical: `${siteMetadata.siteUrl}/o-nama`,
    },
  };
}


const AboutPage = () => {
  return (
    <>
      <AboutUs  />
    </>
  )
}

export default AboutPage