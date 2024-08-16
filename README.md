# Acknowledgement
I would like to thank [Rohan Kokkula's Template](https://github.com/rohankokkula/datasciencefolio) for helping me build my personal portfolio, check it out!
# Sections 📚

✔️ Home\
✔️ Experience & Education \
✔️ Projects\
✔️ Contact\
<br>
To view a live example, **[click here](https://rohankokkula.netlify.app/)**

# Clone And Use 📋

- The website is completely built on `react-js` library of `javascript` and that's why we need `nodejs` and `npm` installed.
- While installing `nodejs` and `npm`, try to install versions which are equal or greater than the versions mentioned in badges above.
- In case you want to help developing it or simply saving it, you can fork the repository just by clicking the button on the top-right corner of this page.
- After the successful installation of `nodejs` and `npm`, clone the repository into your local system using below command:
  - ```python
     git clone https://github.com/rohankokkula/datasciencefolio.git
    ```
  - This will clone the whole repository in your system.
- `nvm use` to use the project's v12 node version so you don't have to see millions of node module errors :) 
- To download required dependencies to your system, navigate to the directory where the cloned repository resides and execute following command:
  - ```python
    npm install
    ```
- Now, the project is ready to use.
- You can check it using `npm start`, it will open the website locally on your browser.

### Google Analytics Tracking ID

- First, you need to set up your Google Analytics Account.
- Follow these resources for seamless setup
    - [Easy Google Analytics 4 Setup 2021](https://www.youtube.com/watch?v=dPYx-eS4gyE)
    - [Track Users In Your React App With Google Analytics](https://www.youtube.com/watch?v=pBeKlQ6CMJM)
- You'll be needing a Trackin-ID for your website which normally looks like `UA-199564465-1`
- Do not get confused between Tracking-ID & Measurement ID. Both are Different.
- Once you get the tracking ID, go to `src/App.js` and replace your tracking ID
Note: Do not use Firefox Browser for testing the ID. Use Chrome instead.


# Deployment 📦

- Once you are done with your setup and have successfully completed all steps above, you need to put your website online!
- I highly recommend using [Netlify](https://www.netlify.com/) to achieve this the EASIEST WAY.
- To deploy your website, you need to follow 2 steps. 
    -   First you need to create a github repository and push all the files excluding node_modules(automatically ignored by .gitignore)
    -   setup account at netlify & complete the login/signup process
    -   Now, click on `New site from Git` and connect it with your github account
    -   You will find the entire list of your repositories, select your portfolio repo.
    -   Click on `Deploy site`
    -   Tadaa! Your site is live!

# Technologies used 🛠️

- [React](https://reactjs.org/)
- [graphql](https://graphql.org/)
- [apollo-boost](https://www.apollographql.com/docs/react/get-started/)
- [baseui](https://github.com/uber/baseweb)
- [react-reveal](https://www.react-reveal.com/)
- [styled-components](https://styled-components.com/)

# Animations 🍥

- [lottiefiles](https://lottiefiles.com)

# License 📄

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE) file for details.
