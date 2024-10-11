import dynamic from 'next/dynamic';


const CalculatorPageComponent = dynamic(() => import('@/components/kalkulatori/CalculatorPageComponent'));


const KalkulatoriPage = () => {
  return (
    <>
    <CalculatorPageComponent  />
    </>
  );
};

export default KalkulatoriPage;
