import GaleriaImagens from './components/GaleriaImagens'
import './App.css'

const App = () => {
  const urls = [
    'https://th.bing.com/th/id/OIP.Z6tGEfa3t6ya5y79n5UBvgHaEK?rs=1&pid=ImgDetMain',
    '',
    'https://i.ytimg.com/vi/lhfqmvofr7g/maxresdefault.jpg',
    null,
    'https://blog.jamboeditora.com.br/wp-content/uploads/2023/07/afogamentoop3.jpg',
  ];

  return (
    <div>
      <h1>Galeria de Imagens RPG</h1>
      <GaleriaImagens urls={urls} />
    </div>
  );
};

export default App;
