let data = {
    favorites: []
};

const reducer = (state = data, action) => {
    
    switch (action.type) {
        case 'SAVE_FAVORITE': {
            state.favorites.push(action.fav);
            return state
        }
        case 'CHECK': {
            console.log(state);
            return state
        }
        default: return state;
    }
    
};
export default reducer


