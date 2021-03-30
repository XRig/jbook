import reactDOM from 'react-dom'
import { useEffect } from 'react'
import 'bulmaswatch/superhero/bulmaswatch.min.css'
import {init} from './bundler'
//import CodeCell from './componants/codeCell'
import TextEditor from './componants/text-editor'


const App = () => {
useEffect(() =>{init()},[])
    return <div><TextEditor/></div>
}
reactDOM.render(<App />, document.querySelector('#root'))