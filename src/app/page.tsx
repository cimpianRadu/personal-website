import DetailItem from "../components/DetailItem";
import { DETAILS } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSquare, faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { faSquareGithub, faLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

export default function Page() {
  return (
    <div>
      <div className="px-4">
        {/* <Image unoptimized={true} alt="React Native GIF" src="/../../public/reactnative.gif" width={100} height={100} /> */}
        <div className="flex items-center justify-center flex-1">
          <div className="h-60 w-[36rem]  bg-no-repeat bg-react-native px-3" />
        </div>
        <p className="text-3xl font-thin text-center">
          I am a Freelancer | Senior React/React Native Developer with more than 6 years experience in this field. I use Javascript technologies to help my
          clients meet their customer needs by creating top-notch products with quality in mind.
        </p>

        <br />
        <div className="w-fit">
          <p className="font-semibold text-lg">I am always happy to meet new perople, so let's connect!</p>
          <br />
          <div className="flex flex-row justify-around">
            {/* <div className="border w-11 h-11">
              <FontAwesomeIcon icon={faLinkedinIn} style={{ fontSize: 100, color: "orange" }} />
              <FontAwesomeIcon icon={faGithub} style={{ fontSize: 100, color: "orange" }} />
            </div> */}

            <div className="w-10 h-10">
              <a href="https://www.linkedin.com/in/radu-cimpian/" target="_">
                <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: 100, color: "#0077b5" }} />
              </a>
            </div>
            <div className="w-10 h-10">
              <a href="https://github.com/cimpianRadu" target="_">
                <FontAwesomeIcon icon={faSquareGithub} style={{ fontSize: 100, color: "#f2f2f2" }} />
              </a>
            </div>
            <div className="w-10 h-10">
              <a href="https://twitter.com/RCimpian" target="_">
                <FontAwesomeIcon icon={faTwitterSquare} style={{ fontSize: 100, color: "#1DA1F2" }} />
              </a>
            </div>
            <div className="w-10 h-10">
              <a href="mailto:raducimpian.dev@gmail.com">
                <FontAwesomeIcon icon={faEnvelopeSquare} style={{ fontSize: 100, color: "#f2f2f2" }} />
              </a>
            </div>
            <div className="w-10 h-10">
              <a href="tel:+40751547174">
                <FontAwesomeIcon icon={faPhoneSquare} style={{ fontSize: 100, color: "#007acc" }} />
              </a>
            </div>
          </div>
        </div>
        <br />
        <div className="items-center ">
          <p className="font-semibold text-2xl pl-2">About me</p>

          {DETAILS.map((detail, index) => {
            return <DetailItem key={index} label={detail.label} value={detail.value} />;
          })}
        </div>
      </div>
    </div>
  );
}
