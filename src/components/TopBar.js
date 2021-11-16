import React, { useState, useEffect } from "react"

function TopBar(props) {
  return (
    <div className="top-wrap">
      <div>{props.copy}</div>
    </div>
  )
}

export default TopBar;
