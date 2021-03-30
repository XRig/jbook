import React from 'react'
import './resizable.css'
const ResizableBox = require('react-resizable').ResizableBox


interface Props {
    direction: 'horizontal' | 'vertical'
    children?: any
}

function Resizable(props: Props) {
    const { direction, children } = props
    let resizableProps

    if (direction === 'vertical') {
        resizableProps = {
            height: 300,
            width: Infinity,
            resizeHandles: ['s'],
            maxConstraints: [Infinity, window.innerHeight * 0.9]
        }
    } else {
        resizableProps = {
            className: 'resize-horizontal',
            minConstraints: [window.innerWidth * 0.20,Infinity],
            maxConstraints: [window.innerWidth * 0.75,Infinity],
            height: Infinity,
            width: window.innerWidth * 0.75,
            resizeHandles: ['e'],
        }
    }



    return (
        <ResizableBox {...resizableProps}
        >
            {children}
        </ResizableBox>
    )
}

export default Resizable
