import React from "react";
import { faLinkedin, faSquareGithub, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="flex flex-col border-t-2 border-secondaryGray">
      <p className="block text-center py-3">Radu G. Cîmpian 2023 &reg;</p>
      {/* </div> */}
      <div className="flex flex-row pb-2 items-center justify-center">
        <p className="mr-4 text-paragraph">Let's get in touch!</p>
        <div className="flex flex-row justify-around">
          <div className="w-10 h-10 mr-4">
            <a href="https://www.linkedin.com/in/radu-cimpian/" target="_">
              <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: 100, color: "#0077b5" }} />
            </a>
          </div>
          <div className="w-10 h-10  mr-4">
            <a href="https://github.com/cimpianRadu" target="_">
              <FontAwesomeIcon icon={faSquareGithub} style={{ fontSize: 100, color: "#f2f2f2" }} />
            </a>
          </div>
          <div className="w-10 h-10  mr-4">
            <a href="https://twitter.com/RCimpian" target="_">
              <FontAwesomeIcon icon={faTwitterSquare} style={{ fontSize: 100, color: "#1DA1F2" }} />
            </a>
          </div>
          <div className="w-10 h-10  mr-4">
            <a href="mailto:raducimpian.dev@gmail.com">
              <FontAwesomeIcon icon={faEnvelopeSquare} style={{ fontSize: 100, color: "#f2f2f2" }} />
            </a>
          </div>
          <div className="w-10 h-10  mr-4">
            <a href="tel:+40751547174">
              <FontAwesomeIcon icon={faPhoneSquare} style={{ fontSize: 100, color: "#007acc" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
