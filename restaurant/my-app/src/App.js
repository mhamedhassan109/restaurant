
import Home from "./pages/Home"
import About from "./pages/About.jsx"
import OurMenu from "./pages/OurMenu.jsx"
import Contatct from "./pages/Contatct.jsx"
import {Data} from "./Data"
import { useState } from "react";
import {Routes,Route} from "react-router-dom"
import Layout from "./Componens/Layout.jsx"

function App() {

  // state api static data 

  const [getData,setgetData] = useState(Data)

  // start filter menu 

  const [searchValue,setsearchValue] = useState("")
  const [catogryOption,setcatogryOption] = useState("all")
  const buttoncatogry = ["all",...new Set(getData.map((btn)=>btn.catogry))]
  const [selectValue,setselectValue] = useState("default")

  const filtertionMenu = getData
  
  .filter((item)=>{

    const FilterSearch = searchValue.trim() === "" ? true
     : item.name.toLowerCase().includes(searchValue.toLowerCase())

    const filterCatogry = 
    catogryOption === "all" ? true : item.catogry === catogryOption

    return FilterSearch && filterCatogry

  })
  .sort((a,b)=>{
    if(selectValue === "default") {
      return 0
    } else if (selectValue === "Low") {
      return Number(a.price - b.price)
    } else if (selectValue === "High") {
      return Number(b.price - a.price)
    } else if (selectValue === "Name") {
      return a.name.localeCompare(b.name)
    }
  })

// end filter menu 



// start add item menu 
const [shoppingCart,setshoppingCart] = useState([])
const handlerADDItem = (item)=>{
  setshoppingCart([...shoppingCart,item])
 
}
// end add item menu 


// start delete item menu
  const deleteHandler = (indexitem)=>{
      setshoppingCart(shoppingCart.filter((_,index)=>index !== indexitem ))
  }
// end delete item menu


// start increment && decrement  Quantity 
  const handlerADDQuantity = (itemID)=>{
     const updet = shoppingCart.map((item)=>{
      return item.id === itemID ? {...item,Quantity:item.Quantity + 1} : item
     })
     setshoppingCart(updet)
  }

  const handlerdecrement = (itemID)=>{
    const updet = shoppingCart.map((item)=>{
       if(item.Quantity > 1 && item.id === itemID) {
        return {...item,Quantity:item.Quantity -1}
       } else {
        return item
       }
    })

    setshoppingCart(updet)
  }
// end increment && decrement  Quantity 

// start filter menu Home 
  const CatogryHome = [...new Set(getData.map((item)=>item.catogry))]
  const [ValuCatogry,setValuCatogry] = useState("all")
  
 const HandlerFilterHome = (cat)=>{
  
  setValuCatogry(cat)
   
 }

 const FilterHome = ValuCatogry === "all"  ? getData :  getData.filter((item)=>item.catogry === ValuCatogry)
// end filter menu Home 





 
  return (
    <div className="App">

       <Routes>

        <Route path="/" element={<Layout shoppingCart={shoppingCart} deleteHandler={deleteHandler}  handlerADDQuantity={handlerADDQuantity} handlerdecrement={handlerdecrement}/> }>

        <Route index element={ <Home CatogryHome={CatogryHome} HandlerFilterHome={HandlerFilterHome} FilterHome={FilterHome}/> }/>

        <Route path="/about" element={  <About/>}/>

        <Route path="/ourmenu" element={
       <OurMenu setsearchValue={setsearchValue} filtertionMenu={filtertionMenu} 
        buttoncatogry={buttoncatogry} catogryOption={catogryOption} setcatogryOption={setcatogryOption}
       setselectValue={setselectValue} 
       handlerADDItem={handlerADDItem}/> }/>

        <Route path="/contact" element={ <Contatct/> }/>

        </Route>
       </Routes>
       
    </div>
  );
}

export default App;
