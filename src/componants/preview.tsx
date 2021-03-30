import { useRef, useEffect } from 'react'
import './preview.css'
interface Props {
    code: string;
    bundleError: string;
}
const html = `
    <html>
    <head>
    <style>html {background-color:white;}</style>
    </head>
    <body>
        <div id="root"></div>
        <script>
        const handleError = (error) => {
            const root = document.querySelector('#root');
                root.innerHTML = '<div style="color: red"><h4>Runtime Error</h4>' + error + '</div>'
                console.error(error)
        }
            window.addEventListener('error', (event) => {
                event.preventDefault()
                handleError(event.error)
            });
            window.addEventListener('message', (event => {
                try {
                eval(event.data);
                } catch(e) {
                    handleError(e)
                }
            }))
        </script>
    </body>
    </html>
        `

function Preview(props: Props) {
    const { code, bundleError } = props
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
        <div className="preview-error">{bundleError}</div>
        </div>
    )
}

export default Preview
