import React from 'react';




function  Rank({name,entries}){
    console.log( name);
    return (
        <div>
          <div className='white f3'>
              {`${name}, your current entry count...`}
          </div>
          <div className='white f1'>
              {entries}
          </div>
        </div>
    )
}


export default Rank;