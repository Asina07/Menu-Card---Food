import {useEffect, useState} from 'react';
import Hero from './Hero';
import SpecialDishes from './SpecialDishes';


function Menus() {
    let [menu,setmenu] = useState([])
  
//get all menu
async function getAllMenus(){
      const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
      let response = await fetch(API_URL)
      let data = await response.json()  // chnge to json formate
        setmenu(data.meals)
    }
    console.log('Menus are',menu)
    useEffect(()=>{
      getAllMenus()
    },[])

    
    // let menuImages = menu.map((item)=>{
    //   console.log(item.strMealThumb)
    //   return(
        
    //       <img src={item.strMealThumb} alt='img' />
       
    //   )
    // })

    return(
      <div>
        <Hero/>
        <SpecialDishes specialMenu={menu}/>
      </div>
    )
  
    };

   


export default Menus;