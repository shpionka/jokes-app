export const initialState = {
    any: false,
    programming: true,
    dark: false,
    isCustom: true
};

export function jokeFormReducer(state, action) {
    switch (action.type) {
        case 'any':
            return {
                ...initialState,
                isCustom: false,
                programming: false,
                any: true
            }
        case 'programming':
            return {
                ...state,
                programming: !state.programming,
                any: false
            }
        case 'dark':
            return {
                ...state,
                dark: !state.dark,
                any: false
            }
        case 'isCustom':
            return {
                ...state,
                isCustom: true,
                any: false
            }
        default:
            return state;
    }
};