import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      toast.error('Please fill all fields before submitting.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    emailjs
      .send(
        'service_1vd53pg',
        'template_7xb4jbj',
        {
          name: formData.name,
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
        },
        'eroPjbo-X4PqOu0HT'
      )
      .then(
        (response) => {
          toast.success('Contact Info Submitted');
          navigate('/');
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }, 100);
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        },
        (err) => {
          toast.error('Contact info Not submitted');
        }
      );
  };

  return (
    <div className="relative z-10 flex flex-col lg:flex-row items-stretch mb-20 gap-10 justify-center px-4 text-white">
      <div className="bg-gray-800 p-6 rounded-xl w-full max-w-md shadow-lg space-y-4 h-full">
        <h2 className="text-3xl font-bold mb-2 text-center">Contact Us</h2>
        <p className="text-center">Feel free to reach out through any of the methods below.</p>
        <div className="space-y-3 text-left">
          <p className="flex items-center gap-2 text-xl">
            <MdEmail className="text-blue-400 text-lg" />
            <a href="mailto:venkateshdoddi932@gmail.com"> <strong>Email</strong></a>
          </p>
          <p className="flex items-center gap-2 text-xl">
            <FaLinkedin className="text-blue-500 text-lg" />
            <a href="https://www.linkedin.com/in/venkatesh-doddi/" target='_blank' rel="noopener noreferrer"><strong>LinkedIn</strong></a>
          </p>
          <p className="flex items-center gap-2 text-xl">
            <FaGithub className="text-white text-lg" />
            <a href="https://github.com/venkey799" target='_blank' rel="noopener noreferrer"><strong>GitHub</strong></a>
          </p>
          <p className="flex items-center gap-2 text-xl">
            <FaTwitter className="text-blue-400 text-lg" />
            <a href="https://x.com/Venkate69399255" target='_blank' rel="noopener noreferrer"><strong>Twitter</strong></a>
          </p>
        </div>
      </div>

      <form
        className="bg-gray-800 p-6 rounded-xl w-full max-w-md space-y-4 shadow-lg h-full"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold text-center mb-4">Let's Connect</h2>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
        />

        <textarea
          name="message"
          placeholder="Your Message (up to 200 words)"
          value={formData.message}
          onChange={handleChange}
          className="w-full h-36 p-3 rounded bg-gray-700 text-white resize-none focus:outline-none"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded font-semibold transition"
        >
          Submit
        </button>

     
      </form>
    </div>
  );
}

export default ContactForm;
