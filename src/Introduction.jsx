function Introduction(){
    return(
        <div id="introduction">
        <main-container>
            <p id="whatwedo">Мы занимаемся разработкой и внедрением <br></br> инновационных решений для эффективного <br></br> управления водными ресурсами. <br></br> Наши проекты включают в себя:</p>
        </main-container>
        <div className="projects">
            <div className="project1">
                <div className="background-1">
                <img src="../Rectangle1.svg" id="rec1"></img>
                </div>
                <div className="bg-decoration-1">
                 <div className="shield-container">
                <img src="../sheild-front-color.svg" id="shield" ></img>
                </div>
                <div className="text-container1">
                <h3 id="h3project1">Разработка фильтров для очистки воды в сельском хозяйстве</h3>
                <p id="pproject1">В сельском хозяйстве вода играет важную роль в обеспечении здоровья и роста растений, а также в поддержании жизнедеятельности животных. Наши фильтры предназначены для обеспечения чистой и безопасной воды на сельскохозяйственных предприятиях. Мы разрабатываем и производим фильтры, специально адаптированные для сельскохозяйственных нужд, учитывая особенности и требования данной отрасли.</p>
                </div>
                </div>
            </div>
            <div className="project2">
                <div className="background-2">
                    <img src="../Rectangle2.svg"></img>
                </div>
                <div className="bg-decoration-2">
                    <div className="settings-container">
                        <img src="../setting-front-color.svg"></img>
                    </div>
                    <div className="text-container2">
                        <h3 id="h3project2">Разработка фильтров для очистки воды для бытового использования</h3>
                        <p id="pproject2">Чистая вода является основой здорового образа жизни. Наши фильтры для бытового использования предназначены для обеспечения вашего дома чистой и безопасной водой для питья, приготовления пищи и других бытовых нужд.</p>
                    </div>
                </div>
            </div>
        </div>

        </div>
    )
}
export default Introduction