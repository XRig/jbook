import { useRef, useEffect } from 'react'
import './preview.css'
interface Props {
    code: string;
}
const html = `
    <html>
    <head>
    <style>html {background-color:white;}</style>
    </head>
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

function Preview(props: Props) {
    const { code } = props
    const iframe = useRef<any>();

    useEffect(() => {
        iframe.current.srcdoc = html
        const timer = setTimeout(() => {
            iframe.current.contentWindow.postMessage(code, '*')
        }, 50)
        return () => {
            clearTimeout(timer)
        }
    }, [code])


    return (
        <div className="preview-wrapper">
            <iframe title='preview' ref={iframe} sandbox="allow-scripts" srcDoc={html}></iframe>
        </div>
    )
}

export default Preview
