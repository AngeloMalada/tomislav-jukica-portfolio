import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="mt-28 h-[100vh]">
      <form className="flex flex-col justify-center items-center gap-5 bg-gray-50 p-10 w-[60%] m-auto rounded-3xl">
        <label htmlFor="name">Name</label>
        <input className="w-[60%] h-10" type="text" name="name" id="name" />
        <label htmlFor="email">Email</label>
        <input className="w-[60%] h-10" type="email" name="email" id="email" />
        <label htmlFor="message">Message</label>
        <textarea
          className="w-[60%]"
          name="message"
          id="message"
          cols={30}
          rows={10}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
