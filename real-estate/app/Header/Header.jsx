import React from 'react'
import styled from "@emotion/styled";
import Image from "next/image";

const MiniTitle = styled.p`

`

const Title = styled.h1`
   text-transform: capitalize;
`

function Header() {
  return (
    <div>
        <MiniTitle>Welcome to Realstate</MiniTitle>
        <Title>manage your property</Title>
    </div>
  )
}

export default Header
