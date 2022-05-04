export const SubmitButton = ({buttonClicked}) => {
  const handleClick = () => {
    buttonClicked()
  }
  return (
    <button onClick={handleClick}>
      Submit
    </button>
  )
}