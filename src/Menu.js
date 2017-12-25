const Vue = require('vue/dist/vue.js');

const template = `
<div class="menu">
    {{name}}, your score is: {{score}}
</div>
`;

const Menu = Vue.component('Menu', {
    props: ['score', 'name'],
    template: template
});