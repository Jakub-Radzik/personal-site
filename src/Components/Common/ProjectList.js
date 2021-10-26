import react from "../../Images/icons/react.png";
import sass from "../../Images/icons/sass.png";
import css from "../../Images/icons/css-3.png";
import html from "../../Images/icons/html.png";
import angular from "../../Images/icons/angular.svg";
import rxjs from "../../Images/icons/rxjs.png";
import redux from "../../Images/icons/redux.png";
import javascript from "../../Images/icons/js.png"
import java from "../../Images/icons/java.png"
import php from "../../Images/icons/php.png"


import bannerWeather from "../../Images/banners/banner.PNG";
import bannerSpaceflight from "../../Images/banners/bannerSpaceflight.png";
import bannerCalc from "../../Images/banners/bannerCalc.png";
import bannerDevfinder from "../../Images/banners/bannerDevfinder.png";
import bannerIP from "../../Images/banners/bannerIP.png";
import bannerCountries from "../../Images/banners/bannerCountries.png";
import bannerBruk from "../../Images/banners/bannerBruk.png";
import bannerBlogr from "../../Images/banners/bannerBlogr.jpg";
import bannerColumn from "../../Images/banners/bannerColumn.jpg";
import bannerPhone from "../../Images/banners/bannerPhone.jpg";
import bannerOS from "../../Images/banners/bannerOS.jpg";
import bannerAISD from "../../Images/banners/bannerAiSD.png";

export const Projects = [
    {
        title: "Spaceflight news",
        description: "Recruitment task to Solvro.",
        stack: [angular, rxjs, css, html],
        banner: bannerSpaceflight,
        repoURL: "https://github.com/radzikoska123/Rekrutacja",
        siteURL: "https://radzikoska123.github.io/Rekrutacja/",
        universityRepo: false
    },
    {
        title: "Weather App",
        description: "My first weather App using React and external API",
        stack: [react, sass],
        banner: bannerWeather,
        repoURL: "https://github.com/radzikoska123/Weather-App",
        siteURL: "https://radzikoska123.github.io/weatherApp/",
        universityRepo: false
    },
    {
        title: "Devfinder",
        description: "devfinder",
        stack: [react, redux],
        banner: bannerDevfinder,
        repoURL: "https://github.com/radzikoska123/Challenges/tree/master/Challenge7/challenge7",
        siteURL: "https://radzikoska123.github.io/devfinder/",
        universityRepo: false
    },
    {
        title: "Calculator",
        description: "calc",
        stack: [angular, rxjs, css, html],
        banner: bannerCalc,
        repoURL: "https://github.com/radzikoska123/Challenges/tree/master/Challenge5",
        siteURL: "https://radzikoska123.github.io/challenge5host/",
        universityRepo: false
    },
    {
        title: "IP Tracker",
        description: "iptrack",
        stack: [angular, rxjs, css, html],
        banner: bannerIP,
        repoURL: "https://github.com/radzikoska123/Challenges/tree/master/Challenge6",
        siteURL: "https://radzikoska123.github.io/ip-tracker/",
        universityRepo: false
    },
    {
        title: "REST Countries API",
        description: "Countries",
        stack: [react, redux],
        banner: bannerCountries,
        repoURL: "https://github.com/radzikoska123/Challenges/tree/master/Challenge4/challenge4",
        siteURL: "https://radzikoska123.github.io/countries/",
        universityRepo: false
    },
    {
        title: "Company Site",
        description: "Bruk-systempol",
        stack: [html, css, javascript],
        banner: bannerBruk,
        siteURL: "https://bruk-systempol.pl/",
        universityRepo: false
    },
    {
        title: "Blogr Landing Page",
        description: "",
        stack: [html, css],
        banner: bannerBlogr,
        repoURL: "https://github.com/radzikoska123/Challenges/tree/master/Challenge1",
        universityRepo: false
    },
    {
        title: "3-column preview card component",
        description: "",
        stack: [html, css],
        banner: bannerColumn,
        repoURL: "https://github.com/radzikoska123/Challenges/tree/master/Challenge2",
        universityRepo: false
    },
    {
        title: "Chat app CSS illustration",
        description: "",
        stack: [html, css],
        banner: bannerPhone,
        repoURL: "https://github.com/radzikoska123/Challenges/tree/master/Challenge3",
        universityRepo: false
    },
    {
        title: "Operating Systems Simulations",
        description: "",
        stack: [java, javascript, php],
        banner: bannerOS,
        repoURL: "https://github.com/radzikoska123/Operating-Systems-Laboratory",
        universityRepo: true
    },
    {
        title: "Algorithms and Data Structures",
        description: "",
        stack: [java],
        banner: bannerAISD,
        repoURL: "https://github.com/radzikoska123/Algorithms-and-data-structures",
        universityRepo: true
    }
];
