import React from 'react';
import PropTypes from 'prop-types';
import './HobbyList.css';
HobbyList.propTypes = {
    hobbyList: PropTypes.array,
    activeId: PropTypes.number,
};
HobbyList.defaultProps={
    hobbyList: [],
    active: null
}
function HobbyList(props) {
    const {hobbyList, activeId, onHobbyClick}=props;
    const handleClick=(hobby)=>{
        return ()=>{
            if(onHobbyClick){
                onHobbyClick(hobby);
            }
        }
    }
    return (
        <div>
            <ul className="hobby-list">
                {
                    hobbyList.map(hobby=>(
                        <li className={hobby.id===activeId ? 'active' : ''} 
                        key={hobby.id} onClick={handleClick(hobby)}
                        >
                            {hobby.title}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default HobbyList;