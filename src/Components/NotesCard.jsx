import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

const NotesCard = ({ title, description, onDelete, id }) => {
   const { theme } = useContext(ThemeContext);

   return (
      <div
         className={
            theme === 'light'
               ? 'bg-white text-black p-4 rounded shadow'
               : 'bg-gray-800 text-white p-4 rounded shadow-md'
         }
      >
         <h2 className="text-xl font-bold mb-3 truncate">{title}</h2>
         <p className="text-base line-clamp-3 mb-5">{description}</p>
         <button
            onClick={() => onDelete(id)}
            className="bg-red-600 hover:bg-red-700 transition-colors duration-150 rounded-md px-4 py-2 text-white font-medium focus:outline-none focus:ring-2 focus:ring-red-400"
         >
            Delete
         </button>
      </div>
   );
};

export default NotesCard;
