import reactDOM from 'react-dom'
import { useEffect } from 'react'
import 'bulmaswatch/superhero/bulmaswatch.min.css'
import {init} from './bundler'
//import CodeCell from './componants/codeCell'
import TextEditor from './componants/text-editor'
import {Provider} from 'react-redux'
import {store} from './state'

const App = () => {
useEffect(() =>{init()},[])
    return (
        <Provider store = {store}>
    <div><TextEditor/></div>
    </Provider>
    
    )
}
reactDOM.render(<App />, document.querySelector('#root'))