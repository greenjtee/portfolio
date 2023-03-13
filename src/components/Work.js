export default function Work() {
    return (
        <div className="work">
            <div className="work-item">
                <div className="work-left">
                    <div className="work-header-text">
                        John Deere
                    </div>
                    <div className="work-text">
                        Starting during the Summer of 2020, I was an intern at John Deere.
                        My internships consisted of:
                        <ul>
                            <li>Data analytics (2020)</li>
                            <li>Fronted/backend web development (2021)</li>
                            <li>Embedded software verification (2022)</li>
                        </ul>
                        During my virtual and in-the-office internships, my experiences spanned many
                        different fields (literally) of engineering. I gained hands on experience with
                        hardware testing, as well as in simulation. I also helped develop tools to make employees
                        jobs easier, including a financial data analysis tool and Rally data export tool.
                        During my summer of 2022, I was able to get my first experience in the office since
                        being virtual, and I am grateful that I got that before beginning a career.
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
                        and deploying software automatically. I also learned a significant amount about
                        OpenStack, and took part in some of the development work that the rest of my team
                        was mostly responsible for.
                    </div>
                </div>
                <div className="work-right">
                    <img className="work-right-image" alt="ARA program logo" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Farawireless.org%2Fwp-content%2Fuploads%2F2021%2F05%2FARA_logo4-01-1.png&f=1&nofb=1&ipt=14243ba6e54c33e9fe07210652b6ad0eb924b3ee71bff438728d3bd571a05db3&ipo=images"></img>
                </div>
            </div>
        </div>
    );
}
