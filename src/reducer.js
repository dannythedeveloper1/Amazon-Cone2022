export const initialState = {
    basket: [],
    user: null
}


const reducer = (state, action) => {
    // console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            }
        case 'REMOVE_FROM_BASKET':
            let basketCopy = [...state.basket];
            const filteredBasket = basketCopy.filter((item) => item.id !== action.id);
            return {
                ...state,
                basket: filteredBasket,
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        default:
            return state;        
    }
}
export default reducer;
