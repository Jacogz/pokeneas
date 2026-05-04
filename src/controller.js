const os = require('os');
const { pokeneas } = require('./data/pokeneas.json');

function getRandomPokenea() {
    return pokeneas[Math.floor(Math.random() * pokeneas.length)];
}

const controller = {
    getRandomJson: (req, res) => {
        let containerId = os.hostname();
        let randomPokenea = getRandomPokenea();
        res.json({
            containerId,
            id: randomPokenea.id,
            name: randomPokenea.name,
            height: randomPokenea.height,
            ability: randomPokenea.ability,
        });
    },
    getRandomDetail: (req, res) => {
        let containerId = os.hostname();
        let randomPokenea = getRandomPokenea();
        let viewData = {
            containerId,
            image: randomPokenea.image,
            frase: randomPokenea.philosophical_phrase,
        }
        res.render('detail', viewData);
    },
}

module.exports = controller;