import "../../styles.css"

export default function About() {
  // For Down arrow link to Experience section
  const handleClick = () => {
    window.location.href = './#experience'; // Navigate to the #experience section
  };

  return (
    <>
    {/* <!------------------------------------- About Section  ------------------------------------------------> */}
    <section id="about">

                              {/* <!------------Titles-------------> */}

      <p class="section__text__p1">Get To Know More</p>
      <h1 class="title">About Me</h1>

                              {/* <!------------Main Container-------------> */}

      <div class="section-container">

                              {/* <!------------image(LS)-------------> */}

        <div class="section__pic-container">
          <img
            src="./assets/about-pic.png"
            alt="My Profile"
            class="about-pic"
          />
        </div>

                              {/* <!------------Text(RS) - container -------------> */}

        <div class="about-details-container">
          <div class="about-containers">
            <div class="details-container">
              <img
                src="./assets/experience.png"
                alt="Experience icon"
                class="icon"
              />
              <h3>Experience</h3>
              <p>2+ years <br />Frontend Development</p>
            </div>
            <div class="details-container">
              <img
                src="./assets/education.png"
                alt="Education icon"
                class="icon"
              />
              <h3>Education</h3>
              <p>B.Sc. Bachelors Degree<br />M.Sc. Masters Degree</p>
            </div>
          </div>
          <div class="text-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
              reprehenderit et laborum, rem, dolore eum quod voluptate
              exercitationem nobis, nihil esse debitis maxime facere minus sint
              delectus velit in eos quo officiis explicabo deleniti dignissimos.
              Eligendi illum libero dolorum cum laboriosam corrupti quidem,
              reiciendis ea magnam? Nulla, impedit fuga!
            </p>
          </div>
        </div>
      </div>
      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={handleClick}
      />
    </section>
    {/* <!---------------------------------- ------------------------  ----------------------------------------> */}

</>
  )
}
