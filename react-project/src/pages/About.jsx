function About() {
  return (
    <div className="page1" id="about">
      <h2>About RemedyHub</h2>
      <p>
        RemedyHub is a simple web application that provides natural
        home remedies for skin and hair problems.
      </p>
      <p>
        It helps users find easy and safe solutions using
        natural ingredients available at home.
      </p>
    <div className='features'>
    <div className='feature'>
    <h3>✔️Safe</h3>
    <p>Natural ingredients you can trust</p>
    </div>
    <div className='feature'>
    <h3>✔️Simple</h3>
    <p>Easy steps to follow at home</p>
    </div>
    <div className='feature'>
    <h3>✔️Effective</h3>
    <p>Results you can see and feel</p>
    </div>
    </div>
    
  <footer style={{
        marginTop: "40px",
        padding: "10px",
        background: "#eee",
        textAlign: "center"
      }}>
        <p>© 2026 RemedyHub | All Rights Reserved</p>
      </footer>
    </div>
  );
}
export default About;