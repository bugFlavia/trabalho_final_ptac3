import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect } from 'react';

const Carrossel = () => {
  const imagens = [
    'https://www.broadsatyale.com/wp-content/uploads/2019/09/Taylor-Swift-Lover-1.jpg',
    'https://correiodecarajas.com.br/wp-content/uploads/2019/08/Taylor-Swift.jpg',
    'https://zint.online/wp-content/uploads/2019/08/TAYLOR_000.jpg',
  ];

  const [imagemID, setimagemID] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setimagemID((num) =>
        num === imagens.length - 1 ? 0 : num + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [imagens.length]);

  return (
    <Carousel className='verdade' selectedItem={imagemID}>
      {imagens.map((image, index) => (
        <div key={index}>
          <img src={image}/>
        </div>
      ))}
    </Carousel>
  );
};

export default Carrossel;