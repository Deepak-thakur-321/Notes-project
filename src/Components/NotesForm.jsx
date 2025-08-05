import { useForm } from 'react-hook-form';
import { MyNotes } from '../Context/NotesContext';
import { useContext } from 'react';
import { nanoid } from 'nanoid';

const NotesForm = () => {

   const { register, handleSubmit, reset, formState: { errors }, } = useForm()

   const { notes, setNotes, setToggle, } = useContext(MyNotes)

   const onSubmitForm = (data) => {
      const newNote = {
         id: nanoid(),
         title: data.title,
         description: data.description,
      }
      const updatedNotes = [...notes, newNote]
      setNotes(updatedNotes)
      localStorage.setItem("notes", JSON.stringify(updatedNotes))
      setToggle(false)
      reset()
   }


   return (
      <div className="w-full max-w-lg mx-auto bg-white shadow-2xl p-8 rounded-2xl border border-gray-200">
         <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Add New Note</h2>
         <form onSubmit={handleSubmit(onSubmitForm)} className="flex flex-col gap-6">
            <div>
               <input
                  {...register("title", { required: "Please Fill Title" })}
                  type="text"
                  placeholder="Note Title"
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
               />
               {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
            </div>

            <div>
               <textarea
                  {...register("description", { required: "Please Fill Description" })}
                  placeholder="Write your note..."
                  rows="4"
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
               />
               {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
            </div>

            <button
               type="submit"
               className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold py-2 rounded-lg transition duration-300 shadow-md"
            >
               Add Note
            </button>
         </form>
      </div>

   );
};

export default NotesForm;
