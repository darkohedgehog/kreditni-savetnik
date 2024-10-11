import dynamic from 'next/dynamic';


const Approach = dynamic(() => import('@/components/home/Approach'));
const HeroSectionWithBeamsAndGrid = dynamic(() => import('@/components/home/HeroSectionWithBeamsAndGrid'));
const MeteorsGrid = dynamic(() => import('@/components/home/MeteorsGrid'));
const WobbleCardSection = dynamic(() => import('@/components/home/WobbleCardSection'));

export default function Home() {
  return (
    <>
      <HeroSectionWithBeamsAndGrid />
      <WobbleCardSection />
      <MeteorsGrid />
      <Approach />
    </>
  );
}
