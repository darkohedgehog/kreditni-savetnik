import dynamic from 'next/dynamic';
import siteMetadata from '../utils/siteMetaData';


const CalculatorPageComponent = dynamic(() => import('@/components/kalkulatori/CalculatorPageComponent'));

export async function generateMetadata() {
  const pageTitle = "Kreditni kalkulatori";
  const pageDescription = "Izračun rate kredita";

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `${siteMetadata.siteUrl}/kalkulatori`,
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
      canonical: `${siteMetadata.siteUrl}/kalkulatori`,
    },
  };
}



const KalkulatoriPage = () => {
  return (
    <>
    <CalculatorPageComponent  />
    </>
  );
};

export default KalkulatoriPage;
