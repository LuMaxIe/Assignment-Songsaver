export const TextInput = (props) => {

  const handleOnChange = (text) => {
    props.updateText(text)
  }

  return (
    <div>
      <input 
      type={'text'} 
      placeholder={props.placeholder}
      onChange={(e) => handleOnChange(e.target.value)}
      />
    </div>
  )
}