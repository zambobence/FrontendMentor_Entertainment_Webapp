import React, {useState, useEffect, useContext} from 'react'
import { AppContext } from '../context/AppContext'
import Card from './Card'
import SearchBar from './SearchBar'

function SeriesComponent() {

const { allData } = useContext(AppContext)

  const [searchTerm, setSearchTerm] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [innerData, setInnerData] = useState(allData.filter(e => e.category==='TV Series'))


useEffect(() => {
    setInnerData(allData.filter(e => e.category==='TV Series'))
    },[allData])



useEffect(()=> {
    setFilteredData(innerData.filter(e => e.title.toLowerCase().includes(searchTerm.toLowerCase())))
    },[searchTerm, innerData])


let allMovies = innerData.map(e => <Card data={e} />)
let results = filteredData.map(e => <Card data={e} /> )

  return (
    <div className='container'>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} placeHolderText={'TV Series'} />
        {searchTerm ? <>
                        <h1>Found {filteredData.length} results for '{searchTerm}'</h1>
                        <div className='grid'>
                          {results}
                        </div>
                      </> : 
                      
                      <>
                        <h1>TV Series</h1>
                        <div className='grid'>
                          {allMovies}
                        </div>
                      </>}
        </div>
  )
}

export default SeriesComponent