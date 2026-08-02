import React from 'react';

const logos = [
  './images/61e66fbaa8fdb.png',
  './images/25062023-23-38-15Beechtree.png',
  './images/images.png',
  './images/dda3c471-5fad-419b-b7e8-841821733d44_small.jpg',
  './images/888-8881000_sapphire-sapphire-clothing-logo.png',
  './images/SAYA-LOGO-SHOPIFY-STORE-BLACK.webp',
  './images/25062023-23-38-15Beechtree.png',
  './images/dda3c471-5fad-419b-b7e8-841821733d44_small.jpg',
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