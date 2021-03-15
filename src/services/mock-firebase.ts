export type ProductProps = {
  title: string;
  description: string;
  photoUrl: string;
  price: number;
  createdAt: number;
};

export const products: ProductProps[] = [
  {
    title: 'Sereia',
    description:
      'Sabonete em barra de sereia!\r✔️hipoalergênico\r✔️super hidratante\r✔️com óleo de amêndoas.\r✔️💯% artesanal',
    price: 10,
    photoUrl:
      'https://firebasestorage.googleapis.com/v0/b/sabonetes-5e51c.appspot.com/o/sabonetes%2Fbarra-sereia.jpeg?alt=media&token=660179b0-fa07-4666-851b-635f80e21db7',
    createdAt: new Date().getTime(),
  },
  {
    title: 'Colors',
    description:
      'Sabonete em barra!\r✔️hipoalergênico\r✔️super hidratante\r✔️com óleo de amêndoas.\r✔️💯% artesanal',
    price: 10,
    photoUrl:
      'https://firebasestorage.googleapis.com/v0/b/sabonetes-5e51c.appspot.com/o/sabonetes%2Fcolors.jpeg?alt=media&token=861e4749-5a36-4656-b4b8-6611d722fd0e',
    createdAt: new Date().getTime(),
  },
  {
    title: 'Esfera Pitanga',
    description:
      'Sabonete em barra!\r✔️hipoalergênico \r✔️super hidratante \r✔️com óleo de amêndoas. \r✔️💯% artesanal',
    price: 10,
    photoUrl:
      'https://firebasestorage.googleapis.com/v0/b/sabonetes-5e51c.appspot.com/o/sabonetes%2Fesfera-pitanga.jpeg?alt=media&token=c68af666-e487-4953-a972-58530c97fe59',
    createdAt: new Date().getTime(),
  },
  {
    title: 'Líquido cinturinha',
    description:
      'Sabonete em barra!\r✔️hipoalergênico \r✔️super hidratante \r✔️com óleo de amêndoas. \r✔️💯% artesanal',
    price: 10,
    photoUrl:
      'https://firebasestorage.googleapis.com/v0/b/sabonetes-5e51c.appspot.com/o/sabonetes%2Fliquido-cinturinha.jpeg?alt=media&token=6a724dbc-3d7c-4615-9726-8a28e6f15149',
    createdAt: new Date().getTime(),
  },
  {
    title: 'Torta de morango',
    description:
      'Sabonete em barra!\r✔️hipoalergênico \r✔️super hidratante \r✔️com óleo de amêndoas. \r✔️💯% artesanal',
    price: 10,
    photoUrl:
      'https://firebasestorage.googleapis.com/v0/b/sabonetes-5e51c.appspot.com/o/sabonetes%2Ftorta-morangos.jpeg?alt=media&token=1ec2875d-f9fe-4e31-bdd2-6ce6506a0041',
    createdAt: new Date().getTime(),
  },
];
