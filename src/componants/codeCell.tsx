import { useState, useEffect, useRef } from 'react'
import CodeEditor from './code-editor'
import Preview from './preview'
import bundle from '../bundler'
import Resizable from './resizable'


function CodeCell() {
  const bundleTimer = useRef<any>()
  const [input, setInput] = useState<string>('')
  const [code, setCode] = useState<string>('')
  const [error, setError] = useState<string>('')


  useEffect(() => {
    bundleTimer.current = setTimeout(async () => {
      const output = await bundle(input)
      setCode(output.code)
      setError(output.error)
    }, 1000)

    return () => {
      clearTimeout(bundleTimer.current)
    }
  }, [input])



  return (
    <Resizable direction="vertical">

      <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
        <Resizable direction="horizontal">
          <div style={{ width: '100%' }} >
            <CodeEditor initialValue="const a = 1;" onChange={e => setInput((e && e) || '')} />
          </div>
        </Resizable>

        <Preview code={code} bundleError={error} />
      </div>
    </Resizable >
  );
};


export default CodeCell
