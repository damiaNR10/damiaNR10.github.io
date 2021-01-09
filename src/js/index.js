import '../scss/main.scss';

console.log('HELLO 🚀');

fetch('https://api.github.com/users/damiaNR10/repos?sort=created&direction=asc').
then(resp => resp.json()).
then(resp => {
    const container = document.querySelector('.projects-grid--js');

    for(let repo of resp) {
        const {description, homepage, html_url, name} = repo;

        const template = 
        `<article class="project">
        <div class="project__window">
          <span class="project__circle"></span>
          <span class="project__circle"></span>
          <span class="project__circle"></span>
        </div>
        <div class="project__content">
          <img class="project__img" src="img/github-logo.svg" alt="" />
          <h3 class="project__grid project__title"><span class="project__label">project:</span><span>${name}</span></h3>
          <p class="project__grid project__grid--description"><span class="project__label">description:</span><span>${description}</span></p>
          <p class="project__grid"><span class="project__label">demo:</span><span>&lt;<a target="_blank" class="project__link" href="${homepage}" title="${name} - demo">see here</a>&gt;</span></p>
          <p class="project__grid"><span class="project__label">github:</span><span>&lt;<a target="_blank" class="project__link" href="${html_url}" title="${name} - code">source code</a>&gt;</span></p>
        </div>
      </article>`;
        if(description) {
        container.innerHTML += template;
        }
    }
}).
catch(error => {
    console.log(error);
});