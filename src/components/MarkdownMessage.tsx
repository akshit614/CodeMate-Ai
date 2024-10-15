import React, { useEffect } from 'react'
import PrismJs from 'prismjs'
import MarkDownIt from 'markdown-it'
import PlaceholderLoading from 'react-placeholder-loading'

type MarkdownMessageProps = {
  ai_input ?: string
  ai_output : string
  isLoading ?: boolean
}

const MarkdownMessage = (props:MarkdownMessageProps) => {

  const md = MarkDownIt()

  useEffect(()=>{
    PrismJs.highlightAll()
  },[])

  if (props.isLoading) {
    return <PlaceholderLoading shape='rect' width={500} height={60} />
  }

  return (
    <div className='px-8 py-10'>
      <div >{
        props.ai_input && <h1 className='text-2xl font-bold'>Prompt : {props.ai_input}</h1>
        }</div>
        <article
          className='prose max-w-full py-4'
          dangerouslySetInnerHTML={{__html:md.render(props.ai_output)}}        
        >
        </article>
    </div>
  )
}

export default MarkdownMessage


