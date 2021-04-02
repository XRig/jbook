import { useState, useEffect, useRef } from 'react'
import { useAction, useTypedSelector } from '../hooks'
import CodeEditor from './code-editor'
import Preview from './preview'
//import bundle from '../bundler'
import Resizable from './resizable'
import { Cell } from '../state'

interface Props {
  cell: Cell
}

function CodeCell(props: Props) {
  const { cell } = props
  const bundleTimer = useRef<any>()
  const { updateCell, createBundle } = useAction();
  const bundle = useTypedSelector((state)=>state.bundles[cell.id])
console.log(bundle)


  useEffect(() => {
    bundleTimer.current = setTimeout(async () => {
      createBundle(cell.id, cell.content)
    }, 2000)

    return () => {
      clearTimeout(bundleTimer.current)
    }
  }, [cell.content, cell.id])



  return (
    <Resizable direction="vertical">

      <div
        style={{
          height: 'calc(100% - 10px)',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Resizable direction="horizontal">
          <div style={{ width: '100%' }} >
            <CodeEditor initialValue={cell.content}
              onChange={value => updateCell(cell.id, value || ' ')}
            />
          </div>
        </Resizable>

        {bundle && <Preview code={bundle.code} bundleError={bundle.error} />}
      </div>
    </Resizable >
  );
};


export default CodeCell
