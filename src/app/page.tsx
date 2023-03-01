import DetailItem from "../components/DetailItem";
import { DETAILS } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSquare, faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { faSquareGithub, faLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import Avatar from "./home/Avatar";

export default function Page() {
  return (
    <div>
      <div className="px-4">
        <div className="flex items-center justify-center flex-1 py-4">
          <Avatar />
          <div className="w-12">{/* <p className="text-3xl font-normal text-center">Mantra</p> */}</div>
          <div className="bg-slate-50 p-1 rounded-xl bg-gradient-to-r from-red-400 via-wolf to-slate-300">
            <div className="h-60 w-[36rem] bg-no-repeat bg-react-native px-3 rounded-lg" />
          </div>
        </div>

        <p className="text-3xl font-normal">Looking for an experienced React Native developer? Look no further! </p>
        <br />
        <p>
          As a mobile application developer with over 6 years of experience in software development, I am confident that I can deliver efficient, scalable, and
          top-performing applications for both Android and iOS platforms. I have extensive experience in developing both greenfield and brownfield mobile
          applications, and I am adept at migrating products from other technologies to React Native.
        </p>
        <br />
        <p>
          I am dedicated to staying up-to-date with the latest technologies and best practices to provide the best solutions for my clients. My deep
          understanding of the React Native ecosystem, combined with my expertise in building performant and maintainable applications, make me a valuable asset
          to any project.
        </p>
        <br />
        <p>
          In addition, my ability to collaborate effectively with cross-functional teams allows me to work seamlessly with stakeholders and ensure the
          successful delivery of projects. I am passionate about bringing ideas to life and look forward to the opportunity to work with you.
        </p>
        <br />
        <p>Let's work together to bring your ideas to life!</p>
        {/* <div className="w-fit">
          <p className="font-semibold text-lg">I am always happy to meet new perople, so let's connect!</p>
          <br />
          <div className="flex flex-row justify-around">
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
        <br /> */}
        {/* <div className="items-center ">
          <p className="font-semibold text-2xl pl-2">About me</p>

          {DETAILS.map((detail, index) => {
            return <DetailItem key={index} label={detail.label} value={detail.value} />;
          })}
        </div> */}
      </div>
    </div>
  );
}
