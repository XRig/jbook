import reactDOM from 'react-dom'
import { useState, useEffect } from 'react'
import CodeEditor from './componants/code-editor'
import Preview from './componants/preview'
import 'bulmaswatch/superhero/bulmaswatch.min.css'
import bundle, {init} from './bundler'


const App = () => {
useEffect(() =>{init()},[])

    const [input, setInput] = useState<string>('')
    const [code, setCode] = useState<string>("")

    const onClick = async () => {
        const output = await bundle(input)
        setCode(output)
    }



    return <div>
        <CodeEditor initialValue="" onChange={e => setInput((e && e) || '')} />

        <div>
            <button onClick={onClick}>Submit</button>
        </div>
        <Preview code={code} />



    </div>


}

reactDOM.render(<App />, document.querySelector('#root'))