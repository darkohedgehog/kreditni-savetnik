import dynamic from 'next/dynamic';


const Approach = dynamic(() => import('@/components/home/Approach'));
const HeroSectionWithBeamsAndGrid = dynamic(() => import('@/components/home/HeroSectionWithBeamsAndGrid'));
const MeteorsGrid = dynamic(() => import('@/components/home/MeteorsGrid'));
const WobbleCardSection = dynamic(() => import('@/components/home/WobbleCardSection'));
const OutroSection = dynamic(() => import('@/components/home/OutroSection'));
const CookieConsent = dynamic(() => import('@/components/cookies/CookieConsent'));

export default function Home() {
  return (
    <>
      <HeroSectionWithBeamsAndGrid />
      <WobbleCardSection />
      <MeteorsGrid />
      <Approach />
      <OutroSection  />
      <CookieConsent  />
    </>
  );
}
