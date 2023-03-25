import image from "../image/image3.png";
import image44 from "../image/image4.png";
import image55 from "../image/image5.png";
import image5 from "../image/trafalgarillustration.png";
import group1 from "../image/Group.png";
import illustrateimg from "../image/heroimg.png";
import illustrateimgright from "../image/illustrateteacherimg.png";
import customerReviewImg from "../image/image1.png";
import "./body.css";

export default function Home() {
  return (
    <>
      <div className="TopMainContainer">
        <div className="TopMainContainerLeft">
          <h1>
            virtual healthcare <br />
            for you
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur iusto dolores officiis consectetur illo blanditiis
            magnam Vitae porro, dolor maiores excepturi ad repellendus ullam
            officia cum suscipit eius iure perferendis.
          </p>
          <button className="topMainContinerButton">consult today</button>
        </div>
        <div className="TopMainContainerRight">
          <img src={image5} alt="top main container hero " />
        </div>
      </div>
      {/* main service container  */}
      <div className="mainServiceContainer">
        <h1>our services</h1>
        <hr className="horizontal" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
          iusto dolores <br />
          officiis consectetur illo blanditiis magnam Vitae porro, dolor maiores
          excepturi ad repellendus <br /> ullam officia cum suscipit eius iure
          perferendis.
        </p>
      </div>
      <div className="mainServiceListContainer">
        <div className="serviceListItems">
          <img src={group1} alt="description elemet" className="serviceimg" />
          <h1>search doctor</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur <br />
            adipisicing elit. Consequuntur iusto dolores <br />
            officiis consectetur illo blanditiis <br />
            magnam Vitae porro, dolor
          </p>
        </div>
        <div className="serviceListItems">
          <img src={group1} alt="description elemet" className="serviceimg" />
          <h1>search doctor</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur <br />
            adipisicing elit. Consequuntur iusto dolores <br />
            officiis consectetur illo blanditiis <br />
            magnam Vitae porro, dolor
          </p>
        </div>
        <div className="serviceListItems">
          <img src={group1} alt="description elemet" className="serviceimg" />
          <h1>search doctor</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur <br />
            adipisicing elit. Consequuntur iusto dolores <br />
            officiis consectetur illo blanditiis <br />
            magnam Vitae porro, dolor
          </p>
        </div>
        <div className="serviceListItems">
          <img src={group1} alt="description elemet" className="serviceimg" />
          <h1>search doctor</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur <br />
            adipisicing elit. Consequuntur iusto dolores <br />
            officiis consectetur illo blanditiis <br />
            magnam Vitae porro, dolor
          </p>
        </div>
        <div className="serviceListItems">
          <img src={group1} alt="description elemet" className="serviceimg" />
          <h1>search doctor</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur <br />
            adipisicing elit. Consequuntur iusto dolores <br />
            officiis consectetur illo blanditiis <br />
            magnam Vitae porro, dolor
          </p>
        </div>
        <div className="serviceListItems">
          <img src={group1} alt="description elemet" className="serviceimg" />
          <h1>search doctor</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur <br />
            adipisicing elit. Consequuntur iusto dolores <br />
            officiis consectetur illo blanditiis <br />
            magnam Vitae porro, dolor
          </p>
        </div>
      </div>
      <div className="buttonBottom">
        <button className="learnMore">learn more</button>
      </div>
      {/* service offered session  */}
      <div className="serviceOfferedContainer">
        <div className="leftimgServiceOfferedCont">
          <img
            src={illustrateimg}
            alt="illustration"
            className="illustrateimg"
          />
        </div>
        <div className="rightServiceOfferedCont">
          <h1>
            leading healthcare <br /> providers
          </h1>
          <hr className="horizontalLine" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing <br />
            elit. Perspiciatis quasi qui magnam iure nemo sunt possimus
            <br />
            consectetur dolore excepturi! Qui obcaecati ratione <br />
            est sed dignissimos veritatis. Ea iste at aut.
          </p>
          <button className="learnMore">learn more</button>
        </div>
      </div>
      <div className="serviceOfferedContainer">
        <div className="rightServiceOfferedCont">
          <h1>
            Download our
            <br /> mobile apps
          </h1>
          <hr className="horizontalLine" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing <br />
            elit. Perspiciatis quasi qui magnam iure nemo sunt possimus
            <br />
            consectetur dolore excepturi! Qui obcaecati ratione <br />
            est sed dignissimos veritatis. Ea iste at aut.
          </p>
          <button className="learnMore">Download</button>
        </div>
        <div className="leftimgServiceOfferedCont">
          <img
            src={illustrateimgright}
            alt="illustration"
            className="illustrateimg"
          />
        </div>
      </div>

      {/* customer review session  */}
      <div className="mainCustomerRiviewContainer">
        <div className="topCustomerReviewSession">
          <h1>What are customers are saying</h1>
          <hr className="customerReviewLine" />
        </div>
        <div className="bottomCustomerReviewSession">
          <div className="customerDetails">
            <img
              src={customerReviewImg}
              alt="description elemet"
              className="customerimg"
            />
            <div className="customerDetailsItems">
              <h4 className="name">ogbudu dickson</h4>
              <p>founder and chief creative officer</p>
            </div>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
            Quaerat ratione temporibus, quidem ipsam, tempore facere esse eaque
            <br />
            ducimus praesentium, aliquid quae. Architecto delectus veniam, non
            maxime <br />
            suscipit earum odit vero.
          </p>
        </div>
        {/* navigation button  */}
      </div>

      {/* main other service container  */}
      <div className="mainContainer">
        <div className="header">
          <h1>check out our latest article</h1>
          <hr className="horizontal" />
        </div>
        <div className="imageContainer">
          <div className="leftContainer">
            <img src={image} alt="description elemet" />
            <h6>
              Diseae detection, check <br /> up in the laboratory
            </h6>
            <p>
              In this case, the role of the health laboratory
              <br />
              is very important to do a disease detection...
            </p>
            <span>read more</span>
          </div>
          <div className="middleContainer">
            <img src={image44} alt="description elemet" />
            <h6>
              Diseae detection, check <br /> up in the laboratory
            </h6>
            <p>
              In this case, the role of the health laboratory
              <br />
              is very important to do a disease detection...
            </p>
            <span>read more</span>
          </div>
          <div className="rightContainer">
            <img src={image55} alt="description elemet" />
            <h6>
              Diseae detection, check
              <br /> up in the laboratory
            </h6>
            <p>
              In this case, the role of the health laboratory
              <br />
              is very important to do a disease detection...
            </p>
            <span>read more</span>
          </div>
        </div>
        <button className="viewAll">viewall</button>
      </div>
    </>
  );
}
