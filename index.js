import * as THREE from 'three';
import { TweenMax } from 'gsap';
import hoverEffect from 'hover-effect';

new hoverEffect({
    parent : document.querySelector('.container__img'),
    intensity: 0.2,
    image1 : './assets/blackWomen1.png',
    image2 : './assets/blackWomen2.png',
    displacementImage : './assets/diss.png'
})