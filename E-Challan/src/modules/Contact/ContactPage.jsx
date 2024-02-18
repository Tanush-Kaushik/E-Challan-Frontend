import React from 'react';

const ContactPage = () => {
  return (
    <section className="bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900  text-white mt-5 lg:text-6xl md:text-5xl">
          Get In Touch
        </h2>
        <p className="mb-8 lg:mb-16 font-normal text-center text-gray-500  text-gray-400 sm:text-xl ">
          Need Help with Ticket Checking and Payment
        </p>
        <section className="FAQSection  bg-gray-900 mt-4 text-center">
          <ol>
            <li className="text-white text-xl">
              <h3>
                Email{' '}
                <span className="text-blue-600">
                  <ion-icon name="mail-open-outline"></ion-icon>
                </span>
              </h3>
            </li>
            <li>
              <h4 className=" text-gray-400 text-lg">
                Contact Support Team Today
              </h4>
            </li>
            <li>
              <h4 className=" text-gray-400 mb-8 text-lg">
                support@TicketTracer
              </h4>
            </li>
          </ol>
          <ol>
            <li className="text-white text-xl">
              <h3>
                Phone{' '}
                <span className="text-blue-600">
                  <ion-icon name="call-outline"></ion-icon>
                </span>
              </h3>
            </li>
            <li>
              <h4 className=" text-gray-400 text-lg">
                We're Here to Assist You
              </h4>
            </li>
            <li>
              <h4 className=" text-gray-400 mb-8 text-lg">+91 999 888 7777</h4>
            </li>
          </ol>
          <ol>
            <li className="text-white text-xl">
              <h3>
                Office{' '}
                <span className="text-blue-600">
                  <ion-icon name="compass-outline"></ion-icon>
                </span>
              </h3>
            </li>
            <li>
              <h4 className=" text-gray-400 text-lg">123, New Delhi</h4>
            </li>
            <li>
              <h4 className=" text-gray-400 text-lg">{'Get Directions >'}</h4>
            </li>
          </ol>
        </section>
      </div>
    </section>
  );
};

export default ContactPage;
