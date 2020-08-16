import React,{useState} from 'react';
import PropTypes from 'prop-types';

TodoFrom.propTypes = {
    onSubmit: PropTypes.func
};
TodoFrom.defaultProps={
    onSubmit:null
}
function TodoFrom({onSubmit}) {
    const [value,setValue]=useState('');

    function handleValueChange(e){
        setValue(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();// prevent reloading browser
        if(!onSubmit){
            return;
        }
        if(!value){
            return;
        }
        const formValues={
            title: value
        };
        onSubmit(formValues);
        setValue('');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleValueChange} type="text" name="" id="" value={value}/>
            </form>
        </div>
    );
}

export default TodoFrom;