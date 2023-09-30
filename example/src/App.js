import React, { useState } from 'react'
import { Modal } from 'modal_react_plugin_p14'
import 'modal_react_plugin_p14/dist/index.css'

const App = () => {
  const [displayModal, setDisplayModal] = useState(false)

  return (
  <>
      <Modal display={displayModal} onClose={()=>{setDisplayModal(false)}}>
          This is a modal
      </Modal>
      <button onClick={() => setDisplayModal(true)}> Open modal </button>
  </>)
}

export default App
