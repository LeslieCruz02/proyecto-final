const assert = require('assert');
const expect = require('chai').expect
const request = require('supertest');
const app = require('../app/app')

describe('Unit testing the /usuarios route', function() {

    it('should return OK status', function() {
      return request(app)
        .post('/usuarios')
        .send({usuario:"leslieCruz",
            nombres:"leslie",
            apellidos:"cruz",
            telefono: 325222,
            correo: "abglesliecruz@gmail.com",
            password:"12345678"})
        .then(function(response){
            assert.equal(response.status, 200)
        })
        done();
    });
});