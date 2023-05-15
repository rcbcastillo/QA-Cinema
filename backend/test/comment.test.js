const chai = require("chai");
const { describe, before, it, after } = require("mocha");
const { uriTest } = require("../atlas_uri");
const comment = require("./data/commentDataTest.json");
const commentModel = require("../models/commentModel");

// Chai HTTP plugin
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const mongoose = require("mongoose");

let server = require("../app");

describe("Tests for the server's COMMENT HTTP requests", function () {
  this.timeout(5_000);
  let testComment;
  beforeEach(async () => {
    try {
      await commentModel.deleteMany({});
      testComment = await commentModel.create(comment);
      testComment = JSON.parse(JSON.stringify(testComment));
    } catch (err) {
      console.error(err);
    }
  });

  it("/comments/create should create a comment", (done) => {
    // TODO: remove this test when no longer needed
    chai
      .request(server)
      .post("/comments/create")
      .send(comment)
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(201);
        chai.expect(res.body).has.property("_id");
        chai.expect(res.body.movieId).to.equal(comment.movieId);
        chai.expect(res.body.userId).to.equal(comment.userId);
        chai.expect(res.body.message).to.equal(comment.message);
        chai.expect(res.body.rating).to.equal(comment.rating);
        done();
      });
  });

  it("/comments/readComments should get all comments", (done) => {
    chai
      .request(server)
      .get("/comments/readComments")
      .end((err, res) => {
        const readedComment = res.body[0];
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(200);
        chai.expect(readedComment).has.property("_id");
        chai.expect(readedComment).has.property("movieId");
        chai.expect(readedComment).has.property("userId");
        chai.expect(readedComment).has.property("message");
        chai.expect(readedComment).has.property("rating");
        chai.expect(readedComment.movieId).to.equal("Titanic");
        done();
      });
  });

  it("/comments/:commentId should get one comment by Id", (done) => {
    commentModel.findOne({}).then((testComment) => {
      chai
        .request(server)
        .get("/comments/" + testComment._id)
        .end((err, res) => {
          const readedComment = res.body;
          chai.expect(err).to.be.null;
          chai.expect(res.status).to.equal(200);
          chai.expect(readedComment._id).to.equal(testComment._id.toString());
          done();
        });
    });
  });

  it("/comments/update/:commentId should get one comment by Id", (done) => {
    commentModel.findOne({}).then((testComment) => {
      const updatedComment = {
        movieId: "Titanic",
        userId: "this is updated",
        message: "the movie has great effects with the 3D view",
        rating: 7.9,
      };
      chai
        .request(server)
        .patch(`/comments/update/${testComment._id}`)
        .query(updatedComment)
        .end((err, res) => {
          const returnedCommentDB = res.body;
          chai.expect(err).to.be.null;
          chai.expect(res.status).to.equal(201);
          chai.expect(returnedCommentDB.userId).to.equal("this is updated");
          chai.expect(returnedCommentDB).to.deep.equal({
            _id: returnedCommentDB._id,
            __v: returnedCommentDB.__v,
            ...updatedComment,
          });
          done();
        });
    });
  });

  it("/comments/delete/:commentId should get one comment by Id", (done) => {
    commentModel.findOne({}).then((testComment) => {
      chai
        .request(server)
        .delete(`/comments/delete/${testComment._id}`)
        .end((err, res) => {
          chai.expect(err).to.be.null;
          chai.expect(res.status).to.equal(200);
          chai.expect(res.body).to.equal(testComment._id.toString());
          done();
        });
    });
  });

  after(async () => {
    await mongoose.disconnect();
    server.close();
  });
});
