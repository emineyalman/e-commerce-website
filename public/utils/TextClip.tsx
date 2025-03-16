import React from 'react'

const textClip = (text:string) => {
  return text.substring(0, 15) + "...";
}

export default textClip