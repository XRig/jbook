import { useState, useEffect, useRef } from 'react'
import { useAction } from '../hooks/use-action'
import CodeEditor from './code-editor'
import Preview from './preview'
import bundle from '../bundler'
import Resizable from './resizable'
import { Cell } from '../state'

interface Props {
  cell: Cell
}

function CodeCell(props: Props) {
  const { cell } = props
  const bundleTimer = useRef<any>()
  const { updateCell } = useAction();
  const [code, setCode] = useState<string>('')
  const [error, setError] = useState<string>('')


  useEffect(() => {
    bundleTimer.current = setTimeout(async () => {
      const output = await bundle(cell.content)
      setCode(output.code)
      setError(output.error)
    }, 1000)

    return () => {
      clearTimeout(bundleTimer.current)
    }
  }, [cell.content])



  return (
    <Resizable direction="vertical">

      <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
        <Resizable direction="horizontal">
          <div style={{ width: '100%' }} >
            <CodeEditor initialValue={cell.content}
              onChange={value => updateCell(cell.id, value || ' ')}
            />
          </div>
        </Resizable>

        <Preview code={code} bundleError={error} />
      </div>
    </Resizable >
  );
};


export default CodeCell
