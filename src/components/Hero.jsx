import React from 'react';

const Hero = () => {
  return (
    <section className="bg-[url('/path/to/your/image.jpg')] bg-cover bg-center text-white h-screen flex flex-col justify-center items-center">
      <h2 className="text-4xl md:text-6xl font-bold font-serif"> hola! soy ₹hea! </h2>
      <p className="text-xl mt-4 font-serif" style={{ fontFamily: 'sans serif' }}> a film & moving image enthusiast specialising in archival & curatorial culture</p> 
    </section> 
  );
};

export default Hero;
