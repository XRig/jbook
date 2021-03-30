import reactDOM from 'react-dom'
import { useEffect, useState, useRef } from 'react'
import * as esbuild from 'esbuild-wasm'
import { unpkgPathPlugin } from './plugins/unpkg-path-plugin';
import { fetchPlugin } from './plugins/fetch-plugin';
import CodeEditor from './componants/code-editor'
import 'bulmaswatch/superhero/bulmaswatch.min.css'

const App = () => {

    const ref = useRef<any>();
    const iframe = useRef<any>();
    const [input, setInput] = useState<string | undefined>('')

    const startService = async () => {
        await esbuild.initialize({
            worker: true,
            wasmURL: '/esbuild.wasm'
        });
        ref.current = true

    }

    useEffect(() => {
        startService();
    }, [])


    const onClick = async () => {
        if (!ref.current) {
            return
        }
        if (typeof input ==="string"){
            const result = await esbuild.build({
                entryPoints: ['index.js'],
                bundle: true,
                write: false,
                plugins: [
                    unpkgPathPlugin(),
                    fetchPlugin(input)
                ],
                define: {
                    'process.env.NODE_ENV': '"production"',
                    global: 'window'
                }
            })
    
            //setCode(result.outputFiles[0].text)
            iframe.current.srcdoc = html
            iframe.current.contentWindow.postMessage(result.outputFiles[0].text, '*')
    
        }
        
    }

    const html = `
    <html>
    <head></head>
    <body>
        <div id="root"></div>
        <script>
            window.addEventListener('message', (event => {
                try {
                eval(event.data);
                } catch(e) {
                    const root = document.querySelector('#root');
                    root.innerHTML = '<div style="color: red"><h4>Runtime Error</h4>' + e + '</div>'
                    console.error(e)
                }
            }))
        </script>
    </body>
    </html>
        `

    return <div>
        <CodeEditor initialValue="" onChange={e => setInput(e)} />
        
        <div>
            <button onClick={onClick}>Submit</button>
        </div>

        <iframe title='preview' ref={iframe} sandbox="allow-scripts" srcDoc={html}></iframe>


    </div>


}

reactDOM.render(<App />, document.querySelector('#root'))