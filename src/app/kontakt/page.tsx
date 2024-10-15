import dynamic from 'next/dynamic';
import siteMetadata from '../utils/siteMetaData';

const ContactForm = dynamic(() => import('@/components/kontakt/ContactForm'));
const ContactUs = dynamic(() => import('@/components/kontakt/ContactUs'));

export async function generateMetadata() {
  const pageTitle = "Blog";
  const pageDescription = "Pročitajte najvovije vijesti sa našeg bloga";

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `${siteMetadata.siteUrl}/kontakt`,
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
      canonical: `${siteMetadata.siteUrl}/kontakt`,
    },
  };
}


const ContactPage = () => {
  return (
    <div>
      <ContactUs  />
      <ContactForm  />
    </div>
  )
}

export default ContactPage