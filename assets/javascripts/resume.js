console.log('loaded');

(() => {
  let theAssets = document.getElementsByClassName('asset');
  let assetArray = Array.from(theAssets);
  assetArray.forEach((ass) => {
    ass.addEventListener('click', () => switchToSkill(ass.dataset.id));
  });
  
  const detTitle = document.getElementById('det');
  const detCont = document.getElementById('cont');
  const resItems = document.getElementById('resitems');
  
  const switchToSkill = (i) => {
    const currentSkill = skills[i];
    detTitle.innerHTML = currentSkill.name;
    detCont.innerHTML = currentSkill.desc;
    expDisplay(i);
  };
  
  const expDisplay = (i) => {
    let output = '';
    for (let experience of experiences) {
      if (experience.skills.indexOf(parseInt(i)) !== -1) {
        output += `<div class='resitem'>
                    <div class='meta'>
                      <h3>${experience.name}</h3>
                      <span class='dates'>${experience.start} - ${experience.end}</span>
                    </div> 
                      <p>${experience.desc}</p>
                   </div>`;
      }
    }
    resItems.innerHTML = output;
  };
  
})();



const skills = [
  {
    id: 0,
    name: 'CSS3',
    desc: `I've used CSS daily for about the past five years, both professionally and in personal projects. Originally, I became proficient as I needed to be able to adjust the look and feel of WordPress sites without touching the PHP. Now, though, I enjoy working with it for its own sake. I'm also comfortable with Sass.`
  },
  {
    id: 1,
    name: 'HTML',
    desc: `I cut my teeth building Blogger themes back in the day, and have playing around with HTML ever since. I'm also passionate about accessibility in web development, which is something I try to work into my HTML practice.`
  },
  {
    id: 2,
    name: 'JavaScript',
    desc: `I've used JavaScript in a number of recent projects, both on the front end to enhance user experience and on the server-side with Node and Express.`
  },
  {
    id: 3,
    name: 'ReactJS',
    desc: `I love working with React, and have used it on a number of apps. I'm also familiar with common React design patterns.`
  },
  {
    id: 4,
    name: 'ExpressJS',
    desc: `A number of my full-stack apps use the Express framework on the server side to handle database requests, authentication, and secure third-party API calls.`
  },
  {
    id: 5,
    name: 'NodeJS',
    desc: `I'm familiar with using Node for server-side development.`
  },
  {
    id: 6,
    name: 'Ruby',
    desc: 'I love the elegance of Ruby -- the language seems to snap into place, like well-ordered building blocks.'
  },
  {
    id: 7,
    name: 'Ruby on Rails',
    desc: 'I have experience using Rails as a backend for both template-based and React sites.',
  },
  {
    id: 8,
    name: 'jQuery',
    desc: `I've used jQuery many times over the years -- from my first attempts at using it to create sliders in Wordpress sites to building full-scale, jQuery-dependent interactive sites.`
  },
  {
    id: 9,
    name: 'Jekyll',
    desc: `The website you're viewing right now was built using Jekyll! I've also built other custom sites in Jekyll, and am familiar with the Siteleaf content management system.`
  },
  {
    id: 10,
    name: 'Liquid',
    desc: `The site you're viewing right now was templated using Liquid!`
  },
  {
    id: 11,
    name: 'Wordpress',
    desc: `I've used Wordpress in some form or other nearly daily for the past five years. My art director position was at an agency that exclusively used Wordpress.`
  },
  {
    id: 12,
    name: 'SEO',
    desc: `I have experience writing SEO-optimized content and site metadata.`
  },
  {
    id: 13,
    name: 'Content Strategy',
    desc: `I was responsible for the strategic creation and layout of content -- with attention paid both to the client's desired voice and the user's experience of the site -- in my previous few positions.`
  },
  {
    id: 14,
    name: 'Adobe Creative Suite',
    desc: `If I could buy a lifetime membership for Adobe Creative Cloud, I would in a heartbeat. I can't remember a day in the past eight years where I haven't opened PhotoShop at least once.`
  },
  {
    id: 15,
    name: 'Sketch',
    desc: `The self-portrait on the homepage of this site was drawn in Sketch. I also have experience creating mockups and wireframes.`
  },
  {
    id: 16,
    name: 'Art Direction',
    desc: `I was responsible for branding and imagery direction for major clients at my last position. Please feel free to contact me for examples of my work.`
  },
  {
    id: 17,
    name: 'Print Design',
    desc: `I was responsible for design, illustration, layout, and printing of my school's literary journal. Since then, I've done print design multiple times for various clients, both personal and professional.`
  },
  {
    id: 18,
    name: 'Darkroom & Digital Photography',
    desc: `Photography was one of my degree concentrations. Additionally, I've worked professionally as a photographer for a group of summer camps.`
  },
  {
    id: 29,
    name: 'Traditional Printmaking',
    desc: `There's something about the process of creating a print edition -- cutting into a woodblock or drawing onto a stone, rolling ink onto a fresh surface, the repetitive motion of the press -- that I love.`
  }
];


const experiences = [
  {
    id: 0,
    name: 'General Assembly',
    skills: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 15],
    start: 'November 23, 2016',
    end: 'March 1, 2017',
    desc: `I took the General Assembly course out of frustration -- I worked with Wordpress every day in my previous positions, and I kept running into simple problems that I knew would be easily solvable if I only had the correct tools, so I decided to learn them. Once I started learning, however, I realized that coding is so much more than just a tool to fix problems. It's a medium that one can use for infinite creation.`,
    projects: [/* array of project IDs go here */]
  },
  {
    id: 2,
    name: 'On Top Visibility Freelance Work',
    skills: [0, 1, 2, 11, 13, 16, 17],
    start: 'January 2017',
    end: 'Ongoing',
    desc: 'I stepped in as needed to help out at my former place of employment. Please contact me for more details about this.',
    projects: 'Contact me for details.',
  },
  {
    id: 3,
    name: 'Personal Development',
    skills: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 15],
    start: '',
    end: 'Ongoing',
    desc: `I'm not happy unless I'm working to perfect something I've already completed or germinating a new idea. Currently I'm working on CallCongress.How, a site that allows constituents to keep track of thei representatives' contact information and legislative activity; Wireframer, a CSS/SCSS framework that accepts some command-line inputs; &Love, a wedding planning site for LGBT+ couples; and an open-source accessibility application.`,
    projects: []
  },
  {
    id: 4,
    name: 'On Top Visibility',
    skills: [0,1,8,11,12,13,14,16,17],
    start: 'August 2014',
    end: 'November 2016',
    desc: `Worked closely with clients both large and small to create beautiful websites showcasing their businesses. Art directed major projects. Oversaw, trained, and instructed junior designers; worked closely with project managers; interviewed and liased with freelance developers and designers. Please contact me for project samples and additional information.`,
    projects: 'Contact me for details.',
  },
  {
    id: 5,
    name: 'The Web Guys',
    skills: [0,1,11,12,13,14],
    start: 'September 2012',
    end: 'June 2014',
    desc: 'Wrote, designed, and built websites using the Wordpress content management system and Bootstrap framework. Troubleshot existing sites using HTML and CSS. Assisted in search engine optimization and social marketing techniques. Created unique visual identites aimed at improving online presence. Please contact me for project samples and additional information.',
    projects: 'Contact me for details.',
  },
];

const projects = [
  {
    id: 1,
    name: 'CallCongress.How',
    path: '/project/callcongress2/',
    skills: [0,1,2,3,4,5,15],
  },
  {
    id: 2,
    name: 'Healthify',
    path: '/project/healthify/',
    skills: [0,1,2,4,5,14],
  }
];