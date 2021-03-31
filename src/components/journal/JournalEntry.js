import React from 'react'

export const JournalEntry = () => {
    return (
            <div className="journal__entry">

                <div 
                    className="journal__entry-picture"
                    style={{
                        backgroundSize: 'cover',
                        backgroundImage : 'url(https://pbs.twimg.com/profile_images/1334839136214274051/5iIZ8yOl.jpg)'
                    }}
                ></div>

                <div className="journal__entry-body">
                    <p className="journal__entry-title">
                        HOlis
                    </p>
                    <p className="journal__entry-content">
                        Lorem ipsum
                    </p>
                </div>

                <div className="journal__entry-date-box">
                    <span>Lunes</span>
                    <h4>29</h4>
                </div>

            </div>
        
    )
}
