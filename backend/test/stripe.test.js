const chai = require("chai");
const { describe, before, it, after } = require("mocha");
const { uriTest } = require("../atlas_uri");
// Chai HTTP plugin
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

let server = require("../app");

describe("Tests for HTTP requests: /create-checkout-session", function () {
  this.timeout(30_000);
  it(" /create-checkout-session should create Stripe payment session", (done) => {
    body = {
      requestBody: {
        adult: 3,
        child: 2,
        concession: 1,
      },
    };

    chai
      .request(server)
      .post("/create-checkout-session")
      .send(body)
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(200);
        chai.expect(res.text).to.include("https://checkout.stripe.com/");
        done();
      });
  });
});
