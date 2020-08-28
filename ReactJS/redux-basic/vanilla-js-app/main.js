console.log(window.Redux);
//* state
//* reducer
//* store
const { createStore } = window.Redux;

const initialState = JSON.parse(localStorage.getItem('hobby_list')) || [];
const hobbyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_HOBBY': {
      // const newList=[...state];
      // newList.push(action.payLoad);
      // return newList;
      return [...state, action.payLoad];
    }
    default:
      return state;
  }
};

const store = createStore(hobbyReducer);

//* Render Hobby lists

const renderHobbyList = (hobbyList) => {
  if (!Array.isArray(hobbyList) || hobbyList.length === 0) return;
  const ulElement = document.querySelector('#hobbyListId');
  if (!ulElement) return;
  //* reset preverse content of ul
  ulElement.innerHTML = '';
  for (const hobby of hobbyList) {
    const liElement = document.createElement('li');
    liElement.textContent = hobby;
    ulElement.appendChild(liElement);
  }
};
//* Render initial hobby list

const initialHobbyList = store.getState();
console.log(initialHobbyList);
renderHobbyList(initialHobbyList);

//* handle form submit
const hobbyFormElement = document.querySelector('#hobbyFormId');
if (hobbyFormElement) {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const hobbyTextElement = hobbyFormElement.querySelector('#hobbyTextId');
    if (!hobbyTextElement || !hobbyTextElement.value) return;
    const action = {
      type: 'ADD_HOBBY',
      payLoad: hobbyTextElement.value,
    };
    store.dispatch(action);
    //* reset form
    hobbyFormElement.reset();
  };
  hobbyFormElement.addEventListener('submit', handleFormSubmit);
}

store.subscribe(() => {
  const newHobbyList = store.getState();
  renderHobbyList(newHobbyList);
  localStorage.setItem('hobby_list', JSON.stringify(newHobbyList));
});
