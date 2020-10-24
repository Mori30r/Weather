export const weatherReducer = (state, action) => {
    switch (action.type){
        case 'GET_WEATHER':
            return {
                ...state,
                weather: action.weather,
                active: action.weather[0].dt,
                loading: false
            };
        case 'SET_ACTIVE':
            return {
                ...state,
                active: action.active
            }
        default:
            return state;
    }
}



