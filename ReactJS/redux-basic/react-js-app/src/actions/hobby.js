export const addNewHobby=(hobby)=>{
    return{
        type: 'ADD_HOBBY',
        payLoad: hobby
    }
}
export const setActiveHobby=(hobby)=>{
    return{
        type: 'SET_ACTIVE_HOBBY',
        payLoad: hobby
    }
}