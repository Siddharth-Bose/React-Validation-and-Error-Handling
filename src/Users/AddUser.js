import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Modal from '../UI/Modal';
import styles from './AddUser.module.css'

export default function AddUser(props) {
    const [enteredUsername, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const[error, setError]=useState();
    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({title:'invalid Input',message: 'Please enter a valid name and age (non-empty age)'})
            return;
        }
        if (+enteredAge < 1) {
            setError({title:'invalid Input',message: 'Please enter a valid name and age (non-empty age)'})
            return;
        }
        props.onAddUser(enteredUsername, enteredAge)
        setEnteredAge('')
        setEnteredUserName('')
    }
    const usernameChangeHandler = (event) => {
        setEnteredUserName(event.target.value)
        console.log(enteredUsername);
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
        console.log(enteredAge);
    }
    const errorHandler=()=>{
        setError(null)
    }
    return (
        <>
            {error &&<Modal title={error.title} errorMessage={error.message} onConfirm={errorHandler}/>}
                <Card className={styles.input}>
                    <form onSubmit={addUserHandler}>
                        <label htmlFor="username">Username</label>
                        <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
                        <label htmlFor="age">Age (in Years)</label>
                        <input id="username" type="number" value={enteredAge} onChange={ageChangeHandler} />
                        <Button type="Submit">Add User</Button>
                    </form>
                </Card>
            </>
            )
}
