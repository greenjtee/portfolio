export default function Work() {
    return (
        <div className="work">
            <div className="work-item">
                <div className="work-left">
                    <div className="work-header-text">
                        John Deere
                    </div>
                    <div className="work-text">
                        Starting during the Summer of 2020, I have been an intern at John Deere.
                        My internships consisted of
                        data analytics (2020),
                        fronted/backend web development (2021),
                        and embedded software verification (2022).
                    </div>
                </div>
                <div className="work-right">
                    <img className="work-right-image" alt="John Deere logo" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2Fc%2Fcf%2FJohn_Deere_logo.svg%2F1280px-John_Deere_logo.svg.png&f=1&nofb=1&ipt=259dcd418adb9bcebd42ad919c5e3bf7b502a08e22d79c2050f156aa002b87b7&ipo=images"></img>
                </div>
            </div>
            <div className="work-item">
                <div className="work-left">
                    <div className="work-header-text">
                        ARA (undergraduate research assistant)
                    </div>
                    <div className="work-text">
                        During my last two semesters of my undergraduate degree,
                        I was able to take part in the ARA Wireless program.
                        ARA is:
                        <blockquote cite="https://arawireless.org/about-ara/">
                        An at-scale platform for advanced wireless research
                        to be deployed across the Iowa State University (ISU) campus,
                        City of Ames (where ISU resides), and surrounding research and producer
                        farms as well as rural communities in central Iowa, spanning a rural area
                        with diameter over 60km. It serves as a wireless living lab for smart and
                        connected rural communities, enabling the research and development of
                        rural-focused wireless technologies that provide affordable, high-capacity
                        connectivity to rural communities and industries such as agriculture.
                        </blockquote>
                        My role in the ARA program was to develop a deployment/development strategy
                        for OpenStack, an open-source cloud platform. During the assistantship, I
                        gained experience working in GitLab CI/CD, a system for building, testing,
                        and deploying software automatically.
                    </div>
                </div>
                <div className="work-right">
                    <img className="work-right-image" alt="ARA program logo" src="https://www.news.iastate.edu/media/2021/06/WF0J.jpg"></img>
                </div>
            </div>
        </div>
    );
}
