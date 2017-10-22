import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// import App from './App.vue'
import Menu from './Menu.vue'
import Carousel from './Carousel.vue'
import ProjectCard from './ProjectCard.vue'

Vue.use(ElementUI)

new Vue({
    el: '#menu',
    render: h => h(Menu)
})

new Vue({
    el: '#carousel',
    render: h => h(Carousel)
})

new Vue({
    el: '#project-card',
    render: h => h(ProjectCard)
})
