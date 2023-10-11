import React, {ComponentType, FC, ReactElement} from 'react'
import {render, RenderOptions} from '@testing-library/react'
import {ThemeProvider} from '@material-ui/core'
import Theme from "../theme/theme";

const AllTheProviders: FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <ThemeProvider theme={Theme}>
    	{children}
    </ThemeProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AllTheProviders as ComponentType, ...options},)

export * from '@testing-library/react'
export {customRender as render}