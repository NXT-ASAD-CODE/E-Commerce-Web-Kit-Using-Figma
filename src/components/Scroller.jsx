import React from 'react';

const logos = [
  './public/61e66fbaa8fdb.png',
  './public/25062023-23-38-15Beechtree.png',
  './public/images.png',
  './publc/dda3c471-5fad-419b-b7e8-841821733d44_small.jpg',
  './public/888-8881000_sapphire-sapphire-clothing-logo.png',
  './public/SAYA-LOGO-SHOPIFY-STORE-BLACK.webp',
  './public/25062023-23-38-15Beechtree.png',
  './publc/dda3c471-5fad-419b-b7e8-841821733d44_small.jpg',
];

const LogoSlide = () => (
  <div className="logos-slide">
    {logos.map((src, index) => (
      <img key={index} src={src} alt="" />
    ))}
  </div>
);

const ClientsSectionLogo = () => (
  <div className="clients-section-logo">
    <div className="logos">
      <LogoSlide />
      <LogoSlide />
    </div>
  </div>
);

export default ClientsSectionLogo;