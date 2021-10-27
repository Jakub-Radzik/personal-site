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
import scala from "../../Images/icons/scala.png"
import cpp from "../../Images/icons/c++.png"


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
import bannerWorkingOn from "../../Images/banners/working.png";

export const Projects = [
    {
        title: "Spaceflight news",
        description: "Application responsible for displaying newses about space flights. Listing of all articles or one article with list of favorites. Recruitment task to Solvro.",
        stack: [html, css, angular, rxjs],
        banner: bannerSpaceflight,
        repoURL: "https://github.com/radzikoska123/Rekrutacja",
        siteURL: "https://radzikoska123.github.io/Rekrutacja/",
        universityRepo: false,
        frontendRepo: true
    },
    {
        title: "Weather App",
        description: "My first weather App using React and external API. Check weather for next week every day, next two days every hour and current weather in your location.",
        stack: [html, sass, react],
        banner: bannerWeather,
        repoURL: "https://github.com/radzikoska123/Weather-App",
        siteURL: "https://radzikoska123.github.io/weatherApp/",
        universityRepo: false,
        frontendRepo: true
    },
    {
        title: "Devfinder",
        description: "devfinder",
        stack: [html, css, react, redux],
        banner: bannerDevfinder,
        repoURL: "https://github.com/radzikoska123/Challenges/tree/master/Challenge7/challenge7",
        siteURL: "https://radzikoska123.github.io/devfinder/",
        universityRepo: false,
        frontendRepo: true
    },
    {
        title: "Calculator",
        description: "calc",
        stack: [html, css, angular, rxjs],
        banner: bannerCalc,
        repoURL: "https://github.com/radzikoska123/Challenges/tree/master/Challenge5",
        siteURL: "https://radzikoska123.github.io/challenge5host/",
        universityRepo: false,
        frontendRepo: true
    },
    {
        title: "IP Tracker",
        description: "iptrack",
        stack: [html, css, angular, rxjs],
        banner: bannerIP,
        repoURL: "https://github.com/radzikoska123/Challenges/tree/master/Challenge6",
        siteURL: "https://radzikoska123.github.io/ip-tracker/",
        universityRepo: false,
        frontendRepo: true
    },
    {
        title: "REST Countries API",
        description: "Countries",
        stack: [html, css, react, redux],
        banner: bannerCountries,
        repoURL: "https://github.com/radzikoska123/Challenges/tree/master/Challenge4/challenge4",
        siteURL: "https://radzikoska123.github.io/countries/",
        universityRepo: false,
        frontendRepo: true
    },
    {
        title: "Company Site",
        description: "Bruk-systempol",
        stack: [html, css, javascript],
        banner: bannerBruk,
        siteURL: "https://bruk-systempol.pl/",
        universityRepo: false,
        frontendRepo: true
    },
    {
        title: "Blogr Landing Page",
        description: "",
        stack: [html, css],
        banner: bannerBlogr,
        repoURL: "https://github.com/radzikoska123/Challenges/tree/master/Challenge1",
        universityRepo: false,
        frontendRepo: true
    },
    {
        title: "3-column preview card component",
        description: "",
        stack: [html, css],
        banner: bannerColumn,
        repoURL: "https://github.com/radzikoska123/Challenges/tree/master/Challenge2",
        universityRepo: false,
        frontendRepo: true
    },
    {
        title: "Chat app CSS illustration",
        description: "",
        stack: [html, css],
        banner: bannerPhone,
        repoURL: "https://github.com/radzikoska123/Challenges/tree/master/Challenge3",
        universityRepo: false,
        frontendRepo: true
    },
    {
        title: "Operating Systems Simulations",
        description: "",
        stack: [java, javascript, php],
        banner: bannerOS,
        repoURL: "https://github.com/radzikoska123/Operating-Systems-Laboratory",
        universityRepo: true,
        frontendRepo: false
    },
    {
        title: "Algorithms and Data Structures",
        description: "",
        stack: [java],
        banner: bannerAISD,
        repoURL: "https://github.com/radzikoska123/Algorithms-and-data-structures",
        universityRepo: true,
        frontendRepo: false
    },
    {
        title: "Programming Paradigms",
        description: "Private until end of semester",
        stack: [scala],
        banner: bannerWorkingOn,
        repoURL: "https://github.com/radzikoska123",
        universityRepo: true,
        frontendRepo: false
    },
    {
        title: "Effective Programming",
        description: "Private until end of semester",
        stack: [cpp],
        banner: bannerWorkingOn,
        repoURL: "https://github.com/radzikoska123",
        universityRepo: true,
        frontendRepo: false
    }
];
