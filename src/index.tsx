import reactDOM from 'react-dom'
import { useEffect } from 'react'
import 'bulmaswatch/superhero/bulmaswatch.min.css'
import {init} from './bundler'
import CodeCell from './componants/codeCell'


const App = () => {
useEffect(() =>{init()},[])
    return <div><CodeCell/></div>
}
reactDOM.render(<App />, document.querySelector('#root'))