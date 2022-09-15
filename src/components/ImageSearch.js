import React, { useState } from 'react'

const ImageSearch = ({searchText}) => {

    const [text, setText] = useState('');

    const changeInput = (e) => {
        setText(e.target.value)
    }


    const onSubmit = (e) => {
        e.preventDefault()
        searchText(text)
    
    }

  return (

            <div className='w-10/12 my-4 mx-auto flex justify-center items-center flex-col'>

                <form onSubmit={onSubmit}>
                    <div className='flex items-center my-4'>

                        <input  onChange={changeInput} className='border-2 h-10 w-50 border-green-500 rounded-sm outline-green-800 px-4 py-2'></input>
                        <button className='max-w-full h-10 bg-green-400 px-6 py-2 ml-2 rounded-sm text-white font-semibold '>SEARCH</button>
                    </div>
                </form> 


            </div> 

  )
}

export default ImageSearch
