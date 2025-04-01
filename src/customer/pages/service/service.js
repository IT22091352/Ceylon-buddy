import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Nav, Tab, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './service.css';
import tourpackages from '../../../../src/assets/photos/servicepage/tourpackages.jpg';
import TourPlanning from '../../../../src/assets/photos/servicepage/TourPlanning.jpg';
import transport from '../../../../src/assets/photos/servicepage/transport.jpg';
import guide from '../../../../src/assets/photos/servicepage/guide.jpg';
import Tourism from '../../../../src/assets/photos/servicepage/Tourism.jpg';
import sigiriya from '../../../../src/assets/photos/servicepage/sigiriya.jpg';
import GalleBeach from '../../../../src/assets/photos/servicepage/GalleBeach.jpg';
import Kandy from '../../../../src/assets/photos/servicepage/Kandy.jpg';
import SigiriyaKandy from '../../../../src/assets/photos/servicepage/SigiriyaKandy.jpg';
import Kandyplan from '../../../../src/assets/photos/servicepage/dayPlans/Kandy.jpeg';
import mirissa from '../../../../src/assets/photos/servicepage/dayPlans/mirissa.jpg';
import kumbalwela from '../../../../src/assets/photos/servicepage/dayPlans/kumbalwela.jpg';
import Ellatrainride from '../../../assets/photos/servicepage/dayPlans/Ellatrainride.jpeg';
import yala from '../../../assets/photos/servicepage/dayPlans/yala.jpg';
import NuwaraEliya from '../../../assets/photos/servicepage/dayPlans/NuwaraEliya.jpeg';
import yalaelephent from '../../../assets/photos/servicepage/dayPlans/yalaelephent.jpg';
import gallefort from '../../../assets/photos/servicepage/dayPlans/gallefort.jpg';
import mirissaday5 from '../../../assets/photos/servicepage/dayPlans/mirissaday5.jpg';
import dambulla from '../../../assets/photos/servicepage/dayPlans/dambulla.jpeg';
import queens from '../../../assets/photos/servicepage/dayPlans/queens.jpg';
import nelligala from '../../../assets/photos/servicepage/dayPlans/nelligala.jpg';
import wildlife from '../../../assets/photos/servicepage/dayPlans/wildlife.jpg';
import colombo from '../../../assets/photos/servicepage/dayPlans/colombo.jpg';

