import React from 'react'
import { Svg , Path , ClipPath , G , Rect , Defs } from 'react-native-svg';

function backButton() {
  return (
    <Svg width="44" height="44" viewBox="0 0 44 44" fill="none">
    <G clip-path="url(#clip0_8157_437)">
    <Path d="M27.8318 21.1656H18.5234L22.5901 17.099C22.9151 16.774 22.9151 16.2406 22.5901 15.9156C22.2651 15.5906 21.7401 15.5906 21.4151 15.9156L15.9234 21.4073C15.5984 21.7323 15.5984 22.2573 15.9234 22.5823L21.4151 28.074C21.7401 28.399 22.2651 28.399 22.5901 28.074C22.9151 27.749 22.9151 27.224 22.5901 26.899L18.5234 22.8323H27.8318C28.2901 22.8323 28.6651 22.4573 28.6651 21.999C28.6651 21.5406 28.2901 21.1656 27.8318 21.1656Z" fill="#616161"/>
    </G>
    <Defs>
    <ClipPath id="clip0_8157_437">
    <Rect width="20" height="20" fill="white" transform="translate(12 12)"/>
    </ClipPath>
    </Defs>
    </Svg>    
  )
}

export default backButton