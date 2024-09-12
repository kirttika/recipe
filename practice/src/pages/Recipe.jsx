import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Recipe = () => {
      
  let searchRef = useRef()
    const [recipes, setrecipes] = useState([]);
    const [searchItem, setsearchItem] = ('pizaa')
    console.log(recipes);
    

    const getAllRecipe = async()=>{
        let res = await fetch('https://api.edamam.com/search?q=${searchItem}&app_id=26191d65&app_key=f77ae1b0c4f48d6ee1e88cc38426e90f')

        let data = await res.json()

        console.log(data.hits);
        setrecipes(data.hits)
    }

    //getAllrecipe()
    
    useEffect(()=>{
        getAllRecipe()

    },[searchItem])

    const handleSearch = (e)=>{
      e.preventDefault()
      let value = searchRef.current.value;
      console.log(value);
      setsearchItem(value)
      
    }
    
  return (
    <div> 
      <form className="d-flex w-50 m-auto my-3 border border-danger" role='search'>
        <input ref={searchRef} className='form-control me-2' type='search' placeholder='search' aria-label='search'/>
        <button onClick={handleSearch} className='btn btn-outline-success' type='submit'> Search</button>
      </form>
       <div className='row m-0 p-0 justify-content-center gap-3 container m-auto bg-warning mt-3'>

      {recipes.map((ele)=>{
        return <div className="card" style={{width: '18rem'}}>
  <img src={ele.recipe.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{ele.recipe.lable}</h5>
    {/*<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>*/}
   

    <Link to ='/view' state={ele} className='btn btn-primary'>view recipe</Link>
  </div>
</div>

        

      })}

      </div>
    </div>
  )
}

export default Recipe
