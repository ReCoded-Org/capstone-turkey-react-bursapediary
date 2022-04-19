import Header from '../../components/ContactUs/Header/Header';
import Form from '../../components/ContactUs/Form/Form';
import Address from '../../components/ContactUs/Address/Address';
import Map from '../../components/ContactUs/Map/Map';

import { ReactComponent as Image } from '../../assets/images/contact.svg';

function ContactUs() {
  return (
    <div className="bg-main h-100 mb-16">
      <Header />
      <div className="grid gap-x-2 gap-y-16 md:grid-cols-2 lg:grid-cols-2">
        <div className="flex justify-center lg:justify-center">
          <Form />
        </div>
        <div className="flex justify-center">
          <Image className="p-1 w-3/4" alt="contact-img" />
        </div>
        <Map />
        <Address />
      </div>
    </div>
  );
}

export default ContactUs;
