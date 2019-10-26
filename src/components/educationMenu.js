import React from 'react';
import ButtonLink from './buttonLink';

// TODO import from i18n

const items = [
  {
    text: 'Using Emerald Wallet',
    link: '/education/using-emerald-wallet',
    subText: 'Learn how to download and install Emerald Wallet.'
  },
  {
    text: 'Sent Funds to the Wrong Address',
    link: '/education/sent-funds-to-the-wrong-address',
    subText: 'Find out what to do if you send funds to the wrong address.'
  },
  {
    text: 'Using Classic Ether Wallet',
    link: '/education/using-classic-ether-wallet',
    subText: 'Learn how to use the Classic Ether Wallet.'
  },
  {
    external: true,
    text: 'Declaration of Independence',
    link: '/ETC_Declaration_of_Independence.pdf',
    subText:
      'Essentially the ETC Whitepaper. A statement of our cause, a list of grievances, and a description of our principles and goals.'
  },
  {
    external: true,
    text: 'Emerald SDK',
    link: 'https://etcdev.gitbook.io/docs/emerald-sdk',
    subText:
      'Emerald Software Development Kit (SDK) is a development framework to easily create DApps.'
  },
  {
    external: true,
    text: 'Emerald Platform',
    link: 'https://etcdev.gitbook.io/docs/emerald-platform',
    subText:
      'Emerald Platform is a suite of tools developed by ETCDEV including wallet, key storage, block explorer, javascript ui, standalone EVM (SputnikVM), and many other tools.'
  },
  {
    text: 'A Crypto-Decentralist Manifesto',
    link: '/blog/2016-07-11-manifesto',
    subText:
      'Every blockchain creates a social network around its applications, with network value growing exponentially with the number of participants in accordance with Reed’s Law. This value isn’t extracted by intermediaries or controllers, as with previous centralized models. Instead, it’s shared among participants, providing economic incentives for cooperation without coercion. Not all blockchains are created equal. There are three key characteristics that make scalable blockchain-enabled cooperation possible: openness, neutrality and immutability.'
  }
];

const EducationMenu = () => {
  return (
    <ul className="education-menu">
      {items.map(({ text, link, subText, external, ...props }) => (
        <li {...props} key={link}>
          <ButtonLink link={link} internal={!external}>
            {text}
          </ButtonLink>
          <br />
          {subText}
        </li>
      ))}
    </ul>
  );
};

export default EducationMenu;