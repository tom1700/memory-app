const Vue = require('vue/dist/vue.js');

const template = `
<div class="menu">
    Your score is: {{score}}
</div>
`;

const Menu = Vue.component('Menu', {
    props: ['score'],
    template: template
});