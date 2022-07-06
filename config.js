var config = {
    style: 'mapbox://styles/hot/cl59mj84w000815pk1pizae6r',
    accessToken: 'pk.eyJ1IjoiaG90IiwiYSI6IlBtUmNiR1kifQ.dCS1Eu9DIRNZGktc24IwtA',
    showMarkers: false,
    inset: true,
    markerColor: '#3FB1CE',
    projection: 'globe',
    theme: 'dark',
    use3dTerrain: true,
    title: '<a href="https://www.hotosm.org/" target="_blank"><img src="images/logo.png" width="450" height="150" /></a><br /><div id="separator"></div><h1>The HOTOSM 2022 Annual Report</h1><h2>A Look Back at Community Mapping: How We Made Local Stories Global</h2><p id="intro-text">We are improving the wellbeing of people and the health of our planet through growing and sustaining the open mapping movement.</p><br /><p id="intro-text">See how and what we achieved this year. 🠓</p><a id="freeExplore" href="#chapter-1"><img src="images/arrow-down.gif" /></a>',
    subtitle: '',
    byline: '',
    footer: '<a href="https://www.hotosm.org/" target="_blank"><img src="images/logo.png" width="150" height="50" /></a><br /><h4>Credits</h4><strong>Visualizations</strong>: Paul Franz<br /><br /><h4>Special Thanks</h4> <div class="data-sources"><a href="https://www.openstreetmap.org" target="_blank">OpenStreetMap</a><br /><br />Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>',
    chapters: [
        {
            id: 'letter-0',
            alignment: 'center',
            hidden: false,
            title: 'A Letter From the Executive Director',
            image: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-98.766667, 38.466667],
                zoom: 3.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: [

            ]
        },
        {
            id: 'spacer-1',
            alignment: 'full',
            hidden: false,
            title: '',
            image: '',
            description: '<h2 class="liftout">Eastern & Southern Africa</h2>',
            location: {
              center: [29.7219314, -1.3045366],
              zoom: 4,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'country-kenya',
                  opacity: 1,
                  duration: 1000
              },
              {
                  layer: 'country-africa',
                  opacity: 1,
                  duration: 1000
              }
            ],
            onChapterExit: [
              {
                  layer: 'country-kenya',
                  opacity: 0,
                  duration: 1000
              },
              {
                  layer: 'country-africa',
                  opacity: 0,
                  duration: 1000
              }
            ]
        },
        {
            id: 'chapter-1',
            alignment: 'left',
            hidden: false,
            title: 'Scaling Missing Maps in Africa’s Great Lakes Region',
            image: '',
            description: '<h4 class="impact-head">Impact Areas:</h4> <strong>Public Health</strong> <img style="width: auto; vertical-align: middle;" src="images/icons/health.svg" height="35" width="35" />' + '<h3></h3>' + 'Patient tracking is a crucial public health activity that contributes to reducing the spread of highly contagious diseases. However, patient tracing, tracking, and monitoring in low-and middle-income countries is a complex process as most of the geographical, navigational, and landmark features are not fully digitized. In 2019, with funding from the Humanitarian Grand Challenge, the Humanitarian OpenStreetMap Team (HOT) embarked on a project to scale the Missing Maps initiative across the public health and disease surveillance sector in Uganda and the Democratic Republic of Congo (DRC).' + '<br /> <br />' + 'HOT partnered with district and community health teams to design a community participatory mapping exercise. In Uganda, HOT partnered with community health workers across Kisoro and Zombo districts; and in DRC, HOT partnered with community health workers in Kalunguta, Beni, Butembo and Katwa.  This mapping exercise included locating and mapping all geographical and human-made features within the districts that would enable community health workers to easily find, locate, and trace patients quicker and more efficiently.',
            location: {
                center: [29.7219314, -1.3045366],
                zoom: 16.48,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
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
            alignment: 'center',
            hidden: false,
            title: 'Protecting the Frontline',
            image: '',
            description: '<iframe width="100%" height="540" src="https://www.youtube.com/embed/NFjREalqx48" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' + 'Across the world, the supply chains that the humanitarian sector relies on were badly affected by the Covid-19 pandemic. Huge spikes in demand depleted personal protection equipment (PPE) and infection control supplies for frontline workers in the health and relief sectors. It has had an  especially devastating impact among populations already affected by conflict.' + '<br /><br />' + 'In response to this need, HOT partnered with Field Ready and NeedsList on the ‘Protecting the Frontline’ project to connect frontline workers and manufacturers in conflict-affected areas. including both IDPs (internally displaced people) and refugees in Kenya and Uganda by identifying potential suppliers that are capable of manufacturing PPE and infection control items. This was achieved by mapping the manufacturing capabilities (supply and demand of PPEs) in Kenya and Uganda.' + '<br /><br />' + 'HOT collected geospatial data and tailored responses in both countries using its open-source apps, data model development,  tools for collaborative mapping, mapping in OpenStreetMap, data import and data management systems. NeedsList’s software collected data on manufacturing capabilities and Field Ready conducted quality-assurance tests on the items and helped match local manufacturers and groups to deliver the PPE. The outcome was a searchable platform that matches needs for supplies and services with offers of in-kind products or services, and information resources.',
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
            id: 'chapter-4',
            alignment: 'left',
            hidden: false,
            title: 'Fighting GBV using OSM tools in Western Uganda',
            image: '',
            description: 'Center for Life Change Development (CLCD) developed a project to fight gender-based violence (GBV) using OSM tools in Bushenyi District, Western Uganda. The aims of the project were to reduce GBV in Bushenyi district through sensitization and awareness in communities, to introduce OSM tools to social workers, police and other stakeholders, and generate maps of administrative boundaries, police stations and health centers.' + '<br /><br />' + 'Sensitization activities took place in three sub counties of Bushenyi district, namely Nyabubare, Kakanju and Bumbaire. This was done via local village councils together with sub county community development officers, stakeholders, village health technicians (VHTs) and para-social workers. Sensitization included three radio talk shows about GBV and activities were further extended to churches where CLCD worked with religious leaders. CLCD also worked with Bushenyi HIV & AIDS Network forum and Bushenyi district local leaders on GBV sensitization and awareness in communities and extended activities to Sheema district where there are high rates of HIV & AIDS.' + '<br /><br />' + 'CLCD collaborated with MapUganda to conduct online and in-person training for volunteers from Bushenyi district communities on GBV issues. Fifteen volunteers were trained to use ODK for data collection, iD Editor and JOSM for remote mapping as well as Maps.me to add points of interest on OSM, and as a navigation tool to respond to GBV calls, and all sub counties in Bushenyi were mapped. Twenty-five maps were printed and given to police police officials in Bushenyi.' + '<br /><br />' + 'Collaborations were formed with MapUganda in organizing mapathons and mobilizing volunteers to map remotely and CLCD was introduced to other OSM communities through events like the OSM Africa monthly mapathon that was key in completing the mapping and validation of the project.',
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
            id: 'spacer-3',
            alignment: 'full',
            hidden: false,
            title: '',
            image: '',
            description: '<h2 class="liftout">South Asia</h2>',
            location: {
              center: [88.039, 24.156],
              zoom: 4.3,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-5',
            alignment: 'center',
            hidden: false,
            title: 'Mapping Chepang',
            image: '',
            description: 'The project centered around mapping in the remote hills of central Nepal and sought to generate data to assess the needs of the Chepang community. Chepangs are one of the most marginalized Indigenous communities in Nepal. Traditionally nomadic people who relied on hunting, fishing and the products of the forest, these  ways of life were brought to an end by the introduction of new government policies.' + '<br /><br />' + 'Restrictions on hunting, gathering and clearing of forest patches have forced the Chepangs to adopt a settled way of life. This change of lifestyle has brought extreme poverty in their community and made it difficult for the Chepangs to access basic amenities such as nutritious food, proper housing, safe drinking water, education and healthcare.' + '<br /><br />' + 'During the mapping, validation, field verification, output and data dissemination, the Geomatics Engineering Society team was able to actively include the needs of the Chepang communities in the project design using surveys and direct conversations.' + '<br /><br />' + 'In line with the project’s poverty reduction and access to basic amenities, they engaged with various donor organizations and the local government. They simultaneously conducted several trainings on OSM to GES members and various OSM  communities in Nepal. They also collaborated with Kathmandu Living Labs, Youth Innovation Lab, Naxa, Department of Geomatics Engineering,  Kathmandu University, and several governmental bodies. The team collaborated with 19 ward presidents and trained them locally to read and visualize the printed satellite imagery maps.' + '<br /><br />' + 'Maps and data that include buildings, roads, land use, and other critical types of infrastructure will be used to access basic amenities for the Chepang and also to analyze areas vulnerable to disaster, agricultural areas, and to assess the need for schools and health posts in the community.' + '<br /><br />' + 'The data and maps generated from the project are being shared with various humanitarian agencies and stakeholders such as  Shanti Griha Nepal, Planete Enfants & Développement, Save the Children, Save Our Soul, Child Workers in Nepal (CWIN), USAID, Leo Club, the Rotaract Club, and various other local authorities for uplifting their communities.',
            location: {
              center: [88.039, 24.156],
              zoom: 4.3,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: []
        }
    ]
};
