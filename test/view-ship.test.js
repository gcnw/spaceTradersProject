import assert, { doesNotMatch } from 'assert';
import fetchViewShip from '../src/js/view-ship.mjs'

describe('View Ship module', function() {
    it('Space Traders should return an [HTTP 200 OK] status code', async function() {
        console.log("Hello");
        let viewShipResponseStatus = await fetchViewShip.then(function(response){
            return response.status;});

        assert.equal(viewShipResponseStatus, 200);
    });
});
