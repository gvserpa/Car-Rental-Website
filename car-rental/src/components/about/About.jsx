import historyPhoto from "../../assets/businessPhoto.png";
import "./index.css";

function About() {
  return (
    <main>
      <div className="about-main">
        <h2>Our History</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          laborum quae! Quis, quo sit. Id facere ratione voluptatem dolore quae
          laborum! Culpa ad nobis facilis quis deleniti, perspiciatis, libero
          labore repellat blanditiis voluptas omnis impedit fuga. Quam eum
          nihil, quis inventore id corrupti, aliquid quae quo, temporibus sit
          ipsa incidunt.
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            atque in quaerat rerum ipsum voluptate ullam eveniet! Suscipit,
            similique odio neque quo dicta, ipsa esse saepe asperiores
            architecto, illum excepturi perspiciatis unde! Natus, aliquam
            nostrum sed provident inventore, amet repellat doloribus, dolorum
            cupiditate odit assumenda minus! Amet facilis rerum beatae.
          </p>
        </p>
      </div>
      <div className="about-img">
        <img src={historyPhoto} alt="history photo" />
      </div>
    </main>
  );
}

export default About;
