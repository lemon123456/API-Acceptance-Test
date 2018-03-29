import request from 'supertest';

const defaultOptions = {
    host: 'http://api.open-notify.org'
};

let httpClient = request(defaultOptions.host);

function createHandler(holder, done) {
    return (err, res) => {
        if (err) {
            done(err);
        }else {
            holder.resp = res;
            done();
        }
    }
}

function times(lat, lon) {
    const uri = '/iss-pass';
    return httpClient.get(uri).query({lat, lon});
}

const Apis = {
    times,
    init: (opts = {}) => {
        Object.assign(defaultOptions, opts);
        return Apis;
    }
};

export default Apis;