var config = {
    style: 'mapbox://styles/hot/cl586quq0001c14qns28hc1c7',
    accessToken: 'pk.eyJ1IjoiaG90IiwiYSI6IlBtUmNiR1kifQ.dCS1Eu9DIRNZGktc24IwtA',
    showMarkers: false,
    inset: true,
    markerColor: '#3FB1CE',
    projection: 'globe',
    theme: 'dark',
    use3dTerrain: true,
    title: '<a href="https://www.hotosm.org/" target="_blank"><img src="images/logo.png" width="450" height="150" /></a><br /><div id="separator"></div><h1>The HOTOSM 2022 Annual Report</h1><h2>A Look Back at Community Mapping: How We Made Local Stories Global</h2><p id="intro-text">We are improving the wellbeing of people and the health of our planet through growing and sustaining the open mapping movement. See how and what we achieved this year. 🠓</p><a id="freeExplore" href="#chapter-1"><img src="images/arrow-down.gif" /></a>',
    subtitle: '',
    byline: '',
    footer: '<a href="https://www.hotosm.org/" target="_blank"><img src="images/logo.png" width="150" height="50" /></a><br /><h4>Credits</h4><strong>Visualizations</strong>: Paul Franz<br /><br /><h4>Special Thanks</h4> <div class="data-sources"><a href="https://www.openstreetmap.org" target="_blank">OpenStreetMap</a><br /><br />Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>',
    chapters: [
        {
            id: 'chapter-1',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-98.766667, 38.466667],
                zoom: 3,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'satellite',
                  opacity: 1,
                  duration: 1000
              }
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'chapter-2',
            alignment: 'left',
            hidden: false,
            title: 'Mapping Sustainable Cities in Kampala, Uganda',
            image: '',
            description: 'Resilience Mappers took up the challenge to address the lack of complete spatial data in the informal settlements of Kampala. The community mapped out all the buildings and roads in these settlements and shared the data with Actogether and the Kampala Capital City Authority. The data will be used to identify potential treatment and evacuation sites and also approximate the population of the people affected in case of an outbreak of COVID-19. In addition to the buildings and roads mapped, data users also required updated information on service points, specifically health facilities, education facilities and solid waste dumping points (both legal and illegal).<br /><br /><strong>Funded by</strong>: Esri',
            location: {
              center: [32.58118, 0.34707],
              zoom: 16.48,
              pitch: 27.00,
              bearing: -12.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: []
        },
        {
            id: 'chapter-3',
            alignment: 'full',
            hidden: false,
            title: '',
            image: '',
            description: '<h2 class="liftout">HOT and the Regional Open Mapping Hubs <span style="color:#D73F3F;">support</span>, <span style="color:#D73F3F;">motivate</span> and <span style="color:#D73F3F;">enable</span> people to contribute to OpenStreetMap (OSM)</strong>. OSM is <span style="color:#D73F3F;">open-source</span>, <span style="color:#D73F3F;">free</span>, and a digital <span style="color:#D73F3F;">public good</span>. <span style="text-decoration: underline;">It makes map data accessible</span> so it can be used in decisions that save and improve lives in places at high risk of disaster, humanitarian crises, or experiencing multidimensional poverty. Communities are visible on the map in the way they choose and included in decisions that affect their lives. </h2>',
            location: {
              center: [-98.766667, 38.466667],
              zoom: 3,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
