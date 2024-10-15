// import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { HiArrowCircleUp } from 'react-icons/hi'
import { IoPauseSharp } from 'react-icons/io5'
import MarkdownMessage from '../components/MarkdownMessage'

const CodingPage = () => {
  
  const [loading, setLoading] = useState(false)
  const [prompt, setPrompt] = useState("")
  const [data, setData] = useState({
    ai_input : '',
    ai_output : '',
  })

  const onSubmitHandler = async () => {

    setLoading(true)
    try {
      const req = await axios.post('http://localhost:2300/api/v1/generate/', {input : prompt});
      const data = await req.data;
      console.log("Form Submitted with prompt :" + {prompt});
      
      setPrompt('')
      setData({
        ai_input : data.ai_input,
        ai_output : data.ai_output,
      })
      
    } catch (error : any) {
      console.log("Error", error.message);
        
    }finally {}
    setLoading(true)
    
  } 


  return (
    <>
    <form onSubmit={onSubmitHandler} className='px-8'>
      <textarea onChange={(e) => setPrompt(e.target.value)} className='py-4 px-4 border w-full rounded-lg' placeholder='Ask whatever...' rows={4}/>
      <button  disabled={loading} className='rounded-full hover:bg-yellow-200 hover:shadow-[0_0_10px_3px_rgba(255,255,0,1)]'>
      {
        loading ? 
        <IoPauseSharp className='text-5xl' /> : <HiArrowCircleUp className=' text-5xl '/>
      }
      </button>
    </form>
    <MarkdownMessage {...data} isLoading={loading} />
    </>
  )
}

export default CodingPage