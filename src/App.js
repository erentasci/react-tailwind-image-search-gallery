import { useEffect, useState} from 'react';
import './App.css';
import Card from './components/Card';
import ImageSearch from './components/ImageSearch';


function App() {


  const API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;


  const [images, setImages] = useState([]);
  const [term, setTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);


  const searchText = (text) => {
    setTerm(text)
  }

  useEffect( () => {

    fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then( (res) => res.json() )
    .then( (data) => {
      setImages(data.hits)
      setIsLoading(false);
      }
    )
    .catch( (err) => console.log(err))
  },[term]);


  return (
    <div className="container mx-auto px-4">

        <ImageSearch  searchText={searchText}  />

        {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1> }


       <div className='max-w-full min-h-screen grid grid-cols-3 gap-4' >

          {
            images.map( (image) => {
              return (
                <Card key={image.id} image={image} />
              )
            })
          }


      </div>     


    </div>
  );
}

export default App;
