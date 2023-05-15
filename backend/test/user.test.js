const chai = require("chai");
const { describe, before, it, after } = require("mocha");
const { uriTest } = require("../atlas_uri");
const user = require("./data/userDataTest.json");
const userModel = require("../models/userModel");

// Chai HTTP plugin
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const mongoose = require("mongoose");

let server = require("../app");

describe("Tests for HTTP requests: USERS", function () {
  this.timeout(5_000);
  let testUser;
  beforeEach(async () => {
    try {
      await userModel.deleteMany({});
      testUser = await userModel.create(user);
      testUser = JSON.parse(JSON.stringify(testUser));
    } catch (err) {
      console.error(err);
    }
  });

  it("/users/create should create a user", (done) => {
    chai
      .request(server)
      .post("/users/create")
      .send(user)
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(201);
        chai.expect(res.body).has.property("_id");
        chai.expect(res.body.firstName).to.equal(user.firstName);
        done();
      });
  });

  it("/users/readUsers should get all users", (done) => {
    chai
      .request(server)
      .get("/users/readUsers")
      .end((err, res) => {
        const readedUser = res.body[0];
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(200);
        chai.expect(readedUser).has.property("_id");
        chai.expect(readedUser).has.property("firstName");
        chai.expect(readedUser).has.property("lastName");
        chai.expect(readedUser).has.property("password");
        chai.expect(readedUser).has.property("email");
        chai.expect(readedUser).has.property("avatar");
        chai.expect(readedUser.firstName).to.equal("Jovi");
        done();
      });
  });

  it("/users/userId should get one user by Id", (done) => {
    userModel.findOne({}).then((expectedUser) => {
      chai
        .request(server)
        .get("/users/" + expectedUser._id)
        .end((err, res) => {
          const readedUser = res.body;
          chai.expect(err).to.be.null;
          chai.expect(res.status).to.equal(200);
          chai.expect(readedUser._id).to.equal(expectedUser._id.toString());
          done();
        });
    });
  });

  it("/users/update/userId should get one user by Id", (done) => {
    userModel.findOne({}).then((expectedUser) => {
      const updatedUser = {
        firstName: "Jane",
        lastName: "Kwong",
        password: "123mypass",
        email: "jovi.kwong@hotmail.com",
        avatar: "I am updated",
      };
      chai
        .request(server)
        .patch(`/users/update/${expectedUser._id}`)
        .query(updatedUser)
        .end((err, res) => {
          const updatedUserDB = res.body;
          chai.expect(err).to.be.null;
          chai.expect(res.status).to.equal(201);
          chai.expect(updatedUserDB).to.deep.equal({
            _id: updatedUserDB._id,
            __v: updatedUserDB.__v,
            ...updatedUser,
          });
          done();
        });
    });
  });

  it("/users/delete/userId should get one user by Id", (done) => {
    userModel.findOne({}).then((expectedUser) => {
      chai
        .request(server)
        .delete(`/users/delete/${expectedUser._id}`)
        .end((err, res) => {
          chai.expect(err).to.be.null;
          chai.expect(res.status).to.equal(200);
          chai.expect(res.body).to.equal(expectedUser._id.toString());
          done();
        });
    });
  });

  after(async () => {
    await mongoose.disconnect();
    server.close();
  });
});
