import { useState } from 'react'
import CodeEditor from './code-editor'
import Preview from './preview'
import bundle from '../bundler'

interface Props {}

function CodeCell(props: Props) {
    const {} = props
    const [input, setInput] = useState<string>('')
    const [code, setCode] = useState<string>('')

    const onClick = async () => {
        const output = await bundle(input)
        setCode(output)
    }
    return (
    <div>
        <CodeEditor initialValue="" onChange={e => setInput((e && e) || '')} />

        <div>
            <button onClick={onClick}>Submit</button>
        </div>
        <Preview code={code} />
        </div>

    )
}

export default CodeCell
