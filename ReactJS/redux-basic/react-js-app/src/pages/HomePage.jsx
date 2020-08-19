import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import HobbyList from '../components/Home/HobbyList/HobbyList';
import {addNewHobby,setActiveHobby} from '../actions/hobby'
import shortId from 'short-id';

function HomePage(props) {
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId);
    const dispatch=useDispatch();
    const handleAddHobbyClick=()=>{
        const newHobby={
            id: shortId.generate(),
            title: 'casual.title'
        }

        const action=addNewHobby(newHobby);
        dispatch(action);
    }
    const onHobbyClick=(hobby)=>{
        const action=setActiveHobby(hobby);
        dispatch(action);
    }
    return (
        <div className="home-page">
            <button onClick={handleAddHobbyClick}>Random hobby</button>
            <HobbyList onHobbyClick={onHobbyClick} hobbyList={hobbyList} activeId={activeId}/>
        </div>
    );
}

export default HomePage;