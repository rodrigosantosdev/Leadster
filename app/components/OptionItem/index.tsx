import React from 'react'
import { OptionFilterWrapper } from "./style"

type OptionsProps = {
  bgColor?: string
  border?: string
  textColor?: string
  children?: React.ReactNode
}

export const OptionItem = ({ 
  bgColor = "", 
  border = "",
  textColor = "", 
  children }: 
  OptionsProps) => {
  return (
    <OptionFilterWrapper
      bgColor={bgColor}
      border={border}
      textColor={textColor}
    >
      {children}
    </OptionFilterWrapper>
  )
}
