import React from 'react'
import Button from './Button'
import Card from './Card'
import styles from './Modal.module.css'

export default function Modal(props) {
  return (
    <div className={styles.backdrop} onClick={props.onConfirm}>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.errorMessage}</p>
        </div>
        <footer className={styles.actions}>
          <Button onCLick={props.onConfirm}>Okay!</Button>
        </footer>
      </Card>
    </div>
  )
}
