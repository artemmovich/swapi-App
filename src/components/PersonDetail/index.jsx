import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPerson } from '../../store/reducers/swapiSlice';
import "./index.scss"
const PersonDetail = () => {
   const person = useSelector((state) => state.swapi.selectedPerson)
   const dispatch = useDispatch();
   if (!person) {
      return null;
   }

   const handleClose = () => {
      dispatch(selectPerson(null))
   };

   return (
      <div className="person-detail">
        <div className="person-detail-content">
          <h2>{person.name}</h2>
          <p><strong>Height:</strong> {person.height}</p>
          <p><strong>Mass:</strong> {person.mass}</p>
          <p><strong>Hair Color:</strong> {person.hair_color}</p>
          <p><strong>Skin Color:</strong> {person.skin_color}</p>
          <p><strong>Eye Color:</strong> {person.eye_color}</p>
          <p><strong>Birth Year:</strong> {person.birth_year}</p>
          <p><strong>Gender:</strong> {person.gender}</p>
          <button onClick={handleClose}>Close</button>
        </div>
      </div>
    );
}

export default PersonDetail;