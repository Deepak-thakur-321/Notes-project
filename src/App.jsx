import React from 'react'
import NotesForm from './Components/NotesForm'
import NotesCard from './Components/NotesCard';
import { useContext } from 'react';
import { MyNotes } from './Context/NotesContext';
import { ThemeContext } from './Context/ThemeContext';

const App = () => {

  const { toggle, setToggle, notes, setNotes, } = useContext(MyNotes)

  const { theme, toggleTheme } = useContext(ThemeContext)

  const handleDelete = (id) => {
    const updatedNotes = notes.filter(val => val.id !== id)
    setNotes(updatedNotes)
    localStorage.setItem(JSON.stringify(updatedNotes))
  }


  return (
    <div className={theme === 'light' ? 'bg-[#F9FAFB] text-gray-900 min-h-screen' : 'bg-[#1E1E2F] text-gray-100 min-h-screen'}>

      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Notes App</h1>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
        >
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>

        <div className='flex justify-between p-4'>
          <button onClick={() => setToggle(true)} className='p-4 bg-blue-600 px-4 py-2 rounded text-white text-lg cursor-pointer'>Add Note</button>
        </div>

      </header>

      {toggle ? (
        <div
          onClick={() => setToggle(false)}
          className='w-full h-full absolute top-0 left-0 bg-black bg-opacity-50 flex items-center justify-center'
        >
          <div onClick={(e) => e.stopPropagation()} className='bg-white p-6 rounded shadow-lg'>
            <NotesForm />
          </div>
        </div>
      ) : (<></>)}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 gap-6">
        {notes.map((note) => (
          <NotesCard key={note.id} id={note.id} title={note.title} description={note.description} onDelete={handleDelete} />

        ))}
      </div>

    </div>

  )
}

export default App