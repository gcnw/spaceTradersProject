// import assert, { doesNotMatch } from 'assert';
var assert = chai.assert;
import { fetchViewShip } from '../src/js/view-ship.mjs';

describe('View Ship module', function() {
    let shipSymbol;
    let shipFrame;
    let shipReactor;
    let shipEngine;
    let shipModules;
    let shipMounts;
    let shipRegistration;
    let shipIntegrity;
    let shipState;
    let shipStatus;
    let shipLocation;
    let shipCargo;
    let shipFuel;


    it('should return an [HTTP 200 OK] status code', async function() {

        let viewShipResponseStatus = await fetchViewShip.then(function(response){
            return response.status;});

        assert.equal(viewShipResponseStatus, 200);
    });
    // it('should place the ship data in local storage', function() {
    //     const localStorageValue = localStorage.getItem('Current Ship');

    //     assert.notEqual(localStorageValue, null);
    // })
    // it('should include a symbol', function() {
    //     const localStorageValue = localStorage.getItem('Current Ship');
    //     shipSymbol = localStorageValue["data"].symbol;
    //     assert.equal(typeof shipSymbol, "string");

    //     // shipFrame = localStorageValue["data"].frame;
    //     // shipReactor = localStorageValue["data"].reactor;
    //     // shipEngine = localStorageValue["data"].engine;
    //     // shipModules = localStorageValue["data"].modules;
    //     // shipMounts = localStorageValue["data"].mounts;
    //     // shipRegistration = localStorageValue["data"].registration;
    //     // shipIntegrity = localStorageValue["data"].integrity;
    //     // shipState = localStorageValue["data"].stats;
    //     // shipStatus = localStorageValue["data"].status;
    //     // shipLocation = localStorageValue["data"].location;
    //     // shipCargo = localStorageValue["data"].cargo;
    //     // shipFuel = localStorageValue["data"].fuel;
    // })
});
