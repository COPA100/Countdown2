function GenreSelector({ genres, selectedGenre, onSelectGenre }) {
  return (
    <div className="genre-buttons">
      {genres.map((genre) => (
        <button
          key={genre}
          type="button"
          className={genre === selectedGenre ? 'active' : ''}
          onClick={() => onSelectGenre(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  )
}

export default GenreSelector
