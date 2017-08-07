var Hero = (function () {
    function Hero() {
        this.id = 0;
        this.name = '';
    }
    return Hero;
}());
export { Hero };
var Address = (function () {
    function Address() {
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    }
    return Address;
}());
export { Address };
var memberStatus = (function () {
    function memberStatus() {
        this.status = "";
    }
    return memberStatus;
}());
export { memberStatus };
var memberType = (function () {
    function memberType() {
        this.type = "";
    }
    return memberType;
}());
export { memberType };
export var heroes = [
    {
        id: 1,
        name: 'Whirlwind',
        addresses: [
            { street: '123 Main', city: 'Anywhere', state: 'CA', zip: '94801' },
            { street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226' },
        ]
    },
    {
        id: 2,
        name: 'Bombastic',
        addresses: [
            { street: '789 Elm', city: 'Smallville', state: 'OH', zip: '04501' },
        ]
    },
    {
        id: 3,
        name: 'Magneta',
        addresses: []
    },
];
export var states = ['CA', 'MD', 'OH', 'VA'];
//# sourceMappingURL=C:/Users/marten/code/villaangular2/src/app/adminstart/add-member/data.model.js.map