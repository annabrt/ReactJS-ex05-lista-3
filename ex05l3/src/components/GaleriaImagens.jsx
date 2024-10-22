import React from 'react';

const GaleriaImagens = ({ urls }) => {
  return (
    <div>
      {urls
        .filter((url) => url) 
        .map((url, index) => (
          <img key={index} src={url} alt={`Imagem ${index + 1}`} style={{ width: '200px', margin: '10px' }} />
        ))}
    </div>
  );
};

export default GaleriaImagens;
