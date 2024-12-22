import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function CrossButtom() {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
    >
      <G clipPath="url(#clip0_10402_961)">
        <Path
          d="M12.665 4.272l-.94-.94L8 7.059 4.272 3.332l-.94.94 3.727 3.727-3.727 3.726.94.94L7.999 8.94l3.726 3.726.94-.94L8.94 8l3.726-3.727z"
          fill="#F15927"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_10402_961">
          <Path fill="#fff" d="M0 0H16V16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default CrossButtom
