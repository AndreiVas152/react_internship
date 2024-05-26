import React from 'react'
import logo from 'src/Assets/coursesLogo.png'

interface Props{
    imageUrl?: string
}

export default function Logo ({imageUrl}: Props) {
    return (
        <img style={{height: 48, width: 110}} src={imageUrl? imageUrl : logo} alt={'Logo'}></img>
    )
}