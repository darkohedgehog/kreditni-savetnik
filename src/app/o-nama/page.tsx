import dynamic from 'next/dynamic';


const AboutUs = dynamic(() => import('@/components/about/AboutUs'));

const AboutPage = () => {
  return (
    <>
      <AboutUs  />
    </>
  )
}

export default AboutPage