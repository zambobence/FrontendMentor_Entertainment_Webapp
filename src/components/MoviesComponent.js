import React, {useState, useEffect, useContext} from 'react'
import { AppContext } from '../context/AppContext'
import Card from './Card'
import SearchBar from './SearchBar'

function MoviesComponent() {

const { allData } = useContext(AppContext)

  const [searchTerm, setSearchTerm] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [innerData, setInnerData] = useState(allData.filter(e => e.category==='Movie'))


useEffect(() => {
    setInnerData(allData.filter(e => e.category ==='Movie'))
    },[allData])



useEffect(()=> {
    setFilteredData(innerData.filter(e => e.title.toLowerCase().includes(searchTerm.toLowerCase())))
    },[searchTerm, innerData])


let allMovies = innerData.map((e, i) => <Card key={i} data={e} />)
let results = filteredData.map((e, i) => <Card key={i} data={e} /> )

  return (
    <div className='container'>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} placeHolderText={'movies'} />

        {searchTerm ? <>
                        <h1>Found {filteredData.length} results for '{searchTerm}'</h1>
                        <div className='grid'>
                          {results}
                        </div>
                      </> : 
                      
                      <>
                        <h1>Movies</h1>
                        <div className='grid'>
                          {allMovies}
                        </div>
                      </>
          }
        </div>

  )
}

export default MoviesComponent