import { useEffect } from 'react'
import PrismJs from 'prismjs'
import MarkDownIt from 'markdown-it'
import PlaceholderLoading from 'react-placeholder-loading'
import 'prismjs/plugins/toolbar/prism-toolbar.js'
import 'prismjs/plugins/toolbar/prism-toolbar.css'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js'

type MarkdownMessageProps = {
  input ?: string
  output : string
  isLoading ?: boolean
}

const MarkdownMessage = (props:MarkdownMessageProps) => {

  const md = new MarkDownIt()

  useEffect(()=>{
    PrismJs.highlightAll()
  },[])

  if (props.isLoading) {
    return <PlaceholderLoading shape='rect' width={500} height={60} />
  }

  return (
    <>
    <div className='px-8 py-10'>
      <div >{
        props.input && <h1 className='text-2xl font-bold'>Prompt : {props.input}</h1>
        }</div>
        <article
          className='prose max-w-full py-4'
          dangerouslySetInnerHTML={{__html:md.render(props.output)}}        
        >
        </article>
    </div>
    </>
  )
}

export default MarkdownMessage


