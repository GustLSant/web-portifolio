import Project from "./Project";
import WeatherAppScreenshot01 from "../../screenshots/weather-app/weather-app-full-screenshot-01.png"
import WeatherAppScreenshot02 from "../../screenshots/weather-app/weather-app-full-screenshot-02.png"
import WeatherAppScreenshot03 from "../../screenshots/weather-app/weather-app-full-screenshot-03.png"
import TodoAppScreenShot01 from "../../screenshots/todo-app/todo-app-full-screenshot-01.png"
import TodoAppScreenShot02 from "../../screenshots/todo-app/todo-app-full-screenshot-02.png"
import TodoAppScreenShot03 from "../../screenshots/todo-app/todo-app-full-screenshot-03.png"
import TodoAppScreenShot04 from "../../screenshots/todo-app/todo-app-full-screenshot-04.png"
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
                        "Descrição do aplicativo",
                        "Features do aplicativo",
                        "Tecnologias usadas no aplicativo"
                    ]}
                />
                <Project 
                    label={"ToDo App"} 
                    link={"https://gustlsant-todoapp.vercel.app/"} 
                    miniScreenshotsArray={[TodoAppScreenShot02, TodoAppScreenShot01, TodoAppScreenShot03, TodoAppScreenShot04]}
                    contents={[
                        "Descrição do aplicativo",
                        "Features do aplicativo",
                        "Tecnologias usadas no aplicativo"
                    ]}
                />
            </div>
        </div>
    );
}

export default ProjectsSection;