import React from "react"
import { Show } from "./components/Show"
import { FilterForm } from "./components/FilterForm"
function App() {

  // const { mostrar } = useContext(PersonContext)

  return (
    <main className=''>
      <FilterForm />
      <Show />
    </main>
  )
}

export default App
