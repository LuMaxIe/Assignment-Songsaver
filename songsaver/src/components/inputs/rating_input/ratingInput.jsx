export const RatingInput = ({updateRating}) => {

  const handleChange = (rating) => {
    updateRating(Number(rating))
  }

  return (
    <div className="rating-input-container">
      <label>
        Song Rating
        <select onChange={(e) => handleChange(e.target.value)}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
      </label>
    </div>
  )
}