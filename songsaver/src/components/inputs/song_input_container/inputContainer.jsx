import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addSong } from '../../../redux/actions';
import './inputContainer.css';
import { TextInput } from "../text_input/textInput";
import { RatingInput } from "../rating_input/ratingInput";
import { SubmitButton } from "../../buttons/submit_button/submitButton";

export const InputContainer = () => {
  const dispatch = useDispatch();

  const [songTitle, setSongTitle] = useState('');
  const updateSongTitle = title => {
    setSongTitle(title);
  }

  const [songArtist, setSongArtist] = useState('');
  const updateArtist = artist => {
    setSongArtist(artist);
  }

  const [songGenre, setSongGenre] = useState('');
  const updateGenre = genre => {
    setSongGenre(genre);
  }

  const [songRating, setSongRating] = useState(1)
  const updateRating = rating => {
    setSongRating(rating);
  }

  const handleSubmit = () => {
    dispatch(addSong({songTitle, songArtist, songGenre, songRating}))
  }

  return (
    <div className="input-container">
      <TextInput placeholder='Song Title' updateText={updateSongTitle} />
      <TextInput placeholder='Artist' updateText={updateArtist} />
      <TextInput placeholder='Genre' updateText={updateGenre} />
      <RatingInput updateRating={updateRating}/>
      <SubmitButton buttonClicked={handleSubmit}/>
    </div>
  )
}