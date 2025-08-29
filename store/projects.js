import { defineStore } from 'pinia'

export const useStore = defineStore('projects', {
    state: () => ({
        projects: [
            {
                id: 'villa-thalassa',    
                place: 'Spain, Marbella',
                images: [
                    'img/thalassa-1.jpg',
                    'img/thalassa-2.jpg',
                    'img/thalassa-3.jpg',
                    'img/thalassa-4.jpg',
                    'img/thalassa-5.jpg',
                    'img/thalassa-6.jpg',
                    'img/thalassa-7.jpg'
                ],
                thumbnail: 'img/thalassa-thumb.jpg',
                title: 'Villa Thalassa',
                text: "<p>Perched atop a hill within the protected Reserva del Al Cuz Cuz nature reserve, Villa Thalassa commands uninterrupted, south-facing views of the Mediterranean Sea.</p><p>Set on a 3,000 m² estate, this extraordinary residence offers 12 bedrooms and a wealth of high-end amenities, including a fully equipped gym, sauna, private cinema, spa zone, dance floor with DJ bar, cigar lounge, and a four-car garage.</p><p>Outside, expansive terraces and landscaped gardens surround the property, which is powered by a self-sustaining 50kW solar energy station.</p>",
                description: "Perched atop a hill within the protected Reserva del Al Cuz Cuz nature reserve, Villa Thalassa commands uninterrupted, south-facing views of the Mediterranean Sea.",
                link: 'https://villathalassa.co.uk/'
            },
            {
                id: 'the-house',    
                place: 'Montenegro, Kotor',
                images: [
                    'img/kotor-1.jpg',
                    'img/kotor-2.jpg',
                    'img/kotor-3.jpg',
                    'img/kotor-4.jpg',
                    'img/kotor-5.jpg',
                    'img/kotor-6.jpg',
                    'img/kotor-7.jpg',
                    'img/kotor-8.jpg',
                    'img/kotor-9.jpg',
                    'img/kotor-10.jpg',
                    'img/kotor-11.jpg',
                    'img/kotor-12.jpg',
                    'img/kotor-13.jpg',
                    'img/kotor-14.jpg',
                    'img/kotor-15.jpg',
                    'img/kotor-16.jpg'
                ],
                thumbnail: 'img/kotor-thumb.jpg',
                title: 'The House',
                text: "<p>Set on a hillside above the Bay of Kotor — Europe’s southernmost fjord — The House is a residential compound of five architecturally distinct buildings.</p><p>Designed with seismic resilience in mind, the structures feature monolithic frames and brick infill. The 300 mm travertine-clad exterior walls are built over a four-layer “warm ceramics” system that ensures top-tier thermal insulation, waterproofing, and acoustic performance.</p>",
                description: "Set on a hillside above the Bay of Kotor — Europe’s southernmost fjord — The House is a residential compound of five architecturally distinct buildings.",
                link: 'http://thisisthehouse.me'
            },
            {
                id: 'villa-shanti',
                place: 'Thailand, Koh Samui',
                images: [
                    'img/thailand-10.jpg',
                    'img/thailand-1.jpg',
                    'img/thailand-2.jpg',
                    'img/thailand-3.jpg',
                    'img/thailand-4.jpg',
                    'img/thailand-5.jpg',
                    'img/thailand-6.jpg',
                    'img/thailand-7.jpg',
                    'img/thailand-8.jpg',
                    'img/thailand-9.jpg'
                ],
                thumbnail: 'img/thailand-thumb.jpg',
                title: 'Villa Shanti',
                text: "<p>A luxury private 1,000 m² villa set in Koh Samui’s most exclusive development.</p><p>This cliffside retreat offers complete privacy, sleek contemporary architecture, and an awe-inspiring 180° panoramic sea view — a unique escape where modern living meets natural beauty.</p>",
                description: "A luxury private 1,000 m² villa set in Koh Samui’s most exclusive development.",
                link: ''
            },
            {
                id: 'villa-om',
                place: 'Usa, California, Malibu',
                images: ['img/california-1.jpg'],
                thumbnail: 'img/california-thumb.jpg',
                title: 'Villa OM',
                text: "<p>Refined coastal luxury. An icon of California living.</p><p>Tucked between dramatic cliffs and secluded beaches, this private 1,200 m² villa offers rare scale, bold architecture, and cinematic views — in one of the most exclusive enclaves on the West Coast.</p>",
                description: "Refined coastal luxury. An icon of California living.",
                link: ''
            },
        ]
    }),
    actions: {
        async fetchData() {
        },
    },
    getters: {
        getProjects(state) {
            return state.projects
        }
    }
})