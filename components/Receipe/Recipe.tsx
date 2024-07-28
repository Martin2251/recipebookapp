import React from 'react'
import Image from 'next/image'
type Recipe={
    title:string,
    description:string,
    image:string,
    ingredients:string[]
}

export default function Recipe({title,description,image,ingredients}:Recipe) {
  return (
    <div className='flex flex-col'>
      <h3>{title}</h3>
      <p>{description}</p>
      <Image src={image} width={300} height={300} alt={title}  />
      <ul>
      {ingredients.map((ingredients) => (
        <li>{ingredients}</li>
      ))}
      </ul>
    </div>
  )
}
