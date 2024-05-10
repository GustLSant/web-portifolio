import Project from "./Project";
import WeatherAppScreenshot01 from "../../screenshots/weather-app/weather-app-mini-screenshot-01.jpg"
import WeatherAppScreenshot02 from "../../screenshots/weather-app/weather-app-mini-screenshot-02.jpg"
import WeatherAppScreenshot03 from "../../screenshots/weather-app/weather-app-mini-screenshot-03.jpg"
import TodoAppScreenShot01 from "../../screenshots/todo-app/todo-app-mini-screenshot-01.jpg"
import TodoAppScreenShot02 from "../../screenshots/todo-app/todo-app-mini-screenshot-02.jpg"
import TodoAppScreenShot03 from "../../screenshots/todo-app/todo-app-mini-screenshot-03.jpg"
import TodoAppScreenShot04 from "../../screenshots/todo-app/todo-app-mini-screenshot-04.jpg"
import ValentimScreenshot01 from "../../screenshots/valentim-landing-page/valentim-screenshot-mini-01.jpg"
import ValentimScreenshot02 from "../../screenshots/valentim-landing-page/valentim-screenshot-mini-02.jpg"
import ValentimScreenshot03 from "../../screenshots/valentim-landing-page/valentim-screenshot-mini-03.jpg"
import "./ProjectsSection.css"


function ProjectsSection() {

    return (
        <div className="projects-section black-section">
            <h2>My Projects</h2>
            
            <div className="projects-container">
                <Project 
                    label={"Weather App"} 
                    link={"https://weather-app-gustlsant.vercel.app/"} 
                    miniScreenshotsArray={[WeatherAppScreenshot01, WeatherAppScreenshot02, WeatherAppScreenshot03]}
                    contents={[
                        [
                            "Web app that allows you to view weather information for any city in the world.",
                        ],
                        [
                            "Full responsive",
                            "Shows current informations and 5 days forecast.",
                            "Shows a similar image of what the weather might be like there."
                        ],
                        [
                            "React",
                            "JavaScript",
                            "CSS",
                            "HTML"
                        ]
                    ]}
                />
                <Project 
                    label={"ToDo App"} 
                    link={"https://gustlsant-todoapp.vercel.app/"} 
                    miniScreenshotsArray={[TodoAppScreenShot02, TodoAppScreenShot01, TodoAppScreenShot03, TodoAppScreenShot04]}
                    contents={[
                        [
                            "Web app to manage your daily and future tasks.",
                        ],
                        [
                            "Full responsive",
                            "Allows user to create tasks and 'step tasks' for each task.",
                            "Allows user to 'archive' completed tasks, for later viewing",
                            "Has a light and dark mode",
                            "Each 'step task' can be marked as done independtly",
                            "Has a cancel and save editing system that prevents errors"
                        ],
                        [
                            "React",
                            "JavaScript",
                            "CSS",
                            "HTML"
                        ]
                    ]}
                />
                <Project 
                    label={"Furniture Sales LandingPage"} 
                    link={"https://projeto-site-planejados.vercel.app/"} 
                    miniScreenshotsArray={[ValentimScreenshot01, ValentimScreenshot03, ValentimScreenshot02]}
                    contents={[
                        [
                            "Furniture Sales LandingPage where customers can visualize products images and contact the company.",
                        ],
                        [
                            "Full responsive",
                            "Allows user to create tasks and 'step tasks' for each task.",
                            "Allows user to 'archive' completed tasks, for later viewing",
                            "Has a light and dark mode",
                            "Each 'step task' can be marked as done independtly",
                            "Has a cancel and save editing system that prevents errors"
                        ],
                        [
                            "JavaScript",
                            "CSS",
                            "HTML"
                        ]
                    ]}
                />
            </div>
        </div>
    );
}

export default ProjectsSection;