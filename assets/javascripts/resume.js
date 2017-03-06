(() => {
  let theAssets = document.getElementsByClassName('asset');
  let assetArray = Array.from(theAssets);
  assetArray.forEach((ass) => {
    ass.addEventListener('click', () => switchToSkill(ass.dataset.id));
  })
  
  const detTitle = document.getElementById('det');
  const detCont = document.getElementById('cont');
  const resItems = document.getElementById('resitems');
  
  const switchToSkill = (i) => {
    const currentSkill = skills[i];
    detTitle.innerHTML = currentSkill.name;
    detCont.innerHTML = currentSkill.desc;
    expDisplay(i);
  }
  
  const expDisplay = (i) => {
    let output = '';
    for (let experience of experiences) {
      if (experience.skills.indexOf(parseInt(i)) !== -1) {
        output += `<div>
                      <h3>${experience.name}</h3
                   </div>`;
      }
    }
    resItems.innerHTML = output;
  }
  
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
    desc: `I cut my teeth on <i>building</i> Blogger themes back in the day, and have playing around with HTML ever since. I'm also passionate about accessibility in web development, which is something I try to work into my HTML practice.`
  },
  {
    id: 2,
    name: 'JavaScript',
    desc: `Javascript description goes here`
  },
  {
    id: 3,
    name: 'ReactJS',
    desc: 'React description goes here'
  },
  {
    id: 4,
    name: 'ExpressJS',
    desc: 'Express description goes here'
  },
  {
    id: 5,
    name: 'NodeJS',
    desc: 'Node des goes here'
  },
  {
    id: 6,
    name: 'Ruby',
    desc: 'Ruby desc goes here'
  },
  {
    id: 7,
    name: 'Ruby on Rails',
    desc: 'Rails desc goes here',
  },
  {
    id: 8,
    name: 'jQuery',
    desc: 'jQuery desc goes here'
  },
  {
    id: 9,
    name: 'Jekyll',
    desc: 'Jekyll desc goes here'
  },
  {
    id: 10,
    name: 'Liquid',
    desc: 'Liquid desc goes here'
  },
  {
    id: 11,
    name: 'Wordpress',
    desc: 'Wordpress desc goes here'
  },
  {
    id: 12,
    name: 'SEO',
    desc: 'SEO desc goes here'
  },
  {
    id: 13,
    name: 'Content Strategy',
    desc: 'Content Strategy desc goes here'
  },
  {
    id: 14,
    name: 'Adobe Creative Suite',
    desc: 'Adobe desc goes here'
  },
  {
    id: 15,
    name: 'Sketch',
    desc: 'Sketch desc goes here'
  },
  {
    id: 16,
    name: 'Art Direction',
    desc: 'art direction desc goes here'
  },
  {
    id: 17,
    name: 'Print Design',
    desc: 'Print design description goes here'
  },
  {
    id: 18,
    name: 'Darkroom & Digital Photography',
    desc: 'photo desc goes here'
  },
  {
    id: 29,
    name: 'Traditional Printmaking',
    desc: 'Traditional printmaking desc goes here'
  }
];


const experiences = [
  {
    id: 0,
    name: 'General Assembly',
    skills: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 15],
    start: 'November 23, 2016',
    end: 'March 1, 2017',
    desc: 'General Assembly desc goes here',
    projects: [/* array of project IDs go here */]
  },
  {
    id: 2,
    name: 'On Top Visibility Freelance Work',
    skills: [0, 1, 2, 11, 13, 16, 17],
    start: 'January 2017',
    end: 'Ongoing',
    desc: 'I stepped in as needed to help out at my former place of employment.',
    projects: 'Contact me for details.',
  },
  {
    id: 3,
    name: 'Personal Development',
    skills: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 15],
    start: '',
    end: 'Ongoing',
    desc: `I'm not happy unless I'm working to perfect something I've already completed or germinating a new idea.`,
    projects: []
  },
  {
    id: 4,
    name: 'On Top Visibility',
    skills: [0,1,8,11,12,13,14,16,17],
    start: 'August 2014',
    end: 'November 2016',
    desc: `Worked closely with clients both large and small to create beautiful websites showcasing their businesses. Art directed major projects. Oversaw, trained, and instructed junior designers; worked closely with project managers; interviewed and liased with freelance developers and designers.`,
    projects: 'Contact me for details.',
  },
  {
    id: 5,
    name: 'The Web Guys',
    skills: [0,1,11,12,13,14],
    start: 'September 2012',
    end: 'June 2014',
    desc: 'Wrote, designed, and built websites using the Wordpress content management system and Bootstrap framework. Troubleshot existing sites using HTML and CSS. Assisted in search engine optimization and social marketing techniques. Created unique visual identites aimed at improving online presence.',
    projects: 'Contact me for details.',
  },
];