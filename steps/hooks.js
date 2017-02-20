module.exports = function () {
    // this.setDefaultTimeout(globals.timeout);

    this.After(function (scenario, callback) {
        setTimeout(() => {
            console.log('After hook is done');
            callback();
        }, 10000);
    });
};
