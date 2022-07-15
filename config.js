var config = {
    style: 'mapbox://styles/hot/cl5mi02hh008o14ptm015i5wp',
    accessToken: 'pk.eyJ1IjoiaG90IiwiYSI6IlBtUmNiR1kifQ.dCS1Eu9DIRNZGktc24IwtA',
    showMarkers: false,
    inset: true,
    markerColor: '#3FB1CE',
    projection: 'globe',
    theme: 'dark',
    use3dTerrain: true,
    title: '<a href="https://www.hotosm.org/" target="_blank"><img style="padding:25px;" src="images/logo_white.png" width="356" height="88" /></a><br /><div id="separator"></div><h1>ANNUAL REPORT</h1><p id="dash-text">Humanitarian OpenStreetMap Team</p><p id="dash-text2">July 2021 &dash; June 2022</p><h2>Improving the wellbeing of people and the health of our planet through growing and sustaining an open mapping movement.</h2><p id="intro-text">Humanitarian OpenStreetMap Team (HOT) and the Regional Open Mapping Hubs support, motivate and enable people to contribute to OpenStreetMap (OSM); an open-source, free, and a digital public good and ensure map data is accessible and used in decisions that save and improve lives in countries at high risk of disaster, humanitarian crises, or experiencing multidimensional poverty, while making sure communities are visible on the map in the way they choose and included in decisions that affect their lives.</p><p style="font-size: .9em;">Cover image: <em>An urban center in Kampala, Uganda</em>&nbsp;&nbsp;|&nbsp;&nbsp;© Mapbox Satellite</p><br /><a id="freeExplore" href="#letter-0"> BEGIN &nbsp;&nbsp; &#8595; </a>',
    subtitle: '',
    byline: '',
    mobileview: '<div id="rotate-mobile"><strong>For optimal viewing of this report on a mobile device, rotate to a landscape orientation. &#8405;</strong></div>',
    footer: '<a href="https://www.hotosm.org/" target="_blank"><img src="images/logo.png" width="150" height="50" /></a><br /><h4>Credits</h4><strong>Visualizations</strong>: Paul Franz<br /><br /><h4>Special Thanks</h4> <div class="data-sources"><a href="https://www.openstreetmap.org" target="_blank">OpenStreetMap</a><br /><br />Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>',
    chapters: [
        {
            id: 'letter-0',
            alignment: 'left',
            hidden: false,
            title: 'A Letter From Tyler Radford, HOT’s Executive Director',
            image: '',
            description: '<img style="float:right; width: auto; padding: 0 0 25px 25px;" src="images/tyler2.jpg" />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' + '<br /><br />' + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' + '<br /><br />' + '<strong>Explore the globe by clicking and dragging your pointer, or use the controls in the top right.</strong> &#8594;',
            location: {
              center: [-8.68740, 23.01151],
              zoom: 2.5,
              pitch: 0,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: 'enableFreetime',
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
              },
              {
                layer: 'asiapac_intro',
                opacity: 1,
                duration: 2000
              },
              {
                layer: 'eaf_intro',
                opacity: 1,
                duration: 2000
              },
              {
                layer: 'waf_intro',
                opacity: 1,
                duration: 2000
              },
              {
                layer: 'latam_intro',
                opacity: 1,
                duration: 2000
              },
              {
                layer: 'lat_am_cs',
                opacity: 1,
                duration: 2000
              },
              {
                layer: 'satellite',
                opacity: .7,
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
              },
              {
                layer: 'asiapac_intro',
                opacity: 0,
                duration: 2000
              },
              {
                layer: 'eaf_intro',
                opacity: 0,
                duration: 2000
              },
              {
                layer: 'waf_intro',
                opacity: 0,
                duration: 2000
              },
              {
                layer: 'latam_intro',
                opacity: 0,
                duration: 2000
              },
              {
                layer: 'lat_am_cs',
                opacity: 0,
                duration: 2000
              },
              {
                layer: 'satellite',
                opacity: 1,
                duration: 2000
              }
            ]
        },
        {
            id: 'prelude-1',
            alignment: 'center',
            hidden: false,
            title: 'Impact Areas (SECTION IN PROGRESS)',
            image: '',
            description: 'Impact Areas connect open mapping with real world applications through spatial data use in the humanitarian and development sectors. Each impact area at HOT provides a framework for technical and subject matter expertise for partnerships, grantee projects, and community support.',
            location: {
              center: [-8.68740, 23.01151],
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
            id: 'prelude-2',
            alignment: 'center',
            hidden: false,
            title: 'Key Milestones (SECTION IN PROGRESS)',
            image: '',
            description: '# people living in an area where buildings and roads have been mapped and validated # of mappers # partner NGO staff (men and women) trained and received at least one follow up by HOT and partners # of downloads at HDX # Exports generated # of names of places mapped # of amenities mapped',
            location: {
              center: [-8.68740, 23.01151],
              zoom: 2.5,
              pitch: 0,
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
            id: 'chapter-1',
            alignment: 'left',
            hidden: false,
            title: 'Scaling Missing Maps in Africa’s Great Lakes Region',
            image: '',
            description: '<h4 class="impact-head">Impact Area:</h4> <strong>Public Health</strong> <img style="width: auto; vertical-align: middle;" src="images/icons/health.png" height="35" width="35" />' + '<h3></h3>' + 'Patient tracking is a crucial public health activity that contributes to reducing the spread of highly contagious diseases. However, patient tracing, tracking, and monitoring in low-and middle-income countries is a complex process as most of the geographical, navigational, and landmark features are not fully digitized. In 2019, with funding from the Humanitarian Grand Challenge, HOT embarked on a project to scale the <a href="https://www.missingmaps.org/" target="_blank">Missing Maps</a> initiative across the public health and disease surveillance sector in Uganda and the Democratic Republic of Congo (DRC).' + '<br /> <br />' + 'HOT partnered with district and community health teams to design a community participatory mapping exercise. In Uganda, HOT partnered with community health workers across Kisoro and Zombo districts; and in DRC, HOT partnered with community health workers in Kalunguta, Beni, Butembo and Katwa.  This mapping exercise included locating and mapping all geographical and human-made features within the districts that would enable community health workers to easily find, locate, and trace patients more quickly and efficiently.' + '<br /> <br />' + '<img src="images/placeholder.jpg" />',
            location: {
                center: [29.7219314, -1.3045366],
                zoom: 16.48,
                pitch: 75,
                bearing: 35
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
            id: 'chapter-1b',
            alignment: 'left',
            hidden: false,
            title: 'Uganda',
            image: '',
            description: 'HOT carried out two separate data collection activities, which began in Kisoro district and continued to Zombo District. The fieldwork included the collection of geographic information of different amenities located in these two districts.' + '<br /><br />' + 'A total of 30 surveyors were trained on OpenDataKit and OpenMapKit to carry out the data collection on village locations, education facilities, health facilities, water points, places of worship, market places, and offices, including government and non-government offices.' + '<br /><br />' + '<img src="images/ed_map.jpg" />' + '<br /><br />' + 'Remote mapping and validation exercises were carried out in the priority districts of Kisoro, Zombo, Kanungu, Rubirizi, Rukungiri, Isingiro, Kamwenge, Kyegegwa, Ntoroko, Bundibugyo, Kikuube, Kasese, Hoima, Kiryandongo, Maracha, Nebbi, and Koboko. Over 2.5 million building footprints were added to OSM.',
            location: {
                center: [29.217162, 0.871755],
                zoom: 7,
                pitch: 35,
                bearing: 20
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
                layer: 'uganda_label',
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
                layer: 'uganda_label',
                opacity: 0,
                duration: 2000
              }
            ]
        },
        {
            id: 'chapter-1c',
            alignment: 'full',
            hidden: false,
            title: 'Impact of the Mapping in Uganda',
            image: '',
            description: 'The HOT team collaborated with the district health team to design and produce village-level, book-sized maps. These book-sized maps were distributed to the village community health workers to help them navigate, locate, and record their movements even without using smartphones. The aim is to develop district-level gazetteers that will be shared with health centers across the district to assist in reducing the time spent on patient tracing.' + '<br /><br />' + '<img src="images/village_map.jpg" />' + '<span class="photocaption">Village Health Technician, Happy Annah, Gasiza Village, Kisoro District, Uganda. | Photo by: Miriam Watsemba</span> Increased access to smartphones among Village Health Workers (VHWs) in Kisoro and Zombo districts improved digital access and through the data collection training and landmarks mapping, the VHWs acquired digital navigation and mapping skills that led them to acquire their own smartphones to continue mapping and sharing their locations with colleagues when in the field using free and open source software (OSMand) with OSM data offline on their phones.' + '<br /><br />' + 'As a part of the culmination of the scaling missing maps project, the HOT team created and shared <a href="https://drive.google.com/file/d/1Zcduoi0yT2ek3yjXDGGevxKiuIv02Qbb/view" target="_blank">4 Atlases</a> to the Zombo district health departments as well as the Ministry Health, Health information department. The health team at the district and ministry plan to use these atlases to improve health intervention planning and as a learning resource to replicate this work across the other priority districts in the country.' + '<br /><br />' + 'The team in Uganda is planning to work closer with the district health management team specifically with the Assistant District Health Officer to continue championing and training community health workers.',
            location: {
              center: [29.217162, 0.871755],
              zoom: 7,
              pitch: 35,
              bearing: 20
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
            id: 'chapter-1d',
            alignment: 'left',
            hidden: false,
            title: 'Democratic Republic of the Congo',
            image: '',
            description: 'HOT carried out four separate data collection activities which began in Kalungunta and continued in Beni, Butembo and Katwa. The fieldwork included the collection of geographic information of different amenities located in these four districts, including data on village locations, education facilities, health facilities, water points, places of worship, market places, and offices, including government and non-government offices.' + '<br /><br />' + '<img src="images/vax_map.jpg" /><span class="photocaption">Map of vaccination points in Beni, North Kivu, DRC</span>' + 'Data collectors were paired with District Health Officers to ensure that local health staff would be trained, and ensure security of the HOT staff during data collection. At the end of the field mapping period, the data was reviewed, validated, and uploaded to the OSM platform.' + '<br /><br />' + 'Following data collection, data and maps were presented to the health officials and training were carried out. Over 400 district health officials were trained on data collection using OSM tools, and basic GIS.',
            location: {
                center: [9.369040, -4.818064],
                zoom: 5.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'drc-outline',
                opacity: 1,
                duration: 2000
              },
              {
                layer: 'drc_label',
                opacity: 1,
                duration: 2000
              }
            ],
            onChapterExit: [
              {
                layer: 'drc-outline',
                opacity: 0,
                duration: 2000
              },
              {
                layer: 'drc_label',
                opacity: 0,
                duration: 2000
              }
            ]
        },
        {
            id: 'chapter-1e',
            alignment: 'center',
            hidden: false,
            title: 'Impact of the Mapping',
            image: '',
            description: '<ul><li>The maps have improved disease surveillance planning and sensitization campaigns (Covid-19, Ebola, Malaria, Tuberculosis), with improved risk communication and more targeted messages.</li><li>Health workers are able to find patients through locally-defined and well-known landmarks.</li><li>Health workers use the maps for directions, measuring distances and planning routes. They can better plan activities as they understand why some people in a health district are able or not to access a particular health center.</li><li>The atlases and gazetteer documents provided to the health areas improved the ability to accurately trace patients, particularly for follow-up treatment.</li><li>In October 2021, a new wave of Ebola in the province of Beni, DRC during which health boundaries and points of interest data collected through this project were used to trace patient contacts. Data was directly distributed to the health area of Beni and <a href="https://data.humdata.org/dataset?groups=cod&organization=osm-rdc&q=&sort=if(gt(last_modified%2Creview_date)%2Clast_modified%2Creview_date)%20desc&ext_page_size=25" target="_blank">uploaded on HDX</a> with more than 100 downloads reported. International organizations such as OCHA and WHO were able use the data for their outbreak response.</li><li>In the Health zone of Butembo, DRC, the health areas of Vuvatsi and Kyangike were able to visualize the limits of their respective zones and found an area with 54 households not counted in either. Those households will now be counted in the health area of Vuvatsi, Mabuku and Kalunguta.</li></ul>' + '<img src="images/drc.jpg" />',
            location: {
              center: [9.369040, -4.818064],
              zoom: 5.5,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'drc-outline',
                opacity: 1,
                duration: 2000
              }
            ],
            onChapterExit: [
              {
                layer: 'drc-outline',
                opacity: 0,
                duration: 2000
              }
            ]
        },
        {
            id: 'chapter-1f',
            alignment: 'center',
            hidden: false,
            title: 'Key Results - DRC and Uganda',
            image: '',
            description: '<div class="flourish-embed" data-src="visualisation/10617075"></div>' + '<ul><li><span style="font-weight: bold; color: #D73F3F;">44</span> in-person outreach and awareness activities were conducted. These include training workshops and dissemination sessions.</li><li>A total of <span style="font-weight: bold; color: #D73F3F;">1,262</span> maps were printed, <span style="font-weight: bold; color: #D73F3F;">1,188</span> were distributed in villages, 68 in the sub-counties and 14 within the districts.</li><li>A total of <span style="font-weight: bold; color: #D73F3F;">115</span> facilities/sites are now using the maps; these include: health facilities, humanitarian aid organizations, community-based organizations, and government bodies using OSM for operations in the project area.</li><li>A total of <span style="font-weight: bold; color: #D73F3F;">832</span> participants (health workers, humanitarian aid workers and service providers) were trained.</li>' + '<h3 class="contrib"></h3>The project was supported by <a href="https://humanitariangrandchallenge.org/" target="_blank">Creating Hope in Conflict: a Humanitarian Grand Challenge project</a>. HOT led the design and implementation of the project in conjunction with local healthcare authorities, and district health teams in Uganda and DRC.',
            location: {
                center: [9.369040, -4.818064],
                zoom: 4.6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'drc-outline',
                opacity: 1,
                duration: 2000
              }
            ],
            onChapterExit: [
              {
                layer: 'drc-outline',
                opacity: 0,
                duration: 2000
              }
            ]
        },
        {
            id: 'chapter-2',
            alignment: 'left',
            hidden: false,
            title: 'Health and Education in Kawempe Informal Settlements, Uganda',
            image: '',
            description: '<h4 class="impact-head">Impact Area:</h4> <strong>Sustainable Cities and Communities</strong> <img style="width: auto; vertical-align: middle;" src="images/icons/city.png" height="35" width="35" />' + '<h3></h3>' + '<a href="https://www.facebook.com/RMappers/" target="_blank">Resilience Mappers</a>, a local GIS and mapping community in Uganda, took up the challenge to address the lack of complete spatial data in the informal settlements of Kampala in order to provide relief to the people in these settlements. The main aim was to map out health facilities, education facilities and waste dumping sites in 11 informal settlements in Kawempe division to meet the following objectives:' + '<ul><li>Engage settlement leaders, community NGOs and other OSM communities in Uganda in the project activities</li><li>Train 10 OSM communities in Uganda and teams in the settlements to assist in the field work activities, including in field mapping tools like ODK and OMK</li><li>Generate print maps for stakeholders and update the web map repository and the infographic dashboard</li></ul>' + 'Resilience Mappers mapped all the buildings and roads in the settlements and shared the data with stakeholders including Actogether and the urban authorities such as Kampala Capital City Authority. In addition to the buildings and roads mapped, data users also requested updated information on service points, specifically health facilities, education facilities and solid waste dumping points (both legal and illegal).' + '<img src="images/placeholder.jpg" />',
            location: {
              center: [32.58118, 0.34707],
              zoom: 16.48,
              pitch: 68,
              bearing: 165
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: []
        },
        {
            id: 'chapter-2b',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'The project started with meetings with settlement leaders, local NGOs and OSM communities to promote collaboration and prepare inception reports and training materials and introduce project activities to community leaders.' + '<br /><br />' + 'Training sessions were then conducted to introduce the different methodologies of data collection to volunteers. A total of <span style="font-weight: bold; color: #D73F3F;">30 volunteers</span> were recruited: 20 from OSM communities and 10 residents from the settlements. Experienced OSM mappers were paired with inexperienced mappers and a resident from the settlements guided each pair to ensure the information generated was an accurate representation of the realities there.' + '<br /><br />' + 'The next step was quality assurance. The data collected from field mapping was validated and cleaned by a team of experienced mappers and uploaded to OSM.' + '<br /><br />' + 'The <a href="https://africageoportal.maps.arcgis.com/apps/MinimalGallery/index.html?appid=0d34938fc075452d9cac13babe80b574" target="_blank">web map repository</a> was updated with the new data and statistics relating to the data visualized on the dashboard where it can be accessed by locals in the community, NGOs, and government agencies.' + '<br /><br />' + 'The final stage included coordinating with data users through feedback sessions and presentation of the newly created maps.',
            location: {
              center: [32.58118, 0.34707],
              zoom: 16.48,
              pitch: 68,
              bearing: 165
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: []
        },
        {
            id: 'chapter-2c',
            alignment: 'left',
            hidden: false,
            title: 'Impact of Mapping in Kampala',
            image: '',
            description: 'The project developed the technical capacity of <span style="font-weight: bold; color: #D73F3F;">30 community volunteers</span> and other OSM communities in field mapping techniques. The new skills will enable volunteers to participate in  future mapping projects. A larger community means a greater impact created in informal settlements and more contributions to OSM.' + '<br /><br />' + '<span style="font-weight: bold; color: #D73F3F;">Over 20 women and girls</span> participated in the project activities thus providing them with the opportunity to impact their communities while contributing to OSM. Additionally, this will ensure that the services that are important to women and girls are more likely to be mapped.' + '<br /><br />' + 'The maps will play an important role in:' + '<ul><li>Identifying potential treatment, immunization and evacuation sites within the settlements during disease outbreaks</li><li>Advocating for healthcare services where they are not sufficient or where none exist</li><li>Making informed administrative decisions for the communities in these settlements</li><li>Identifying and cleaning up illegal waste dumpsites around the villages within the settlements</li></ul>',
            location: {
              center: [32.58118, 0.34707],
              zoom: 16.48,
              pitch: 68,
              bearing: 165
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: []
        },
        {
            id: 'chapter-2c',
            alignment: 'left',
            hidden: false,
            title: 'KEY RESULTS',
            image: '',
            description: '<ul><li><span style="font-weight: bold; color: #D73F3F;">30</span> community volunteers trained</li><li><span style="font-weight: bold; color: #D73F3F;">20</span> from OSM communities</li><li><span style="font-weight: bold; color: #D73F3F;">10</span> residents of settlements (20 women and girls engaged in project)</li><li><span style="font-weight: bold; color: #D73F3F;">30</span> new field mappers</li><li>A total of <span style="font-weight: bold; color: #D73F3F;">162</span> health facilities within 11 settlements were mapped</li></ul>' + '<h3 class="contrib"></h3>' + 'The project was supported by HOT and <a href="https://www.esri.com/en-us/home" target="_blank">Esri</a>.<br /><br /> Partners: Actogether, Africa Geoportal, Somero Uganda, OpenStreetMap Uganda, GeoYouthMappers, Kyambogo YouthMappers, Vision Mappers, Team Good Mappers, and CSGU YouthMappers.',
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
            image: '',
            description: '<h4 class="impact-head">Impact Area:</h4> <strong>Public Health</strong> <img style="width: auto; vertical-align: middle;" src="images/icons/health.png" height="35" width="35" />' + '<h3></h3>' + 'Across the world, the supply chains that the  humanitarian sector relies on were badly affected by the Covid-19 pandemic. Huge spikes in demand depleted personal protection equipment (PPE) and infection control supplies for frontline workers in the health and relief sectors. It has had an  especially devastating impact among populations already affected by conflict.' + '<br /><br />' + 'In response to this need, HOT partnered with <a href="https://www.fieldready.org/" target="_blank">Field Ready</a> and <a href="https://needslist.co/" target="_blank">NeedsList</a> on the ‘Protecting the Frontline’ project to connect frontline workers and manufacturers in conflict-affected areas, including both internally displaced people (IDPs) and refugees in Kenya and Uganda by identifying potential suppliers that are capable of manufacturing PPE and infection control items. This was achieved by mapping the manufacturing capabilities (supply and demand of PPEs) in Kenya and Uganda.' + '<img src="images/placeholder.jpg" />' + '<br /><br />' + 'HOT collected geospatial data and tailored responses in both countries using its open-source apps, data model development,  tools for collaborative mapping, mapping in OSM, data import and data management systems. NeedsList’s software collected data on manufacturing capabilities and Field Ready conducted quality-assurance tests on the items and helped match local manufacturers and groups to deliver the PPE. The outcome was a <a href="https://fieldready.app.needslist.co/login" target="_blank">searchable platform</a> that matches needs for supplies and services with offers of in-kind products or services, and information resources.',
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
            id: 'chapter-3b',
            alignment: 'center',
            hidden: false,
            title: 'KEY RESULTS',
            image: '',
            description: '<div class="flourish-embed" data-src="visualisation/10617361"></div>' + '<h3 class="contrib"></h3>' + '<a href="https://www.fieldready.org/" target="_blank">Field Ready</a> teamed up with HOT and <a href="https://needslist.co/" target="_blank">NeedsList</a> to help get PPE and other medical supplies to those frontline workers in four of the hardest-hit countries through our “Protecting the Frontline” program.' + '<br /><br />' + 'The project was supported by <a href="https://humanitariangrandchallenge.org/" target="_blank">Creating Hope in Conflict: a Humanitarian Grand Challenge</a> project. ',
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

            ],
            onChapterExit: [

            ]
        },
        {
            id: 'chapter-4',
            alignment: 'left',
            hidden: false,
            title: 'Fighting GBV using OSM tools in Western Uganda',
            image: '',
            description: '<h4 class="impact-head">Impact Area:</h4> <strong>Gender Equality</strong> <img style="width: auto; vertical-align: middle;" src="images/icons/gender.png" height="35" width="35" />' + '<h3></h3>' + '<a href="https://www.facebook.com/centerforlifechangedevelopement/" target="_blank">Center for Life Change Development (CLCD)</a> developed a project to fight gender-based violence (GBV) using OSM tools in Bushenyi District, Western Uganda. The aims of the project were to reduce GBV in Bushenyi district through sensitization and awareness in communities, to introduce OSM tools to social workers, police and other stakeholders, and generate maps of administrative boundaries, police stations and health centers.' + '<br /><br />' + 'Sensitization activities took place in three sub counties of Bushenyi district, namely Nyabubare, Kakanju and Bumbaire. This was done via local village councils together with sub county community development officers, stakeholders, village health technicians (VHTs) and para-social workers. Sensitization included three radio talk shows about GBV and activities were further extended to churches where CLCD worked with religious leaders. CLCD also worked with Bushenyi HIV & AIDS Network forum and Bushenyi district local leaders on GBV sensitization and awareness in communities and extended activities to Sheema district where there are high rates of HIV & AIDS.' + '<img src="images/placeholder.jpg" />',
            location: {
              center: [30.156900, -0.524528],
              zoom: 12,
              pitch: 67,
              bearing: 16.80
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
            id: 'chapter-4b',
            alignment: 'center',
            hidden: false,
            title: 'KEY RESULTS',
            image: 'images/police.jpg',
            description: 'CLCD collaborated with MapUganda to conduct online and in-person training for volunteers from Bushenyi district communities on GBV issues. <span style="color: #D73F3F; font-weight: bold;">15 volunteers</span> were trained to use ODK for data collection, iD Editor and JOSM for remote mapping as well as Maps.me to add points of interest on OSM, and as a navigation tool to respond to GBV calls, and all sub counties in Bushenyi were mapped. <span style="color: #D73F3F; font-weight: bold;">25 maps</span> were printed and given to police officials in Bushenyi.' + '<br /><br />' + 'Collaborations were formed with MapUganda in organizing mapathons and mobilizing volunteers to map remotely and CLCD was introduced to other OSM communities through events like the OSM Africa monthly mapathon that was key in completing the mapping and validation of the project.' + '<div class="flourish-embed" data-src="visualisation/10621260"></div>' + '<h3 class="contrib"></h3>' + 'This project was funded by a Meta Community Impact Grant, managed by HOT.',
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

            ],
            onChapterExit: [

            ]
        },
        {
            id: 'chapter-5',
            alignment: 'left',
            hidden: false,
            title: 'Mapping the Chepang Community',
            image: '',
            description: '<h4 class="impact-head">Impact Areas:</h4> <strong>Sustainable Cities and communities</strong> <img style="width: auto; vertical-align: middle;" src="images/icons/city.png" height="35" width="35" /><br /><strong>Disasters and climate resilence</strong><img style="width: auto; vertical-align: middle;" src="images/icons/disaster.png" height="35" width="35" /><br /><strong>Public Health</strong><img style="width: auto; vertical-align: middle;" src="images/icons/health.png" height="35" width="35" />' + '<h3></h3>' + 'The project centered around mapping in the remote hills of central Nepal and sought to generate data to assess the needs of the Chepang community. Chepangs are one of the most marginalized Indigenous communities in Nepal. Traditionally nomadic people who relied on hunting, fishing and the products of the forest, these  ways of life were brought to an end by the introduction of new government policies.' + '<br /><img src="images/nepal_community.jpeg" /><br />' + 'Restrictions on hunting, gathering and clearing of forest patches have forced the Chepangs to adopt a settled way of life. This change of lifestyle has brought extreme poverty in their community and made it difficult for the Chepangs to access basic amenities such as nutritious food, proper housing, safe drinking water, education and healthcare.' + '<br /><br />' + '<img src="images/placeholder.jpg" />' + 'During the mapping, validation, field verification, output and data dissemination, the Geomatics Engineering Society team was able to actively include the needs of the Chepang communities in the project design using surveys and direct conversations.' + '<br /><br />' + 'In line with the project’s poverty reduction and access to basic amenities, they engaged with various donor organizations and the local government. They simultaneously conducted several trainings on OSM to GES members and various OSM communities in Nepal. They also collaborated with Kathmandu Living Labs, Youth Innovation Lab, Naxa, Department of Geomatics Engineering,  Kathmandu University, and several governmental bodies. The team collaborated with 19 ward presidents and trained them locally to read and visualize the printed satellite imagery maps.',
            location: {
              center: [84.840127, 27.551346],
              zoom: 16,
              pitch: 75.50,
              bearing: -51.60
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
            id: 'chapter-5b',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'images/nepal_school_map.jpg',
            description: 'Maps and data that include buildings, roads, land use, and other critical types of infrastructure will be used to access basic amenities for the Chepang and also to analyze areas vulnerable to disaster, agricultural areas, and to assess the need for schools and health posts in the community.' + '<br /><br />' + 'The data and maps generated from the project are being shared with various humanitarian agencies and stakeholders such as  Shanti Griha Nepal, Planete Enfants & Développement, Save the Children, Save Our Soul, Child Workers in Nepal (CWIN), USAID, Leo Club, the Rotaract Club, and various other local authorities for uplifting their communities.',
            location: {
              center: [84.892244, 27.573947],
              zoom: 12.10,
              pitch: 28.5,
              bearing: 5,
              speed: .7
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'disableFreetime',
            onChapterEnter: [
                {
                  layer: 'chepang_data',
                  opacity: 1,
                  duration: 4000
                }
            ],
            onChapterExit: [
              {
                layer: 'chepang_data',
                opacity: 0,
                duration: 4000
              }
            ]
        },
        {
            id: 'chapter-6',
            alignment: 'left',
            hidden: false,
            title: 'Disaster Activations July 2021 - June 2022',
            image: '',
            description: 'Location is critical to disaster response: first responders need fast, reliable information to reach affected areas post-disaster and prioritize aid. Through <a href="https://www.hotosm.org/hot-activation-protocol" target="_blank">rapid response activations</a>, the HOT community works together online using satellite and drone imagery to rapidly generate map data in OSM. The resulting data is made available via the <a href="https://data.humdata.org/organization/hot" target="_blank">Humanitarian Data Exchange (HDX)</a> and can be used to create printed maps, for analysis, or for navigation on the ground.' + '<br /><br />' + '<ul><li>Earthquake Afghanistan 2022</li><li>Bangladesh Floods 2022</li><li>OSM Brazil Activation for Floods</li><li>Cyclones Ana Batsirai and Emnati 2022</li><li>South Sudan Floods 2022</li><li>Tropical Storm Agaton 2022</li><li>Odette Typhon 2021</li><li>Haiti Earthquake 2021</li><li>Mediterranean Wildfires 2021</li><li>Canchaque Landslides 2021</li><li>Nyiragongo Volcano 2021</li></ul>' + '<strong>Explore the globe by clicking and dragging your pointer, or use the controls in the top right.</strong> &#8594;',
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
            description: 'Continuing the rolling out of its Regional Open Mapping Hubs, the West and Northern Africa Open Mapping Hub (the Hub) opened its doors in March 2022 to support open mapping activities in the region, led by Regional Director, Ibrahima Cisse.' + '<br /><br />' + '<img src="images/placeholder.jpg" />' + '<br /><br />' + 'The Hub will focus on humanitarian and community development mapping and will work with humanitarian organizations, governments, civil society, private operators, institutions, and other actors on the use of OSM tools that support disaster risk reduction and response, gender equality, sustainable cities, public health, and displacement and safe migration.' + '<br /><br />' + 'The Hub will also support local mapping communities in the region by facilitating knowledge exchanges, distributing funding, and providing training and support with the goal of massively scaling local edits to OSM.',
            location: {
              center: [-1.701088, 13.784610],
              zoom: 4.1,
              pitch: 0,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'wnaf_2',
                opacity: .4,
                duration: 2000
              },
              {
                layer: 'wnaf_labels',
                opacity: 1,
                duration: 2000
              }
            ],
            onChapterExit: [
              {
                layer: 'wnaf_2',
                opacity: 0,
                duration: 2000
              },
              {
                layer: 'wnaf_labels',
                opacity: 0,
                duration: 2000
              }
            ]
        },
        {
            id: 'chapter-7b',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<h2 class="liftout">“We want to be closer to the communities so that the data and maps can be tools for analysis and decision-making that will <span style="color: #D73F3F; font-weight: bold;">help improve the living conditions of the people</span>. We stimulate and strengthen the leadership of communities to protect their livelihoods, improve their resilience, and preserve their way of life by promoting social justice in accessing open data and free software for their own purposes.”</h2>' + '<p style="text-align: right; font-weight: bold; color: #D73F3F;">&dash; Ibrahima Cisse, Regional Director of the West and Northern Africa Open Mapping Hub</p>' + 'In 2021 HOT established regional Open Mapping Hubs in Asia-Pacific and Eastern and Southern Africa, with plans to open a fourth in Latin America and the Caribbean. The regional hubs engage with local mapping communities helping to foster a global open mapping movement to ensure that missing maps are no longer a factor in human suffering.',
            location: {
              center: [-1.701088, 13.784610],
              zoom: 4.1,
              pitch: 0,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'wnaf_2',
                opacity: .4,
                duration: 2000
              },
              {
                layer: 'wnaf_labels',
                opacity: 1,
                duration: 2000
              }
            ],
            onChapterExit: [
              {
                layer: 'wnaf_2',
                opacity: 0,
                duration: 2000
              },
              {
                layer: 'wnaf_labels',
                opacity: 0,
                duration: 2000
              }
            ]
        },
        {
            id: 'chapter-8',
            alignment: 'left',
            hidden: false,
            title: 'She Leads and She Inspires',
            image: '',
            description: '<h4 class="impact-head">Impact Area:</h4> <strong>Gender Equality</strong> <img style="width: auto; vertical-align: middle;" src="images/icons/gender.png" height="35" width="35" />' + '<h3></h3>' + 'The She Leads and She Inspires Project is an initiative of the OpenMapping Hub - Asia Pacific and was designed to increase women’s representation in the geospatial ecosystem by supporting the emergence and evolution of women leaders within the OSM ecosystem and beyond. The long term vision is that the participants will continue to grow, get more deeply involved and champion similar initiatives in their communities beyond the scope of the project.' + '<br /><br />' + 'Over the course of six months, women from Nepal, India, Philippines, Bangladesh, Bhutan, Tajikistan, Indonesia, Pakistan, Sri Lanka, Cambodia, Fiji, Kiribati, Vietnam, Papua New Guinea were led through a structured programme supporting them to become OSM community leaders by gaining skills in geospatial data and technologies, decision making, digital leadership, needs identification and networking.',
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
            id: 'chapter-8b',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Out of the 99 women trained, 74 completed the program and 19 will be carrying out 10 projects in 10 countries. The projects will address local challenges related to Disaster Resilience, Environment, Gender Equality, Health, Heritage, Inclusion, and Sustainable Cities, adding value to local action in Asia Pacific.' + '<br /><br />' + '<img src="images/she_leads.jpg" />' + '<br /><br />' + 'The project confirmed what we already knew; that there is a lack of female representation in the geospatial sector. It also became clear that it is important to connect women in the OSM ecosystem to experienced project coordinators/experts to further expand and implement their project ideas. The project also helped us learn about the need to include men allies for sustainable growth and empowerment. She Leads and She Inspires is a first of many initiatives planned by HOT’s and the Open Mapping Hubs and demonstrates our commitment to helping women carve out their own destinies as inspiring OSM leaders.',
            location: {
              center: [111.499644, 16.932757],
              zoom: 3.35,
              pitch: 0,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'disableFreetime',
            onChapterEnter: [
              {
                layer: 'she_leads_10',
                opacity: 1,
                duration: 2000
              },
              {
                layer: 'she_leads_10-ALT',
                opacity: 1,
                duration: 2000
              }
            ],
            onChapterExit: [
              {
                layer: 'she_leads_10',
                opacity: 0,
                duration: 2000
              },
              {
                layer: 'she_leads_10-ALT',
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
            description: 'HOT coordinated a 12-week Data Quality Internship from September to November 2021 designed to  give participants the opportunity to gain readily transferable geospatial skills.' + '<br /><br />' + 'The 19 interns, hailing from 14 countries, were led through a series of webinars hosted by a range of professionals in the humanitarian mapping sector. They received live in-depth training in a wide range of geospatial tools culminating in their ability to confidently validate the work of other mappers.' + '<br /><br />' + 'Together they validated a large amount of OSM data across 12 countries to ensure its readiness for disaster response and field mapping activities. This involved working remotely in teams of 4-5 and coordinating approaches and sharing best practices.' + '<br /><br />' + 'The Data Quality Internship is part of HOT’s commitment to ensuring high quality data for humanitarian and development use and also recognizes our role in closing the digital divide, including acknowledging obstacles that certain groups, such as women, nationals of low and middle-income countries, and members of other underrepresented groups, face in developing skills needed for roles in the humanitarian & technology sectors.' + '<br /><br />' + '<strong>Explore the globe by clicking and dragging your pointer, or use the controls in the top right.</strong> &#8594;',
            location: {
              center: [-58.401371, 4.361681],
              zoom: 2.75,
              pitch: 0,
              bearing: 0.00,
              speed: 0.7,
              curve: 1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: 'enableFreetime',
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
          },
          {
              id: 'chapter-9b',
              alignment: 'center',
              hidden: false,
              title: 'Key Results',
              image: '',
              description: 'Together they mapped and validated 74 projects across 12 countries including:' + '<br /><br />' + '<div class="flourish-embed" data-src="visualisation/10625782"></div>' + 'This involved working remotely in teams of 4-5 and coordinating approaches and sharing best practices.' + '<br /><br />' + 'The Data Quality Internship is part of HOT’s commitment to ensuring high quality data for humanitarian and development use and also recognizes our role in closing the digital divide, including acknowledging obstacles that certain groups, such as women, nationals of low and middle-income countries, and members of other underrepresented groups, face in developing skills needed for roles in the humanitarian & technology sectors.',
              location: {
                center: [-58.401371, 4.361681],
                zoom: 2.75,
                pitch: 0,
                bearing: 0.00,
                speed: 0.7,
                curve: 1
              },
              mapAnimation: 'flyTo',
              rotateAnimation: true,
              callback: 'disableFreetime',
              onChapterEnter: [

              ],
              onChapterExit: [

              ]
            },
              {
                  id: 'chapter-10',
                  alignment: 'right',
                  hidden: false,
                  title: 'Devolved Grantmaking (WORKING TITLE, NEW WORD TK)',
                  image: 'images/technology_hot.jpg',
                  description: '<span class="photocaption">Photo by: Agri Thamani Foundation — Improving nutritional status in Bukoba urban district using open mapped data.</span>' + '<br /><br />' + 'Part of HOT and the Open Mapping Hubs’ goal to support a movement of individuals and communities who create and use OSM data to improve lives and livelihoods in places vulnerable to crisis or experiencing poverty, is to move decision-making, resource allocation, support and engagement closer to these places.' + '<br /><br />' + 'One way of doing this is to entrust the awarding of grants to a local partner with a deeper understanding of the local context, and therefore the challenges, opportunities and constraints, in the countries where our OSM partners operate.' + '<br /><br />' + 'Modeled on HOT’s successful microgrants programme, a devolved community investment programme was piloted in Tanzania with <a href="https://www.omdtz.or.tz/" target="_blank">OpenMap Development Tanzania (OMDTZ)</a>, an established organization and trusted partner with a significant focus on leveraging OSM data to improve lives and livelihoods. OMDTZ was free to design a programme of community support and investment that works for Tanzanian contributors, communities and organizations.' + '<br /><br />' + 'OMDTZ awarded microgrants to seven OSM communities in Tanzania from seven different regions — Kagera, Dodoma, Mara, Katavi, Mwanza, Morogoro, and Zanzibar. The grants supported these communities to leverage the use of OSM and mapping to help solve different community challenges, facilitate training/workshop, purchase tools and equipment, support staff and other logistics.' + '<br /><br />' + 'The selected communities implemented their projects over three to six months. The projects included mapping schools to improve the education system in Zanzibar, solid waste mapping for flood resilience, community mapping to improve nutrition status in Bukoba, community mapping for gender-based violence, community mapping for disease outbreaks such as. Ebola, Infrastructural mapping, and health facilities mapping.' + '<br /><br />' + 'The intention is to replicate or adapt a similar strategy in other countries with strong OSM community organizations so that the funds will be more accessible and have greater local reach, relevance and impact and that HOT and others can learn from OMDTZ’s experience.',
                  location: {
                    center: [42.655560, -7.451355],
                    zoom: 5.75,
                    pitch: 0,
                    bearing: 0.00,
                  },
                  mapAnimation: 'flyTo',
                  rotateAnimation: false,
                  callback: '',
                  onChapterEnter: [
                    {
                      layer: 'tanzania-outline',
                      opacity: 1,
                      duration: 2000
                    },
                    {
                      layer: 'tanzania_label',
                      opacity: 1,
                      duration: 2000
                    }
                  ],
                  onChapterExit: [
                    {
                      layer: 'tanzania-outline',
                      opacity: 0,
                      duration: 2000
                    },
                    {
                      layer: 'tanzania_label',
                      opacity: 0,
                      duration: 2000
                    }
            ]
        },
        {
            id: 'spacer-2',
            alignment: 'center',
            hidden: false,
            title: 'The Importance of Technology',
            image: '',
            description: '<h2 class="liftout">To achieve our impact, we need to offer reliable, high quality services and technology to the communities and partners we work with. These services need to be designed for their users needs, and be delivered <span style="color: #D73F3F; font-weight: bold;">quickly, reliably, and at scale.</span></h2>',
            location: {
              center: [42.655560, -7.451355],
              zoom: 5.75,
              pitch: 0,
              bearing: 0.00,
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
            id: 'chapter-11',
            alignment: 'center',
            hidden: false,
            title: 'The Galaxy Project',
            image: '',
            description: 'HOT Tech aims to provide tools that enable anyone to edit and use open map data in an accessible and inclusive way. The Galaxy project aims to get OSM map data and map data insights, like statistics and data quality, into the right hands at the right time.' + '<br /><br />' + 'For our least technical users, Galaxy delivers a lightweight web portal to map data customizable for download in multiple formats for any user, anywhere in the world.' + '<br /><br />' + 'Users can explore mapathon leaderboards, mapper statistics and data quality to track and motivate their own OSM journey.' + '<br /><br />' + 'The galaxy project also enables us to continuously improve existing tools, such as HOT’s Export tool. Most recently, components of Galaxy have contributed to faster results, seamless integrations and data that users can depend on.' + '<img src="images/placeholder.jpg" />',
            location: {
              center: [-8.68740, 23.01151],
              zoom: 2.5,
              pitch: 0,
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
            id: 'chapter-11',
            alignment: 'center',
            hidden: false,
            title: 'Tasking Manager Tomorrow, a Collective Effort',
            image: '',
            description: 'The Tasking Manager is HOT’s flagship mapping tool It allows division of a large mapping project into smaller tasks that can be completed rapidly and collaboratively, with many people contributing to a collective project goal.' + '<br /><br />' + 'The HOT tech team is committed to a future of more collective and localized technologies.To put our words into action we want to nurture and invest in the contributors, makers, tinkerers and users to maintain, evolve and grow just and collective humanitarian open mapping tech. By igniting a community of techies, we strive for better tools created for, with and by local mappers and map users. We work collectively with partners and communities globally, and emphasize collaboration with organizations and groups within HOT’s priority countries.' + '<br /><br />' + 'In 2021, Kathmandu Living Labs (KLL) joined us to pioneer this collective approach. KLL is a leading civic-tech company based out of Nepal and has been working in the Open Mapping movement since 2013. As a social enterprise, KLL provides data and technology solutions to governments, development partners, business and civil society. In collaboration with the HOT tech team and the Tasking Manager community, KLL contributes to the maintenance and evolution of HOT’s most well-known product, the HOT Tasking Manager. Each month, we sit down with KLL to identify and prioritize the issues the Tasking Manager collective feel will best stabilize, secure and  strengthen the product for its global community of mapping volunteers. These issues are publicly available for comment and conversation through a public project repository through github. KLL then tackles and resolves these issues to deliver fixes, features and enhancements before they are deployed for the Tasking Manager collective and the wider HOT and OSM communities.' + '<img src="images/placeholder.jpg" />',
            location: {
              center: [-8.68740, 23.01151],
              zoom: 2.5,
              pitch: 0,
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
            id: 'chapter-12',
            alignment: 'full',
            hidden: false,
            title: 'Partnerships',
            image: '',
            description: '(CONTENT TK, PLACEHOLDER -- PLACEHOLDER) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' + '<br /><br />' + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' + '<br /><br />' + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' + '<br /><br />' + '<h3>DONOR ACKNOWLEDGEMENT</h3>' + '<br /><br />' + '<h3>FINANCIALS</h3>',
            location: {
              center: [-8.68740, 23.01151],
              zoom: 2.5,
              pitch: 0,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: [

            ]
        }
    ]
};
