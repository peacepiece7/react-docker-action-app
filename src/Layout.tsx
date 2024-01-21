import React from 'react'
import styles from './Layout.module.css'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return <main className={styles.lo}>{children}</main>
}
