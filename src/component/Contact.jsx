import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { IoIosMailOpen } from "react-icons/io";
import { MdPhoneMissed } from "react-icons/md";
import { PiAddressBookFill } from "react-icons/pi";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_e9iqelg";
    const templateId = "template_ecf26bv";
    const publicKey = "_FMPfnej307GndFRC";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Takmim",
      reply_to: email,
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        setName("");
        setEmail("");
        setMessage("");
        toast.success("Email sent successfully!");
        console.log(templateParams);
      })
      .catch((error) => {
        toast.error("Failed to send email.");
      });
  };

  return (
    <div className=" bg-black py-10">
      <ToastContainer />
      <h1 className="text-center lg:text-7xl text-4xl lg:pt-0 pt-20 font-abc font-extrabold text-white">
        CONTACT ME
      </h1>
      <h1 className="text-2xl font-abc text-center text-amber-400">
        <span className="text-sm ">LET'S</span> Talk About Ideas
      </h1>

      <div className="flex w-11/12 mx-auto md:flex-row flex-col  justify-evenly gap-40 mt-10">
        {/* from section */}

        <div className="w-1/2">
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="flex  flex-col w-full justify-center "
          >
            <div className="mt-5">
              <label className="text-white mb-2 block text-lg">
                Email Address <span className="text-amber-400">*</span>
              </label>
              <div className="flex items-center border-2 rounded-full px-8 py-3 bg-stone-800 border-amber-400">
                <IoIosMailOpen className="text-amber-400 mr-2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-stone-800 text-amber-400 focus:outline-none"
                  placeholder="Your email"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="text-white mb-2 block text-lg">
                Description <span className="text-amber-400">*</span>
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border-2 w-full rounded-3xl px-8 py-4 text-amber-400 border-amber-400 bg-stone-800 h-36 resize-none focus:outline-none"
                placeholder="Your message"
              />
            </div>

            <button
              type="submit"
              className="btn glass bg-amber-500 text-black mt-5 w-full text-2xl font-abc font-bold hover:text-amber-400"
            >
              Send Me
            </button>
          </form>
        </div>

        <div className="w-1/2 flex lg:space-x-20">
          <div>
            <div className="flex">
              <div className="flex">
                <div className="mt-10 ml-10">
                  <h1 className="text-2xl hover:text-white p-3 border-x-2 border-y-2 rounded-full border-amber-500 text-amber-400">
                    <PiAddressBookFill></PiAddressBookFill>
                  </h1>
                </div>
              </div>
              <div className="text-white lg:mt-8 mt-8 ml-10">
                <h1 className="text-3xl ">Alangkar</h1>
                <h1>Chittagong,Bangladesh</h1>
              </div>
            </div>

            <div className="flex">
              <div className="flex">
                <div className="mt-10 ml-10">
                  <h1 className="text-2xl hover:text-white p-3 border-x-2 border-y-2 rounded-full border-amber-500 text-amber-400">
                    <IoIosMailOpen></IoIosMailOpen>
                  </h1>
                </div>
              </div>
              <div className="text-white lg:mt-8 mt-8 ml-10">
                <h1 className="text-3xl ">Email</h1>
                <h1>takmimm@gmail.com</h1>
              </div>
            </div>
            <div className="flex">
              <div className="flex">
                <div className="mt-10 ml-10">
                  <h1 className="text-2xl hover:text-white p-3 border-x-2 border-y-2 rounded-full border-amber-500 text-amber-400">
                    <MdPhoneMissed></MdPhoneMissed>
                  </h1>
                </div>
              </div>
              <div className="text-white lg:mt-8 mt-8 ml-10">
                <h1 className="text-3xl ">Phone/Whatsapp</h1>
                <a
                  href="https://wa.me/8801824096141" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400"
                >
                  01824096141
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
