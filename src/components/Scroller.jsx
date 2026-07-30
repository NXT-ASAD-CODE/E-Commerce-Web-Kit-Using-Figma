import React from 'react';

const logos = [
  './icons/Logo (1).svg',
  './icons/Logo (6).svg',
  './icons/Logo (3).svg',
  './icons/Logo (4).svg',
  './icons/Logo (1).svg',
  './icons/Logo (2).svg',
  './icons/Logo (3).svg',
  './icons/Logo (5).svg',
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