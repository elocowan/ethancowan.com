import React from 'react';

export default function Header(props) {
  console.log(props)
  return (
    <h1>{props.headerText}</h1>
  )
}