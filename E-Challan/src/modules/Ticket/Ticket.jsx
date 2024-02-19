import React, { useRef, useState } from 'react';
import FAQ from './FAQ';
import Table from '../../shared/components/Table';

const Ticket = () => {
  const [status, setStatus] = useState(false);
  const [ticketData, setTicketData] = useState([]);
  const vehicleNumberRef = useRef();
  const [butt, setButt] = useState(false)

  const submitHandler = async () => {
    // setTicketData([
    //   {
    //     vehicleNumber: 32828429,
    //     challanNumber: 38438462,
    //     date: 30,
    //     status: 'Pending',
    //     amount: 150,
    //     receipt: 'xx',
    //   },
    //   {
    //     vehicleNumber: 342543,
    //     challanNumber: 2553453,
    //     date: 25,
    //     status: 'Pending',
    //     amount: 400,
    //     receipt: 'xx',
    //   },
    // ]);

    setButt(true);
  
    let response = await fetch('http://localhost:5000/api/fetchVehicleNumber', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            vehicleNumber: vehicleNumberRef.current.value
        })
    })
    
    let res = await response.json()
    setTicketData(res.ticketData)
    setStatus(true);
    setButt(false);
  };

  return (
    <div className="bg-gray-900">
      <section className="bg-gray-900 ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 ">
          <h1 class="mb-4 text-3xl font-extrabold text-gray-900 text-white md:text-5xl lg:text-6xl mt-5"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Get ticket</span> Details</h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 text-gray-400">
            Please provide the vehicle number plate to check for any speeding
            tickets online!
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <form className="flex items-center">
              <label for="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-gray-500 text-gray-400">
                  {/* <svg className="w-4 h-4 text-gray-500 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
                                    </svg> */}
                  <ion-icon name="car-outline"></ion-icon>
                </div>
                <input
                  type="text"
                  ref={vehicleNumberRef}
                  id="simple-search"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5   bg-gray-700  border-gray-600  placeholder-gray-400  text-white  focus:ring-blue-500  focus:border-blue-500"
                  placeholder="Enter vehicle number"
                  required
                />
              </div>
              <button
                type="button"
                onClick={submitHandler}
                className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  bg-blue-600  hover:bg-blue-700  focus:ring-blue-800"
              >
                {butt ? <span><svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                </svg>
                  Loading...</span>
                  : 'Search tickets'}
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="bg-gray-900">
        {status && <Table ticketData={ticketData} />}
      </section>
      <section className="FAQSection  bg-gray-900 mt-4 ml-12">
        <h2 className="text-4xl font-extrabold  text-white md:ml-10 mt-10">
          FAQs
        </h2>
        <p className="text-gray-500  text-gray-400 mt-5 md:ml-10 mb-8">
          Find answers to frequently asked questions about our online speeding
          ticket checking and payment service.
        </p>
        <div className="FAQs">
          <FAQ
            question="How does it work?"
            answer="Our online speeding ticket checking and payment service allows you to input your vehicle number plate and quickly access information about any outstanding speeding tickets. You can also conveniently make payments for these tickets online."
          />
          <FAQ
            question="Is it secure?"
            answer="Yes, we prioritize the security of your personal information. Our website is encrypted to ensure that your data is protected."
          />
          <FAQ
            question="What if I have multiple tickets?"
            answer="If you have multiple speeding tickets, our service will display all the relevant information for each ticket. You can pay them individually or in a single transaction."
          />
          <FAQ
            question="Can I contest a ticket?"
            answer="Yes, you can contest a speeding ticket through our website. We provide information on the process and necessary steps to dispute a ticket."
          />
          <FAQ
            question="What payment methods are accepted?"
            answer="We accept various payment methods, including credit cards, debit cards, and online payment platforms like PayPal."
          />
        </div>
      </section>
    </div>
  );
};

export default Ticket;
