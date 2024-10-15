import { useEffect, useState } from 'react'
import MarkdownMessage from '../Components/MarkdownMessage'
import { AxiosClient } from '../utils/axios'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'

export const PreviousCodePage = () => {
  
  const [loading,setLoading] = useState(true)
  type Data ={
  input:string,
  output:string
  }
const [data,setData] = useState<Data>({
 
  input:'',
  output:''
})
const params= useParams<{id:string}>()


const fetchData = async()=>{
  
  const request = await AxiosClient.get("/code/"+params.id)
  const data = await request.data;
  console.log(data);
  
  setData(data)
  setLoading(false)
}

useEffect(()=>{
  fetchData()
},[])

if(loading){
  return <LoaderComponent/>
}
  return (
    <>
          <div className="mb-4">
           <h1 className="font-bold text-3xl">
            {data.input}
           </h1>

           <div className="py-10">
            <MarkdownMessage output={data.output} />
           </div>
          </div>
    </>
  )
}

