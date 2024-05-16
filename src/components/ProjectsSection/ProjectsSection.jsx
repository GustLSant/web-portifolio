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


function ProjectsSection(props){
    const lg = props.language

    return (
        <div className="projects-section black-section">
            <h2> {(lg === "pt") ? "Meus Projetos" : "My Projects"} </h2>
            
            <div className="projects-container">
                <Project 
                    label={"Weather App"} 
                    link={"https://weather-app-gustlsant.vercel.app/"} 
                    miniScreenshotsArray={[WeatherAppScreenshot01, WeatherAppScreenshot02, WeatherAppScreenshot03]}
                    contents={[
                        [
                            (lg === "pt") ? "Aplicativo Web que te permite visualizar informações sobre o clima de qualquer cidade do mundo." : "Web app that allows you to view weather information for any city in the world.",
                        ],
                        [
                            (lg === "pt") ? "Totalmente responsivo" : "Fully responsive",
                            (lg === "pt") ? "Mostra informações atuais e uma previsão dos próximos 5 dias" : "Shows current informations and 5 days forecast",
                            (lg === "pt") ? "Mostra uma imagem similar de como o clima daquela região deve parecer" : "Shows a similar image of what the weather might be like there"
                        ],
                        [
                            "React",
                            "JavaScript",
                            "CSS",
                            "HTML",
                        ]
                    ]}
                    language={lg}
                />
                <Project 
                    label={"ToDo App"} 
                    link={"https://gustlsant-todoapp.vercel.app/"} 
                    miniScreenshotsArray={[TodoAppScreenShot02, TodoAppScreenShot01, TodoAppScreenShot03, TodoAppScreenShot04]}
                    contents={[
                        [
                            (lg === "pt") ? "Aplicativo Web para administrar suas futuras e atuais tarefas" : "Web app to manage your daily and future tasks.",
                        ],
                        [
                            (lg === "pt") ? "Totalmente Responsivo" :"Fully responsive" ,
                            (lg === "pt") ? "Permite aos usuários criar tarefas e 'subtarefas' para cada atividade" : "Allows user to create tasks and 'step tasks' for each activity",
                            (lg === "pt") ? "Permite aos usuários arquivar tarefas concluídas, para futura visualização" : "Allows user to archive completed tasks, for later viewing",
                            (lg === "pt") ? "Possui temas claro e escuro" : "Has a light and dark mode",
                            (lg === "pt") ? "Pode exportar e importar dados entre diferentes dispositivos" : "Can export and import tasks between different devices",
                            (lg === "pt") ? "Cada 'subtarefa' pode ser marcada como concluída independentemente" : "Each 'step task' can be marked as done independtly",
                            (lg === "pt") ? "Possui um sistema de cancelar e salvar alterações para prevenir erros do usuário" : "Has a cancel and save editing system that prevents errors"
                        ],
                        [
                            "React",
                            "JavaScript",
                            "CSS",
                            "HTML"
                        ]
                    ]}
                    language={lg}
                />
                <Project 
                    label={"Furniture Sales LandingPage"} 
                    link={"https://projeto-site-planejados.vercel.app/"} 
                    miniScreenshotsArray={[ValentimScreenshot01, ValentimScreenshot03, ValentimScreenshot02]}
                    contents={[
                        [
                            (lg === "pt") ? "LandingPage de venda de móveis quer permite aos usuários visualizar imagens dos produtos em alta resolução e contatar a empresa responsável" : "Furniture Sales LandingPage where customers can visualize high resolution images of products and contact the company.",
                        ],
                        [
                            (lg === "pt") ? "Totalmente responsivo" : "Fully responsive",
                            (lg === "pt") ? "Permite aos usuários visualizar produtos em minuatura ou numa janela de alta resolução" : "Allows user visualize products in miniature or in a high-resolution window",
                            (lg === "pt") ? "Permite aos usuários contatar a empresa responsável" : "Allows user to contact the company",
                        ],
                        [
                            "JavaScript",
                            "CSS",
                            "HTML"
                        ]
                    ]}
                    language={lg}
                />
            </div>
        </div>
    );
}

export default ProjectsSection;