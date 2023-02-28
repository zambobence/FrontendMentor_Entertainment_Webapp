import React, {useState, useEffect, useContext} from 'react'
import { AppContext } from '../context/AppContext'
import Card from './Card'
import SearchBar from './SearchBar'

function BookmarkedComponent() {

const { allData } = useContext(AppContext)

  const [searchTerm, setSearchTerm] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [innerData, setInnerData] = useState(allData.filter(e => e.isBookmarked))


useEffect(() => {
    setInnerData(allData.filter(e => e.isBookmarked))
    },[allData])



useEffect(()=> {
    setFilteredData(innerData.filter(e => e.title.toLowerCase().includes(searchTerm.toLowerCase())))
    },[searchTerm, innerData])


let results = filteredData.map((e, i) => <Card key={i} data={e} /> )

  return (
    <div className='container'>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} placeHolderText={'bookmarked shows'} />

        {searchTerm ? 
        <>
          <h1>Found {filteredData.length} results for '{searchTerm}'</h1>
          <div className='grid'>
            {results}
          </div>
        </>
        : 
        <>
        
            <h1>Bookmarked Movies</h1>
            <div className='grid'>
              {innerData.filter(e => e.category==='Movie').map((e, i) => <Card key={i} data={e} />)}
              </div>
                <h1>Bookmarked TV Series</h1>
              <div className='grid'>
              {innerData.filter(e => e.category==='TV Series').map((e,i) => <Card key={i} data={e} />)}
            </div>
        </>}
    </div>
  )
}

export default BookmarkedComponent