export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  // Inline style object for the badges
  const badgeStyle = {
      height: '50px', // Set a fixed height for all badges
      width: 'auto', // Width will scale automatically
  };

  const gitStyle = {
    height: '200px', // Set a fixed height for all badges
    width: 'auto', // Width will scale automatically
  };

  const centeredTextStyle = {
    textAlign: 'center'
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                <h2 style={centeredTextStyle}>Skills</h2>
                    <div className="tech-badges">
                        <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt="Python Badge" style={badgeStyle}/>
                        <img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white" alt="Java Badge" style={badgeStyle}/>
                        <img src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white" alt="C Badge" style={badgeStyle}/>
                        <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3 Badge" style={badgeStyle}/>
                        <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5 Badge" style={badgeStyle}/>
                        <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript Badge" style={badgeStyle}/>
                        <img src="https://img.shields.io/badge/latex-%23008080.svg?style=for-the-badge&logo=latex&logoColor=white" alt="LaTeX Badge" style={badgeStyle}/>
                        <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJS Badge" style={badgeStyle}/>
                        <img src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap Badge" style={badgeStyle}/>
                        <img src="https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white" alt="Canva Badge" style={badgeStyle}/>
                        <img src="https://img.shields.io/badge/adobe_photoshop-%2331A8FF.svg?style=for-the-badge&logo=adobephotoshop&logoColor=white" alt="Adobe Photoshop Badge" style={badgeStyle}/>
                        <img src="https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white" alt="NumPy Badge" style={badgeStyle}/>
                        <img src="https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white" alt="Pandas Badge" style={badgeStyle}/>
                        <img src="https://img.shields.io/badge/Prezi-%23000000.svg?style=for-the-badge&logo=Prezi&logoColor=white" alt="Prezi Badge" style={badgeStyle}/>
                        <img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL Badge" style={badgeStyle}/>
                        <img src="https://img.shields.io/badge/bash-%23808080.svg?style=for-the-badge&logo=bash&logoColor=white" alt="Bash Badge" style={badgeStyle}/>
                        <img src="https://img.shields.io/badge/haskell-%23563D7C.svg?style=for-the-badge&logo=haskell&logoColor=white" alt="Haskell Badge" style={badgeStyle}/>
                        <img src="https://img.shields.io/badge/prolog-%23ED8B02.svg?style=for-the-badge&logo=prolog&logoColor=white" alt="Prolog Badge" style={badgeStyle}/>
                        <img src="https://img.shields.io/badge/linux-%23000000.svg?style=for-the-badge&logo=linux&logoColor=white" alt="Linux Badge" style={badgeStyle}/>
                        <img src="https://img.shields.io/badge/ASP.NET-%234E4E94.svg?style=for-the-badge&logo=ASP.NET&logoColor=white" alt="ASP.NET Badge" style={badgeStyle}/>
                        <img src="https://img.shields.io/badge/unity-%23404040.svg?style=for-the-badge&logo=unity&logoColor=white" alt="Unity Badge" style={badgeStyle}/>
                        <img src="https://img.shields.io/badge/docker-%231D63ED.svg?style=for-the-badge&logo=docker&logoColor=white" alt="Docker Badge" style={badgeStyle}/>
                    </div>
                    <div class="tech-badges-2">
                      <img src="https://github-readme-stats.vercel.app/api?username=george-salib&theme=dark&hide_border=false&include_all_commits=true&count_private=true" alt="Github Commits" style={gitStyle}/>
                      <img src="https://github-readme-streak-stats.herokuapp.com/?user=george-salib&theme=dark&hide_border=false" alt="Github Stats" style={gitStyle}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
