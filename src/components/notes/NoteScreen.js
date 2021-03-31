import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            
            <NotesAppBar/>

            <div className="notes__content">

                <input
                    type="text"
                    placeholder="soy un titulo"
                    className="notes__title-input"
                    autoComplete="off"
                />

                <textarea
                    placeholder="que paso hoy"
                    className="notes__textarea"
                >

                </textarea>

                <div className="notes__image">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5FSw41p9BvAnGnYr-qRkpYo40F9Li6ako_dE9Ig4AFqj5WFC4QnJXpIGClOl_r1s-QY8&usqp=CAU"
                        alt="cancha racing"
                    />
                </div>

            </div>

        </div>
    )
}
