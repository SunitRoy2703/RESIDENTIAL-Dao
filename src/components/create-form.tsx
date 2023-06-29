import GlobalStoreContext from '../stores'
import { useContext, useState } from 'react'

export default function CreateForm() {
  const { onCreate } = useContext(GlobalStoreContext)

  const [title, setTitle] = useState<string>('')

  const onSubmit = (e) => {
    e.preventDefault()
    onCreate(title, () => setTitle(''))
  }

  return (
    <form className="flex items-center space-x-4" onSubmit={onSubmit}>
      <input   
        className="form-input text-black"
        type="text"
        placeholder="Enter a new feature request?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  )
}
