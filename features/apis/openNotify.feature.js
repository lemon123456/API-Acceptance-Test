Feature('Open Notify', () => {
    Scenario('international space station pass times', () => {
        const holder = {};

        When('request pass times', (done) => {
            const lat = 50;
            const lon = 50;
            const handler = Apis.createHandler(holder, done);
            Apis.times(lat, lon).expect(200).end(handler);

        });

        Then('the api will respond with duration and risetime', () => {
            expect(holder.resp.body).to.have.all.keys('message', 'request', 'response');
        });
    });

    Scenario('how many people are in space right now', () => {
        const holder = {};

        When('request people in space', async () => {
            const response = await Apis.astros();
            expect(response.status).to.equal(200);
            holder.resp = response;
        });

        Then('the api will responde with people name and craft', () => {
            expect(holder.resp.body).to.have.all.keys('message', 'number', 'people');
        });
    });

    Scenario('read data from fixture', () => {
        const holder = {};

        When('read test file', () => {
            const data = Fixtures.load('test.json');
            holder.resp = data;
        });

        Then('output the file data', () => {
            console.log('########### %j', holder.resp);
        });
    });
});