var config = {
    style: 'mapbox://styles/hot/cl5ih5i43001415pevodr6bop',
    accessToken: 'pk.eyJ1IjoiaG90IiwiYSI6IlBtUmNiR1kifQ.dCS1Eu9DIRNZGktc24IwtA',
    showMarkers: false,
    inset: true,
    markerColor: '#3FB1CE',
    projection: 'globe',
    theme: 'dark',
    use3dTerrain: true,
    title: '<a href="https://www.hotosm.org/" target="_blank"><img style="padding:25px;" src="images/logo_white.png" width="356" height="88" /></a><br /><div id="separator"></div><h1>ANNUAL REPORT</h1><h2>Improving the wellbeing of people and the health of our planet through growing and sustaining an open mapping movement.</h2><p id="intro-text">HOT and the Regional Open Mapping Hubs support, motivate and enable people to contribute to OpenStreetMap; an open-source, free, and a digital public good and ensure map data is accessible and used in decisions that save and improve lives in countries at high risk of disaster, humanitarian crises, or experiencing multidimensional poverty, while making sure communities are visible on the map in the way they choose and included in decisions that affect their lives.</p><p id="intro-text">July 2021 - June 2022</p><br /><a id="freeExplore" href="#letter-0">BEGIN STORY 🠓 </a>',
    subtitle: '',
    byline: '',
    mobileview: '<div id="rotate-mobile"><strong>For optimal viewing of this report on a mobile device, rotate to a landscape orientation. ⭯</strong></div>',
    footer: '<a href="https://www.hotosm.org/" target="_blank"><img src="images/logo.png" width="150" height="50" /></a><br /><h4>Credits</h4><strong>Visualizations</strong>: Paul Franz<br /><br /><h4>Special Thanks</h4> <div class="data-sources"><a href="https://www.openstreetmap.org" target="_blank">OpenStreetMap</a><br /><br />Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>',
    chapters: [
        {
            id: 'letter-0',
            alignment: 'left',
            hidden: false,
            title: 'A Letter From the Executive Director',
            image: '',
            description: '<img style="float:right; width: auto; padding: 0 0 25px 25px;" src="images/tyler2.jpg" />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
              center: [-8.68740, 23.01151],
              zoom: 2.5,
              pitch: 0,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
              {
                layer: 'latam',
                opacity: .8,
                duration: 2000
              },
              {
                layer: 'asiapac',
                opacity: .8,
                duration: 2000
              },
              {
                layer: 'asiapac2',
                opacity: .8,
                duration: 2000
              },
              {
                layer: 'wnaf',
                opacity: .8,
                duration: 2000
              },
              {
                layer: 'esaf',
                opacity: .8,
                duration: 2000
              },
              {
                layer: 'esaf2',
                opacity: .8,
                duration: 2000
              }
            ],
            onChapterExit: [
              {
                layer: 'latam',
                opacity: 0,
                duration: 2000
              },
              {
                layer: 'asiapac',
                opacity: 0,
                duration: 2000
              },
              {
                layer: 'asiapac2',
                opacity: 0,
                duration: 2000
              },
              {
                layer: 'wnaf',
                opacity: 0,
                duration: 2000
              },
              {
                layer: 'esaf',
                opacity: 0,
                duration: 2000
              },
              {
                layer: 'esaf2',
                opacity: 0,
                duration: 2000
              }
            ]
        },
        {
            id: 'chapter-1',
            alignment: 'left',
            hidden: false,
            title: 'Scaling Missing Maps in Africa’s Great Lakes Region',
            image: '',
            description: '<h4 class="impact-head">Impact Areas:</h4> <strong>Public Health</strong> <img style="width: auto; vertical-align: middle;" src="images/icons/health.svg" height="35" width="35" />' + '<h3></h3>' + 'Patient tracking is a crucial public health activity that contributes to reducing the spread of highly contagious diseases. However, patient tracing, tracking, and monitoring in low-and middle-income countries is a complex process as most of the geographical, navigational, and landmark features are not fully digitized. With funding from the Humanitarian Grand Challenge, the Humanitarian OpenStreetMap Team (HOT) embarked on a project to scale the Missing Maps initiative across the public health and disease surveillance sector in Uganda and the Democratic Republic of Congo (DRC).' + '<br /> <br />' + 'HOT partnered with district and community health teams to design a community participatory mapping exercise. In Uganda, HOT partnered with community health workers across Kisoro and Zombo districts; and in DRC, HOT partnered with community health workers in Kalunguta, Beni, Butembo and Katwa.  This mapping exercise included locating and mapping all geographical and human-made features within the districts that would enable community health workers to easily find, locate, and trace patients quicker and more efficiently.',
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
            description: 'Resilience Mappers took up the challenge to address the lack of complete spatial data in the informal settlements of Kampala. The community mapped out all the buildings and roads in these settlements and shared the data with Actogether and the Kampala Capital City Authority. The data will be used to identify potential treatment and evacuation sites and also approximate the population of the people affected in case of an outbreak of Covid-19. In addition to the buildings and roads mapped, data users also required updated information on service points, specifically health facilities, education facilities and solid waste dumping points (both legal and illegal).<h3></h3><strong>This project was supported by ESRI</strong>',
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
            alignment: 'right',
            hidden: false,
            title: 'Protecting the Frontline',
            image: 'images/placeholder.jpg',
            description: '' + 'Across the world, the supply chains that the humanitarian sector relies on were badly affected by the Covid-19 pandemic. Huge spikes in demand depleted personal protection equipment (PPE) and infection control supplies for frontline workers in the health and relief sectors. It has had an  especially devastating impact among populations already affected by conflict.' + '<br /><br />' + 'In response to this need, HOT partnered with Field Ready and NeedsList on the ‘Protecting the Frontline’ project to connect frontline workers and manufacturers in conflict-affected areas. including both IDPs (internally displaced people) and refugees in Kenya and Uganda by identifying potential suppliers that are capable of manufacturing PPE and infection control items. This was achieved by mapping the manufacturing capabilities (supply and demand of PPEs) in Kenya and Uganda.' + '<br /><br />' + 'HOT collected geospatial data and tailored responses in both countries using its open-source apps, data model development,  tools for collaborative mapping, mapping in OpenStreetMap, data import and data management systems. NeedsList’s software collected data on manufacturing capabilities and Field Ready conducted quality-assurance tests on the items and helped match local manufacturers and groups to deliver the PPE. The outcome was a searchable platform that matches needs for supplies and services with offers of in-kind products or services, and information resources.',
            location: {
              center: [37.84560, 0.83084],
              zoom: 5,
              pitch: 0.00,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'uganda-outline',
                opacity: 1,
                duration: 2000
              },
              {
                layer: 'kenya-outline',
                opacity: 1,
                duration: 2000
              },
              {
                layer: 'africa_labels',
                opacity: 1,
                duration: 2000
              }
            ],
            onChapterExit: [
              {
                layer: 'uganda-outline',
                opacity: 0,
                duration: 2000
              },
              {
                layer: 'kenya-outline',
                opacity: 0,
                duration: 2000
              },
              {
                layer: 'africa_labels',
                opacity: 0,
                duration: 2000
              }
            ]
        },
        {
            id: 'chapter-4',
            alignment: 'left',
            hidden: false,
            title: 'Fighting GBV using OSM tools in Western Uganda',
            image: '',
            description: 'Center for Life Change Development (CLCD) developed a project to fight gender-based violence (GBV) using OSM tools in Bushenyi District, Western Uganda. The aims of the project were to reduce GBV in Bushenyi district through sensitization and awareness in communities, to introduce OSM tools to social workers, police and other stakeholders, and generate maps of administrative boundaries, police stations and health centers.' + '<br /><br />' + 'Sensitization activities took place in three sub counties of Bushenyi district, namely Nyabubare, Kakanju and Bumbaire. This was done via local village councils together with sub county community development officers, stakeholders, village health technicians (VHTs) and para-social workers. Sensitization included three radio talk shows about GBV and activities were further extended to churches where CLCD worked with religious leaders. CLCD also worked with Bushenyi HIV & AIDS Network forum and Bushenyi district local leaders on GBV sensitization and awareness in communities and extended activities to Sheema district where there are high rates of HIV & AIDS.' + '<br /><br />' + 'CLCD collaborated with MapUganda to conduct online and in-person training for volunteers from Bushenyi district communities on GBV issues. Fifteen volunteers were trained to use ODK for data collection, iD Editor and JOSM for remote mapping as well as Maps.me to add points of interest on OSM, and as a navigation tool to respond to GBV calls, and all sub counties in Bushenyi were mapped. Twenty-five maps were printed and given to police police officials in Bushenyi.' + '<br /><br />' + 'Collaborations were formed with MapUganda in organizing mapathons and mobilizing volunteers to map remotely and CLCD was introduced to other OSM communities through events like the OSM Africa monthly mapathon that was key in completing the mapping and validation of the project.',
            location: {
              center: [30.113618, -0.555984],
              zoom: 12.40,
              pitch: 35.00,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'gbv-towns',
                opacity: 1,
                duration: 2000
              },
              {
                layer: 'gbv-towns-label',
                opacity: 1,
                duration: 2000
              },
              {
                layer: 'nepal',
                opacity: 0,
                duration: 1000
              },
              {
                layer: 'nepal_label',
                opacity: 0,
                duration: 4000
              }
            ],
            onChapterExit: [
              {
                layer: 'gbv-towns',
                opacity: 0,
                duration: 2000
              },
              {
                layer: 'gbv-towns-label',
                opacity: 0,
                duration: 2000
              }
            ]
        },
        {
            id: 'chapter-5',
            alignment: 'left',
            hidden: false,
            title: 'Mapping Chepang',
            image: 'images/placeholder.jpg',
            description: 'The project centered around mapping in the remote hills of central Nepal and sought to generate data to assess the needs of the Chepang community. Chepangs are one of the most marginalized Indigenous communities in Nepal. Traditionally nomadic people who relied on hunting, fishing and the products of the forest, these  ways of life were brought to an end by the introduction of new government policies.' + '<br /><br />' + 'Restrictions on hunting, gathering and clearing of forest patches have forced the Chepangs to adopt a settled way of life. This change of lifestyle has brought extreme poverty in their community and made it difficult for the Chepangs to access basic amenities such as nutritious food, proper housing, safe drinking water, education and healthcare.' + '<br /><br />' + 'During the mapping, validation, field verification, output and data dissemination, the Geomatics Engineering Society team was able to actively include the needs of the Chepang communities in the project design using surveys and direct conversations.' + '<br /><br />' + 'In line with the project’s poverty reduction and access to basic amenities, they engaged with various donor organizations and the local government. They simultaneously conducted several trainings on OSM to GES members and various OSM  communities in Nepal. They also collaborated with Kathmandu Living Labs, Youth Innovation Lab, Naxa, Department of Geomatics Engineering,  Kathmandu University, and several governmental bodies. The team collaborated with 19 ward presidents and trained them locally to read and visualize the printed satellite imagery maps.',
            location: {
              center: [82.81188, 28.28352],
              zoom: 6.94,
              pitch: 1.67,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                  layer: 'nepal',
                  opacity: 1,
                  duration: 4000
                },
                {
                  layer: 'nepal_label',
                  opacity: 1,
                  duration: 4000
                }
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'chapter-5b',
            alignment: 'left',
            hidden: false,
            title: 'Mapping Chepang',
            image: 'images/nepal_school_map.jpg',
            description: 'Maps and data that include buildings, roads, land use, and other critical types of infrastructure will be used to access basic amenities for the Chepang and also to analyze areas vulnerable to disaster, agricultural areas, and to assess the need for schools and health posts in the community.' + '<br /><br />' + 'The data and maps generated from the project are being shared with various humanitarian agencies and stakeholders such as  Shanti Griha Nepal, Planete Enfants & Développement, Save the Children, Save Our Soul, Child Workers in Nepal (CWIN), USAID, Leo Club, the Rotaract Club, and various other local authorities for uplifting their communities.',
            location: {
              center: [82.81188, 28.28352],
              zoom: 6.94,
              pitch: 1.67,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'disableFreetime',
            onChapterEnter: [
                {
                  layer: 'nepal',
                  opacity: 1,
                  duration: 4000
                },
                {
                  layer: 'nepal_label',
                  opacity: 1,
                  duration: 4000
                }
            ],
            onChapterExit: [
              {
                layer: 'nepal',
                opacity: 0,
                duration: 1000
              },
              {
                layer: 'nepal_label',
                opacity: 0,
                duration: 4000
              }
            ]
        },
        {
            id: 'chapter-6',
            alignment: 'left',
            hidden: false,
            title: 'Disaster Activations',
            image: '',
            description: 'Location is critical to disaster response: first responders need fast, reliable information to reach affected areas post-disaster and prioritize aid. Through <a href="https://www.hotosm.org/hot-activation-protocol" target="_blank">rapid response activations</a>, the HOT community works together online using satellite and drone imagery to rapidly generate map data in OpenStreetMap. The resulting data is made available via the <a href="https://data.humdata.org/organization/hot" target="_blank">Humanitarian Data Exchange (HDX)</a> and can be used to create printed maps, for analysis, or for navigation on the ground.',
            location: {
              center: [-58.401371, 4.361681],
              zoom: 2.75,
              pitch: 0,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: 'enableFreetime',
            onChapterEnter: [
              {
                layer: 'satellite',
                opacity: .7,
                duration: 2000
              },
              {
                layer: 'activations',
                opacity: 1,
                duration: 2000
              },
              {
                layer: 'activations_label',
                opacity: 1,
                duration: 2000
              }
            ],
            onChapterExit: [
              {
                layer: 'satellite',
                opacity: 1,
                duration: 4000
              },
              {
                layer: 'activations',
                opacity: 0,
                duration: 2000
              },
              {
                layer: 'activations_label',
                opacity: 0,
                duration: 2000
              }
            ]
        },
        {
            id: 'spacer-1',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<h2 class="liftout">To scale and sustain the movement, we need to create the space to <span style="color: #D73F3F; font-weight: bold;">connect, convene, and amplify</span> community and partner work; providing excellent collaboration spaces and virtuous circles for Partner to Community and Community to Community sharing and learning.</h2>',
            location: {
              center: [-58.401371, 4.361681],
              zoom: 2.5,
              pitch: 0,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'disableFreetime',
            onChapterEnter: [

            ],
            onChapterExit: [

            ]
        },
        {
            id: 'chapter-7',
            alignment: 'left',
            hidden: false,
            title: 'West and Northern Africa Hub Launch',
            image: '',
            description: 'Continuing the rolling out of its Regional Open Mapping Hubs, the West and Northern Africa Open Mapping Hub (the Hub) opened its doors in March 2022 to support open mapping activities in the region, led by Regional Director, Ibrahima Cisse.' + '<br /><br />' + '<img src="images/placeholder.jpg" />' + '<br /><br />' + 'The Hub will focus on humanitarian and community development mapping and will work with humanitarian organizations, governments, civil society, private operators, institutions, and other actors on the use of OpenStreetMap tools that support disaster risk reduction and response, gender equality, sustainable cities, public health, and displacement and safe migration.' + '<br /><br />' + 'The Hub will also support local mapping communities in the region by facilitating knowledge exchanges, distributing funding, and providing training and support with the goal of massively scaling local edits to OpenStreetMap.',
            location: {
              center: [-17.57109, 14.91929],
              zoom: 5.20,
              pitch: 41.13,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: [

            ]
        },
        {
            id: 'chapter-8',
            alignment: 'left',
            hidden: false,
            title: 'She Leads and She Inspires',
            image: '',
            description: 'The She Leads and She Inspires Project is an initiative of the OpenMapping Hub - Asia Pacific and was designed to increase women’s representation in the geospatial ecosystem by supporting the emergence and evolution of women leaders within the OSM ecosystem and beyond. The long term vision is that the participants will continue to grow, get more deeply involved and champion similar initiatives in their communities beyond the scope of the project.' + '<br /><br />' + 'Over the course of six months, women from Nepal, India, Philippines, Bangladesh, Bhutan, Tajikistan, Indonesia, Pakistan, Sri Lanka, Cambodia, Fiji, Kiribati, Vietnam, Papua New Guinea were led through a structured programme supporting them to become OSM community leaders by gaining skills in geospatial data and technologies, decision making, digital leadership, needs identification and networking.' + '<br /><br />' + 'Out of the 99 women trained, 74 completed the program and 19 will be carrying out 10 projects in 10 countries. The projects will address local challenges related to Disaster Resilience, Environment, Gender Equality, Health, Heritage, Inclusion, and Sustainable Cities, adding value to local action in Asia Pacific.' + '<br /><br />' + '<img src="images/placeholder.jpg" />' + '<br /><br />' + 'The project confirmed what we already knew; that there is a lack of female representation in the geospatial sector. It also became clear that it is important to connect women in the OSM ecosystem to experienced project coordinators/experts to further expand and implement their project ideas. The project also helped us learn about the need to include men allies for sustainable growth and empowerment. She Leads and She Inspires is a first of many initiatives planned by HOT’s and the Open Mapping Hubs and demonstrates our commitment to helping women carve out their own destinies as inspiring OSM leaders.',
            location: {
              center: [85.403328, 5.058386],
              zoom: 3.5,
              pitch: 0,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'she_leads',
                opacity: 1,
                duration: 2000
              },
              {
                layer: 'she_leads2',
                opacity: 1,
                duration: 2000
              },
              {
                layer: 'she_leads_countries',
                opacity: 1,
                duration: 2000
              }
            ],
            onChapterExit: [
              {
                layer: 'she_leads',
                opacity: 0,
                duration: 2000
              },
              {
                layer: 'she_leads2',
                opacity: 0,
                duration: 2000
              },
              {
                layer: 'she_leads_countries',
                opacity: 0,
                duration: 2000
              }
            ]
        },
        {
            id: 'chapter-9',
            alignment: 'left',
            hidden: false,
            title: 'The Data Quality Internship',
            image: '',
            description: 'HOT coordinated a 12-week Data Quality Internship from September to November 2021 designed to  give participants the opportunity to gain readily transferable geospatial skills.' + '<br /><br />' + 'The 19 interns, hailing from 14 countries, were led through a series of webinars hosted by a range of professionals in the humanitarian mapping sector. They received live in-depth training in a wide range of geospatial tools culminating in their ability to confidently validate the work of other mappers.' + '<br /><br />' + 'Together they validated a large amount of OpenStreetMap data across 12 countries to ensure its readiness for disaster response and field mapping activities. This involved working remotely in teams of 4-5 and coordinating approaches and sharing best practices.' + '<br /><br />' + 'The Data Quality Internship is part of HOT’s commitment to ensuring high quality data for humanitarian and development use and also recognizes our role in closing the digital divide, including acknowledging obstacles that certain groups, such as women, nationals of low and middle-income countries, and members of other underrepresented groups, face in developing skills needed for roles in the humanitarian & technology sectors.',
            location: {
              center: [-58.401371, 4.361681],
              zoom: 2.75,
              pitch: 0,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
              {
                layer: 'data_intern_countries1',
                opacity: 1,
                duration: 2000
              },
              {
                layer: 'data_intern_countries2',
                opacity: 1,
                duration: 2000
              },
              {
                layer: 'data_intern_labels',
                opacity: 1,
                duration: 2000
              }
            ],
            onChapterExit: [
              {
                layer: 'data_intern_countries1',
                opacity: 0,
                duration: 2000
              },
              {
                layer: 'data_intern_countries2',
                opacity: 0,
                duration: 2000
              },
              {
                layer: 'data_intern_labels',
                opacity: 0,
                duration: 2000
              }
            ]
        }
    ]
};
