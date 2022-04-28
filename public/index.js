'use strict'


const fetchHeroes = async function () {
    try {
        const res = await fetch(`https://akabab.github.io/superhero-api/api/all.json`);
        const data = await res.json();
        return data
    }catch(err){
        return new Error(err)
    }
}

const loopHeroes = async function(){
    const heroes = await fetchHeroes();
   
    heroes.forEach(function(hero){
        if (hero.biography.publisher == "DC Comics") {
            renderHero(hero)
        }
    });

    let cta = document.querySelectorAll('.pop-up');
    cta.forEach(function(e){
        e.addEventListener('click', showHeroStats.bind(heroes));
    });
    
}

const renderHero = async function(hero){
    const wrapper = document.querySelector('.heroes_list');
 
        let content =
            `<li class="hero disp-flex">
       <button class="pop-up"><img data-item="${hero.id}" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAUCAQAAAD4zq+ZAAAAE0lEQVR42mNkwAsYR6VHpaklDQAb2gAV0wFfSQAAAABJRU5ErkJggg==" data-src="${hero.images.md}" alt="${hero.name}"
            class="hero_img" width="150" height="200">
        <h3 class="hero_name">${hero.name}</h3></button>
    </li>`
        wrapper.insertAdjacentHTML('beforeend', content);
    

    imgLoad();
}


loopHeroes()

const imgLoad = async function(){
    const img = document.querySelectorAll('.hero_img');
    img.forEach(function(e){
        e.onload = function(){
            e.src = e.dataset.src
        }
    })
}


let popWindow = document.querySelector('.pop_up_window');
const showHeroStats = function(e){
    popWindow.classList.remove('disp-none');

this.forEach(function(hero){
    if(e.target.dataset.item == hero.id){
        let hero_content = 
        `<div class="pop_up_wrapper">
            <div class="hero_content">
                <h2 class="hero_fullname">${hero.name}</h2>
                <h2 class="bio">Powerstats</h2>
                <div class="bio_container disp-flex">
                    <p class="combat">combat<span class="num">${!(hero.powerstats.combat == "null") ? "+" + hero.powerstats.combat: 'Unknown'}</span></p>
                    <div class="bar" data-group="combat"><div class="innerbar"></div></div>
                    <p class="durability">durability<span class="num">${!(hero.powerstats.durability == "null") ? "+" + hero.powerstats.durability: 'Unknown'}</span></p>
                    <div class="bar" data-group="durability"><div class="innerbar"></div></div>
                    <p class="intelligence">intelligence<span class="num">${!(hero.powerstats.intelligence == "null") ? "+" + hero.powerstats.intelligence: 'Unknown'}</span></p>
                    <div class="bar" data-group="intelligence"><div class="innerbar"></div></div>
                    <p class="power">power<span class="num">${!(hero.powerstats.power == "null") ? "+" + hero.powerstats.power: 'Unknown'}</span></p>
                    <div class="bar" data-group="power"><div class="innerbar"></div></div>
                    <p class="speed">speed<span class="num">${!(hero.powerstats.speed == "null") ? "+" + hero.powerstats.speed: 'Unknown'}</span></p>
                    <div class="bar" data-group="speed"><div class="innerbar"></div></div>
                    <p class="strength">strength<span class="num">${!(hero.powerstats.strength == "null") ? "+" + hero.powerstats.strength: 'Unknown'}</span></p>
                    <div class="bar" data-group="strength"><div class="innerbar"></div></div>
                </div>
            </div>
            <div class="pop_img"></div>
        </div>`
        popWindow.innerHTML = hero_content;
        const hero_bg = document.querySelector('.pop_img');
        hero_bg.style.backgroundImage = `url(${hero.images.md})`;


        //combat
        let combat_innerbar = document.querySelector('.bar[data-group="combat"] .innerbar');
        combat_innerbar.style.transform = `translateX(-${100 - hero.powerstats.combat}%)`;
        combat_innerbar.animate([
            // keyframes
            { transform: 'translateX(-100%)' },
            { transform: `translateX(-${100 - hero.powerstats.combat}%)` }
          ], {
            // timing options
            duration: 1000,
          });


        //  durability
        let durability_innerbar = document.querySelector('.bar[data-group="durability"] .innerbar');
        durability_innerbar.style.transform = `translateX(-${100 - hero.powerstats.durability}%)`;
        durability_innerbar.animate([
            // keyframes
            { transform: 'translateX(-100%)' },
            { transform: `translateX(-${100 - hero.powerstats.durability}%)` }
          ], {
            // timing options
            duration: 1000,
          });

          //  intelligence
        let intelligence_innerbar = document.querySelector('.bar[data-group="intelligence"] .innerbar');
        intelligence_innerbar.style.transform = `translateX(-${100 - hero.powerstats.intelligence}%)`;
        intelligence_innerbar.animate([
            // keyframes
            { transform: 'translateX(-100%)' },
            { transform: `translateX(-${100 - hero.powerstats.intelligence}%)` }
          ], {
            // timing options
            duration: 1000,
          });

          //  power
        let power_innerbar = document.querySelector('.bar[data-group="power"] .innerbar');
        power_innerbar.style.transform = `translateX(-${100 - hero.powerstats.power}%)`;
        power_innerbar.animate([
            // keyframes
            { transform: 'translateX(-100%)' },
            { transform: `translateX(-${100 - hero.powerstats.power}%)` }
          ], {
            // timing options
            duration: 1000,
          });

            //  power
        let speed_innerbar = document.querySelector('.bar[data-group="speed"] .innerbar');
        speed_innerbar.style.transform = `translateX(-${100 - hero.powerstats.speed}%)`;
        speed_innerbar.animate([
            // keyframes
            { transform: 'translateX(-100%)' },
            { transform: `translateX(-${100 - hero.powerstats.speed}%)` }
          ], {
            // timing options
            duration: 1000,
          });

              //  power
        let strength_innerbar = document.querySelector('.bar[data-group="strength"] .innerbar');
        strength_innerbar.style.transform = `translateX(-${100 - hero.powerstats.strength}%)`;
        strength_innerbar.animate([
            // keyframes
            { transform: 'translateX(-100%)' },
            { transform: `translateX(-${100 - hero.powerstats.strength}%)` }
          ], {
            // timing options
            duration: 1000,
          });


    }
})
}

const closeWindow = function(e){
    if(!e.target.classList.contains('pop_up_wrapper')){
        popWindow.classList.add('disp-none');
    }
}

popWindow.addEventListener('click', closeWindow);





