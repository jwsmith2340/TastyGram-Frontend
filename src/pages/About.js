import './About.scss'

const About = (props) => {
    return (
        <div className="aboutContainer">
            <div className="jaredAbout">
                <h1>Jared Bradley</h1>
                <h3>Front End Developer</h3>
                <img src="https://i.imgur.com/gN45uWO.jpg?1" alt="Jared" />
                <h4>Hello! I'm Jared and I was the Front End developer for TastyGram!
                     The front end of TastyGram was created using React.
                     I had a blast making this app with my teammates!</h4>
                <h5>Contact Email: jaredbradley95@gmail.com</h5>
            </div>
            <div className="jamesAbout">
                <h1>James Smith</h1>
                <h3>Scrum Master/Front End Developer</h3>
                <img src="" alt="James" />
                <h4>Stuff</h4>
            </div>
            <div className="micahAbout">
                <h1>Micah Stewart</h1>
                <h3>Back End Developer</h3>
                <img src="" alt="Micah" />
                <h4>Stuff</h4>
            </div>
        </div>
    )
};

export default About;