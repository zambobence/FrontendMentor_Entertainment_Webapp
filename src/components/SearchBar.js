import React from 'react'

function SearchBar({searchTerm, setSearchTerm, placeHolderText}) {
  return (
    <div className='searchBarComponent'>      
        <img src={process.env.PUBLIC_URL + '/assets/icon-search.svg'} className='searchbar-icon'/><input type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder={`Search for ${placeHolderText}`}/>
    </div>
  )
}

export default SearchBar