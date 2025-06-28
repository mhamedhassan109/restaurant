import Header from "../Componens/Header/Header"
import FilterForm from "../Componens/FilterForm/FilterForm"
import Menu from "../Componens/Menu/Menu"
import MenuHero from "../Assets/menuHero.png"


function OurMenu({setsearchValue,filtertionMenu,buttoncatogry ,catogryOption
  ,setcatogryOption,setselectValue,handlerADDItem}) {
  return (
    <> 
    
    <Header titlepage = "menu"  mainTitle="Signature Dishes" imgHero={MenuHero}/>


    <div className='OurMenu'>
      {/* section form */}
      <FilterForm setsearchValue={setsearchValue} buttoncatogry={buttoncatogry} catogryOption={catogryOption}
      setcatogryOption={setcatogryOption} setselectValue={setselectValue}/>

      {/* section menu */}
      <Menu filtertionMenu={filtertionMenu} handlerADDItem={handlerADDItem}/>
    </div>
    </>
  )
}

export default OurMenu