export const weatherReducer = (state, action) => {
    switch (action.type){
        case 'GET_WEATHER':
            return {
                ...state,
                weather: action.weather
            };
        default:
            return state;
    }
}



