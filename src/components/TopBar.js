import React from "react"

function TopBar(props) {
  return (
    <div className="top-wrap">
      <div>{props.copy}</div>
    </div>
  )
}

export default TopBar;
