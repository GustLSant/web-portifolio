import Project from "./Project";
import WeatherAppScreenshot01 from "../../screenshots/weather-app/weather-app-mini-screenshot-01.jpg"
import WeatherAppScreenshot02 from "../../screenshots/weather-app/weather-app-mini-screenshot-02.jpg"
import WeatherAppScreenshot03 from "../../screenshots/weather-app/weather-app-mini-screenshot-03.jpg"
import TodoAppScreenShot01 from "../../screenshots/todo-app/todo-app-mini-screenshot-01.jpg"
import TodoAppScreenShot02 from "../../screenshots/todo-app/todo-app-mini-screenshot-02.jpg"
import TodoAppScreenShot03 from "../../screenshots/todo-app/todo-app-mini-screenshot-03.jpg"
import TodoAppScreenShot04 from "../../screenshots/todo-app/todo-app-mini-screenshot-04.jpg"
import PaletteHelperScreenShot01 from "../../screenshots/palette-helper/palette-helper-mini-screenshot-01.jpg"
import PaletteHelperScreenShot02 from "../../screenshots/palette-helper/palette-helper-mini-screenshot-02.jpg"
import PaletteHelperScreenShot03 from "../../screenshots/palette-helper/palette-helper-mini-screenshot-03.jpg"
import ValentimScreenshot01 from "../../screenshots/valentim-landing-page/valentim-screenshot-mini-01.jpg"
import ValentimScreenshot02 from "../../screenshots/valentim-landing-page/valentim-screenshot-mini-02.jpg"
import ValentimScreenshot03 from "../../screenshots/valentim-landing-page/valentim-screenshot-mini-03.jpg"
import "./ProjectsSection.css"


function ProjectsSection(props){
    const lg = props.language

    return (
        <div className="projects-section black-section">
            <h2> {(lg === "pt") ? "Meus Projetos" : "My Projects"} </h2>
            
            <p className="projects-section__hint-text"> {(lg === "pt") ? "clique nas imagens para abrir os apps" : "click on images to open projects"}</p>
            
            <div className="projects-container">
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
                    label={"Palette Helper App"} 
                    link={"https://palette-helper-gustlsant.vercel.app/"} 
                    miniScreenshotsArray={[PaletteHelperScreenShot03, PaletteHelperScreenShot01, PaletteHelperScreenShot02]}
                    contents={[
                        [
                            (lg === "pt") ? "Aplicativo Web para gerar paletas de cores automaticamente com base em valores de Hue Shifting" : "Web application to automatically generate color palettes based on Hue Shifting values.",
                        ],
                        [
                            (lg === "pt") ? "Totalmente Responsivo" :"Fully responsive" ,
                            (lg === "pt") ? "Permite a criação de paletas com quantas cores quiser." : "Allows the creation of palettes with as many colors as desired",
                            (lg === "pt") ? "Possui uma visualizacao 3d de como o gradiente de cores é visualizado" : "Features a 3D visualization of how the color gradient is displayed",
                            (lg === "pt") ? "Permite rápida seleção de cores complementares ou triádicas" : "Allows quick selection of complementary or triadic colors",
                            (lg === "pt") ? "Pode exportar uma imagem com as paletas criadas" : "Can export an image with the created palettes",
                            (lg === "pt") ? "Pode importar e exportar paletas de cores criadas pelo app" : "Can import and export color palettes created by the app",
                            (lg === "pt") ? "Permite uma seleção de cor com múltiplos parâmetros" : "Allows color selection with multiple parameters"
                        ],
                        [
                            "React",
                            "Typescript",
                            "TailwindCSS",
                            "Jest + React Testing Library",
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