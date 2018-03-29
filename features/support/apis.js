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
    const uri = `/iss-pass.json?lat=${lat}&lon=${lon}`;
    return httpClient.get(uri);
}

function astros() {
    const uri = '/astros.json';
    return httpClient.get(uri);
}

const Apis = {
    createHandler,
    times,
    astros,
    init: (opts = {}) => {
        Object.assign(defaultOptions, opts);
        return Apis;
    }
};

export default Apis;