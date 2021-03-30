import { useEffect, useState } from 'react'
import './resizable.css'
const ResizableBox = require('react-resizable').ResizableBox


interface Props {
    direction: 'horizontal' | 'vertical'
    children?: any
}

function Resizable(props: Props) {
    const { direction, children } = props
    const [innerWidth, setInnerWidth] = useState(window.innerWidth)
    const [innerHeight, setInnerHeight] = useState(window.innerHeight)
    const [widthMultiplyer, setWidthMultiplyer] = useState(0.75)

    let timer: any;
    useEffect(() => {
        const listener = () => {
            if (timer) clearTimeout(timer)
            timer = setTimeout(() => {
                setInnerWidth(window.innerWidth)
                setInnerHeight(window.innerHeight)
            }, 100)
        }
        window.addEventListener('resize', listener)
        return () => {
            window.removeEventListener('resize', listener)
        }
    }, [])


    let resizableProps
    if (direction === 'vertical') {
        resizableProps = {
            height: 300,
            width: Infinity,
            resizeHandles: ['s'],
            maxConstraints: [Infinity, innerHeight * 0.9]
        }
    } else {
        resizableProps = {
            className: 'resize-horizontal',
            minConstraints: [innerWidth * 0.20, Infinity],
            maxConstraints: [innerWidth * 0.75, Infinity],
            height: Infinity,
            width: innerWidth* widthMultiplyer,
            resizeHandles: ['e'],
            onResizeStop: (event:any, data: any) => {
                setWidthMultiplyer(data.size.width / innerWidth)
            }
        }
    }

    return (
        <ResizableBox {...resizableProps}>{children}</ResizableBox>
    )
}
export default Resizable
