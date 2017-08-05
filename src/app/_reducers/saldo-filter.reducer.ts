export const filters = (state: any = [], {type, payload}) => {
    switch (type) {
        case 'ADD_FILTER':
            return [...state,payload];
        case 'ADD_FILTERS':
                return payload;
        case 'DELETE_FILTER':
            return state.filter(filter => {
                return filter.name !== payload.name;
            });
        default:
            return state;
    }
}
