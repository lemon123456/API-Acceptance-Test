Feature('Open Notify', () => {
    Scenario('international space station pass times', () => {
        const holder = {};

        When('request response', (done) => {
            const lat = 50;
            const lon = 50;
            const handler = Apis.createHandler(holder, done);
            Apis.times(lat, lon).expect(200).end(handler);

        });

        Then('the api will respond with 200', () => {
            const data = Fixtures.load('test.json');
            console.log('################ %j', data);
            expect(holder.resp.body.response).to.deep.include({ duration: 93, risetime: 1522328229 });
            expect(holder.resp.body.response).to.deep.include({ duration: 578, risetime: 1522333707 });
        });
    });
});