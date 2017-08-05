export var filters = function (state, _a) {
    if (state === void 0) { state = []; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case 'ADD_FILTER':
            return state.concat([payload]);
        case 'ADD_FILTERS':
            return payload;
        case 'DELETE_FILTER':
            return state.filter(function (filter) {
                return filter.name !== payload.name;
            });
        default:
            return state;
    }
};
//# sourceMappingURL=C:/Users/marten/code/villaangular2/src/app/_reducers/saldo-filter.reducer.js.map