import { useState } from "react"
import "style.css"

function IndexPopup() {
  const [data, setData] = useState("")
  return (
    <div className="popup-container">
      <div className="header">
        <h2>Welcome to the LeetCode Gulag</h2>
        <div className="prompt">
        <h3>Welcome to your daily dose of LeetCode</h3>
      </div>
      </div>
    </div>
  )
}

export default IndexPopup
