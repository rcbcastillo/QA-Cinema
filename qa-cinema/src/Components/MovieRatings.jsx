import React from "react";

// const ratingsImagePath = '/resources/ratingImages/';
import universal from "../assets/ratingImages/Universal.png";
import parental from "../assets/ratingImages/ParentalGuidance.png";
import symbol_12A from "../assets/ratingImages/12ARating.png";
import symbol_15 from "../assets/ratingImages/15Rating.png";
import symbol_18 from "../assets/ratingImages/18Rating.png";

const MovieRatings = () => {
  return (
    <div className="mx-4 my-6">
      <h2>UK Film Classifications (Age Ratings)</h2>
      <table className="custom-table">
        <thead>
          <tr>
            <th className="custom-th">Symbol</th>
            <th className="custom-th">Rating</th>
            <th className="custom-th">Description</th>
            <th className="custom-th">Guidance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="custom-td">
              <img src={universal} alt="Universal, letter U symbol"></img>
            </td>
            <td className="custom-td">Universal</td>
            <td className="custom-td">
              <p>
                Suitable for all. A U film should be suitable for audiences aged
                four years and over.
              </p>
            </td>
            <td className="custom-td">
              <p>
                May contain infrequent very mild language. May contain very mild
                sex references and mild violence, if justified by the context.
              </p>
            </td>
          </tr>
          <tr>
            <td className="custom-td">
              <img
                src={parental}
                alt="Parental Guidance, PG letters symbol"
              ></img>
            </td>
            <td className="custom-td">Parental Guidance</td>
            <td className="custom-td">
              <p>
                General viewing, but some scenes may be unsuitable for young
                children. A PG film should not unsettle a child aged around
                eight or older.
              </p>
            </td>

            <td className="custom-td">
              <p>
                May contain mild language (frequent/aggressive use may result in
                the work being passed at a higher category) or sex/drug
                references. May contain moderate violence if justified by
                context (e.g. fantasy). Unaccompanied children of any age may
                watch, but parents are advised to consider whether the content
                may upset younger, or more sensitive, children.
              </p>
            </td>
          </tr>
          <tr>
            <td className="custom-td">
              <img src={symbol_12A} alt="Age 12A Rating symbol"></img>
            </td>
            <td className="custom-td">12A</td>
            <td className="custom-td">
              <p>
                Cinema release suitable for those aged 12 and over. No one
                younger than 12 may see a 12A film in a cinema unless
                accompanied by an adult.
              </p>
            </td>
            <td className="custom-td">
              <p>
                Films classified 12A and video works classified 12 contain
                material that is not generally suitable for children aged under
                12. No one younger than 12 may see a 12A film in a cinema unless
                accompanied by an adult. Adults planning to take a child under
                12 to view a 12A film should consider whether the film is
                suitable for that child. To help them decide, we recommend that
                they check the content advice for that film in advance. No one
                younger than 12 may rent or buy a 12 rated video work.
              </p>
            </td>
          </tr>
          <tr>
            <td className="custom-td">
              <img src={symbol_15} alt="Age 15 rating symbol"></img>
            </td>
            <td className="custom-td">15</td>
            <td className="custom-td">
              <p>
                Video release suitable only for 12 years and over. No one
                younger than 12 may rent or buy a 12 rated video work.
              </p>
            </td>
            <td className="custom-td">
              <p>
                May have fairly mature themes. May contain (frequent) strong
                language, strong violence, strong sex references, nudity without
                graphic detail and hard drugs. Sexual activity may be portrayed
                but without any strong detail. Sexual violence may be shown if
                discreet and justified by context. Use of very strong language
                may be permitted based on frequency and how it is used, as well
                as contextual justification.
              </p>
            </td>
          </tr>
          <tr>
            <td className="custom-td">
              <img src={symbol_18} alt="Age 18 rating symbol"></img>
            </td>
            <td className="custom-td">18</td>
            <td className="custom-td">
              <p>
                Suitable only for adults. No one younger than 18 may see an 18
                film in a cinema. No one younger than 18 may rent or buy an 18
                rated video work.
              </p>
            </td>
            <td className="custom-td">
              <p>
                Films under this category do not have limitation on the foul
                language that is used. Portrayals of illegal drug misuse are
                generally allowed, and explicit sex references along with
                detailed sexual activity are also allowed. Scenes of strong real
                sex may be permitted if justified by the context (Sex works
                containing explicit images of real sex cannot be classified at
                "18").
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <span>For more information, please visit <a href="https://www.bbfc.co.uk/"><u>the BBFC guide</u></a></span>
      </div>
    </div>
  );
};

export default MovieRatings;
