import assert, { doesNotMatch } from 'assert';
import fetchViewShip from '../src/js/view-ship.mjs'

describe('View Ship module', function() {
    it('should return an [HTTP 200 OK] status code', async function() {
        console.log("Hello");
        let viewShipResponseStatus = await fetchViewShip.then(function(response){
            return response.status;});

        assert.equal(viewShipResponseStatus, 200);
    });
    it('should include expected values', function())
});
