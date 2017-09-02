var NoudedService = (function () {
    function NoudedService(http) {
        this.http = http;
    }
    NoudedService.prototype.saveNoue = function (noue) {
        this.http.post("http://localhost:3010/api/v1/noue", noue)
            .toPromise()
            .then(function (response) { return console.log(response); });
    };
    return NoudedService;
}());
export { NoudedService };
//# sourceMappingURL=C:/Users/marten/code/villaangular2/src/app/nouded/_services/nouded.service.js.map