const Vue = require('vue/dist/vue.js');
const Menu = require('./Menu');
const Board = require('./Board');
const config = require('./config');
const constants = require('./constants');
const { tileType } = constants;

const generateTilesFromConfig = () => {
    let tiles = config.tiles
        .map((tile, index) => Object.assign({}, tile, {
            type: tileType.IMAGE,
            key: index
        }))
        .concat(config.tiles
            .map((tile, index) => Object.assign({}, tile, {
                type: tileType.SENTENCE,
                key: config.tiles.length + index
            }))
        );
    const generatedTiles = [];

    while(tiles.length > 0) {
        const index = Math.floor(Math.random() * tiles.length);
        generatedTiles.push(tiles[index]);
        tiles = tiles.slice(0, index).concat(tiles.slice(index+1));
    }

    return generatedTiles;
};

const template = `
<div class="game">
    <Menu v-bind:score="score" />
    <Board :horizontalAmount="horizontalAmount" :tiles="tiles"/>
</div>
`;

const Game = Vue.component('Game', {
    template: template,
    data: () => ({
        score: 0,
        visible: 0,
        horizontalAmount: config.horizontalAmount,
        tiles: generateTilesFromConfig(),
    }),
    methods: {

    }
});