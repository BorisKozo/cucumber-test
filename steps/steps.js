const myStepDefinitionsWrapper = function () {

    this.When(/^this will fail$/, function () {
        return Promise.reject('Error');
    });
};

module.exports = myStepDefinitionsWrapper;