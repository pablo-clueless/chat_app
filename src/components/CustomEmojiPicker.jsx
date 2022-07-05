import React from 'react'
import { useEmojiContext, useMessageInputContext } from 'stream-chat-react'

const CustomEmojiPicker = () => {
    const { Emoji, emojiConfig } = useEmojiContext();
    const { onSelectEmoji } = useMessageInputContext();
  
    const { emojiData } = emojiConfig || {};
    const customEmojis = ['fried_egg', 'croissant', 'bacon', 'waffle', 'pancakes', 'doughnut'];
  
    return (
      <div className='emoji-picker__wrapper'>
        {customEmojis.map((emoji) => (
          <Suspense fallback={null} key={i}>
            <Emoji onClick={onSelectEmoji} emoji={emoji} size={40} data={emojiData} />
          </Suspense>
        ))}
      </div>
    )
}

export default CustomEmojiPicker