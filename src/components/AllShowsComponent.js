import React, {useState, useEffect, useContext} from 'react'
import { AppContext } from '../context/AppContext'
import Card from './Card'
import SearchBar from './SearchBar'

function AllShowsComponent() {

const { allData } = useContext(AppContext)

  const [searchTerm, setSearchTerm] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [innerData, setInnerData] = useState(allData)


useEffect(() => {
    setInnerData(allData)
    },[allData])



useEffect(()=> {
    setFilteredData(innerData.filter(e => e.title.toLowerCase().includes(searchTerm.toLowerCase())))
    },[searchTerm, innerData])


let allMovies = innerData.map((e, i) => <Card key={i} data={e} />)
let results = filteredData.map((e, i) => <Card key={i} data={e} /> )
let trending = innerData.filter((e) => e.isTrending).map((e, i) => <Card key={i} data={e} />) 

  return (
    <div className='container'>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} placeHolderText={'movies or TV series'} />
        {searchTerm ? <>
                        <h1>Found {filteredData.length} results for '{searchTerm}'</h1>
                        <div className='grid'>
                          {results}
                        </div>
                      </> : 
                      
                      <>
                      <h1>
                        Trending
                      </h1>
                        <div className='trending-slider'>
                          {trending}
                        </div>
                        <h1>Recommended for you</h1>
                        <div className='grid'>
                          {allMovies}
                        </div>
                      </>}
    </div>
  )
}

export default AllShowsComponent