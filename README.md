# HackBeanpot's Astronaut Bootcamp
Hi!
Thanks for joining HackBeanpot's Astronaut Bootcamp. This mini hackathon/bootcamp is designed to give beginners a jumpstart making web dev projects and a little taste of what hackathons are.  
Our main hackathon includes mentors/workshops/guest speakers/activities/food and so much more! Please consider applying to HackBeanpot 2022 at apply.hackbeanpot.com

Deployed at: https://astronaut-bootcamp-nov20.herokuapp.com/  
Check out our Figma designs: https://www.figma.com/file/8Fy2sPhR87DeDGjjOmEF56/Astronaut-Bootcamp?node-id=0%3A1  
Get your tickets here: https://trello.com/invite/b/1ApotH9G/fdf27cdb7a35cd8873ba840877e24e22/hbp-minihacks-nov-20  
NASA API: https://api.nasa.gov/  
NASA API Key: ?api_key=PhbpyEpnhqFuh0NrNiIuXOgXx1YrTrNBCvTDQB2z  

## Useful Commands
- npm install
This command installs all the specified dependency in package.json. Package.json is a file that contains data about the project. A dependency is an external library that we've included in the project. The package.json file describes what dependencies are needed and automatically keeps track of new ones when you install them.  

- npm start
This starts a "hot" server on your computer. A server is machine/process that serves some file/content (in our case, it's serving our React app!). A server is hot when it's listening for file changes in your repository. When a file changes, it will reload and serve a new version of the content. This is super helpful for development, you should make edits with your code, then refresh your browser to see the new changes immediately!  

- git clone  
Takes a remote repository (on GitHub, BitBucket etc.) and makes a copy on your computer. This way everyone has their own clone of their repository that they can work with.  

- git add  
Adds files to be committed in your Git working tree, puts the files in a middle state: 'staging'.  
Git add [ file name ]  
Git add .  
Note: "Git add ." adds all files you've edited to staging, very convenient and common to use, just be careful you've made changes only to the files you wanted to!  

- git commit  
Commit the staged files to your Git working tree. Like bookmarking your code!  

- git branch  
View all current branches in your local repository.  

- git checkout  
Switch to a new branch. "Git checkout [ branch name ]

- git status
Check what's been staged, what's been edited/deleted/created

- git push origin [ your remote branch name]  
Pushes the commits on your current branch to the specified branch on origin (which is a nickname to our remote repository on GitHub).


## Documentation  
JavaScript Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript  
Material UI Library Docs: https://mui.com/  
React Router Docs: https://reactrouter.com/docs/en/v6  
React Docs: https://reactjs.org/docs/getting-started.html  


## Bread and Butter Git Flow
1.) git checkout master  
2.) git pull origin master  
3.) git checkout -b [ your local branch name ]  
4.) make your changes, edit your files, make sure your local hot server reflects your changes as desired  
5.) git add .  
6.) git status  
7.) git commit -m "*insert commit message here*"  
8.) git push origin [ your remote branch name (can be the same name as local)]  
9.) git checkout master 
10.) git pull origin master
11.) git checkout [ your local branch name ]
12.) git merge master
13.) git push origin [ your remote branch name (can be the same name as local)]  
14.) ask the mentors to make a pull request for your branch into master  
15.) see it on the big screen! good job!  


## Repo Structure
Pages of the app are under the src/pages folder. Each subfolder within src/pages represents a page. Index.js is the naming convention as the default file for the folder. Pages are composed of components. For simplicity sake, all components will be under a general use src/components folder. Usually, components will be placed in specific page folders but if they're used in multiple pages they'll be put in a general use folder. 

## Hackers In Attendance
Angela Zheng