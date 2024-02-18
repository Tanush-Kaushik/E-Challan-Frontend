import React, { useState } from 'react';

const FAQ = (props) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="md:ml-10">
      <div
        onClick={handleClick}
        className={`FAQQuestion ${open ? 'open' : ''}`}
      >
        <h3 className="mt-3 mb-3">{props.question}</h3>
        <h1 className="mt-3 mb-3">{'>'}</h1>
      </div>
      <div className={`FAQAnswer ${open ? 'open' : ''}`}>
        <h4 className="text-gray-400 md:mb-3">{props.answer}</h4>
      </div>
      {/* <hr /> */}
    </div>
  );
};

export default FAQ;
