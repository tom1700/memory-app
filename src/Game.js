define([
    'Vue',
    './Menu',
    './Board',
    './config',
    './constants'
    ], function(
        Vue,
        Menu,
        Board,
        config,
        constants
) {
    const { tileType, gameStateType } = constants;

    const generateTilesFromConfig = () => {
        let tiles = config.tiles
            .map((tile, index) => Object.assign({}, tile, {
                type: tileType.IMAGE,
                key: index,
                visible: false
            }))
            .concat(config.tiles
                .map((tile, index) => Object.assign({}, tile, {
                    type: tileType.SENTENCE,
                    key: config.tiles.length + index,
                    visible: false
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
            <div class="name-form" v-if="gameState === '${gameStateType.BEFORE_START}'">
                <span class="label">Enter your name:</span>
                <input type="text" v-model="name" autofocus v-on:keyup="handleKeyUp">
                <button v-on:click="startGame">Save</button>
            </div>
            <Menu :score="score" :name="name"/>
            <Board :horizontalAmount="horizontalAmount" :tiles="tiles" :tileClicked="tileClicked"/>
            <div class="score-board" v-if="gameState === '${gameStateType.WON}'">
                Congratulation! You won. <br />
                Your score is {{score}}
            </div>
        </div>
    `;

    const Game = Vue.component('Game', {
        template: template,
        data: () => ({
            score: 0,
            tileToCheck1: null,
            tileToCheck2: null,
            horizontalAmount: config.horizontalAmount,
            shouldFreeze: true,
            found: 0,
            tiles: generateTilesFromConfig(),
            gameState: gameStateType.BEFORE_START,
            name: ''
        }),
        methods: {
            handleKeyUp: function(ev) {
                if (ev.code === 'Enter') {
                    this.startGame();
                }
            },
            tileClicked: function(tile) {
                this.playSound(tile.audioSrc);
                if (!tile.visible && !this.shouldFreeze) {
                    this.score = this.score + 1;
                    tile.visible = true;
                    if (!this.tileToCheck1) {
                        this.tileToCheck1 = tile;
                    } else {
                        this.tileToCheck2 = tile;
                        if (this.tileToCheck1.name === this.tileToCheck2.name) {
                            this.tileToCheck1 = this.tileToCheck2 = null;
                            this.found += 2;
                            if (this.found === this.tiles.length) {
                                this.endGame();
                            }
                        } else {
                            this.shouldFreeze = true;
                            setTimeout(() => {
                                this.tileToCheck1.visible = false;
                                this.tileToCheck2.visible = false;
                                this.tileToCheck1 = this.tileToCheck2 = null;
                                this.shouldFreeze = false;
                            }, 1000);
                        }
                    }
                }
            },
            playSound: function(name) {
                const path = `resources/${name}`;
                const audio = new Audio(path);
                audio.play();
            },
            startGame: function() {
                this.gameState = gameStateType.STARTED;
                this.shouldFreeze = false;
            },
            endGame: function() {
                this.gameState = gameStateType.WON;
                this.shouldFreeze = true;
            },
        }
    });

    return Game;
});