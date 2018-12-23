import React from 'react'
export const context = React.createContext()
export const Provider = context.Provider
export const connect = Com => {
  return () => (
    <context.Consumer>
      {value => {
        return <Com value={value} />
      }}
    </context.Consumer>
  )
}
