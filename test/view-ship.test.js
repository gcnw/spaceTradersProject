// import assert, { doesNotMatch } from 'assert';
var assert = chai.assert;
document.getElementById('mochaTestButton').addEventListener('click', () => mocha.run());

describe('View Ship module', function() {
    it('should return an [HTTP 200 OK] status code', async function() {

        let viewShipResponseStatus = localStorage.getItem('view-ship-response.status');
        assert.equal(viewShipResponseStatus, 'true');
    });
});
