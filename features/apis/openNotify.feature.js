Feature('Open Notify', () => {
    Scenario('international space station pass times', () => {
        const holder = {};

        When('request response', () => {
            const lat = 80;
            const lon = 100;
            console.log("suceess");

        });

        Then('the api will respond with 200', () => {
            const data = Fixtures.load('test.json');
            console.log('################ %j', data);
        });
    });
});