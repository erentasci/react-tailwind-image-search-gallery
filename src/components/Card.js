import React from 'react'

const Card = ({image}) => {

    const tags = image.tags.split(",");


  return (

        <div className='max-w-sm rounded overflow-hidden shadow-lg bg-gray-100 px-4 py-6'>
                <img src={image.webformatURL} alt='' className='w-full'/>
                <div className='px-2 py-2' >
                <div className='font-bold text-green-800 text-sm text-center mx-2 my-2'>Photo By Director</div>
                </div>

                <ul>
                <li>
                    <strong>Views: </strong>
                    {image.views}
                </li>
                <li>
                    <strong>Downloads </strong>
                    {image.downloads}
                </li>
                <li>
                    <strong>Likes </strong>
                    {image.likes}
                </li>
                </ul>

                <div className='px-2 py-2 flex flex-row flex-wrap '>

                {tags.map( (tag,index) => {
                    return (
                    <span key={index} className='className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mx-2 my-2'>
                        {tag}
                    </span>
                            
                    )
                })

                }
                

                </div>

        </div> 
      
  )
}

export default Card
