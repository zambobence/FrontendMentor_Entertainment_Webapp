import React, {useState, createContext, useEffect} from 'react'
import data from '../data'



const AppContext = createContext()

function AppContextProvider({children}) {


 

    const [allData, setAllData] = useState(data)
    useEffect(()=>{console.log(allData)},[allData])


    const toggleBookmark = (id) => {
        console.log(id)
       setAllData(prevState => prevState.map(e => e.id === id ? {...e, isBookmarked: !e.isBookmarked} : e))
    }

  return (
    <AppContext.Provider value={{allData, toggleBookmark}}>
        {children}
    </AppContext.Provider>

  )
}

export {AppContext, AppContextProvider}