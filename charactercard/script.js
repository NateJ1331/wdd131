const character = {
    name: 'Draco',
    class: 'Ranger',
    level: 1,
    health: 80,
    picture: 'images/character.jpg',
    attacked : function (dmg){
        if (this.health > 0)
            this.health = this.health - dmg;
            document.querySelector('#HP').textContent = `Health: ${this.health}`;
        if (this.health <= 0) {
            alert(`${this.name} has died!`);
        }
    },
    levelup : function () {
      document.querySelector('#lvl').textContent = `Level: ${this.level++}`;  
    }


  };

document.querySelector("#attk").addEventListener("click", function () {
    character.attacked(20);
});
document.querySelector("#lvlup").addEventListener("click", function () {
    character.levelup();
});

document.querySelector('#name').textContent = `Name: ${character.name}`
document.querySelector('#class').textContent = `Class: ${character.class}`
document.querySelector('#lvl').textContent = `Level: ${character.level}`
document.querySelector('#HP').textContent = `Health: ${character.health}`

document.querySelector('img').setAttribute('src',character.picture);
document.querySelector('img').setAttribute('alt',character.name);