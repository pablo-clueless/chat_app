import React, { useEffect, useRef } from 'react'
import data from '@emoji-mart/data'
import { Picker } from 'emoji-mart'

const CustomEmojiPicker = () => {
  const ref = useRef()

  useEffect(() => {
    new Picker({data, ref})
  },[])
    return (
      <div ref={ref} />
    )
}

export default CustomEmojiPicker