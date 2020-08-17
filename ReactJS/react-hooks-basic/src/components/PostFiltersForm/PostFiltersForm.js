import React,{useState, useRef} from 'react';
import PropTypes from 'prop-types';

PostFiltersForm.propTypes = {
    onSubmit: PropTypes.func,
};
PostFiltersForm.defaultProp={
    onSubmit: null
}
function PostFiltersForm(props) {
    const {onSubmit}=props;
    const [searchTerm, setSearchTerm]=useState('');
    const typingTimeoutRef=useRef(null);

    function handleSearchTermChange(e){
        const values=e.target.value;
        setSearchTerm(values);
        
        //* https://css-tricks.com/debouncing-throttling-explained-examples/
        //* Kĩ thuật Debounce
        if(!onSubmit){
            return;
        }
        if(typingTimeoutRef.current){
            clearTimeout(typingTimeoutRef.current);
        }
        typingTimeoutRef.current=setTimeout(()=>{
            const formValues={searchTerm: values};
            onSubmit(formValues);
        },300)
        //* Kĩ thuật Debounce
    }
    return (
        <div>
            <form action="">
                <input type="text" value={searchTerm} onChange={handleSearchTermChange} name="" id=""/>
            </form>
        </div>
    );
}

export default PostFiltersForm;