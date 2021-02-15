import React, { useState } from 'react'
import { titleToId } from '../utils/titleToId';

export default function Header(props) {
    const title = props.headerText ; 
    const id = titleToId(title) ; 
    return <h1 id={id}>{title}</h1>
}