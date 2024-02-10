import React from 'react'

function Podcasts() {
  return (
    <body>
    <div id="sectionHomePage">
        <div class="podcast-home-page-container">
            <h1 class="podcast-heading">Podcast</h1>
        </div>
    </div>

    <div class="Podcasts-cards-container">
        <div class="d-flex flex-row">
            <div class="details-card" onclick="display('sectionPuriJagannadhpodcast')">
                <img class="podcast-image" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/puri-jagannadh-img.png" />
                <h1 class="podcast-name">puri jagannadh</h1>
                <p class="episodes-cout">24 episodes</p>
            </div>
            <div class="details-card" onclick="display('sectionTedxTalksPodcast')">
                <img class="podcast-image" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/tedx-img.png" />
                <h1 class="podcast-name">Tedx talks</h1>
                <p class="episodes-count">12 episodes</p>
            </div>
        </div>
        <div class="podcasts-row d-flex flex-row">
            <div class="details-card" onclick="display('sectionSadhguruPodcast')">
                <img class="podcast-image" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/sadhguru-img.png" />
                <h1 class="podcast-name">sadhguru podcast</h1>
                <p class="episodes-count">49 episodes</p>
            </div>
            <div class="details-card" onclick="display('sectionOnPurposePodcast')">
                <img class="podcast-image" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/on-purpose-img.png" />
                <h1 class="podcast-name">On purpose</h1>
                <p class="episodes-count">49 episodes</p>
            </div>
        </div>
    </div>
    <div id="sectionPuriJagannadhpodcast">
        <div class="podcast-header d-flex flex-row">
            <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/puri-jagannadh-img.png" class="podcast-image" />
            <div class="podcast-text-container">
                <p class="category">podcast</p>
                <h1 class="podcast-title">puri jagannadh podcast</h1>
                <p class="podcast-caption">the puri podcast</p>
            </div>
        </div>
        <div class="podcast-episode-container d-flex flex-row">
            <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/puri-jagannadh-img.png" class="podcast-image" />
            <div class="podcast-container">
                <h1 class="podcast-name">Molecular gastrromy</h1>
                <p class="podcast-description">anything happens there will not cook....,</p>
                <p class="podcast-duration">15 mins</p>
            </div>
        </div>
        <div class="podcast-episode-container d-flex flex-row">
            <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/puri-jagannadh-img.png" class="podcast-image" />
            <div class="podcast-text-container">
                <h1 class="podcast-name">mystreious book</h1>
                <p class="podcast-description">the voynich manuscript is the century book...,</p>
                <p class="podcast-duration">12mins</p>
            </div>
        </div>
        <div class="podcast-episode-container d-flex flex-row">
            <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/puri-jagannadh-img.png" class="podcast-image" />
            <div class="podcast-episode-container ">
                <h1 class="podcast-name">predator drone</h1>
                <p class="podcast-description">the most powerful drone. its 10 ft feight..,</p>
                <p class="podcast-duration">10mins</p>
            </div>
        </div>
        <div class="podacst-episode-container d-flex flex-row">
            <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/puri-jagannadh-img.png" class="podcast-image" />
            <div class="podcast-episode-container">
                <h1 class="podcast-name">paella</h1>
                <p class="podcast-description">the national dish of spain.it was first star...</p>
                <p class="podcast-duration">6 mins</p>
            </div>
        </div>
        <div class="button-container d-flex flex-row justify-content-end">
            <button class="button" onclick="display('sectionHomePage')">back</button>
        </div>
    </div>


</body>
  )
}

export default Podcasts