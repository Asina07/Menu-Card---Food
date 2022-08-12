import React from 'react'

function SpecialDishes(props) {
  console.log('prpos are',props)
 
  console.log("spMenu",props.specialMenu)
  let SpecialMenu = props.specialMenu.map((menuitem)=>{
    return(
     
        <li>
          <img src={menuitem.strMealThumb} alt='imgg'/>
          <h4>{menuitem.strMeal}</h4>
        </li>
     
    )
  })




  return (
    <section className='special-dishes'>
        <div className='container'>
            <div className='special-dishes-content'>
                <h2>Our Special Dishes</h2>
                <p>Check out our list of Tuesday restaurant specials in Cape Town. Burgers, pizzas, pastas and more - we've got your Tuesday brekkie, dinner and lunch sorted!</p>
            </div>
            <div className='special-dishes-list'>
             <ul className='flex flex-wrap gap-20'>
               {SpecialMenu}
              </ul>
            </div>
        </div>
        
    </section>
  )
}

export default SpecialDishes