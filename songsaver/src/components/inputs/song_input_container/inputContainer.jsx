import './inputContainer.css'
import { TextInput } from "../text_input/textInput";
import { RatingInput } from "../rating_input/ratingInput";
import { SubmitButton } from "../../buttons/submit_button/submitButton";

export const InputContainer = () => {
  return (
    <div className="input-container">
      <TextInput placeholder='Song Title' />
      <TextInput placeholder='Artist' />
      <TextInput placeholder='Genre' />
      <RatingInput />
      <SubmitButton />
    </div>
  )
}