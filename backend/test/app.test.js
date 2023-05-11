const chai = require("chai");
const { describe, before, it, after } = require("mocha");
const { uriTest } = require("../atlas_uri");
const movie = require("./data/movieDataTest");
const user = require("./data/userDataTest");
const comment = require("./data/commentDataTest");
const movieModel = require("../models/movieModel");
const userModel = require("../models/userModel");
const commentModel = require("../models/commentModel");

// Chai HTTP plugin
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const mongoose = require("mongoose");
const app = require("../app");
var server;
before(async function () {
  this.timeout(30000);
  console.log("starting Setup");
  await new Promise((res, rej) => {
    server = app.listen(9090, () => res());
  });
  await mongoose.connect(uriTest);
  await movieModel.deleteMany({});
  await userModel.deleteMany({});
  //await userModel.createOne({});
  console.log("Ending Setup");
});

describe("Tests for the app's movie HTTP requests", () => {
  it("/movies/create should create a movie", (done) => {
    // TODO: remove this test when no longer needed
    chai
      .request(server)
      .post("/movies/create")
      .send(movie)
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(201);
        chai.expect(res.body).has.property("_id");
        chai.expect(res.body.Title).to.equal(movie.Title);
        done();
      });
  });

  it("/movies/readMovies should get all movies", (done) => {
    chai
      .request(server)
      .get("/movies/readMovies")
      .end((err, res) => {
        const readedMovie = res.body[0];
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(200);
        chai.expect(readedMovie).has.property("_id");
        chai.expect(readedMovie).has.property("Title");
        chai.expect(readedMovie).has.property("Year");
        chai.expect(readedMovie).has.property("Rated");
        chai.expect(readedMovie).has.property("Released");
        chai.expect(readedMovie).has.property("Runtime");
        chai.expect(readedMovie).has.property("Genre");
        chai.expect(readedMovie).has.property("Director");
        chai.expect(readedMovie).has.property("Writer");
        chai.expect(readedMovie).has.property("Actors");
        chai.expect(readedMovie).has.property("Plot");
        chai.expect(readedMovie).has.property("Rated");
        chai.expect(readedMovie).has.property("Language");
        chai.expect(readedMovie).has.property("Country");
        chai.expect(readedMovie).has.property("Awards");
        chai.expect(readedMovie).has.property("Poster");
        chai.expect(readedMovie).has.property("Ratings");
        chai.expect(readedMovie).has.property("Metascore");
        chai.expect(readedMovie).has.property("imdbRating");
        chai.expect(readedMovie).has.property("imdbVotes");
        chai.expect(readedMovie).has.property("imdbID");
        chai.expect(readedMovie).has.property("Type");
        chai.expect(readedMovie).has.property("DVD");
        chai.expect(readedMovie).has.property("BoxOffice");
        chai.expect(readedMovie).has.property("Production");
        chai.expect(readedMovie).has.property("Website");
        chai.expect(readedMovie).has.property("Response");
        chai.expect(readedMovie).has.property("isShowing");
        chai
          .expect(readedMovie.Title)
          .equal("TEST!The Hobbit: An Unexpected Journey");
        done();
      });
  });
});

describe("Tests for the server's user HTTP requests", function () {
  it("/users/create should create a user", (done) => {
    // TODO: remove this test when no longer needed
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

  it("/users/:userId should get one user by Id", (done) => {
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

  it("/users/update/:userId should get one user by Id", (done) => {
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

  it("/users/delete/:userId should get one user by Id", (done) => {
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
});

describe("Tests for the server's comment HTTP requests", function () {
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
});

after(async () => {
  await mongoose.disconnect();
  server.close();
});
