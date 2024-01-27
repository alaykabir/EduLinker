import "./onBoarding.css";
import { Link, useNavigate } from "react-router-dom";

function onBoarding() {
  const navigate = useNavigate();
  return (
    <>
      <div className="wrap">
        <section className="banner">
          <div className="banner-left">
            <img
              src="https://imgix.ranker.com/list_img_v2/14749/2894749/original/2894749?fit=crop&fm=pjpg&q=80&dpr=2&w=1200&h=720"
              alt=""
            />
          </div>
          <div className="banner-right">
            <h1>EduLinker</h1>
            <p className="tagline">Teacher hai ya Student hai?</p>
            <div className="btn-wrap">
              <div className="btn download-btn">
                <Link to="/login" state={{ role: "teacher" }}>
                  For Teachers
                </Link>
              </div>
              <div className="btn demo-btn">
                <Link to="/login" state={{ role: "student" }}>
                  For Students
                </Link>
              </div>
            </div>
          </div>
          <div className="description">
            <p>EduLinker is basically a Sasta Copy of MIS.</p>
            <p>
              This Gareebo ka MIS project ka Idea goes to none other than
              Subhrajit Maalik.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default onBoarding;
