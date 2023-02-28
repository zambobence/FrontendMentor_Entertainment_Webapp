import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext'

function Card({data}) {
  const {title, year, isBookmarked, category, rating, thumbnail, id } = data
  const {toggleBookmark} = useContext(AppContext)

  return (
    <div className='card'>
      <div className='img-container'>
        <picture>
          <source media='(min-width: 999px)' srcSet={`${thumbnail.regular.large}`} />
          <source media='(min-width: 699px)' srcSet={`${thumbnail.regular.medium}`} />
          <img
            alt='card image'
            src={`${thumbnail.regular.small}`}
          />
        </picture>
        <div className='play-container'>
          <img src='/assets/icon-play.svg'className='play-icon'/>
          <p>Play</p>
        </div>
        <img  onClick={() => toggleBookmark(id)} 
              src={ isBookmarked ? '/assets/bookmark_full.png' : '/assets/bookmark_empty.png' } 
              alt={isBookmarked ? 'remove from bookmarks' : 'bookmark it'} 
              className='bookmark-icon' 
        />       
      </div>
      <div className='text-container'>
        <div className='info-line'>
          <p className='year'>
            {year}
          </p>
          <div className='type-container'>   
            <img  src={category === 'Movie' ? '/assets/icon-category-movie.svg' : '/assets/icon-category-tv.svg'} 
              alt='illustration-icon'
            />   
            <p className='type'>{category}</p>
          </div>
          <p className='rating'>{rating}</p>
        </div>
        <h3>{title}</h3>

      </div>
    </div>
  )
}

export default Card