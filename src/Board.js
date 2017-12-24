const Vue = require('vue/dist/vue.js');
const config = require('./config');
const Tile = require('./Tile');

const template = `
<div class="board" ref="board">
    <Tile :height="tileHeight" :flex="tileFlexBasis" />
    <Tile :height="tileHeight" :flex="tileFlexBasis" />
    <Tile :height="tileHeight" :flex="tileFlexBasis" />
    <Tile :height="tileHeight" :flex="tileFlexBasis" />
    
    <Tile :height="tileHeight" :flex="tileFlexBasis" />
    <Tile :height="tileHeight" :flex="tileFlexBasis" />
    <Tile :height="tileHeight" :flex="tileFlexBasis" />
    <Tile :height="tileHeight" :flex="tileFlexBasis" />
    
    <Tile :height="tileHeight" :flex="tileFlexBasis" />
    <Tile :height="tileHeight" :flex="tileFlexBasis" />
    <Tile :height="tileHeight" :flex="tileFlexBasis" />
    <Tile :height="tileHeight" :flex="tileFlexBasis" />
    
</div>
`;

const Board = Vue.component('Board', {
    props: ['score'],
    template: template,
    mounted: function() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.getBoardWidth);
            this.getBoardWidth()
        });
    },
    data: function() {
        return {
            boardWidth: 0,
        };
    },
    methods: {
        getBoardWidth: function() {
            this.boardWidth = this.$refs.board.clientWidth;
        }
    },
    computed: {
        tileHeight: function() {
            return Math.floor(this.boardWidth / config.horizontalAmount);
        },
        tileFlexBasis: function() {
            return Math.floor(100 / config.horizontalAmount);
        }
    }
});