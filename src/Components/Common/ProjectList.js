import react from "../../Images/icons/react.png";
import sass from "../../Images/icons/sass.png";
import css from "../../Images/icons/css-3.png";
import html from "../../Images/icons/html.png";
import angular from "../../Images/icons/angular.svg";
import rxjs from "../../Images/icons/rxjs.png";
import redux from "../../Images/icons/redux.png";


import bannerWeather from "../../Images/banners/banner.PNG";
import bannerSpaceflight from "../../Images/banners/bannerSpaceflight.png";
import bannerCalc from "../../Images/banners/bannerCalc.png";
import bannerDevfinder from "../../Images/banners/bannerDevfinder.png";
import bannerIP from "../../Images/banners/bannerIP.png";
import bannerCountries from "../../Images/banners/bannerCountries.png";

export const Projects = [
    {
        title: "Weather App",
        description: "My first weather App using React and external API",
        stack: [react, sass],
        banner: bannerWeather
    },
    {
        title: "Spaceflight news",
        description: "Recruitment task to Solvro.",
        stack: [angular, rxjs, css, html],
        banner: bannerSpaceflight
    },
    {
        title: "Calculator",
        description: "calc",
        stack: [angular, rxjs, css, html],
        banner: bannerCalc
    },
    {
        title: "IP Tracker",
        description: "iptrack",
        stack: [angular, rxjs, css, html],
        banner: bannerIP
    },
    {
        title: "Devfinder",
        description: "devfinder",
        stack: [react, redux],
        banner: bannerDevfinder
    },
    {
        title: "REST Countries API",
        description: "Countries",
        stack: [react, redux],
        banner: bannerCountries
    }
];
