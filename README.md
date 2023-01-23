# Wordle Game

*A simple recreation of 2022's popular word game, Wordle.*

**Languages:** HTML, CSS, JavaScript

**Frameworks:** jQuery

**API:** Datamuse (https://www.datamuse.com/api/)

---

## Getting Started

[Find the game here](https://alexwestisbest.github.io/Wordle-game/)

Players have six attempts to guess a five-letter word, with feedback given in the form of tiles indicating when letters match or occupy the correct position.

![Screenshot showing 2 guesses](https://i.imgur.com/TfxK3Y1.png)

☑ Right letter, right place

☐ Right letter, wrong place

☒ Wrong letter

Additional feedback is provided for later guesses in the form of etymology clues (via API), including part of speech, associated words, and finally the definition.

![Screenshot showing 5 guesses](https://i.imgur.com/f5CgpwU.png)

---

## Minutia

The game was optimized for a clean UX and efficient play. For example, the submission field stays in focus awaiting keyboard input, and all etymology hints are human-readable without awkward capitalization or a plural 'You have 1 guesses remaining'.

In addition, the text entry field contains robust user-proofing for edge cases. It checks that every guess...

- Is exactly 5 characters
- Isn't made of numbers/symbols
- Wasn't previously guessed
- Exists in online dictionaries
- Isn't a statistically obscure word

---

## Future Enhancements

**Larger word list**

The game currently has 24 words, cycling by the hour (more fun for testing out). It would be nice to build a list of 365 words (verified by API as a common english word with quality trigger words and a clear definition) to cycle through once per day.

**Edge case: words with duplicate letters (HELLO, COLOR, TAPAS)**

The program doesn't accurately handle guesses with duplicate letters. For example, a Wordle of 'CRATE` with a guess of 'ARROW' would give ☐☐☐☒☒, wrongly hinting to the user that the correct answer has two 'R' characters.

**Graphical display**

Real-world Wordle displays user guesses in a grid, coloring the characters in each guess based on their correctness. I'd like to update this with a fully visual display for users.

**Butter-smooth window scaling**

Like every good program, I'd like to use @media-query to allow good scaling for all displays, from smartphones to 4k desktop monitors.

---

By Alex Westerlund






[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/AlexWestIsBest/Wordle-game">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">project_title</h3>

  <p align="center">
    project_description
    <br />
    <a href="https://github.com/AlexWestIsBest/Wordle-game"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/AlexWestIsBest/Wordle-game">View Demo</a>
    ·
    <a href="https://github.com/AlexWestIsBest/Wordle-game/issues">Report Bug</a>
    ·
    <a href="https://github.com/AlexWestIsBest/Wordle-game/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Here's a blank template to get started: To avoid retyping too much info. Do a search and replace with your text editor for the following: `github_username`, `repo_name`, `twitter_handle`, `linkedin_username`, `email_client`, `email`, `project_title`, `project_description`

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![Vue][Vue.js]][Vue-url]
* [![Angular][Angular.io]][Angular-url]
* [![Svelte][Svelte.dev]][Svelte-url]
* [![Laravel][Laravel.com]][Laravel-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![JQuery][JQuery.com]][JQuery-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/AlexWestIsBest/Wordle-game.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
    - [ ] Nested Feature

See the [open issues](https://github.com/AlexWestIsBest/Wordle-game/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - email@email_client.com

Project Link: [https://github.com/AlexWestIsBest/Wordle-game](https://github.com/AlexWestIsBest/Wordle-game)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* []()
* []()
* []()

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/AlexWestIsBest/Wordle-game.svg?style=for-the-badge
[contributors-url]: https://github.com/AlexWestIsBest/Wordle-game/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/AlexWestIsBest/Wordle-game.svg?style=for-the-badge
[forks-url]: https://github.com/AlexWestIsBest/Wordle-game/network/members
[stars-shield]: https://img.shields.io/github/stars/AlexWestIsBest/Wordle-game.svg?style=for-the-badge
[stars-url]: https://github.com/AlexWestIsBest/Wordle-game/stargazers
[issues-shield]: https://img.shields.io/github/issues/AlexWestIsBest/Wordle-game.svg?style=for-the-badge
[issues-url]: https://github.com/AlexWestIsBest/Wordle-game/issues
[license-shield]: https://img.shields.io/github/license/AlexWestIsBest/Wordle-game.svg?style=for-the-badge
[license-url]: https://github.com/AlexWestIsBest/Wordle-game/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
