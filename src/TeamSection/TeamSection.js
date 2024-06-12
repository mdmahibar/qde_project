import React from 'react';
import '../TeamSection/TeamSection.css';
import Box from '../Box/Box';

const TeamSection = (props) => {
  return (
    <div>
        <div>
            <h1>{props.heading}</h1>
        </div>
        <div className='box'>
            {props.members.map((memeber, index) =>  <Box key={index} title={memeber.title} image={memeber.image} name={memeber.name} education={memeber.education} experience={memeber.experience} about={memeber.about} />)}
        </div>
    </div>
  )
}

export default TeamSection;