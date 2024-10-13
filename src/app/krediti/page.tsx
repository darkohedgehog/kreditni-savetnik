import React from 'react'
import dynamic from 'next/dynamic';


const CreditPageComponent = dynamic(() => import('@/components/krediti/CreditPageComponent'));

const CreditPage = () => {
  return (
    <>
     <CreditPageComponent />
    </>
  )
}

export default CreditPage