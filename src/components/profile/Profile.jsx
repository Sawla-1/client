import "../../styles.css"

export default function Profile() {
// For Download CV Button
  const handleClickDownload = () => {
    window.open('./assets/resume-example.pdf', '_blank'); // Opens the PDF in a new tab
  };
// For Contact Info Button
  const handleClickContact = () => {
    window.location.href = './#contact'; // Redirects to the section with id="contact"
  };

  // For Linkin icon
  const handleClickLinkin = () => {
    window.location.href = 'https://www.linkedin.com/in/nc-boy-81826b277/';
  };
  // For Github icon
  const handleClickGithub = () => {
    window.location.href = 'https://github.com/Sawla-1';
  };

  return (
    <>
    {/* <!-------------------------------------- Profile page section  --------------------------------------------> */}
    <section id="profile">
                              {/* <!-----------Picture(LS)----------> */}
      <div class="section__pic-container">
        <img src="./assets/profile-jc2.png" alt="JC profile" />
      </div>
                              {/* <!------------Text(RS)-------------> */}
      <div class="section__text">
        <p class="section__text__p1">Hello, I'm</p>
        <h1 class="title">Sheenay</h1>
        <p class="section__text__p2">Fullstack Developer</p>
        <div class="btn-container">
          <button className="btn btn-color-2" onClick={handleClickDownload}>Download CV</button>
          <button className="btn btn-color-1" onClick={handleClickContact}>Contact Info</button>
        </div>
        <div id="socials-container">
        <img
          src="./assets/linkedin.png"
          alt="My LinkedIn profile"
          className="icon"
          onClick={handleClickLinkin}
        />
        <img
          src="./assets/github.png"
          alt="My Github profile"
          className="icon"
          onClick={handleClickGithub}
        />
        </div>
      </div>
    </section>
    {/* <!---------------------------------- ------------------------  ----------------------------------------> */}
    
</>
  )
}
