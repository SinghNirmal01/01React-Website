import {createContext , useContext} from "react"

export const mainContext = createContext({
  cardTitle:"title",
  sayHi:()=>{}
})

export const MainProvider = mainContext.Provider

export default function useMain(){
  return useContext(mainContext)
}