function Service() {
  // Services data
  const services = [
    {
      id: 1,
      title: "Customized Travel Packages",
      description: "Whether you seek adventure, culture, nature, or luxury, we design tailored experiences that suit your interests and budget.",
      icon: "fas fa-suitcase",
      image: tourpackages,
      color: "#FF7043"
    },
    {
      id: 2,
      title: "Hotel & Accommodation",
      description: "From beachfront resorts to cozy boutique stays, we help you find the perfect place to relax.",
      icon: "fas fa-hotel",
      image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
      color: "#42A5F5"
    },
    {
      id: 3,
      title: "Tour & Activity Planning",
      description: "Explore Sri Lanka's iconic landmarks, wildlife safaris, scenic hikes, and hidden gems with expertly curated itineraries.",
      icon: "fas fa-map-marked-alt",
      image: TourPlanning,
      color: "#66BB6A"
    },
    {
      id: 4,
      title: "Transportation & Transfers",
      description: "Hassle-free airport pickups, private drivers, and comfortable transport options to get you around.",
      icon: "fas fa-car",
      image: transport,
      color: "#FFCA28"
    },
    {
      id: 5,
      title: "Local Expertise & Guidance",
      description: "Insider tips, travel advice, and recommendations to ensure an authentic and memorable journey.",
      icon: "fas fa-user-tie",
      image: guide,
      color: "#AB47BC"
    },
    {
      id: 6,
      title: "Sustainable Tourism",
      description: "We promote eco-friendly travel, support local communities, and encourage ethical tourism practices.",
      icon: "fas fa-leaf",
      image: Tourism,
      color: "#26A69A"
    }
  ];

  // Customer testimonials
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Australia",
      quote: "The personalized itinerary Ceylon Buddy created for us was perfect. They took care of every detail, allowing us to fully enjoy the beauty of Sri Lanka.",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Singapore",
      quote: "Our guide was knowledgeable and friendly. The accommodations were excellent and the wildlife safari exceeded our expectations.",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      location: "United Kingdom",
      quote: "Ceylon Buddy made our honeymoon magical. Their attention to detail and personalized service made all the difference.",
      avatar: "https://randomuser.me/api/portraits/women/62.jpg",
      rating: 5
    }
  ];

  // Tour plans data
  const tourPlans = [
    {
      days: 1,
      options: [
        {
          id: 1,
          title: "Sigiriya & Dambulla",
          subtitle: "Cultural & Adventure",
          image: sigiriya,
          highlights: [
            "Morning: Drive to Sigiriya (4 hrs from Colombo)",
            "Climb Sigiriya Rock Fortress (UNESCO site)",
            "Visit Dambulla Cave Temple",
            "Lunch at a local restaurant",
            "Evening: Elephant safari at Minneriya National Park (optional)",
            "Return to Colombo"
          ]
        },
        {
          id: 2,
          title: "Galle & Beach Experience",
          subtitle: "Coastal & Heritage",
          image: GalleBeach,
          highlights: [
            "Morning: Drive to Galle (2 hrs)",
            "Explore Galle Fort (UNESCO site)",
            "Visit Unawatuna Beach or Jungle Beach",
            "Lunch at a beachside restaurant",
            "Evening: Visit Turtle Hatchery in Kosgoda",
            "Return to Colombo"
          ]
        },
        {
          id: 3,
          title: "Kandy & Tea Experience",
          subtitle: "Cultural & Scenic",
          image: Kandy,
          highlights: [
            "Morning: Drive to Kandy (3 hrs)",
            "Visit Temple of the Tooth Relic",
            "Explore Royal Botanical Gardens",
            "Lunch in Kandy",
            "Evening: Visit a Tea Plantation in Kadugannawa",
            "Return to Colombo"
          ]
        }
      ]
    },
    {
      days: 2,
      options: [
        {
          id: 1,
          title: "Sigiriya & Kandy",
          subtitle: "Culture & Adventure",
          image: SigiriyaKandy,
          highlights: [
            "Day 1: Sigiriya & Dambulla",
            "Early morning drive to Sigiriya (4.5 hrs)",
            "Climb Sigiriya Rock Fortress (UNESCO site)",
            "Visit Dambulla Cave Temple",
            "Optional: Minneriya National Park Safari",
            "Overnight in Sigiriya/Kandy",
            "Day 2: Kandy & Return",
            "Visit Temple of the Tooth Relic",
            "Explore Royal Botanical Gardens",
            "Enjoy a tea plantation visit in Kadugannawa",
            "Drive back to Colombo (3 hrs)"
          ]
        },
        {
          id: 2,
          title: "Galle & Mirissa",
          subtitle: "Beach & Relaxation",
          image: mirissa,
          highlights: [
            "Day 1: Galle & Unawatuna",
            "Drive to Galle (2.5 hrs)",
            "Explore Galle Fort (UNESCO site)",
            "Visit Unawatuna Beach & Jungle Beach",
            "Optional: Visit Turtle Hatchery in Kosgoda",
            "Overnight in Mirissa",
            "Day 2: Mirissa & Return",
            "Whale Watching Tour (seasonal)",
            "Relax at Mirissa Beach",
            "Visit Hiriketiya Beach (optional)",
            "Drive back to Colombo (3 hrs)"
          ]
        },
        {
          id: 3,
          title: "Ella & Train Ride",
          subtitle: "Scenic & Adventure",
          image: Ellatrainride,
          highlights: [
            "Day 1: Nuwara Eliya & Ella",
            "Drive to Nuwara Eliya (4.5 hrs)",
            "Visit a Tea Plantation & Gregory Lake",
            "Take the scenic train ride from Nanu Oya to Ella",
            "Overnight in Ella",
            "Day 2: Ella & Return",
            "Visit Nine Arches Bridge",
            "Hike Little Adam's Peak",
            "Visit Ravana Falls",
            "Drive back to Colombo (5.5 hrs)"
          ]
        }
      ]
    },
    {
      days: 3,
      options: [
        {
          id: 1,
          title: "Sigiriya, Kandy & Ella",
          subtitle: "Culture + Adventure + Scenic Train",
          image: Kandyplan,
          highlights: [
            "Day 1: Sigiriya & Dambulla",
            "Drive to Sigiriya (4.5 hrs from Colombo)",
            "Climb Sigiriya Rock Fortress (UNESCO site)",
            "Visit Dambulla Cave Temple",
            "Optional: Minneriya National Park Safari",
            "Overnight in Sigiriya/Kandy",
            "Day 2: Kandy & Nuwara Eliya",
            "Visit Temple of the Tooth Relic in Kandy",
            "Explore Royal Botanical Gardens",
            "Drive to Nuwara Eliya (2.5 hrs)",
            "Visit a Tea Plantation & Gregory Lake",
            "Overnight in Nuwara Eliya",
            "Day 3: Ella & Return",
            "Take the scenic train ride from Nanu Oya to Ella",
            "Visit Nine Arches Bridge",
            "Hike Little Adam's Peak",
            "Drive back to Colombo (5.5 hrs)"
          ]
        },
        {
          id: 2,
          title: "Galle, Mirissa & Yala",
          subtitle: "Beaches + Wildlife Safari",
          image: yala,
          highlights: [
            "Day 1: Galle & Unawatuna",
            "Drive to Galle (2.5 hrs)",
            "Explore Galle Fort (UNESCO site)",
            "Visit Unawatuna Beach & Jungle Beach",
            "Overnight in Mirissa",
            "Day 2: Mirissa & Yala",
            "Whale Watching Tour (seasonal)",
            "Relax at Mirissa Beach",
            "Drive to Yala (2.5 hrs)",
            "Evening Jeep Safari at Yala National Park",
            "Overnight in Yala/Tissamaharama",
            "Day 3: Return via Ella",
            "Drive to Ella (2.5 hrs)",
            "Visit Nine Arches Bridge & Little Adam's Peak",
            "Drive back to Colombo (5.5 hrs)"
          ]
        },
        {
          id: 3,
          title: "Nuwara Eliya, Ella & Yala",
          subtitle: "Scenic + Tea Country + Wildlife",
          image: NuwaraEliya,
          highlights: [
            "Day 1: Nuwara Eliya",
            "Drive to Nuwara Eliya (4.5 hrs)",
            "Visit Gregory Lake & Tea Plantation",
            "Overnight in Nuwara Eliya",
            "Day 2: Ella",
            "Take the Nanu Oya to Ella train ride",
            "Visit Nine Arches Bridge & Little Adam's Peak",
            "Relax at a scenic café",
            "Overnight in Ella",
            "Day 3: Yala & Return",
            "Drive to Yala (3 hrs)",
            "Morning Jeep Safari at Yala National Park",
            "Drive back to Colombo (5 hrs)"
          ]
        }
      ]
    },
    {
      days: 5,
      options: [
        {
          id: 1,
          title: "Sigiriya, Kandy, Nuwara Eliya, Ella & Yala",
          subtitle: "Cultural + Scenic Train + Wildlife",
          image: yalaelephent,
          highlights: [
            "Day 1: Sigiriya & Dambulla",
            "Drive to Sigiriya (4.5 hrs from Colombo)",
            "Climb Sigiriya Rock Fortress (UNESCO site)",
            "Visit Dambulla Cave Temple",
            "Optional: Minneriya National Park Safari",
            "Overnight in Sigiriya/Kandy",
            "Day 2: Kandy & Nuwara Eliya",
            "Visit Temple of the Tooth Relic",
            "Explore Royal Botanical Gardens",
            "Drive to Nuwara Eliya (2.5 hrs)",
            "Visit Tea Plantations & Gregory Lake",
            "Overnight in Nuwara Eliya",
            "Day 3: Scenic Train to Ella",
            "Take the Nanu Oya to Ella train ride",
            "Visit Nine Arches Bridge",
            "Hike Little Adam's Peak",
            "Overnight in Ella",
            "Day 4: Yala National Park",
            "Drive to Yala (3 hrs)",
            "Evening Jeep Safari at Yala National Park",
            "Overnight in Yala",
            "Day 5: Galle & Return",
            "Drive to Galle (3 hrs)",
            "Explore Galle Fort (UNESCO site)",
            "Relax at Unawatuna Beach",
            "Return to Colombo (2 hrs) for departure"
          ]
        },
        {
          id: 2,
          title: "Galle, Mirissa, Yala, Ella & Nuwara Eliya",
          subtitle: "Beaches + Wildlife + Hill Country",
          image: gallefort,
          highlights: [
            "Day 1: Galle & Unawatuna",
            "Drive to Galle (2.5 hrs)",
            "Explore Galle Fort",
            "Visit Unawatuna Beach & Jungle Beach",
            "Overnight in Mirissa",
            "Day 2: Mirissa & Yala Safari",
            "Whale Watching Tour (seasonal)",
            "Relax at Mirissa Beach",
            "Drive to Yala (2.5 hrs)",
            "Evening Jeep Safari at Yala National Park",
            "Overnight in Yala",
            "Day 3: Ella Adventure",
            "Drive to Ella (3 hrs)",
            "Visit Nine Arches Bridge",
            "Hike Little Adam's Peak",
            "Overnight in Ella",
            "Day 4: Scenic Train to Nuwara Eliya",
            "Take the Ella to Nanu Oya train ride",
            "Visit Tea Plantations & Gregory Lake",
            "Overnight in Nuwara Eliya",
            "Day 5: Return to Colombo",
            "Relax in Nuwara Eliya or visit Lover's Leap Waterfall",
            "Drive back to Colombo (5 hrs)"
          ]
        },
        {
          id: 3,
          title: "Sigiriya, Kandy, Nuwara Eliya, Ella & Mirissa",
          subtitle: "Culture + Scenic + Beach",
          image: mirissaday5,
          highlights: [
            "Day 1: Sigiriya & Dambulla",
            "Drive to Sigiriya",
            "Climb Sigiriya Rock Fortress",
            "Visit Dambulla Cave Temple",
            "Overnight in Sigiriya/Kandy",
            "Day 2: Kandy & Nuwara Eliya",
            "Visit Temple of the Tooth Relic",
            "Explore Royal Botanical Gardens",
            "Drive to Nuwara Eliya",
            "Visit Gregory Lake & Tea Plantations",
            "Overnight in Nuwara Eliya",
            "Day 3: Scenic Train to Ella",
            "Take the Nanu Oya to Ella train ride",
            "Visit Nine Arches Bridge",
            "Hike Little Adam's Peak",
            "Overnight in Ella",
            "Day 4: Drive to Mirissa",
            "Visit Ravana Falls",
            "Drive to Mirissa (4.5 hrs)",
            "Relax at Mirissa Beach",
            "Overnight in Mirissa",
            "Day 5: Beach & Return",
            "Whale Watching Tour (seasonal)",
            "Visit Galle Fort",
            "Return to Colombo (2 hrs)"
          ]
        }
      ]
    },
    {
      days: 6,
      options: [
        {
          id: 1,
          title: "Sigiriya, Kandy, Nuwara Eliya, Ella, Yala & Mirissa",
          subtitle: "Culture + Hill Country + Safari + Beach",
          image: dambulla,
          highlights: [
            "Day 1: Sigiriya & Dambulla",
            "Drive to Sigiriya (4.5 hrs from Colombo)",
            "Climb Sigiriya Rock Fortress (UNESCO site)",
            "Visit Dambulla Cave Temple",
            "Optional: Minneriya National Park Safari",
            "Overnight in Sigiriya/Kandy",
            "Day 2: Kandy & Nuwara Eliya",
            "Visit Temple of the Tooth Relic ",
            "Explore Royal Botanical Gardens",
            "Drive to Nuwara Eliya (2.5 hrs)",
            "Visit Tea Plantations & Gregory Lake",
            "Overnight in Nuwara Eliya",
            "Day 3: Scenic Train to Ella",
            "Take the Nanu Oya to Ella train ride",
            "Visit Nine Arches Bridge",
            "Hike Little Adam's Peak",
            "Overnight in Ella",
            "Day 4: Yala National Park",
            "Drive to Yala (3 hrs)",
            "Evening Jeep Safari at Yala National Park",
            "Overnight in Yala",
            "Day 5: Mirissa Beach & Galle",
            "Drive to Mirissa (2.5 hrs)",
            "Relax at Mirissa Beach",
            "Optional: Whale Watching Tour (seasonal)",
            "Visit Galle Fort (UNESCO site)",
            "Overnight in Galle",
            "Day 6: Beach & Return",
            "Visit Unawatuna Beach or Jungle Beach",
            "Drive back to Colombo (2.5 hrs)"
          ]
        },
        {
          id: 2,
          title: "Galle, Mirissa, Yala, Ella, Nuwara Eliya & Kandy",
          subtitle: "Beach + Wildlife + Hill Country + Culture",
          image:queens,
          highlights: [
            "Day 1: Galle & Unawatuna",
            "Drive to Galle (2.5 hrs)",
            "Explore Galle Fort",
            "Visit Unawatuna Beach & Jungle Beach",
            "Overnight in Mirissa",
            "Day 2: Mirissa & Yala Safari",
            "Whale Watching Tour (seasonal)",
            "Relax at Mirissa Beach",
            "Drive to Yala (2.5 hrs)",
            "Evening Jeep Safari at Yala National Park",
            "Overnight in Yala",
            "Day 3: Ella Adventure",
            "Drive to Ella (3 hrs)",
            "Visit Nine Arches Bridge",
            "Hike Little Adam's Peak",
            "Overnight in Ella",
            "Day 4: Scenic Train to Nuwara Eliya",
            "Take the Ella to Nanu Oya train ride",
            "Visit Tea Plantations & Gregory Lake",
            "Overnight in Nuwara Eliya",
            "Day 5: Kandy Exploration",
            "Drive to Kandy (2.5 hrs)",
            "Visit Temple of the Tooth Relic",
            "Explore Royal Botanical Gardens",
            "Overnight in Kandy",
            "Day 6: Return to Colombo",
            "Relax at a scenic café in Kandy",
            "Drive back to Colombo (3 hrs)"
          ]
        }
      ]
    },
    {
      days: 7,
      options: [
        {
          id: 1,
          title: "Sigiriya, Kandy, Nuwara Eliya, Ella, Yala & Mirissa",
          subtitle: "Nature, Adventure & Cultural Highlights",
          image: nelligala,
          highlights: [
            "Day 1: Sigiriya & Dambulla",
            "Arrive at Bandaranaike International Airport",
            "Drive to Sigiriya (4.5 hrs)",
            "Climb Sigiriya Rock Fortress (UNESCO site)",
            "Visit Dambulla Cave Temple",
            "Overnight in Sigiriya",
            "Day 2: Kandy & Nuwara Eliya",
            "Drive to Kandy (2.5 hrs)",
            "Visit Temple of the Tooth Relic and Nelligala temple",
            "Visit Royal Botanical Gardens (optional)",
            "Drive to Nuwara Eliya (2.5 hrs)",
            "Explore Gregory Lake and Tea Plantations",
            "Overnight in Nuwara Eliya",
            "Day 3: Scenic Train Ride to Ella",
            "Morning train ride from Nanu Oya to Ella (3 hrs)",
            "Visit Nine Arches Bridge",
            "Hike Little Adam's Peak",
            "Overnight in Ella",
            "Day 4: Adventure & Waterfalls in Ella",
            "Visit Ravana Falls",
            "Hike Ella Rock (optional)",
            "Overnight in Ella",
            "Day 5: Wildlife Safari in Yala",
            "Drive to Yala National Park (3 hrs)",
            "Evening Jeep Safari",
            "Overnight in Yala/Tissamaharama",
            "Day 6: Beach Time in Mirissa",
            "Drive to Mirissa (2.5 hrs)",
            "Whale Watching Tour (seasonal)",
            "Relax at Mirissa Beach",
            "Overnight in Mirissa",
            "Day 7: Galle Fort & Departure",
            "Drive to Galle (1 hr)",
            "Visit Galle Fort (UNESCO site)",
            "Relax at Unawatuna Beach or Jungle Beach",
            "Drive to Colombo Airport (2 hrs) for departure"
          ]
        }
      ]
    },
    {
      days: 8,
      options: [
        {
          id: 1,
          title: "Complete Sri Lanka Adventure",
          subtitle: "Culture + Hill Country + Wildlife + Beaches",
          image: wildlife,
          highlights: [
            "Day 1: Sigiriya & Dambulla (Culture & Heritage)",
            "Drive to Sigiriya (4.5 hrs from Colombo)",
            "Climb Sigiriya Rock Fortress (UNESCO site)",
            "Visit Dambulla Cave Temple",
            "Optional: Minneriya National Park Safari",
            "Overnight in Sigiriya/Kandy",
            "Day 2: Kandy (Cultural & Scenic City)",
            "Visit Temple of the Tooth Relic",
            "Explore Royal Botanical Gardens",
            "Visit Bahirawakanda Buddha Statue for panoramic views",
            "Optional: Traditional Kandyan Dance Show",
            "Overnight in Kandy",
            "Day 3: Nuwara Eliya (Tea Country & Scenic Landscapes)",
            "Drive to Nuwara Eliya (2.5 hrs)",
            "Visit a Tea Plantation & Factory",
            "Explore Gregory Lake & Victoria Park",
            "Visit Lover's Leap Waterfall",
            "Overnight in Nuwara Eliya",
            "Day 4: Scenic Train Ride to Ella",
            "Take the Nanu Oya to Ella train ride",
            "Visit Nine Arches Bridge",
            "Hike Little Adam's Peak",
            "Overnight in Ella",
            "Day 5: Yala National Park (Wildlife Safari)",
            "Visit Ravana Falls",
            "Drive to Yala (3 hrs)",
            "Evening Jeep Safari at Yala National Park",
            "Overnight in Yala",
            "Day 6: Mirissa (Beach & Relaxation)",
            "Drive to Mirissa (2.5 hrs)",
            "Relax at Mirissa Beach",
            "Optional: Whale Watching Tour (seasonal)",
            "Overnight in Mirissa",
            "Day 7: Galle & Unawatuna (Beach & History)",
            "Drive to Galle (45 min)",
            "Explore Galle Fort (UNESCO site)",
            "Visit Jungle Beach or Unawatuna Beach",
            "Optional: Turtle Hatchery in Kosgoda",
            "Overnight in Galle",
            "Day 8: Return to Colombo",
            "Drive back to Colombo (2.5 hrs)",
            "Departure from Colombo Airport"
          ]
        }
      ]
    },
    {
      days: 10,
      options: [
        {
          id: 1,
          title: "Ultimate Sri Lanka Experience",
          subtitle: "Culture + Hill Country + Wildlife + Beach",
          image: "https://images.unsplash.com/photo-1578551712292-9a675b7ee1c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          highlights: [
            "Day 1: Arrival in Colombo & Drive to Sigiriya",
            "Arrive at Colombo International Airport",
            "Drive to Sigiriya (4.5 hrs)",
            "Relax at your hotel",
            "Overnight in Sigiriya",
            "Day 2: Sigiriya & Dambulla (Cultural Heritage)",
            "Sigiriya Rock Fortress (UNESCO World Heritage site)",
            "Visit Dambulla Cave Temple",
            "Optional: Minneriya National Park Safari",
            "Overnight in Sigiriya/Kandy",
            "Day 3: Kandy (Cultural & Scenic Exploration)",
            "Drive to Kandy (2.5 hrs)",
            "Visit Temple of the Tooth Relic",
            "Explore Royal Botanical Gardens",
            "Attend a Traditional Kandyan Dance Show",
            "Overnight in Kandy",
            "Day 4: Nuwara Eliya (Tea Plantations & Scenic Landscapes)",
            "Drive to Nuwara Eliya (2.5 hrs)",
            "Visit a Tea Plantation & Tea Factory",
            "Explore Gregory Lake & Victoria Park",
            "Visit Lover's Leap Waterfall",
            "Overnight in Nuwara Eliya",
            "Day 5: Scenic Train Ride to Ella",
            "Take the Nanu Oya to Ella train ride",
            "Visit Nine Arches Bridge",
            "Hike Little Adam's Peak",
            "Explore Ravana Falls",
            "Overnight in Ella",
            "Day 6: Yala National Park (Wildlife Safari)",
            "Drive to Yala (3 hrs)",
            "Morning Jeep Safari at Yala National Park",
            "Optional: Visit Tissa Wewa Lake or Buduruwagala Temple",
            "Overnight in Yala",
            "Day 7: Mirissa (Beach & Relaxation)",
            "Drive to Mirissa (2.5 hrs)",
            "Relax at Mirissa Beach",
            "Optional: Whale Watching Tour (seasonal)",
            "Overnight in Mirissa",
            "Day 8: Galle & Unawatuna (History & Beaches)",
            "Drive to Galle (45 min)",
            "Explore Galle Fort (UNESCO World Heritage site)",
            "Visit Unawatuna Beach or Jungle Beach",
            "Optional: Visit Turtle Hatchery in Kosgoda",
            "Overnight in Galle",
            "Day 9: Bentota & Colombo (Water Sports & City Exploration)",
            "Drive to Bentota (1.5 hrs)",
            "Enjoy water sports at Bentota Beach",
            "Optional: Visit Brief Garden or Lunuganga Estate",
            "Drive to Colombo (1.5 hrs)",
            "Explore Colombo City: Galle Face Green, Gangaramaya Temple",
            "Overnight in Colombo",
            "Day 10: Departure from Colombo",
            "Visit Pinnawala Elephant Orphanage (optional)",
            "Explore any last-minute sites or do some shopping",
            "Drive to Colombo International Airport for your flight home"
          ]
        }
      ]
    },
    {
      days: 12,
      options: [
        {
          id: 1,
          title: "Complete Sri Lanka Discovery",
          subtitle: "Culture + Nature + Wildlife + Beach + City",
          image: colombo,
          highlights: [
            "Day 1: Arrival in Colombo & Drive to Sigiriya",
            "Arrive at Colombo International Airport",
            "Drive to Sigiriya (4.5 hrs)",
            "Relax and unwind at your hotel",
            "Overnight in Sigiriya",
            "Day 2: Sigiriya & Dambulla (Cultural Exploration)",
            "Visit Sigiriya Rock Fortress (UNESCO World Heritage site)",
            "Explore the Dambulla Cave Temple",
            "Optional: Minneriya National Park Safari to see elephants",
            "Overnight in Sigiriya/Kandy",
            "Day 3: Kandy (Cultural City)",
            "Drive to Kandy (2.5 hrs)",
            "Visit the Temple of the Tooth Relic",
            "Explore the Royal Botanical Gardens",
            "Visit Bahirawakanda Buddha Statue for panoramic views",
            "Evening Kandyan Dance Show",
            "Overnight in Kandy",
            "Day 4: Nuwara Eliya (Tea Plantations & Scenic Beauty)",
            "Drive to Nuwara Eliya (2.5 hrs)",
            "Visit a Tea Plantation & Tea Factory",
            "Explore Gregory Lake & Victoria Park",
            "Visit Lover's Leap Waterfall",
            "Overnight in Nuwara Eliya",
            "Day 5: Scenic Train Ride to Ella",
            "Take the Nanu Oya to Ella scenic train ride",
            "Visit Nine Arches Bridge",
            "Hike Little Adam's Peak",
            "Relax at Ravana Falls",
            "Overnight in Ella",
            "Day 6: Yala National Park (Wildlife Safari)",
            "Drive to Yala (3 hrs)",
            "Morning Jeep Safari at Yala National Park",
            "Optional visit to Tissa Wewa Lake or Buduruwagala Temple",
            "Overnight in Yala",
            "Day 7: Mirissa (Beach Relaxation)",
            "Drive to Mirissa (2.5 hrs)",
            "Relax at Mirissa Beach",
            "Optional: Whale Watching Tour (seasonal)",
            "Overnight in Mirissa",
            "Day 8: Galle & Unawatuna (History & Beaches)",
            "Drive to Galle (45 min)",
            "Explore Galle Fort (UNESCO World Heritage site)",
            "Relax at Unawatuna Beach or Jungle Beach",
            "Optional: Turtle Hatchery in Kosgoda",
            "Overnight in Galle",
            "Day 9: Bentota & Hikkaduwa (Water Sports & Beach)",
            "Drive to Bentota (1.5 hrs)",
            "Enjoy water sports at Bentota Beach",
            "Visit Brief Garden or Lunuganga Estate",
            "Drive to Hikkaduwa (30 min)",
            "Explore Hikkaduwa Beach and its vibrant coral reefs",
            "Overnight in Hikkaduwa",
            "Day 10: Colombo (City Exploration)",
            "Drive to Colombo (2.5 hrs)",
            "Visit Galle Face Green, Gangaramaya Temple, and Independence Square",
            "Explore Colombo National Museum or Viharamahadevi Park",
            "Optional: Colombo Shopping Tour at Pettah Market or Odel Mall",
            "Overnight in Colombo",
            "Day 11: Pinnawala Elephant Orphanage & Return to Colombo",
            "Visit Pinnawala Elephant Orphanage",
            "See the elephants bathe in the River",
            "Drive back to Colombo",
            "Relax and do some last-minute shopping or explore any missed sites",
            "Overnight in Colombo",
            "Day 12: Departure from Colombo",
            "Free time for relaxation, shopping, or sightseeing in Colombo",
            "Transfer to Colombo International Airport for departure"
          ]
        }
      ]
    },
    {
      days: 14,
      options: [
        {
          id: 1,
          title: "Signature Sri Lanka Journey",
          subtitle: "Ultimate Cultural & Natural Exploration",
          image: kumbalwela,
          highlights: [
            "Day 1: Arrival in Colombo",
            "Arrive at Bandaranaike International Airport and transfer to your hotel",
            "Explore Gangaramaya Temple, Galle Face Green, and Pettah Market",
            "Relax at Beach or enjoy the city at leisure",
            "Overnight in Colombo",
            "Day 2: Colombo to Sigiriya",
            "Travel to Sigiriya (4-5 hours by car)",
            "Visit Sigiriya Rock Fortress (Lion's Rock), a UNESCO World Heritage site",
            "Evening safari at Minneriya, Habarana or Kawudulla",
            "Overnight in Sigiriya",
            "Day 3: Sigiriya - Dambulla – Polonnaruwa/Anuradhapura",
            "Visit Dambulla Cave Temple",
            "Head to Polonnaruwa/Anuradhapura, an ancient city with ruins and temples",
            "Sunset on Pidurangala Rock",
            "Overnight in Sigiriya",
            "Day 4: Sigiriya to Kandy",
            "Travel to Kandy (2.5 hours)",
            "Visit the Temple of the Tooth Relic and stroll around Kandy Lake",
            "Enjoy a cultural dance performance",
            "Overnight in Kandy",
            "Day 5: Kandy",
            "Explore the Royal Botanical Gardens in Peradeniya",
            "Spend the rest of the day shopping or strolling around Kandy",
            "Visit Ambuluwawa spiral tower",
            "Overnight in Kandy",
            "Day 6: Kandy to Nuwara Eliya",
            "Tea Plantation & Tea Factory visit",
            "Visit Victoria Park, Gregory Lake, and enjoy the colonial charm",
            "Boburu Water Fall",
            "Overnight in Nuwara Eliya",
            "Day 7: Nuwara Eliya to Ella",
            "Take the Nanu Oya to Ella scenic train ride",
            "Visit Nine Arches Bridge",
            "Hike Little Adam's Peak",
            "Overnight in Ella",
            "Day 8: Ella",
            "Hike to Ella Rock for panoramic views",
            "Kumbalwela monastery",
            "Explore the local cafes",
            "Overnight in Ella",
            "Day 9: Ella to Yala",
            "Travel to Yala National Park (3-4 hours)",
            "Go on an afternoon safari to spot wildlife",
            "Overnight near Yala",
            "Day 10: Yala",
            "Explore nearby beaches",
            "Visit Kataragama",
            "Overnight near Yala",
            "Day 11: Yala to Mirissa/Unawatuna",
            "Travel to Mirissa or Unawatuna (2-3 hours)",
            "Take a boat ride for dolphin and whale watching (seasonal)",
            "Enjoy the sunset on the beach",
            "Overnight in Mirissa or Unawatuna",
            "Day 12: Galle",
            "Visit Galle Fort, a UNESCO World Heritage site",
            "Explore the quaint streets, cafes, museums",
            "Relax on the beaches",
            "Overnight in Galle",
            "Day 13: Galle to Negombo",
            "Visit Unawatuna Beach for a morning swim",
            "Travel to Negombo (3 hours)",
            "Explore Negombo Fish Market and enjoy a seafood dinner by the beach",
            "Overnight in Negombo",
            "Day 14: Negombo to Colombo and Departure",
            "Visit Negombo Dutch Fort and St. Mary's Church in the morning",
            "Depart from Bandaranaike International Airport in the evening"
          ]
        }
      ]
    }
  ];

  // Tour days tab state
  const [activeTab, setActiveTab] = useState('1');

  // Add scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      
      animatedElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // When element comes into view
        if (elementPosition < windowHeight - 100) {
          element.classList.add('visible');
        }
      });
    };
    
    // Initial check on component mount
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // State for tour details modal
  const [showModal, setShowModal] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Add state for share functionality
  const [showShareMessage, setShowShareMessage] = useState(false);

  // Function to handle View Details button click
  const handleViewDetails = (plan, option) => {
    setSelectedPlan(plan);
    setSelectedTour(option);
    setShowModal(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Function to handle sharing
  const handleShare = () => {
    const url = window.location.href;
    
    // Try to use the Web Share API if available (works on mobile)
    if (navigator.share) {
      navigator.share({
        title: selectedTour ? `${selectedTour.title} - ${selectedPlan.days} Day Tour in Sri Lanka` : 'Ceylon Buddy Tours',
        text: selectedTour ? `Check out this amazing ${selectedPlan.days}-day tour in Sri Lanka: ${selectedTour.title}` : 'Check out this amazing tour in Sri Lanka',
        url: url,
      })
      .catch(error => console.log('Error sharing:', error));
    } else {
      // Fallback to clipboard for desktop browsers
      navigator.clipboard.writeText(url)
        .then(() => {
          setShowShareMessage(true);
          setTimeout(() => setShowShareMessage(false), 3000);
        })
        .catch(err => {
          console.error('Failed to copy link: ', err);
        });
    }
  };

  return (
    <div className="service-page">
      {/* Hero Section */}
      <div className="service-hero">
        <div className="hero-overlay"></div>
        <Container>
          <div className="hero-content">
            <h1>Our Services</h1>
            <p>Explore Sri Lanka with confidence and comfort</p>
            {/* <Button variant="primary" size="lg" className="hero-button">
              Start Planning <i className="fas fa-arrow-right ms-2"></i>
            </Button> */}
          </div>
        </Container>
      </div>

      {/* Introduction Section */}
      <section className="intro-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="section-header text-center">
                <h2>What We Offer</h2>
                <p className="lead">
                  We provide a comprehensive range of travel services to help you explore Sri Lanka with ease and comfort.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="section-background-shape"></div>
        <Container>
          <Row className="justify-content-center">
            {services.map((service) => (
              <Col key={service.id} lg={4} md={6} className="mb-4">
                <Card className="service-card h-100">
                  <div className="service-card-img">
                    <img src={service.image} alt={service.title} />
                    <div className="icon-container" style={{ backgroundColor: service.color }}>
                      <i className={service.icon}></i>
                    </div>
                  </div>
                  <Card.Body>
                    <Card.Title className="service-title">{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                    <Button variant="link" className="service-btn">
                      Learn More <i className="fas fa-long-arrow-alt-right ms-1"></i>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Tour Plans Section */}
      <section className="tour-plans-section">
        <div className="section-background-shape"></div>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="section-header text-center animate-on-scroll fade-up">
                <div className="section-subtitle">Explore Sri Lanka</div>
                <h2>Tour Day Plans</h2>
                <p>Carefully crafted itineraries to make the most of your Sri Lankan adventure</p>
              </div>
            </Col>
          </Row>
          
          <div className="tour-plans-tabs">
            <Tab.Container id="tour-days-tabs" defaultActiveKey="1">
              <div className="days-tabs-wrapper animate-on-scroll fade-up">
                <Nav variant="pills" className="days-tabs">
                  {tourPlans.map(plan => (
                    <Nav.Item key={plan.days}>
                      <Nav.Link eventKey={plan.days.toString()}>
                        <span className="days-number">{plan.days}</span>
                        <span className="days-text">{plan.days === 1 ? 'Day' : 'Days'}</span>
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                
                </Nav>
              </div>
              
              <Tab.Content>
                {tourPlans.map(plan => (
                  <Tab.Pane key={plan.days} eventKey={plan.days.toString()}>
                    <div className="day-plan-intro animate-on-scroll fade-up">
                      <h3>{plan.days}-Day Adventure in Sri Lanka</h3>
                      <p>Choose from these carefully crafted itineraries for your {plan.days}-day journey</p>
                    </div>
                    <Row>
                      {plan.options.map((option, index) => (
                        <Col key={option.id} lg={4} md={6} className="mb-4">
                          <div className={`tour-option-card animate-on-scroll fade-up delay-${index}`}>
                            <div className="tour-option-header">
                              <div className="tour-option-img-overlay"></div>
                              <img src={option.image} alt={option.title} />
                              <div className="tour-label">Option {option.id}</div>
                              <div className="tour-duration">
                                <i className="fas fa-clock"></i> {plan.days} {plan.days === 1 ? 'Day' : 'Days'}
                              </div>
                            </div>
                            <div className="tour-option-body">
                              <div className="tour-badge-container">
                                {index === 0 && <span className="popular-badge">Popular</span>}
                              </div>
                              <h4>{option.title}</h4>
                              <div className="tour-subtitle">{option.subtitle}</div>
                              <div className="tour-highlights">
                                <h5><i className="fas fa-map-marked-alt"></i> Itinerary Highlights</h5>
                                <ul>
                                  {option.highlights.slice(0, 5).map((highlight, idx) => (
                                    <li key={idx}>{highlight}</li>
                                  ))}
                                  {option.highlights.length > 5 && (
                                    <li className="more-highlights">
                                      + {option.highlights.length - 5} more highlights...
                                    </li>
                                  )}
                                </ul>
                              </div>
                              <div className="tour-actions">
                                <Button 
                                  variant="outline-primary" 
                                  className="tour-btn view-btn"
                                  onClick={() => handleViewDetails(plan, option)}
                                >
                                  <i className="fas fa-info-circle me-2"></i> View Details
                                </Button>
                              </div>
                            </div>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>
                ))}
                
                <Tab.Pane eventKey="more">
                  <div className="more-plans animate-on-scroll fade-up">
                    <div className="more-plans-content">
                      <h3>Longer Adventures Available</h3>
                      <p>We offer comprehensive tour plans from 1 day up to 14+ days</p>
                      <div className="extended-plan-grid">
                        {[
                          { days: 4, title: "Cultural Triangle" },
                          { days: 5, title: "Beach & Wildlife" },
                          { days: 6, title: "Highlights of Sri Lanka" },
                          { days: 7, title: "Nature & Adventure Experience" },
                          { days: 8, title: "Complete Sri Lanka Adventure" },
                          { days: 10, title: "Island Explorer" },
                          { days: 12, title: "Complete Sri Lanka Discovery" },
                          { days: 14, title: "Signature Sri Lanka Journey" }
                        ].map((plan, index) => (
                          <div key={index} className={`extended-plan-item animate-on-scroll fade-up delay-${index % 4}`}>
                            <div className="plan-days">{plan.days}</div>
                            <div className="plan-info">
                              <div className="plan-title">{plan.title}</div>
                              <div className="plan-duration">{plan.days}-Day Journey</div>
                            </div>
                            <div className="plan-arrow">
                              <i className="fas fa-chevron-right"></i>
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="more-plans-note">Contact us for detailed itineraries and custom tour planning</p>
                      <Button as={Link} to="/contact" variant="primary" size="lg" className="mt-4 custom-request-btn">
                        <i className="fas fa-paper-plane me-2"></i> Request Custom Itinerary
                      </Button>
                    </div>
                    <div className="more-plans-image">
                      <img 
                        src="https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg" 
                        alt="Sri Lanka Adventures" 
                      />
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="testimonial-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="section-header text-center">
                <h2>What Our Clients Say</h2>
                <p>Hear from travelers who experienced Sri Lanka with us</p>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            {testimonials.map((testimonial) => (
              <Col key={testimonial.id} md={4}>
                <div className="testimonial-card">
                  <div className="testimonial-avatar">
                    <img src={testimonial.avatar} alt={testimonial.name} />
                  </div>
                  <div className="testimonial-content">
                    <div className="testimonial-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                    </div>
                    <p className="testimonial-text">"{testimonial.quote}"</p>
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <p className="testimonial-location">{testimonial.location}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="cta-container">
                <Row className="align-items-center">
                  <Col md={8}>
                    <h2>Ready to Start Your Sri Lankan Adventure?</h2>
                    <p>Let us help you create memories that will last a lifetime.</p>
                  </Col>
                  <Col md={4} className="text-md-end">
                    <Button as={Link} to="/contact" variant="light" size="lg" className="cta-button">
                      Contact Us <i className="fas fa-paper-plane ms-2"></i>
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <Container className="text-center">
          <h2>Start your journey with us today!</h2>
          <p>Experience the beauty, culture, and warmth of Sri Lanka with Ceylon Buddy</p>
          <Button as={Link} to="/contact" variant="primary" size="lg" className="mt-4">
            Begin Your Adventure <i className="fas fa-plane-departure ms-2"></i>
          </Button>
        </Container>
      </section>

      {/* Tour Details Modal */}
      <Modal 
        show={showModal} 
        onHide={handleCloseModal} 
        size="lg" 
        centered
        className="tour-detail-modal"
      >
        {selectedTour && selectedPlan && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>
                <div className="modal-title-content">
                  <div className="tour-days-badge">{selectedPlan.days} {selectedPlan.days === 1 ? 'Day' : 'Days'}</div>
                  <div className="tour-title-wrapper">
                    <h4>{selectedTour.title}</h4>
                    <div className="tour-subtitle-modal">{selectedTour.subtitle}</div>
                  </div>
                </div>
              </Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
              <Tab.Container id="tour-detail-tabs" defaultActiveKey="overview">
                <Nav variant="tabs" className="tour-detail-tabs">
                  <Nav.Item>
                    <Nav.Link eventKey="overview">Overview</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="itinerary">Itinerary</Nav.Link>
                  </Nav.Item>
                </Nav>
                
                <Tab.Content className="pt-4">
                  {/* Overview Tab */}
                  <Tab.Pane eventKey="overview">
                    <div className="tour-overview">
                      <div className="tour-image-container">
                        <img 
                          src={selectedTour.image} 
                          alt={selectedTour.title} 
                          className="tour-detail-img" 
                        />
                        <div className="tour-image-overlay">
                          <div className="tour-category-badge">{selectedTour.subtitle}</div>
                        </div>
                      </div>
                      
                      <div className="tour-overview-content">
                        <div className="tour-detail-section">
                          <h5><i className="fas fa-route"></i> Tour Highlights</h5>
                          <p>Experience the best of Sri Lanka with this carefully curated {selectedPlan.days}-day adventure. Immerse yourself in the natural beauty, rich culture, and unforgettable experiences that make this island nation a paradise for travelers.</p>
                          
                          <div className="tour-features">
                            <div className="tour-feature">
                              <i className="fas fa-mountain"></i>
                              <span>Scenic Landscapes</span>
                            </div>
                            <div className="tour-feature">
                              <i className="fas fa-history"></i>
                              <span>Cultural Experiences</span>
                            </div>
                            <div className="tour-feature">
                              <i className="fas fa-utensils"></i>
                              <span>Local Cuisine</span>
                            </div>
                            <div className="tour-feature">
                              <i className="fas fa-camera"></i>
                              <span>Photography Spots</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  
                  {/* Itinerary Tab */}
                  <Tab.Pane eventKey="itinerary">
                    <div className="tour-itinerary">
                      <h5 className="itinerary-title">
                        <i className="fas fa-map-marked-alt"></i> 
                        Detailed Day-by-Day Itinerary
                      </h5>
                      
                      <div className="timeline">
                        {selectedTour.highlights.map((highlight, index) => {
                          // Check if this is a day header (starts with "Day")
                          const isDayHeader = highlight.startsWith("Day");
                          
                          return (
                            <div 
                              key={index} 
                              className={`timeline-item ${isDayHeader ? 'day-header' : ''}`}
                            >
                              {isDayHeader ? (
                                <div className="day-header-content">
                                  <div className="day-marker"></div>
                                  <h5>{highlight}</h5>
                                </div>
                              ) : (
                                <div className="timeline-content">
                                  <div className="timeline-marker"></div>
                                  <div className="timeline-info">{highlight}</div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Modal.Body>
            
            <Modal.Footer>
              <div className="tour-booking-section">
                {showShareMessage && (
                  <div className="share-message">
                    <i className="fas fa-check-circle"></i> Link copied to clipboard!
                  </div>
                )}
                <div className="booking-actions">
                  <Button variant="outline-secondary" className="action-btn" onClick={handleShare}>
                    <i className="fas fa-share-alt"></i> Share
                  </Button>
                  <Button as={Link} to="/contact" variant="primary" className="book-now-btn">
                    <i className="fas fa-calendar-check me-2"></i> Book This Tour
                  </Button>
                </div>
              </div>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
}

export default Service;
