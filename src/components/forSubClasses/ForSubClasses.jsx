import "./forSubClasses.css";

export default function ForSubClasses() {
  // For Project 1 image link to Project 1
  const handleClickClass1 = () => {
    window.location.href = 'https://github.com/';
  };

  return (
    <>
    {/* <!------------------------------------- Classes Section  ------------------------------------------------> */}
    <section id="classes">

                              {/* <!------------Titles-------------> */}

      {/* <p class="section__text__p1">Get To Know More</p> */}
      <h1 class="title">Classes</h1>

                              {/* <!------------Classes Main Container-------------> */}
        <div class="classes-container">
                          {/* <!------------Text(LS)-------------> */}

          <div class="class1-text-container">
              {/* <!--  Class 1 Title --> */}
              <h2 class="">Physic</h2>
              {/* <!--  Class 1 Desc --> */}
              <div class="paragraph">
                  <p class="">Built for businesses. Create, manage, and scale custom training programs effortlessly. Navu360 empowers companies to simplify their training operations and achieve quantifiable development</p>
              </div>
              
              {/* <!--  Class 1 Feature --> */}
              <div class="">
                  {/* <!--  Class 1 Feature Title --> */}
                  <h3 class="">Features</h3>
                  {/* <!--  Class 1 Feature Lists--> */}
                  <ul>
                    <p><li>Single Sign On with Auth0</li></p>
                    <p><li>Single Sign On with Auth0</li></p>
                    <p><li>Single Sign On with Auth0</li></p>
                    <p><li>Single Sign On with Auth0</li></p>
                    <p><li>Single Sign On with Auth0</li></p>
                    <p><li>Single Sign On with Auth0</li></p>
                  </ul>
              </div>

              {/* <!--  Class 1 Icons and Button --> */}
              <div class="">

                  {/* <!--  Class 1 Button --> */}
              <button
                className="btn btn-color-2 project-btn"
                onClick={handleClickClass1}
              >
              See Class
            </button>
              </div>
          </div>
                              {/* <!------------Image(RS)-------------> */}

          <div class="section__pic-container">
            <img
              src="./assets/project-1.png"
              alt="Class1 view"
              class="about-pic"
            />
          </div>
        </div>

                                      {/* <!------------Classes Main Container-------------> */}
                                      <div class="classes-container">
                          {/* <!------------Text(LS)-------------> */}

          <div class="class1-text-container">
              {/* <!--  Class 1 Title --> */}
              <h2 class="">Datastructure</h2>
              {/* <!--  Class 1 Desc --> */}
              <div class="paragraph">
                  <p class="">Built for businesses. Create, manage, and scale custom training programs effortlessly. Navu360 empowers companies to simplify their training operations and achieve quantifiable development</p>
              </div>
              
              {/* <!--  Class 1 Feature --> */}
              <div class="">
                  {/* <!--  Class 1 Feature Title --> */}
                  <h3 class="">Features</h3>
                  {/* <!--  Class 1 Feature Lists--> */}
                  <ul>
                    <p><li>Single Sign On with Auth0</li></p>
                    <p><li>Single Sign On with Auth0</li></p>
                    <p><li>Single Sign On with Auth0</li></p>
                    <p><li>Single Sign On with Auth0</li></p>
                    <p><li>Single Sign On with Auth0</li></p>
                    <p><li>Single Sign On with Auth0</li></p>
                  </ul>
              </div>

              {/* <!--  Class 1 Icons and Button --> */}
              <div class="">

                  {/* <!--  Class 1 Button --> */}
              <button
                className="btn btn-color-2 project-btn"
                onClick={handleClickClass1}
              >
              See Class
            </button>

              </div>
          </div>
                              {/* <!------------Image(RS) - Text Container -------------> */}

          <div class="section__pic-container">
            <img
              src="./assets/project-2.png"
              alt="Class2 view"
              class="about-pic"
            />
          </div>
        </div>
    </section>
    {/* <!---------------------------------- ------------------------  ----------------------------------------> */}

</>
  )
}
