export var campaigns = function (state, _a) {
    if (state === void 0) { state = []; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case 'ADD_CAMPAIGNS':
            return payload;
        case 'CREATE_CAMPAIGN':
            return state.concat([payload]);
        case 'UPDATE_CAMPAIGN':
            return state.map(function (campaign) {
                return campaign.token === payload.token ? Object.assign({}, campaign, payload) : campaign;
            });
        case 'DELETE_CAMPAIGN':
            return state.filter(function (campaign) {
                return campaign.token !== payload.token;
            });
        default:
            return state;
    }
};
//# sourceMappingURL=C:/Users/marten/code/villaangular2/src/reducers/campaign.reducer.js.map