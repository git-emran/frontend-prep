'use client'
import { useState } from "react"

function RecursiveFileTree({ handleInsertNode = () => { }, explorer }) {


  const [isOpen, setIsOpen] = useState(false)
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null
  })

  const handleInput = (e, isFolder) => {
    e.stopPropagation()
    setIsOpen(true)
    setShowInput({
      visible: true,
      isFolder
    })
  }

  const addFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder)
      setShowInput({ ...showInput, visible: false })
    }
  }

  if (explorer.isFolder) {

    return (
      <div>
        <div>
          <div onClick={() => setIsOpen(!isOpen)} style={{ padding: '2px', display: 'flex', flexDirection: 'row', gap: '6px' }}>
            <span>
              📁 {explorer.name}
            </span>
            <div style={{ marginLeft: "5px", paddingLeft: "4px" }}>
              <button onClick={(e) => handleInput(e, true)} >Folder</button>
              <button onClick={(e) => handleInput(e, false)}>File</button>
            </div>
          </div>
          {showInput.visible && (
            <div>
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input type="text" onBlur={() => setShowInput({ ...showInput, visible: false })} onKeyDown={addFolder} autoFocus />
            </div>
          )}
        </div>

        <div>
          {explorer.items.map((item) => {
            return (
              <div key={item.id} style={{ display: isOpen ? "block" : "none", marginLeft: "20px" }}>
                <RecursiveFileTree handleInsertNode={handleInsertNode} explorer={item} />
              </div>
            )

          })}
        </div>
      </div>
    )
  } else {

    return (
      <div>
        <span>📄 {explorer.name}</span>
      </div>
    )
  }
}

export default RecursiveFileTree
