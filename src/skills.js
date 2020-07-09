import React from "react"

function Contact(){
    return(
        <>
            <h1 className="h1contact">Programming</h1>
            <div className="skill">
            <div className="contact">
                <div className="img-holder-skills">
                <img className="imgcontact"src="https://p1.hiclipart.com/preview/951/574/485/react-logo-javascript-redux-vuejs-angular-angularjs-expressjs-front-and-back-ends-png-clipart.jpg" />
                <img className="imgcontact"src="data:image/png;base64,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" />
                <img className="imgcontact"src="https://img.favpng.com/23/17/21/cascading-style-sheets-logo-clip-art-css3-html-png-favpng-02Jf9uCUdxVRWuMMTgdms0qFT.jpg"/>
                <img className="imgcontact"src="https://banner2.cleanpng.com/20180410/dbq/kisspng-react-javascript-responsive-web-design-github-angu-github-5accac24ced243.4761515415233628528472.jpg"/>
                <img className="imgcontact"src="https://www.pikpng.com/pngl/m/256-2562286_github-logo-png-github-clipart.png"/>
                <img className="imgcontact"src="https://f0.pngfuel.com/png/306/37/node-js-logo-png-clip-art.png"/>
                <img className="imgcontact"src="https://toppng.com/uploads/preview/9kib-354x415-unnamed-mongodb-logo-sv-11562860723mgempnmrq3.png"/>
           </div>
                <div className="skills-name">
                    <div className="each-skill-div"> 
                        <h3>Languages</h3>
                        <ul>
                            <li>JavaScript</li>
                            <li>HTML5</li>
                            <li>CSS3/SASS</li>
                        </ul>
                    </div>
                    <div className="each-skill-div">
                         <h3>Frameworks</h3>
                         <ul>
                            <li>React</li>
                            <li>Express</li>
                            <li>Mongoose</li>
                        </ul>
                    </div>
                    <div className="each-skill-div">
                         <h3>Databases</h3>
                         <ul>
                            <li>MongoDB</li>
                            <li>SQL</li>
                        </ul>
                    </div>
                    <div className="each-skill-div">
                         <h3>Tools</h3>
                         <ul>
                            <li>Node.js</li>
                            <li>Github</li>
                        </ul>
                    </div>
                </div>
                </div> 
         </div>
      </>
    )
}
export default Contact