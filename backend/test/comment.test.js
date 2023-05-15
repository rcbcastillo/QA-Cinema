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
      await commentModel.create(comment);
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
    commentModel.findOne({}).then((expectedComment) => {
      chai
        .request(server)
        .get("/comments/" + expectedComment._id)
        .end((err, res) => {
          const readedComment = res.body;
          chai.expect(err).to.be.null;
          chai.expect(res.status).to.equal(200);
          chai
            .expect(readedComment._id)
            .to.equal(expectedComment._id.toString());
          done();
        });
    });
  });

  it("/comments/update/:commentId should get one comment by Id", (done) => {
    commentModel.findOne({}).then((expectedComment) => {
      const updatedComment = {
        movieId: "Titanic",
        userId: "this is updated",
        message: "the movie has great effects with the 3D view",
        rating: 7.9,
      };
      chai
        .request(server)
        .patch(`/comments/update/${expectedComment._id}`)
        .query(updatedComment)
        .end((err, res) => {
          const updatedCommentDB = res.body;
          chai.expect(err).to.be.null;
          chai.expect(res.status).to.equal(201);
          chai.expect(updatedCommentDB).to.deep.equal({
            _id: updatedCommentDB._id,
            __v: updatedCommentDB.__v,
            ...updatedComment,
          });
          done();
        });
    });
  });

  it("/comments/delete/:commentId should get one comment by Id", (done) => {
    commentModel.findOne({}).then((expectedComment) => {
      chai
        .request(server)
        .delete(`/comments/delete/${expectedComment._id}`)
        .end((err, res) => {
          chai.expect(err).to.be.null;
          chai.expect(res.status).to.equal(200);
          chai.expect(res.body).to.equal(expectedComment._id.toString());
          done();
        });
    });
  });

  after(async () => {
    await mongoose.disconnect();
    server.close();
  });
});
