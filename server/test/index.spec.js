import request from 'supertest';
import chaiHttp from 'chai-http';
import chai, { expect } from 'chai';

chai.use(chaiHttp);
describe('#hello world', function() {  
  it('should return hello world', function() {
    let test = 'hello world';
    expect(test).to.equal('hello world');
  });
});
