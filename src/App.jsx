import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import { Vision } from './pages/Vision'
import Products from './pages/Products'

function App() {
  const [data, setData] = useState([])

  const getData = async()=>{
    let flowerData = await fetch(`https://perenual.com/api/species-list?key=${import.meta.env.VITE_FLOWER_API}&indoor=1`)
    flowerData = await flowerData.json()
    console.log(flowerData.data[0]['default_image']['small_url']);
    setData(flowerData.data)
  }
  console.log(data);

  useEffect(()=>{
    getData()
  },[])

  return (
    <div className='h-screen'>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products data={data}/>}/>
          <Route path='/contact' element={<Contact data={data}/>}/>
          <Route path='/vision' element={<Vision/>}/>
        </Routes>
    </div>
  )
}

export default App
