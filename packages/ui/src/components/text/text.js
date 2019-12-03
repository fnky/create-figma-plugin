/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import '../../scss/base.scss'
import styles from './text.scss'

export function Text ({ bold: isBold, muted: isMuted, ...rest }) {
  return (
    <div
      {...rest}
      class={classnames(
        styles.text,
        isBold === true ? styles.isBold : null,
        isMuted === true ? styles.isMuted : null
      )}
    />
  )
}
