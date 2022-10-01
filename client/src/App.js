import './App.css';
import Slider from './components/Carousel/Slider';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  const [product, setProduct] = useState([])
  useEffect(() => {
    const featchData = async() => {
      const {
        data: { products }
      } = await axios.get(`https://ecommerce-assienment.vercel.app/api/products`)
      setProduct(products)
    }
    featchData()
  }, [])
  return (
    <div className="App">
      <Navbar />
      <Slider product={product}/>
      <Products product={product}/>
    </div>
  );
}

export default App;
