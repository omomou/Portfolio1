
function createCharacter(Name, HP, ...moves) {
    let hp = HP;
    let name = Name;
    let characterMoves = moves;

    return {
        getHP: function() {
        return hp;
        },
        getName: function() {
        return name;
        },
        appendMoves: function() {
        let movesDiv = document.querySelector('.moves');
        for (const move of characterMoves) {
            let paragraph = document.createElement('p');
            paragraph.textContent = move;
            movesDiv.appendChild(paragraph);
        }
        }
    };
    }

    let myCharacter = createCharacter("Hero", 100, "Slash", "Heal", "Fireball");
    myCharacter.appendMoves();
    console.log("Character HP:", myCharacter.getHP());
    console.log("Character Name:", myCharacter.getName());
