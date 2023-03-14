import twitchster from "../images/twitchster.png"
import caveexplorer from "../images/cave-explorer.gif"
import antsim from "../images/ant-sim.gif"

export default function Projects() {
    return (
        <div className="project">
            <div className="project-item">
                <div className="project-left">
                    <div className="project-header-text">
                        Twitchster
                    </div>
                    <div className="project-text">
                        Twitchster is a twitch client application for C++. It is written without the use of any libraries for HTTP requests or websockets,
                        instead implementing them only using POSIX sockets. This makes the program very simple and easy for others to use. I am still working
                        on the development, but I aim to make it a public project soon. I gained a lot of skill in the following:
                        <ul>
                            <li>HTTP / TLS</li>
                            <li>Websocket Protocol</li>
                            <li>IRC Protocol</li>
                        </ul>
                    </div>
                </div>
                <div className="project-right">
                    <img className="project-right-image" alt="twitchster screenshot" src={twitchster}></img>
                </div>
            </div>
            <div className="project-item">
                <div className="project-right">
                    <img className="project-right-image" style={{"width": "auto", "height": "400px"}} alt="a simulation of an ant colony" src={antsim}></img>
                </div>
                <div className="project-left">
                    <div className="project-header-text">
                        Ant Simulation
                    </div>
                    <div className="project-text">
                        This ant simulation is inspired by <a href="https://www.youtube.com/watch?v=X-iSQQgOd1A">Sebastian Lague's video</a> on a similar concept.
                        My project uses C++ and OpenGL compute shaders to render the output with high performance. It has many simple ant agents, each of which
                        follow the direction of nearby "food". This naturally creates a colony structure. I mostly used the following resource: <a href="https://learnopengl.com/Introduction">OpenGL</a>
                        The skills I learned include:
                        <ul>
                            <li>C++</li>
                            <li>OpenGL</li>
                            <li>Shaders</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="project-item">
                <div className="project-left">
                    <div className="project-header-text">
                        Cave Explorer
                    </div>
                    <div className="project-text">
                        This project uses the concept of <a href="https://en.wikipedia.org/wiki/Marching_squares">marching squares</a>, a technique useful for making realistic looking cave structures.
                        Using OpenGL, I am able to render these squares to the screen and connect them using linear interpolation to smooth the edges. I mostly used the following resources in addition
                        to the Wikipedia article linked before: <a href="https://learnopengl.com/Introduction">OpenGL</a>
                        I gained the most experiene with:
                        <ul>
                            <li>OpenGL</li>
                            <li>Marhcing squares algorithm and implementation</li>
                            <li>C++</li>
                        </ul>
                    </div>
                </div>
                <div className="project-right">
                    <img className="project-right-image" style={{"width": "auto", "height": "300px"}} alt="a cave simulation" src={caveexplorer}></img>
                </div>
            </div>
        </div>
    );
}
