// import React, { useState } from 'react';

// const Temp = () => {

//   let [mode,setMode] = useState(false)

//   return (
//     <div className='shadow-md w-full fixed top-0 left-0'>
//       <div className='md:flex bg-white py-4 md:px-10 px-7 items-center justify-between'>
//         <div className='font-bold text-2xl cursor-pointer flex item-center text-grey-800'>
//           navbar
//         </div>
//         <div className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden' onClick={()=>setMode(!mode)}>
//         <ion-icon name={mode ?"menu-outline":"close-circle-outline"}></ion-icon>
//         </div>
//         <ul className={`md:flex md:item-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${mode?"top-20":"top-[-490px"}`}>
//           <li className='md:ml-8 text-xl md:my-0 my-7'>first</li>
//           <li className='md:ml-8 text-xl md:my-0 my-7'>second</li>
//           <li className='md:ml-8 text-xl md:my-0 my-7'>third</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Temp;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar2 = () => {
  let Links = [
    { name: 'Check Ticket', link: '/ticket' },
    // { name: 'Pay Ticket', link: '/' },
    { name: 'Contact Us', link: '/contactUs' },
    // {name: 'Admin' , link:'/admin'},
    {name : 'Register',link:'/register'},
    {name : 'Login',link:'/login'}
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0 sticky text-white z-40">
      <div className="md:flex items-center justify-between  bg-gray-800 py-4 md:px-10 px-7 ">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center text-white
      text-gray-800"
        >
          <span className="text-3xl text-blue-600 mr-1 pt-2 ">
            <ion-icon name="ticket-outline"></ion-icon>
          </span>
          Ticket Tracer
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden "
        >
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto  bg-gray-800 z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-12 ' : 'top-[-350px]'
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-xl md:my-0 my-6 text-center"
            >
              <Link
                to={link.link}
                className="text-gray-800 hover:text-blue-700 duration-150 text-white md:hover:text-blue-700"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar2;
