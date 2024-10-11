import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('@/components/kontakt/ContactForm'));
const ContactUs = dynamic(() => import('@/components/kontakt/ContactUs'));

const ContactPage = () => {
  return (
    <div>
      <ContactUs  />
      <ContactForm  />
    </div>
  )
}

export default ContactPage