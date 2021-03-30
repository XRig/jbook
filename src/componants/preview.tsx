import { useRef, useEffect } from 'react'

interface Props {
    code: string;
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

function Preview(props: Props) {
    const { code } = props
    const iframe = useRef<any>();

    useEffect(() => {
        iframe.current.srcdoc = html
        iframe.current.contentWindow.postMessage(code, '*')
    }, [code])


    return (
        <iframe title='preview' ref={iframe} sandbox="allow-scripts" srcDoc={html}></iframe>
    )
}

export default Preview
