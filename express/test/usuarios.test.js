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

describe('GET /galeria', function(){
    it('respond with json', function(done){
      request(app)
        .get('/galeria')
        .expect("Content-Type", /json/)
        .expect('Authorization', `Bearer  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3VhcmlvIjoiTGVzbGllQ3J1eiIsImp0aSI6ImM3OWRhMzE1LTJhZTEtNDBlZS1hYzViLTQ3NmYyZWFmZWU3MSIsImlhdCI6MTYzNzA2MzAwNCwiZXhwIjoxNjM3MDYzMTI0fQ.IQZiCWm8eVMcC-nDWxZ017VJFKl27FFCmhDXHWAnRkg`)
        .expect(200);
        done();
    });
  });

  describe('GET /home', function(){
    it('respond with json', function(done){
      request(app)
        .get('/home')
        .expect("Content-Type", /json/)
        .expect('Authorization', `Bearer  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3VhcmlvIjoiTGVzbGllQ3J1eiIsImp0aSI6ImM3OWRhMzE1LTJhZTEtNDBlZS1hYzViLTQ3NmYyZWFmZWU3MSIsImlhdCI6MTYzNzA2MzAwNCwiZXhwIjoxNjM3MDYzMTI0fQ.IQZiCWm8eVMcC-nDWxZ017VJFKl27FFCmhDXHWAnRkg`)
        .expect(200);
        done();
    });
  });

  describe('GET /galeryPpal', function(){
    it('respond with json', function(done){
      request(app)
        .get('/galeryPpal')
        .expect("Content-Type", /json/)
        .expect('Authorization', `Bearer  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3VhcmlvIjoiTGVzbGllQ3J1eiIsImp0aSI6ImM3OWRhMzE1LTJhZTEtNDBlZS1hYzViLTQ3NmYyZWFmZWU3MSIsImlhdCI6MTYzNzA2MzAwNCwiZXhwIjoxNjM3MDYzMTI0fQ.IQZiCWm8eVMcC-nDWxZ017VJFKl27FFCmhDXHWAnRkg`)
        .expect(200);
        done();
    });
  });
