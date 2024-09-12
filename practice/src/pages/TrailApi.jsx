import React from 'react'

const TrailApi = () => {

   async function dataApi() {
    let res = await fetch('https://dummyjson.com/products')
    let data = await res.json()
    console.log(data)
   }

  return (
    <div>
      
    </div>
  )
}

export default TrailApi
