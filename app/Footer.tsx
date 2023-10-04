import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="container mx-auto bg-white py-8 border-t border-gray-400">
      <div className="container flex px-3 py-8">
        <div className="w-full mx-auto flex flex-wrap">
          <div className="flex w-full">
            <div className="px-3 md:px-0">
              <h3 className="font-bold text-gray-900">Privacy Policy</h3>
              <p className="py-4 my-2">
                At Impian Berjaya, safeguarding your privacy is our paramount
                concern. In instances where we request specific information
                through our platform that could potentially identify you, please
                rest assured that its usage will strictly adhere to the
                principles outlined in this privacy statement.
                <br />
                As part of our continuous commitment, Impian Berjaya retains the
                right to modify this policy periodically by revising this page.
                We recommend periodic visits to this page to ascertain your
                satisfaction with any potential alterations.
              </p>
              <h3 className="font-bold text-gray-900">Contact Us</h3>
              <p className="py-4 my-2">+62-8528-0454-422</p>
            </div>
            <div>
              <Image
                src="/logo-impianBerjaya.png"
                alt="logo"
                width={500}
                height={100}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
