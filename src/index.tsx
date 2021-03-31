import reactDOM from 'react-dom'
import { useEffect } from 'react'
import { init } from './bundler'
import { Provider } from 'react-redux'
import { store } from './state'
import CellList from './componants/cell-list'
import 'bulmaswatch/superhero/bulmaswatch.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

const App = () => {
    useEffect(() => { init() }, [])
    return (
        <Provider store={store}>
            <CellList />
        </Provider>

    )
}
reactDOM.render(<App />, document.querySelector('#root'))