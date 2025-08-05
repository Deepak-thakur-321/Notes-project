import { createContext, useState } from 'react';
// import { nanoid } from 'nanoid'

export const MyNotes = createContext();

export const MyNotesProvider = ({ children }) => {
   const [notes, setNotes] = useState(() => {
      const savedNotes = localStorage.getItem("notes")
      return savedNotes ? JSON.parse(savedNotes) : []
   });

   const [toggle, setToggle] = useState(false)


   return (
      <MyNotes.Provider value={{ notes, setNotes, toggle, setToggle, }}>
         {children}
      </MyNotes.Provider>
   );
};
