
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPeople, selectPerson } from '../../store/reducers/swapiSlice';
import PersonDetail from '../PersonDetail/index';
import "./index.scss"

const PeopleList = () => {

   const dispatch = useDispatch();


   const people = useSelector((state) => state.swapi.people);
   const status = useSelector((state) => state.swapi.status);
   const error = useSelector((state) => state.swapi.error);
   const selectedPerson = useSelector((state) => state.swapi.selectPerson)

   useEffect(() => {


      if (status === 'idle') {
         dispatch(fetchPeople());
      }
   }, [status, dispatch]);
 const handlePersonClick = (person) => {
         dispatch(selectPerson(person));

      }

   if (status === 'loading') {
      return <div>Loading...</div>;
   }


   if (status === 'failed') {
      return <div>{error}</div>;
   }

   return (
      <div>
         <ul>
            {people.map((person) => (
               <li key={person.name} onClick={() => handlePersonClick(person)}>
                  {person.name}
               </li>
            ))}
         </ul>
         {selectedPerson && <PersonDetail />}
      </div>
   );
};

export default PeopleList;
