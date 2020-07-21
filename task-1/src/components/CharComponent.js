import React from 'react'

const CharCompnent = (props) => {
    
    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
      };

    return (
        <div className="CharComponent" onClick={props.delete} style={style}>
            {props.children}
        </div>
    )


}

export default CharCompnent;