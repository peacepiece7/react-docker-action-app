import React from 'react'
import styles from './index.module.css'

type Props = {
  additionalCoverStyle?: React.CSSProperties
  additionalSpinnerStyle?: React.CSSProperties
}
export default function Spinner({ additionalCoverStyle, additionalSpinnerStyle }: Props) {
  // ! .spinner 라고 작송하니까 postcss에서 클레스를 찾지 못하는데 문제가 뭘까...?
  return (
    <aside
      className={styles.spinnerCover}
      style={additionalCoverStyle}
    >
      <div style={additionalSpinnerStyle}></div>
    </aside>
  )
}
