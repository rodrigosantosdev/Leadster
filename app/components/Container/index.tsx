import React from 'react'
import { ContainerGrid } from "./style"

type Props = {
  children: React.ReactNode
}

export const Container = ({children}:Props) => {
  return (
    <ContainerGrid>
      {children}
    </ContainerGrid>
  )
}
