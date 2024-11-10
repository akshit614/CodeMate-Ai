
import { useEffect,useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { AxiosClient } from '../utils/axios'
import PlaceholderLoading from 'react-placeholder-loading'

const DashBoard = () => {

  type Data = {
    input: string
    _id : string
  }

  const [data, setData] = useState<Data[]>([])
  const [loading, setLoading] = useState(true)

  const fetchData = async() => {
    try {
      const res = await AxiosClient.get('/history')
      const data = await res.data
      setData(data)
      } catch (error : any) {
        console.log("Questions fetching error: " + error)
    }finally {
      setLoading(false)
    }
  }

  useEffect(() =>{
    fetchData()
  },[])
  
  return (
    <>
      <div className="prose">
        <h1 className='text-blue-900'>
          Welcome to Code Mate 👋
        </h1 >
        <h4 className ="px-9">Get your needed code snippets now with CodeMate !</h4>
      </div>
      <div>
        <h1 className='text-lg py-5'>Previous searched queries  </h1>
        <div className="flex flex-col  gap-y-4 ">
          {
          loading ? 
          <div>
          <PlaceholderLoading shape="rect" width={1000} height={30}/><br />
          <PlaceholderLoading shape="rect" width={1000} height={30}/><br />
          <PlaceholderLoading shape="rect" width={1000} height={30}/><br />
          <PlaceholderLoading shape="rect" width={1000} height={30}/><br />
          <PlaceholderLoading shape="rect" width={1000} height={30}/><br />
          <PlaceholderLoading shape="rect" width={1000} height={30}/><br />
          <PlaceholderLoading shape="rect" width={1000} height={30}/><br />
          <PlaceholderLoading shape="rect" width={1000} height={30}/><br />
          </div>
          :
            data && data.length>0 && data.slice().reverse().map((item,key) => {
              return <Link to={`/code/${item._id}`} key={key} className=' justify-between px-4 py-3 w-full border rounded-lg flex items-center'>
                <h1 className='font-bold'>{item.input}</h1>
                <button className='outline-none flex gap-x-2 items-center text-blue-600'>Read <FaArrowRight/></button>
                </Link>
            })
          }
        </div>
      </div>
    </>  
  )
}

export default DashBoard