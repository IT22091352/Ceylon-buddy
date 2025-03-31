import React, { useState } from 'react';
import { Modal, Button, Card, Container, Row, Col, Badge, Nav, Tab } from 'react-bootstrap';
import './gallery.css';
import sigiriyaImage from '../../../assets/photos/destination/sigiriya.jpg';
import SigiriyaFrescoes from '../../../assets/photos/destination/SigiriyaFrescoes.jpeg';
import MirrorWall from '../../../assets/photos/destination/MirrorWall.jpeg';
import WaterGardens from '../../../assets/photos/destination/WaterGardens.jpeg'
import SummitPalaceRuins from '../../../assets/photos/destination/SummitPalaceRuins.jpeg'


// Sample data of Sri Lankan tourist places
const sriLankanPlaces = [
  {
    id: 1,
    name: "Sigiriya Rock Fortress",
    image: '../assets/photos/destination/sigiriya.jpg',
    description: "Sigiriya is an ancient rock fortress located in the northern Matale District. It is a UNESCO World Heritage site and one of the best preserved examples of ancient urban planning. The name refers to a site of historical and archaeological significance dominated by a massive column of rock nearly 200 meters high.",
    location: "Central Province",
    category: "Heritage",
    featured: true,
    rating: 4.8,
    fullDetails: {
      subtitle: "The Majestic Lion Rock of Sri Lanka",
      locationDetails: "Sigiriya is located in the central Matale District of Sri Lanka, approximately 169 kilometers (105 miles) northeast of Colombo. The rock fortress sits between the towns of Dambulla and Habarane, making it easily accessible from several major tourist destinations. Most visitors travel to Sigiriya from Colombo (3-4 hour drive), Kandy (2-hour drive), or Dambulla (30-minute drive).",
      fullDescription: "Sigiriya, or 'Lion Rock', is an ancient rock fortress and palace complex built by King Kasyapa (477-495 CE) during the reign of the Sinhalese monarchy. Rising dramatically 200 meters (660 feet) above the surrounding plains, this massive geological formation has been transformed into one of the most stunning examples of ancient urban planning and construction.\n\nThe site was chosen by King Kasyapa for his new capital after he seized the throne from his father, King Dhatusena, and feared revenge from his brother, the rightful heir. At the summit, he built a magnificent palace complete with swimming pools, gardens, and elaborate frescos. The entrance to the palace was designed in the form of an enormous lion, giving the rock its name 'Sinhagiri' or Lion Rock.\n\nAfter Kasyapa's death, the site was abandoned and became a Buddhist monastery until the 14th century. Today, Sigiriya is recognized as a UNESCO World Heritage Site and stands as a testament to the ingenuity and artistic vision of ancient Sri Lankan civilization.",
      attractions: [
        {
          name: "The Lion's Paw Entrance",
          description: "The original entrance to the palace was through a massive lion figure. Today, only the enormous paws remain, carved into the rock at the base of the final stairway to the summit. These impressive stone paws give visitors a sense of the grand scale of the original structure.",
          image: sigiriyaImage
        },
        {
          name: "Sigiriya Frescoes",
          description: "Halfway up the rock is a sheltered gallery containing colorful frescoes of beautiful maidens, believed to represent celestial nymphs or the king's concubines. Only 21 of the original hundreds of paintings survive today. The vibrant colors and meticulous details of these 5th-century paintings are remarkably well-preserved.",
          image: SigiriyaFrescoes // Replace with the desired link
        },
        {
          name: "Mirror Wall",
          description: "Near the frescoes is the 'Mirror Wall,' once polished so highly that the king could see his reflection in it. The wall is now famous for the ancient graffiti inscribed by visitors over the centuries, some dating back to the 8th century. These inscriptions have provided valuable insights into the development of the Sinhala language and script.",
          image: MirrorWall
        },
        {
          name: "Water Gardens",
          description: "At the base of the rock lie symmetrically laid out water gardens featuring fountains, pools, and water channels. These sophisticated hydraulic systems, which still function during the rainy season, demonstrate the advanced engineering skills of ancient Sri Lankans. The gardens combine elements of formal symmetry with asymmetrical features.",
          image: WaterGardens
        },
        {
          name: "Summit Palace Ruins",
          description: "At the flat summit, visitors can explore the ruins of the palace complex, including the royal residence, throne, audience hall, and swimming pool. Though only the foundations remain, they provide a fascinating glimpse into the layout of this ancient sky palace. The panoramic views of the surrounding landscape from the top are truly breathtaking.",
          image: SummitPalaceRuins
        }
      ],
      activities: [
        "Climbing the Rock: The challenging climb to the summit involves 1,200 steps, but rewards visitors with incredible views and the chance to explore the palace ruins.",
        "Explore the Museums: Visit the Sigiriya Museum at the base of the rock to learn about the history, archaeology, and significance of the site.",
        "Photography: Capture stunning shots of the rock from various angles, especially during sunrise and sunset when the lighting creates a magical atmosphere.",
        "Wildlife Watching: The grounds around Sigiriya are home to monkeys, birds, and sometimes elephants in the distance, offering opportunities for wildlife enthusiasts.",
        "Guided Tours: Join a knowledgeable guide who can explain the historical context, architectural features, and fascinating stories behind Sigiriya."
      ],
      accommodation: "There are numerous accommodation options around Sigiriya, ranging from luxury resorts to budget-friendly guesthouses. Many hotels offer beautiful views of Sigiriya Rock from their properties. The nearby towns of Dambulla and Habarane also provide additional accommodation choices, with many hotels offering shuttle services to Sigiriya.",
      conclusion: "Sigiriya is more than just an archaeological site; it's a testament to human creativity, engineering prowess, and artistic vision. The harmonious blend of symmetrical and asymmetrical elements, the integration of the built environment with natural forms, and the sophisticated technology employed in its construction make Sigiriya one of Sri Lanka's most awe-inspiring attractions. A visit to this ancient wonder offers not only a journey through history but also an opportunity to appreciate the natural beauty of central Sri Lanka."
    }
  },
  {
    id: 2,
    name: "Temple of the Sacred Tooth Relic",
    image: "https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg",
    description: "The Temple of the Sacred Tooth Relic is a Buddhist temple in the city of Kandy. It is located in the royal palace complex of the former Kingdom of Kandy, which houses the relic of the tooth of the Buddha. Since ancient times, the relic has played an important role in local politics because it is believed that whoever holds the relic holds the governance of the country.",
    location: "Kandy",
    category: "Cultural",
    featured: true,
    rating: 4.9,
    fullDetails: {
      subtitle: "A Spiritual and Cultural Jewel of Sri Lanka",
      locationDetails: "The Temple of the Sacred Tooth Relic (Sri Dalada Maligawa) is located in the heart of Kandy, Sri Lanka's central highland city and the last capital of the ancient kings' era. The temple sits adjacent to the beautiful Kandy Lake, within the royal palace complex of the former Kingdom of Kandy. It is approximately 115 kilometers from Colombo and serves as the centerpiece of Kandy, a UNESCO World Heritage Site.",
      fullDescription: "The Temple of the Sacred Tooth Relic, known locally as Sri Dalada Maligawa, is one of the most sacred Buddhist sites in Sri Lanka and a UNESCO World Heritage Site. This revered temple houses the sacred tooth relic of Lord Buddha, which has been an important symbol of Sri Lankan kingship and Buddhist spirituality for centuries.\n\nAccording to legend, the tooth relic was salvaged from Buddha's funeral pyre in 543 BCE and was smuggled into Sri Lanka in the 4th century CE by Princess Hemamala and Prince Dantakumara, hidden in the princess's hair. Throughout history, the tooth relic became a symbol of sovereignty—whoever possessed the relic was believed to have the divine right to rule the country. This tradition made the relic the focal point of the Kingdom of Kandy, the last independent kingdom before British colonization.\n\nThe present temple structure was originally built in the 16th century by King Vira Parakramabahu, though successive kings expanded and enhanced the complex. The temple survived multiple attacks during colonial times, including Portuguese and British attempts to capture or destroy it, making its continued preservation even more remarkable.",
      attractions: [
        {
          name: "The Sacred Tooth Relic Chamber",
          description: "The most revered section of the temple houses the tooth relic within a series of intricately designed golden caskets, nested inside each other like Russian dolls. The relic itself is not openly displayed, but devotees can view the outer casket during rituals. This ornate chamber, adorned with gold and precious gems, represents the pinnacle of Kandyan art and devotion, with intricate ivory carvings and traditional Sri Lankan design elements.",
          image: "https://images.unsplash.com/photo-1596798733694-de992e5079e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "The Golden Roof",
          description: "One of the temple's most distinctive features is its magnificent golden canopy over the main shrine. Completed in 1987, the golden roof was a donation from the Japanese government and devotees. This gleaming structure has become an iconic symbol of Kandy, visible from many vantage points around the city. The roof's brilliance under the sunlight serves as a beacon for pilgrims and a testament to the temple's significance.",
          image: "https://images.unsplash.com/photo-1590601597312-cfcde05da79f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Pattirippuwa (Octagon)",
          description: "The Pattirippuwa, or Octagon, was built by Sri Wickrama Rajasinghe, the last king of Kandy, as a viewing gallery for the public to witness royal ceremonies. Today, it houses a collection of historical artifacts and royal items. This distinctive eight-sided structure connects the main temple to the Audience Hall and provides panoramic views of Kandy Lake and the surrounding city.",
          image: "https://images.unsplash.com/photo-1596776140979-80c9c3bdafb7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Alut Maligawa (New Palace)",
          description: "The Alut Maligawa is a newer addition to the temple complex, featuring a seated Buddha statue and beautiful wall paintings depicting the history of Buddhism in Sri Lanka and the journey of the tooth relic. The hall houses numerous Buddha statues donated by devotees from various Buddhist countries, symbolizing the international significance of this sacred site.",
          image: "https://images.unsplash.com/photo-1572133323199-bfb87d7a2799?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "World Buddhism Museum",
          description: "Located within the temple complex, this museum houses an extensive collection of artifacts, statues, and information about Buddhism across different countries and traditions. The museum offers insights into how Buddhism spread throughout Asia and how different cultures adopted and adapted Buddhist practices, making it an educational complement to the spiritual experience of the temple.",
          image: "https://images.unsplash.com/photo-1602904539938-a576a7191d28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "The Four Devale Shrines",
          description: "Surrounding the main temple are four important shrines dedicated to guardian deities: Vishnu Devalaya, Natha Devalaya, Pattini Devalaya, and Kataragama Devalaya. These shrines represent the syncretic nature of Sri Lankan religious practice, where Buddhist traditions coexist with Hindu influences. Each shrine has its own architectural style and ritual practices that complement the main temple.",
          image: "https://images.unsplash.com/photo-1596797501853-c453bee7bc0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ],
      activities: [
        "Attend Daily Puja Ceremonies: Witness the daily rituals held three times a day (5:30 AM, 9:30 AM, and 6:30 PM), where drums beat, prayers are chanted, and the sacred relic chamber is opened for viewing.",
        "Explore the Temple Museum: Visit the temple museum to see ancient manuscripts, royal regalia, and historical artifacts that tell the story of Buddhism in Sri Lanka.",
        "Participate in Full Moon Ceremonies: If your visit coincides with a Poya day (full moon), experience the special ceremonies and heightened devotional atmosphere.",
        "Tour the Entire Temple Complex: Beyond the main shrine, explore the various buildings, halls, and architectural elements that make up this extensive sacred site.",
        "Walk Around Kandy Lake: Take a peaceful stroll around the adjacent man-made Kandy Lake, which offers beautiful views of the temple and surrounding hills.",
        "Experience the Esala Perahera Festival: If visiting in July/August, witness one of Asia's grandest processions where the tooth relic's golden casket is paraded through the streets on decorated elephants.",
        "Learn About Buddhist Rituals: Observe or participate in offerings of flowers (mal puja) and oil lamps at various shrines within the complex."
      ],
      practicalInfo: {
        bestTimeToVisit: "The temple is open year-round, but the ideal time to visit is from January to April when the weather in Kandy is most pleasant. For a cultural spectacle, visit during the Esala Perahera festival in July/August (dates vary based on the lunar calendar).",
        entranceFee: "Foreign visitors: 1500 LKR (approximately $8 USD), Children: 750 LKR. Free for Sri Lankan citizens.",
        timeNeeded: "1-2 hours for a comprehensive visit. The temple can get very crowded, especially during puja times.",
        tips: [
          "Dress modestly with shoulders and knees covered. White or light-colored clothing is preferred.",
          "Remove shoes and hats before entering the temple.",
          "Photography is allowed in most areas but prohibited in the inner sanctum where the tooth relic is kept.",
          "The best time to visit is early morning to avoid crowds and heat.",
          "Purchase your ticket at the northern entrance (foreigners' counter) and keep it with you as it may be checked at different points.",
          "Consider hiring a guide for deeper insights into the temple's history and significance."
        ],
        transportation: [
          {
            type: "By Car/Taxi",
            details: "Easily accessible from anywhere in Kandy city. Most hotels can arrange transportation to the temple."
          },
          {
            type: "By Public Bus",
            details: "Local buses stop near the temple complex. The central bus station is about a 15-minute walk away."
          },
          {
            type: "By Tuk-Tuk",
            details: "The most common way to reach the temple if you're already in Kandy. Negotiate the fare before starting your journey."
          }
        ]
      },
      accommodation: "Kandy offers a wide range of accommodation options from luxury hotels like the Queens Hotel and Earl's Regency to mid-range options and budget guesthouses. Many accommodations offer views of Kandy Lake and the temple, especially those located along the eastern side of the lake.",
      conclusion: "The Temple of the Sacred Tooth Relic transcends being merely a religious site—it represents the spiritual heart of Sri Lanka and embodies the nation's Buddhist heritage, royal history, and cultural identity. For centuries, it has been a symbol of power, spirituality, and national pride. Whether you're a devout Buddhist, a student of history, or simply someone who appreciates magnificent architecture and profound cultural experiences, a visit to the Sri Dalada Maligawa offers a glimpse into the soul of Sri Lanka. The reverence with which locals treat this sacred place is palpable and adds to the temple's powerful atmosphere. For many visitors, standing before the shrine that houses the Buddha's tooth becomes not just a tourist activity but a deeply moving experience, regardless of one's religious background."
    }
  },
  {
    id: 19,
    name: "Pidurangala Rock",
    image: "https://images.unsplash.com/photo-1625378482328-69860f9a382e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Pidurangala Rock is an ancient rock formation located adjacent to the famous Sigiriya Rock Fortress. It offers spectacular panoramic views of the surrounding countryside and a perfect vantage point to see Sigiriya Rock. The moderate hike and lower visitor numbers make it a fantastic alternative to its more famous neighbor.",
    location: "Central Province",
    category: "Adventure",
    featured: false,
    rating: 4.7,
    fullDetails: {
      subtitle: "The Majestic Sister Peak to Sigiriya with Breathtaking Views",
      locationDetails: "Pidurangala Rock is located in Sri Lanka's Central Province, just north of the famous Sigiriya Rock Fortress. Situated approximately 170 kilometers northeast of Colombo, it rests within the cultural triangle of Sri Lanka, near the towns of Dambulla and Habarana. The rock formation rises about 200 meters (660 feet) above the surrounding plains and is accessible via a moderately challenging trail that begins near the Pidurangala Royal Cave Temple.",
      fullDescription: "Pidurangala Rock stands as the lesser-known but equally impressive neighbor to the iconic Sigiriya Rock Fortress. While they share geological origins as remnants of an ancient volcanic plug, Pidurangala offers a distinctly different experience marked by fewer crowds, a more natural setting, and what many consider to be the most spectacular viewpoint in the region.\n\nThe historical significance of Pidurangala dates back to the 5th century CE when King Kashyapa (477-495 CE), who built the magnificent palace atop Sigiriya, relocated monks from Sigiriya to Pidurangala. The king constructed a temple and meditation caves for the displaced monks as compensation for taking over their original dwelling place. This historical background adds cultural depth to what might otherwise be seen as merely a natural attraction.\n\nToday, Pidurangala represents the perfect complement to Sigiriya—offering both a superb vantage point to view the famous lion rock and a more adventurous, less structured climbing experience that appeals to travelers seeking a balance of cultural history and natural beauty. Its growing popularity stems from the authentic experience it provides: a challenging but manageable climb rewarded with breathtaking panoramic views in a setting that retains much of its natural character.",
      attractions: [
        {
          name: "Pidurangala Royal Cave Temple",
          description: "At the base of the rock lies the ancient Pidurangala Royal Cave Temple, commissioned by King Kashyapa in the 5th century. The temple features a reclining Buddha statue partially reconstructed in the 20th century, with the original head and portions of the torso still carrying the authentic ancient craftsmanship. The cave walls show evidence of ancient paintings similar to those at Sigiriya, though less preserved. This historical site provides context for the climb ahead, connecting visitors to the rock's long human history and Buddhist heritage before they begin their ascent.",
          image: "https://images.unsplash.com/photo-1601623206103-a29814a62b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "The Boulder Scramble",
          description: "The final section of the climb presents an exhilarating challenge as the defined stairway gives way to a natural obstacle course of massive boulders. Unlike the structured steps of Sigiriya, this segment requires climbers to navigate through, around, and over giant rocks using hands and feet, creating a true adventure experience. Narrow passages between boulders, natural rock staircases, and occasional handholds worn smooth by centuries of climbers make this portion particularly memorable. The scramble adds an element of personal achievement to reaching the summit, as each climber must find their own path through this natural maze.",
          image: "https://images.unsplash.com/photo-1577715806804-42c662031741?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Summit Panorama and Sigiriya View",
          description: "The crowning jewel of Pidurangala is undoubtedly the breathtaking 360-degree panorama from its summit. The view encompasses the vast plains of north-central Sri Lanka, distant mountain ranges, and scattered lakes and reservoirs that shimmer in the sunlight. However, the most spectacular aspect is the perfect vantage point it offers of Sigiriya Rock Fortress rising dramatically from the forested landscape. This perspective reveals the true majesty of Sigiriya in its entirety—something impossible to appreciate when actually on Sigiriya itself. Photographers particularly treasure this view for capturing the iconic silhouette of the lion rock against colorful skies at sunrise and sunset.",
          image: "https://images.unsplash.com/photo-1625378482328-69860f9a382e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Reclining Buddha Statue",
          description: "Near the summit lies a partially restored reclining Buddha sculpture carved into the rock face. Though it has weathered over centuries, the statue remains a significant archaeological feature and religious symbol. The original statue was largely destroyed over time, but restoration efforts have preserved its fundamental form. This ancient artifact serves as a reminder of Pidurangala's long history as a religious site and offers a moment of reflection during the climb. The setting of the statue, with natural rock formations framing it and open sky above, creates a uniquely peaceful atmosphere distinct from temple-housed Buddha images.",
          image: "https://images.unsplash.com/photo-1577098691283-4dca7b6de3b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Surrounding Wildlife and Ecosystem",
          description: "The slopes and surroundings of Pidurangala Rock support a diverse ecosystem that visitors can observe during their climb. Gray langur monkeys are frequently seen in the trees and on rocks along the path, while various bird species including peacocks and eagles soar overhead. The vegetation changes noticeably during the ascent, transitioning from lush forest at the base to hardy, wind-resistant shrubs near the summit. Early morning climbers might spot wildlife emerging for the day, adding a nature-watching dimension to what is already a remarkable cultural and scenic experience.",
          image: "https://images.unsplash.com/photo-1577098634826-9d3e49bf75dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ],
      activities: [
        "Sunrise Hike: Begin climbing in pre-dawn darkness (around 5:00 AM) to reach the summit for sunrise. Watching the first light illuminate Sigiriya Rock and the surrounding landscape is a magical experience worth the early start.",
        "Night Sky Photography: For experienced hikers comfortable with the trail, evening visits offer opportunities to photograph the stars above Sigiriya when weather conditions are favorable, creating dramatic images with the silhouette of Lion Rock against the night sky.",
        "Mindful Meditation: Find a quiet spot at the summit to practice meditation or yoga amid the natural beauty and historical significance of this ancient spiritual site—connecting with the same landscape that has inspired contemplation for over 1,500 years.",
        "Geological Exploration: Examine the fascinating rock formations that make up Pidurangala, including natural arches, weathered cavities, and balanced boulders that demonstrate the power of geological processes over millennia.",
        "Historical Study: Visit both Pidurangala and Sigiriya on the same day to compare these sister sites and gain a comprehensive understanding of King Kashyapa's reign and the historical development of this unique cultural landscape.",
        "Naturalist Observation: Bring binoculars to identify bird species and observe the behavior of resident monkey troops that inhabit the rock and surrounding forests—a chance to appreciate Sri Lanka's rich biodiversity."
      ],
      practicalInfo: {
        bestTimeToVisit: "Pidurangala can be climbed year-round, but October to March offers the most reliable weather conditions. For temperature comfort, early morning (5:00-7:00 AM) or late afternoon (3:00-5:00 PM) climbs are recommended, avoiding midday heat. Sunrise and sunset provide the most spectacular lighting for photography and views of Sigiriya.",
        entranceFee: "Entrance fee: 500 LKR (approximately $2.50 USD) per person, which goes toward the maintenance of the temple at the base.",
        timeNeeded: "The climb takes approximately 30-45 minutes one way for those of average fitness. Allow at least 2 hours total for the round trip, including time to explore the temple and enjoy the summit views.",
        tips: [
          "Wear sturdy shoes with good grip as the final section involves climbing over uneven rocks and boulders.",
          "Bring sufficient water as there are no facilities once you begin the climb.",
          "Modest dress is required to enter the temple at the base—shoulders and knees should be covered.",
          "Start very early if climbing during hot seasons to avoid heat exhaustion, and bring sun protection.",
          "The final boulder scramble may be challenging for those with mobility issues or extreme fear of heights.",
          "Keep valuables secure as monkeys along the route can be opportunistic."
        ],
        transportation: [
          {
            type: "By Tuk-Tuk",
            details: "Most convenient option from nearby towns like Sigiriya village (10 minutes), Dambulla (30 minutes), or Habarana (25 minutes). Expect to pay 300-700 LKR depending on distance and negotiation."
          },
          {
            type: "By Bicycle",
            details: "Bicycles can be rented in Sigiriya village, offering a pleasant way to reach Pidurangala (approximately 2km from Sigiriya Rock) through scenic countryside."
          },
          {
            type: "By Tour",
            details: "Many tour operators offer combined Sigiriya and Pidurangala packages, often including transportation from major cities or nearby hotels."
          }
        ]
      },
      accommodation: "While there are no accommodations on Pidurangala itself, the surrounding area offers numerous options. Luxury travelers can choose from upscale properties like Jetwing Vil Uyana or Water Garden Sigiriya. Numerous mid-range hotels and guesthouses are available in nearby Sigiriya village, while budget travelers can find simple homestays and hostels. For a unique experience, some eco-lodges in the area provide treehouse accommodations with distant views of both Pidurangala and Sigiriya rocks.",
      conclusion: "Pidurangala Rock exemplifies the hidden treasures that reward travelers willing to venture beyond Sri Lanka's most famous attractions. While neighboring Sigiriya draws larger crowds with its ancient palace ruins and manicured gardens, Pidurangala offers something equally valuable but distinctly different: an authentic adventure culminating in what many consider the finest viewpoint in central Sri Lanka. The physical challenge of the climb, the historical significance of the temple, and the unparalleled panorama from the summit combine to create an experience that balances natural beauty, cultural heritage, and personal achievement. As tourism in Sri Lanka continues to evolve, Pidurangala stands as a testament to the depth of experiences available to those willing to take the path less traveled—a philosophy that often yields the most memorable travel experiences. Whether visited as a complement to Sigiriya or as a destination in its own right, Pidurangala represents the perfect fusion of adventure and history that characterizes the best of Sri Lanka's cultural triangle."
    }
  },
  {
    id: 20,
    name: "Nuwara Eliya",
    image: "https://images.unsplash.com/photo-1562459664-4457a222882b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Nuwara Eliya, known as 'Little England,' is a charming hill station set amidst the tea-carpeted mountains of central Sri Lanka. With its cool climate, colonial architecture, lush gardens, and misty landscapes, it offers visitors a refreshing retreat and a glimpse into the island's British colonial heritage.",
    location: "Central Province",
    category: "Hill Country",
    featured: false,
    rating: 4.8,
    fullDetails: {
      subtitle: "Sri Lanka's Little England in the Misty Mountains",
      locationDetails: "Nuwara Eliya is located in the central highlands of Sri Lanka, approximately 180 kilometers (112 miles) from Colombo. Situated at an altitude of 1,868 meters (6,128 feet) above sea level in the Central Province, it is nestled among the picturesque hills of the island's tea country. The town is accessible via a scenic road journey through winding mountain passes or by train to nearby Nanu Oya station followed by a short drive.",
      fullDescription: "Nuwara Eliya, often referred to as 'Little England' or the 'City of Light,' was established in the 19th century as a retreat for British colonial officials seeking escape from the tropical heat of the lowlands. The town's temperate climate, with average temperatures of 15-18°C (59-64°F), allowed the British to create a slice of home in the tropics, complete with Tudor-style cottages, country clubs, and carefully manicured gardens.\n\nThe British influence is still strikingly evident in the town's architecture, recreational facilities, and overall ambiance. Red-tiled roofs, English cottage gardens, the Hill Club, golf course, and racecourse all contribute to Nuwara Eliya's distinctive character that sets it apart from anywhere else in Sri Lanka. This colonial heritage blends with Sri Lankan elements to create a uniquely charming destination.\n\nBeyond its colonial appeal, Nuwara Eliya serves as the heart of Sri Lanka's tea country. The surrounding slopes are carpeted with emerald tea plantations that produce some of the world's finest high-grown teas. The cool climate and high elevation create ideal conditions for slow-growing tea plants that develop the complex flavors Ceylon tea is famous for worldwide.",
      attractions: [
        {
          name: "Victoria Park",
          description: "This beautifully maintained English-style garden in the heart of Nuwara Eliya was named after Queen Victoria and established during the British colonial era. The park spans 27 acres and showcases well-manicured lawns, colorful flower beds that change with the seasons, and magnificent old trees. Victoria Park is also a haven for bird watchers, with numerous endemic and migratory species including the Kashmir flycatcher and Indian blue robin making appearances during migration seasons. The park's serene atmosphere, picturesque bridges, and meandering streams create a peaceful retreat for nature lovers.",
          image: "https://images.unsplash.com/photo-1577116268654-cc6f46901f8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Pedro Tea Estate and Factory",
          description: "One of Sri Lanka's most historic tea plantations, Pedro Tea Estate offers fascinating insights into the processes behind the perfect cup of Ceylon tea. Visitors can tour the working factory to witness each stage of production—from the picking of the 'two leaves and a bud' to withering, rolling, fermenting, drying, and sorting. The estate's panoramic views of undulating tea fields where colorfully dressed tea pluckers work with remarkable speed and precision provide quintessential images of Sri Lanka's highlands. The tour concludes with a tea tasting session where visitors can appreciate the distinctive flavors of high-grown tea.",
          image: "https://images.unsplash.com/photo-1571802374626-c944d8d0c1a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Gregory Lake",
          description: "Created in 1873 by damming the Nanu Oya river during the governorship of Sir William Gregory, this picturesque lake serves as a recreational focal point for Nuwara Eliya. The lake and its surrounding park offer various activities including boat rides, horseback riding, and jet skiing. The well-maintained walking path that circles the lake provides a pleasant 2.8-kilometer stroll with beautiful views of the surrounding hills and town. During April's season (the Sri Lankan New Year period), the lake becomes especially vibrant with festivities, food stalls, and cultural performances that showcase both colonial heritage and local traditions.",
          image: "https://images.unsplash.com/photo-1562459664-4457a222882b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Hakgala Botanical Gardens",
          description: "Located about 10 kilometers from Nuwara Eliya, Hakgala is one of the three main botanical gardens in Sri Lanka. Established in 1861 as an experimental garden for cinchona cultivation, it now houses over 10,000 species of plants including roses, orchids, ferns, and medicinal plants. The gardens are magnificently situated on the slopes of Hakgala Rock, with terraced sections rising up the hillside to reveal new vistas and plant collections. According to the Ramayana epic, Hakgala is believed to be the pleasure garden (Ashok Vatika) where the demon king Ravana kept Sita captive, adding mythological significance to its botanical importance.",
          image: "https://images.unsplash.com/photo-1563442744-0a9ca016b9c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Colonial Architecture and Heritage Buildings",
          description: "Nuwara Eliya's distinctive architectural heritage includes numerous well-preserved colonial buildings that transport visitors back to 19th-century England. The Tudor-style Hill Club, formerly a British gentlemen's club established in 1876, still maintains many of its original features and traditions. The red-brick Victorian post office, with its clock tower and distinctive British design, remains a functioning postal service. Other notable buildings include the Holy Trinity Church with its red-tiled roof and stained glass windows, the Grand Hotel (originally the mansion of Governor Sir Edward Barnes), and numerous quaint cottages with English country gardens, all contributing to the town's unique 'Little England' atmosphere.",
          image: "https://images.unsplash.com/photo-1568198473832-b6b0f46328c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ],
      activities: [
        "Tea Plantation Tours: Visit world-famous tea estates like Pedro, Labookellie, or Mackwoods to learn about tea production, participate in tea plucking, and sample some of the world's finest Ceylon tea straight from the source.",
        "Horton Plains National Park Excursion: Take a day trip to this unique highland plateau featuring diverse ecosystems, endemic species, the dramatic World's End precipice, and the beautiful Baker's Falls—an unforgettable hiking experience best started at dawn.",
        "Golf at the Nuwara Eliya Golf Club: Play a round at one of Asia's oldest golf courses (established 1889), where the challenging 18-hole course is set against a backdrop of mountains and tea plantations, offering a truly unique golfing experience.",
        "Visit Moon Plains: Explore this recently opened natural reserve that offers panoramic views of multiple mountain peaks and the possibility of spotting wildlife including sambar deer, wild buffaloes, and numerous bird species in an open grassland setting.",
        "Horse Racing at the Racecourse: If your visit coincides with racing season (typically April and August), experience the colonial tradition of horse racing at the Nuwara Eliya Racecourse, complete with fashionable crowds and festive atmosphere.",
        "Culinary Experiences: Sample traditional high tea at the Grand Hotel, try English-style pub fare at the Hill Club, and contrast these with authentic Sri Lankan cuisine featuring locally grown vegetables unique to the highland climate."
      ],
      practicalInfo: {
        bestTimeToVisit: "Nuwara Eliya can be visited year-round, but the period from January to April offers the most pleasant weather with clear skies and minimal rainfall. April is especially lively during the Sinhalese New Year celebrations when the town hosts numerous cultural events, flower shows, and horse races. October to December can be quite rainy, though the misty landscapes have their own ethereal beauty.",
        entranceFee: "The town itself has no entrance fee. Specific attractions have varied fees: Victoria Park (300 LKR for foreigners), Hakgala Botanical Gardens (1,500 LKR for foreigners), Pedro Tea Factory tour (250 LKR).",
        timeNeeded: "A minimum of 2 full days is recommended to appreciate Nuwara Eliya's attractions and atmosphere. Add an extra day if planning to visit Horton Plains National Park.",
        tips: [
          "Pack warm clothing regardless of when you visit—evenings can be quite cold with temperatures sometimes dropping to near freezing.",
          "Morning fog can reduce visibility, especially at viewpoints, so plan outdoor activities for late morning or afternoon when possible.",
          "Rainfall can occur year-round; bring waterproof clothing and appropriate footwear.",
          "The town gets very busy during April season; book accommodation well in advance if visiting during this period.",
          "Many colonial buildings like the Hill Club have dress codes (smart casual, closed shoes for men); check requirements before visiting.",
          "High altitude can affect some visitors; take time to acclimatize and stay hydrated."
        ],
        transportation: [
          {
            type: "By Road",
            details: "From Colombo, the journey takes 5-6 hours by car. The most scenic route is via Hatton, passing through beautiful tea country. Private taxis or pre-arranged drivers offer the most comfortable option."
          },
          {
            type: "By Train",
            details: "One of the world's most scenic train journeys connects Colombo and Kandy to Nanu Oya station (9km from Nuwara Eliya). First and second-class observation cars offer the best views, but tickets should be booked well in advance."
          },
          {
            type: "Local Transportation",
            details: "Within Nuwara Eliya, tuk-tuks are readily available for short distances. Local buses connect to nearby attractions, though they can be crowded. Many hotels offer bicycle rentals for exploring the town."
          }
        ]
      },
      accommodation: "Nuwara Eliya offers a wide range of accommodation options, many reflecting its colonial heritage. At the luxury end, the Grand Hotel, St. Andrew's Hotel, and the Jetwing St. Andrew's provide classic colonial-era experiences with modern amenities. Numerous mid-range hotels and guesthouses offer comfortable stays with mountain or garden views. For a truly unique experience, several tea plantations in the surrounding areas have converted planter's bungalows into boutique hotels where guests can experience the authentic lifestyle of colonial tea planters. Budget travelers will find clean, simple accommodations in the town center and surrounding areas.",
      conclusion: "Nuwara Eliya presents a fascinating time capsule where Sri Lanka's colonial past remains vibrantly alive while harmoniously blending with contemporary life. The town's unique character—part English countryside village, part Sri Lankan hill station—creates a destination unlike any other on the island. The combination of cool climate, scenic beauty, colonial heritage, and its role as the heart of Ceylon tea production makes Nuwara Eliya an essential component of the Sri Lankan travel experience. Whether you're savoring a perfectly brewed cup of local tea while overlooking mist-shrouded mountains, exploring English-style gardens bursting with tropical and temperate flowers, or simply enjoying the cool mountain air after time in Sri Lanka's warmer regions, Nuwara Eliya offers a refreshing counterpoint that highlights the remarkable diversity of experiences available within this compact island nation."
    }
  },
  {
    id: 21,
    name: "Trincomalee",
    image: "https://images.unsplash.com/photo-1605004670074-85667859ae37?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Trincomalee is a port city on Sri Lanka's northeast coast, blessed with deep-water harbors, pristine beaches, and vibrant coral reefs. Known for Nilaveli and Uppuveli beaches, hot springs, and the sacred Koneswaram Temple perched on Swami Rock, it offers both cultural exploration and beach relaxation.",
    location: "Eastern Province",
    category: "Beach",
    featured: false,
    rating: 4.7,
    fullDetails: {
      subtitle: "Sri Lanka's Eastern Paradise of Beaches, Culture and Natural Harbors",
      locationDetails: "Trincomalee (often called 'Trinco') is located on the northeast coast of Sri Lanka in the Eastern Province, approximately 265 kilometers (165 miles) from Colombo. The city is built around one of the world's finest natural deepwater harbors and stretches along several bays and rocky promontories. The main town sits on a peninsula between Inner Harbor and Outer Harbor, while popular beaches like Uppuveli and Nilaveli extend northward along the coast about 6-10 kilometers from the city center.",
      fullDescription: "Trincomalee represents a fascinating confluence of natural splendor, colonial heritage, religious significance, and contemporary Sri Lankan life. The region has been strategically important throughout history due to its magnificent natural harbor—considered one of the finest deepwater harbors in the world. This geographic advantage made Trincomalee a coveted prize among colonial powers, with the Portuguese, Dutch, French, and British all vying for control at various points in history.\n\nBeyond its military and commercial significance, Trincomalee is blessed with extraordinary natural beauty. Its coastline features some of Sri Lanka's most pristine beaches with powder-white sand and crystal-clear waters. The relatively undeveloped eastern coast offers a more authentic and laid-back alternative to the island's more commercialized southern beach destinations, while still providing the infrastructure needed for a comfortable stay.\n\nThe region also holds profound cultural and religious importance, particularly the ancient Koneswaram Temple dedicated to Lord Shiva, dramatically positioned on a cliff overlooking the Indian Ocean. This sacred site has drawn Hindu pilgrims for centuries and represents an important link to the Tamil heritage that remains strong in this part of Sri Lanka. After suffering extensively during the civil war (1983-2009), Trincomalee has undergone significant revitalization while still retaining its authentic character, making it an increasingly popular destination for travelers seeking both relaxation and cultural depth.",
      attractions: [
        {
          name: "Koneswaram Temple and Swami Rock",
          description: "Perched dramatically on a cliff 130 meters above the ocean, this ancient Hindu temple dedicated to Lord Shiva dates back over 2,500 years, though the current structure was largely rebuilt after Portuguese destruction in the 17th century. The temple's breathtaking location on Swami Rock (also called Lover's Leap) offers panoramic views of the bay and ocean. Inside, the main shrine houses a lingam (symbolic representation of Shiva) and colorful statues of various Hindu deities. During April's new year celebrations and July/August's Aadi Amavasai festival, the temple comes alive with thousands of pilgrims participating in vibrant ceremonies, creating a cultural spectacle that contrasts beautifully with the temple's serene coastal setting.",
          image: "https://images.unsplash.com/photo-1605004670074-85667859ae37?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Nilaveli and Uppuveli Beaches",
          description: "These stunning stretches of coastline north of Trincomalee town represent some of Sri Lanka's most pristine beaches. Nilaveli, approximately 10 kilometers from town, features a wide expanse of powdery white sand meeting crystal-clear turquoise waters, with swaying palm trees providing natural shade. The beach's gentle gradient makes it excellent for swimming. Uppuveli, slightly closer to town, offers a similar paradise with a more developed beachfront area featuring small guesthouses and seafood restaurants. Both beaches are relatively uncrowded compared to southern coast destinations, providing a more peaceful atmosphere where visitors can truly unwind while enjoying the warm waters of the Bay of Bengal.",
          image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Pigeon Island National Park",
          description: "Located about 1 kilometer offshore from Nilaveli Beach, this small island marine sanctuary is named for the rock pigeons that nest there. The island features two main coral reef systems that support an extraordinary diversity of coral species, reef fish, and sea turtles. Recognized as one of Sri Lanka's two marine national parks, it offers some of the country's best snorkeling and diving experiences, with healthy coral gardens and the chance to swim alongside blacktip reef sharks, sea turtles, and hundreds of colorful reef fish species. The island also features small, picturesque beaches and natural rock pools, making it an ideal day trip combining snorkeling, beach relaxation, and nature observation.",
          image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Kanniya Hot Springs",
          description: "Located about 8 kilometers from Trincomalee town, these natural hot springs consist of seven wells of varying temperatures, each offering therapeutic mineral waters believed to have healing properties. According to Hindu legend, the springs were created when Lord Ravana struck the ground with his sword in grief after his mother's death, seeking water for her funeral rites. Today, the site is a popular attraction where visitors can experience the unusual sensation of naturally heated water in a tropical climate. Each of the seven wells has a slightly different temperature, and visitors use the provided buckets to pour water over themselves. The simple, unassuming setting adds to the authentic cultural experience, offering insights into local traditions and beliefs surrounding these geothermal waters.",
          image: "https://images.unsplash.com/photo-1584091388815-27ed2037b26b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Fort Frederick",
          description: "Built originally by Portuguese colonists in 1623 on the site of the destroyed Koneswaram temple, then rebuilt by the Dutch, and later occupied by the British, this star-shaped fort stands as a testament to the region's colonial history and strategic importance. Today, the fort houses a Sri Lankan military base but remains open to visitors. Walking through its massive gates and along the walls offers a journey through colonial history, with views of colonial-era buildings, deer freely roaming the grounds, and splendid vistas of the harbor. The fort serves as the access point to Koneswaram Temple, with the path leading through the fort's grounds and up Swami Rock, adding a historical dimension to the spiritual journey to the temple.",
          image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ],
      activities: [
        "Snorkeling and Diving: Experience the underwater wonders of Pigeon Island National Park and other nearby coral reefs, with opportunities to swim alongside blacktip reef sharks, turtles, and vibrantly colored tropical fish in some of Sri Lanka's healthiest coral ecosystems.",
        "Whale and Dolphin Watching: Join boat excursions from Trincomalee harbor (May to October) to observe blue whales, sperm whales, and spinner dolphins in the deep waters offshore—one of the few places worldwide where blue whales can be spotted relatively close to shore.",
        "Cultural Heritage Tours: Explore the fascinating cultural mosaic of Trincomalee through visits to Hindu temples, Buddhist viharas, colonial buildings, and multicultural markets that reflect the region's diverse heritage and strategic importance throughout history.",
        "Fishing Excursions: Participate in traditional fishing experiences with local fishermen, either from shore using time-honored methods or on deeper sea fishing trips targeting larger species like tuna and barracuda that flourish in Trincomalee's nutrient-rich waters.",
        "Beach Yoga and Wellness: Join beachfront yoga sessions at sunrise or sunset, with several resorts and independent instructors offering classes against the peaceful backdrop of Uppuveli and Nilaveli's pristine shores.",
        "Harbor Boat Tours: Take a boat tour of Trincomalee's magnificent natural harbor, visiting small islands, learning about its naval significance through history, and potentially spotting pods of dolphins that frequently enter the protected waters."
      ],
      practicalInfo: {
        bestTimeToVisit: "The ideal time to visit Trincomalee is from April to October, when the east coast enjoys its dry season with calm seas, excellent visibility for snorkeling/diving, and consistent sunny weather. May to August offers the best conditions for whale watching. November to March brings the northeast monsoon with heavier rainfall, rougher seas, and reduced underwater visibility, making this period less ideal for beach activities.",
        entranceFee: "Koneswaram Temple: Free (donations appreciated); Fort Frederick: Free; Pigeon Island National Park: Approximately 2,500 LKR for foreigners plus boat transportation (around 4,000-5,000 LKR per boat); Kanniya Hot Springs: 150 LKR for foreigners.",
        timeNeeded: "A minimum of 3-4 days is recommended to experience the key attractions of Trincomalee, including beach time and cultural sites. Add additional days if planning multiple snorkeling/diving trips or more in-depth exploration of the region.",
        tips: [
          "Respect religious customs when visiting temples—cover shoulders and knees, and remove shoes before entering sacred areas.",
          "For Pigeon Island, book snorkeling trips in the morning when waters are typically calmer and visibility is best.",
          "Strong sun reflection from white sand beaches intensifies UV exposure; use high SPF sunscreen and seek shade during peak hours.",
          "Some areas may still have occasional military presence; always follow instructions from authorities.",
          "Purchase reef-safe sunscreen to protect the fragile coral ecosystems when snorkeling or diving.",
          "When in smaller villages, dress modestly in keeping with local cultural norms."
        ],
        transportation: [
          {
            type: "By Air",
            details: "Cinnamon Air operates seasonal flights from Colombo to Trincomalee's China Bay Airport, taking approximately 1 hour—the fastest but most expensive option."
          },
          {
            type: "By Road",
            details: "The journey from Colombo takes 6-7 hours by car or private van. Air-conditioned buses operate from Colombo's Central Bus Station (7-8 hours). Trincomalee is also accessible from Cultural Triangle destinations like Anuradhapura (3 hours)."
          },
          {
            type: "By Train",
            details: "Daily trains connect Colombo and Kandy to Trincomalee, offering a scenic journey through the countryside. The trip takes 6-7 hours, and first-class observation cars provide the most comfortable experience."
          }
        ]
      },
      accommodation: "Trincomalee and its surrounding beaches offer accommodations ranging from luxury resorts to budget-friendly guesthouses. The most upscale options include Trinco Blu by Cinnamon and Jungle Beach Resort, featuring comprehensive facilities and direct beach access. Mid-range travelers can choose from numerous boutique hotels and beach resorts in Uppuveli and Nilaveli. Budget accommodation is plentiful, with family-run guesthouses and small hotels offering clean, simple rooms, often with beach views. For a unique experience, some properties offer eco-friendly cabanas and tree houses. Accommodation prices peak during the April-August high season, and advance bookings are essential during this period, especially for beachfront properties.",
      conclusion: "Trincomalee stands as a testament to Sri Lanka's remarkable diversity, offering a distinct experience that complements rather than duplicates the island's other destinations. Its unique combination of pristine beaches, cultural depth, historical significance, and natural wonders creates a multifaceted destination that rewards travelers seeking both relaxation and enrichment. The region's relative underdevelopment compared to Sri Lanka's southwest coast provides a more authentic coastal experience, where local life continues alongside tourism rather than being overshadowed by it. As visitors swim in crystal-clear waters, explore ancient temples, or simply watch fishermen bring in their traditional wooden boats at sunset, they experience a coastal Sri Lanka that balances natural beauty with living culture. Trincomalee's growing popularity makes it an essential addition to any comprehensive Sri Lankan itinerary, particularly for those seeking to understand the island's full spectrum of landscapes, cultures, and experiences."
    }
  },
  {
    id: 22,
    name: "Pasikuda",
    image: "https://images.unsplash.com/photo-1564414990779-8f9b92960dde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Pasikuda is a stunning coastal village on Sri Lanka's eastern shore, renowned for its shallow, crystal-clear waters and long stretch of beautiful golden sand. The bay's protective reef creates a natural swimming pool perfect for safe bathing, while luxury resorts line the coast offering a perfect beach getaway.",
    location: "Eastern Province",
    category: "Beach",
    featured: false,
    rating: 4.6,
    fullDetails: {
      subtitle: "The Pristine Bay with the Longest Stretch of Shallow Waters",
      locationDetails: "Pasikuda (sometimes spelled Passekudah) is located on the east coast of Sri Lanka in the Batticaloa District of Eastern Province. It sits approximately 35 kilometers north of Batticaloa town and about 280 kilometers from Colombo. The bay forms part of a larger coastal area that includes the neighboring Kalkudah Bay just to the south. The beach stretches for nearly 4 kilometers along a shallow, protected bay facing the Bay of Bengal.",
      fullDescription: "Pasikuda Bay represents one of Sri Lanka's most remarkable coastal treasures, distinguished by an extraordinary natural feature—its exceptionally shallow waters extend hundreds of meters offshore before deepening, creating what locals often call the world's longest stretch of shallow swimmable coastline. This unusual characteristic results from the bay's unique crescent shape and protective coral reef, which together create a natural swimming pool effect with calm, crystal-clear waters.\n\nThe name 'Pasikuda' derives from Tamil words meaning 'green-algae bay,' referring to the soft, moss-like algae that sometimes grows on the sandy bottom, adding to the unique ecosystem of the area. For decades, this paradise remained relatively unknown to international tourists, as the region was affected by Sri Lanka's civil conflict. Following the war's end in 2009, the government designated Pasikuda as a Special Tourism Zone, leading to thoughtful development that has transformed the once-isolated bay into a premium beach destination.\n\nToday, Pasikuda offers visitors a perfect balance of natural beauty and comfortable accommodations. Unlike more developed and crowded beach destinations, Pasikuda maintains a sense of tranquility and space, even as its reputation grows. The bay's gentle waters make it uniquely suitable for families with children, non-swimmers, and those seeking a peaceful ocean experience without strong currents or high waves.",
      attractions: [
        {
          name: "Pasikuda Bay's Shallow Waters",
          description: "The bay's signature feature is its extraordinarily shallow, crystal-clear waters that extend up to 250-500 meters offshore before deepening. This natural phenomenon creates a massive, waist-deep aquamarine swimming area with a soft sandy bottom that remains warm from the tropical sun. The water's remarkable clarity allows visitors to see small fish and occasionally starfish against the light-colored sand. During low tide, the shallow area expands even further, and the gentle gradient makes it an exceptionally safe environment for children, non-swimmers, and those who prefer relaxed wading over vigorous swimming. The bay's orientation also delivers spectacular sunrises over the water, casting golden light across the tranquil morning sea.",
          image: "https://images.unsplash.com/photo-1564414990779-8f9b92960dde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Pristine Beach Coastline",
          description: "Pasikuda's nearly 4-kilometer stretch of fine golden sand creates one of Sri Lanka's most picturesque beaches. The crescent-shaped bay is framed by rocky headlands at each end, providing visual drama to the otherwise uninterrupted beach. The wide beach area allows ample space for sunbathing, beach games, and romantic walks, even during peak season. Palm trees line portions of the shore, offering natural shade, while the soft sand varies from golden to almost white depending on the light. Unlike many other beaches in Sri Lanka, Pasikuda's shore tends to remain relatively clean due to the bay's protected nature and the efforts of resorts to maintain their beachfronts.",
          image: "https://images.unsplash.com/photo-1517922522248-f8ae27d6ddc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Coral Reef and Marine Ecosystem",
          description: "Beyond the shallow swimming area, Pasikuda's outer reef creates a diverse marine ecosystem that's relatively easy to access for snorkeling and diving compared to many other locations. The reef itself suffered damage during the 2004 tsunami but has shown remarkable recovery in protected areas. During calm sea conditions, particularly during the dry season, visibility can extend 10-20 meters, revealing colorful coral formations, reef fish including angelfish and parrotfish, and occasionally sea turtles. Several diving operations in Pasikuda offer guided excursions to the best reef sections, suitable for both beginners and experienced divers. The reef also creates ideal conditions for learning to dive in a relatively protected environment before venturing to more challenging sites.",
          image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Traditional Fishing Village Life",
          description: "Just beyond the developed resort area, traditional fishing communities continue their centuries-old way of life, offering cultural authenticity that contrasts with the modern comfort of the tourism zone. Early morning visitors can watch colorfully painted wooden fishing boats (called 'oruvas') returning with the night's catch, while fishermen mend nets and prepare for upcoming trips. The daily fish markets in nearby villages provide both a cultural experience and access to incredibly fresh seafood. Some local fishermen offer informal boat trips that provide both livelihood for locals and unique experiences for visitors interested in traditional fishing methods or simply seeing the coastline from a different perspective. These communities maintain many traditional practices that predate the area's tourism development.",
          image: "https://images.unsplash.com/photo-1540631430362-8611ddf575f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Batticaloa Lagoon Ecosystem",
          description: "A short journey from Pasikuda leads to the expansive Batticaloa Lagoon, a 56-square-kilometer wetland ecosystem that provides a complete contrast to the beach environment. The lagoon is famous for its 'singing fish'—a natural phenomenon where fish are believed to produce musical sounds on certain nights, particularly around full moon. Beyond this curiosity, the lagoon supports thriving mangrove ecosystems that serve as critical breeding grounds for fish and habitat for numerous bird species. Boat tours of the lagoon reveal traditional fishing methods using traps and nets, abundant birdlife including kingfishers and herons, and occasional glimpses of monitor lizards basking on the banks. For nature enthusiasts, the lagoon offers a peaceful alternative to beach activities and a window into Sri Lanka's important wetland ecosystems.",
          image: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ],
      activities: [
        "Ocean Swimming and Safe Bathing: Enjoy the unique experience of walking hundreds of meters into crystal-clear, waist-deep water—perfect for families, non-swimmers, and those seeking safe ocean bathing without concerns about sudden depth changes or strong currents.",
        "Snorkeling and Diving: Explore the recovering coral reefs beyond the shallow swimming area with guided boat trips, encountering colorful reef fish, sea turtles, and coral formations in one of the east coast's most accessible marine environments.",
        "Traditional Fishing Experiences: Join local fishermen for authentic fishing trips using traditional methods, gaining insights into time-honored practices while contributing directly to the local economy outside the resort environment.",
        "Water Sports: Participate in various water activities including jet skiing, kayaking, banana boat rides, and stand-up paddleboarding—all made more accessible and less intimidating by the calm, protected waters of the bay.",
        "Sunrise Beach Yoga: Take part in morning yoga sessions offered by several resorts directly on the beach as the sun rises over the Bay of Bengal, creating a particularly meditative experience with the gentle sound of small waves as background.",
        "Cultural Excursions: Visit nearby cultural sites including the historic Batticaloa Fort, traditional Hindu temples, and rural villages that maintain traditional crafts like palm leaf weaving and pottery, offering cultural depth beyond the beach experience."
      ],
      practicalInfo: {
        bestTimeToVisit: "The ideal time to visit Pasikuda is during the dry season from May to September when the sea is calm, skies are clear, and underwater visibility is excellent. April and October can also be pleasant as shoulder seasons with fewer visitors. The northeast monsoon affects the region from November to February, bringing rougher seas, reduced visibility for snorkeling, and intermittent heavy rainfall. Many beachfront properties operate seasonally or offer reduced rates during the monsoon period.",
        entranceFee: "There is no fee to access Pasikuda Beach. Some sections fronting private resorts may have facilities reserved for guests, but the beach itself remains public property with various access points.",
        timeNeeded: "A minimum stay of 3-4 days is recommended to fully enjoy Pasikuda's relaxed atmosphere. Many visitors choose to stay 5-7 days, allowing time for both beach relaxation and exploration of the surrounding areas.",
        tips: [
          "The shallow waters can become quite warm during midday sun; early morning and late afternoon provide more refreshing swimming conditions.",
          "Water shoes can be useful for protecting feet from occasional sharp shells and coral fragments, especially when walking far out into the bay.",
          "While resort areas are well-developed, more isolated parts of the beach may have limited facilities—carry water and sun protection when exploring further afield.",
          "Respect local fishing activities, particularly in early mornings when boats may be launching or returning to shore.",
          "During the peak dry season (June-August), advance accommodation bookings are essential as quality options are limited and fill quickly.",
          "When visiting nearby villages and temples, dress modestly in keeping with local cultural norms."
        ],
        transportation: [
          {
            type: "By Road",
            details: "From Colombo, the journey takes approximately 7-8 hours by car. The route passes through significant towns like Habarana if traveling via the central region. More direct eastern routes are now available with improved roads since the end of the civil conflict."
          },
          {
            type: "By Air",
            details: "The most time-efficient option is flying to Batticaloa Airport with Cinnamon Air, offering scenic seaplane flights from Colombo, followed by a 30-45 minute drive to Pasikuda. This service operates seasonally."
          },
          {
            type: "Local Transportation",
            details: "Within the Pasikuda area, tuk-tuks are readily available for short journeys. Many resorts offer bicycle rentals for exploring the coastline. For day trips to Batticaloa or surrounding areas, cars with drivers can be arranged through accommodations."
          }
        ]
      },
      accommodation: "Following its designation as a Special Tourism Zone, Pasikuda has developed a range of high-quality accommodations focused primarily on the premium and mid-range markets. Luxury resorts like Anantaya Resort & Spa, Maalu Maalu Resort, and Amaya Beach offer sophisticated facilities with direct beach access, infinity pools, spas, and water sports centers. In the mid-range category, several quality hotels and smaller resorts provide comfortable beachfront accommodation with good amenities. Budget options are more limited within Pasikuda itself but can be found in greater numbers in nearby areas like Kalkudah Bay and approaching Batticaloa. Most accommodations feature architecture inspired by traditional fishing villages, using natural materials and open designs that maximize sea breezes and ocean views.",
      conclusion: "Pasikuda represents a perfect synthesis of natural wonder and thoughtful development—a place where one of nature's most unusual coastal formations has been made accessible without sacrificing its essential character. The bay's extraordinary shallow waters create an experience found in few other places on earth, allowing visitors to walk hundreds of meters into crystal-clear sea while still standing comfortably. This unique natural feature, combined with the region's relative newness to international tourism, creates a destination that feels both discovered and unspoiled. For travelers seeking the relaxation of a premium beach destination without overwhelming crowds or commercialization, Pasikuda offers a compelling alternative to Sri Lanka's more developed western and southern coasts. Whether standing waist-deep a quarter-kilometer from shore marveling at the clarity of the water, watching fishermen work with methods unchanged for generations, or simply enjoying the comfort of the resorts against the backdrop of perfect sunrises, visitors to Pasikuda experience a beach destination that balances natural wonder with genuine Sri Lankan hospitality—a balance that increasingly defines the best of the island's tourism renaissance."
    }
  }
];

// Categories for filtering
const categories = ["All", "Heritage", "Beach", "Wildlife", "Cultural", "Adventure"];

function Gallery() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeView, setActiveView] = useState("grid"); // grid or map

  const handleCardClick = (place) => {
    setSelectedPlace(place);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const filteredPlaces = activeCategory === "All" 
    ? sriLankanPlaces 
    : sriLankanPlaces.filter(place => place.category === activeCategory);

  const featuredDestinations = sriLankanPlaces.filter(place => place.featured);

  // Determine if the selected place has full details to show
  const hasFullDetails = selectedPlace && selectedPlace.fullDetails;

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <div className="gallery-hero">
        <div className="hero-content">
          <h1>Explore the Beauty of Sri Lanka</h1>
          <p>Discover incredible destinations that will take your breath away</p>
          <div className="hero-search">
            <input type="text" placeholder="Search destinations..." className="search-input" />
            <button className="search-btn">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Featured Destinations */}
      <section className="featured-section">
        <Container>
          <div className="section-header">
            <h2>Featured Destinations</h2>
            <p>Handpicked places that you shouldn't miss</p>
          </div>
          
          <Row className="featured-row">
            {featuredDestinations.slice(0, 3).map((place) => (
              <Col lg={4} md={6} sm={12} key={place.id} className="featured-col">
                <div className="featured-card" onClick={() => handleCardClick(place)}>
                  <div className="featured-img-container">
                    <img src={place.image} alt={place.name} />
                    <div className="featured-badge">{place.category}</div>
                  </div>
                  <div className="featured-content">
                    <h3>{place.name}</h3>
                    <div className="featured-info">
                      <span>
                        <i className="fas fa-map-marker-alt"></i> {place.location}
                      </span>
                      <span className="rating">
                        <i className="fas fa-star"></i> {place.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Main Gallery Section */}
      <section className="main-gallery">
        <Container>
          <div className="gallery-header">
            <div className="filter-categories">
              <h2>Explore Destinations</h2>
              <div className="category-tabs">
                {categories.map((category) => (
                  <button 
                    key={category} 
                    className={`category-tab ${activeCategory === category ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <div className="view-toggles">
              <button 
                className={`view-toggle ${activeView === 'grid' ? 'active' : ''}`}
                onClick={() => setActiveView('grid')}
              >
                <i className="fas fa-th-large"></i>
              </button>
              <button 
                className={`view-toggle ${activeView === 'map' ? 'active' : ''}`}
                onClick={() => setActiveView('map')}
              >
                <i className="fas fa-map-marked-alt"></i>
              </button>
            </div>
          </div>
          
          <div className={`gallery-content ${activeView}`}>
            {activeView === 'grid' ? (
              <Row xs={1} md={2} lg={3} className="g-4">
                {filteredPlaces.map((place) => (
                  <Col key={place.id}>
                    <Card 
                      className="destination-card" 
                      onClick={() => handleCardClick(place)}
                    >
                      <div className="card-img-wrapper">
                        <Card.Img variant="top" src={place.image} />
                        <Badge className="category-badge">{place.category}</Badge>
                        <div className="card-rating">
                          <i className="fas fa-star"></i> {place.rating || "4.5"}
                        </div>
                      </div>
                      <Card.Body>
                        <Card.Title>{place.name}</Card.Title>
                        <div className="card-location">
                          <i className="fas fa-map-marker-alt location-icon"></i>
                          {place.location}
                        </div>
                        <div className="card-action">
                          <span className="explore-btn">
                            Explore <i className="fas fa-arrow-right"></i>
                          </span>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            ) : (
              <div className="map-view">
                <div className="map-placeholder">
                  <i className="fas fa-map-marked-alt"></i>
                  <p>Interactive map coming soon!</p>
                  <p>View our destinations by location with an interactive experience.</p>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Tourism Info Section */}
      <section className="tourism-info">
        <Container>
          <Row>
            <Col md={4}>
              <div className="info-card">
                <div className="info-icon">
                  <i className="fas fa-umbrella-beach"></i>
                </div>
                <h3>Perfect Weather</h3>
                <p>Sri Lanka offers tropical climate year-round with average temperatures of 28°C (82°F).</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="info-card">
                <div className="info-icon">
                  <i className="fas fa-utensils"></i>
                </div>
                <h3>Exquisite Cuisine</h3>
                <p>Experience the rich flavors of authentic Sri Lankan cuisine and spices.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="info-card">
                <div className="info-icon">
                  <i className="fas fa-hands-helping"></i>
                </div>
                <h3>Local Guides</h3>
                <p>Our experienced local guides will ensure you have an authentic experience.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Enhanced Modal for destination details */}
      <Modal 
        show={showModal} 
        onHide={handleCloseModal} 
        size="lg" 
        centered
        className="destination-modal"
        dialogClassName={hasFullDetails ? "modal-90w full-details-modal" : "modal-90w"}
      >
        {selectedPlace && (
          <>
            <Modal.Header closeButton>
              <Modal.Title className="modal-title">
                <i className="fas fa-compass modal-icon"></i>
                {selectedPlace.name}
                {selectedPlace.fullDetails && (
                  <span className="subtitle-text">{selectedPlace.fullDetails.subtitle}</span>
                )}
              </Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
              {!hasFullDetails ? (
                // Standard modal content for places without full details
                <>
                  <div className="modal-image-container">
                    <img 
                      src={selectedPlace.image} 
                      alt={selectedPlace.name} 
                      className="modal-main-image"
                    />
                    <div className="image-overlay">
                      <Badge className="modal-category">{selectedPlace.category}</Badge>
                      <span className="modal-rating">
                        <i className="fas fa-star"></i> {selectedPlace.rating || "4.5"}
                      </span>
                    </div>
                  </div>
                  
                  <div className="modal-details">
                    <div className="detail-section location-section">
                      <h4>
                        <i className="fas fa-map-marker-alt location-icon"></i>
                        Location
                      </h4>
                      <p>{selectedPlace.location}</p>
                    </div>
                    
                    <div className="detail-section description-section">
                      <h4>
                        <i className="fas fa-info-circle"></i>
                        About
                      </h4>
                      <p className="modal-description">{selectedPlace.description}</p>
                    </div>
                    
                    <div className="detail-section highlights-section">
                      <h4>
                        <i className="fas fa-check-circle"></i>
                        Highlights
                      </h4>
                      <ul className="highlights-list">
                        <li>UNESCO World Heritage Site</li>
                        <li>Stunning panoramic views</li>
                        <li>Rich cultural history</li>
                        <li>Unique natural formations</li>
                      </ul>
                    </div>
                  </div>
                </>
              ) : (
                // Enhanced content for places with full details (like Galle Fort)
                <Tab.Container id="details-tabs" defaultActiveKey="overview">
                  <Nav variant="tabs" className="custom-tabs">
                    <Nav.Item>
                      <Nav.Link eventKey="overview">Overview</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="attractions">Attractions</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="activities">Activities</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="practical">Practical Info</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  
                  <Tab.Content className="tab-content">
                    {/* Overview Tab */}
                    <Tab.Pane eventKey="overview">
                      <div className="modal-image-container">
                        <img 
                          src={selectedPlace.image} 
                          alt={selectedPlace.name} 
                          className="modal-main-image"
                        />
                        <div className="image-overlay">
                          <Badge className="modal-category">{selectedPlace.category}</Badge>
                          <span className="modal-rating">
                            <i className="fas fa-star"></i> {selectedPlace.rating}
                          </span>
                        </div>
                      </div>
                      
                      <div className="modal-details">
                        <div className="detail-section location-section">
                          <h4>
                            <i className="fas fa-map-marker-alt location-icon"></i>
                            Location
                          </h4>
                          <p className="full-detail-text">{selectedPlace.fullDetails.locationDetails}</p>
                        </div>
                        
                        <div className="detail-section description-section">
                          <h4>
                            <i className="fas fa-info-circle"></i>
                            About {selectedPlace.name}
                          </h4>
                          <div className="full-detail-text">
                            {selectedPlace.fullDetails.fullDescription.split('\n\n').map((paragraph, idx) => (
                              <p key={idx}>{paragraph}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    
                    {/* Attractions Tab */}
                    <Tab.Pane eventKey="attractions">
                      <h3 className="tab-title">Top Attractions in {selectedPlace.name}</h3>
                      <div className="attractions-list">
                        {selectedPlace.fullDetails.attractions.map((attraction, idx) => (
                          <div key={idx} className="attraction-item">
                            <Row>
                              <Col md={5}>
                                <div className="attraction-img-container">
                                  <img src={attraction.image} alt={attraction.name} />
                                </div>
                              </Col>
                              <Col md={7}>
                                <div className="attraction-details">
                                  <h4>{idx + 1}. {attraction.name}</h4>
                                  <p>{attraction.description}</p>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        ))}
                      </div>
                    </Tab.Pane>
                    
                    {/* Activities Tab */}
                    <Tab.Pane eventKey="activities">
                      <h3 className="tab-title">Things to Do in {selectedPlace.name}</h3>
                      <div className="activities-container">
                        <Row>
                          <Col lg={6}>
                            <div className="activities-list">
                              {selectedPlace.fullDetails.activities.map((activity, idx) => (
                                <div key={idx} className="activity-item">
                                  <i className="fas fa-check-circle activity-icon"></i>
                                  <div className="activity-text">
                                    <strong>{activity.split(':')[0]}:</strong> {activity.split(':')[1]}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="activities-image">
                              <img 
                                src="../../../assets/photos/destination/sigiriyaactivity.jpg" 
                                alt="Activities in Galle Fort"
                                className="img-fluid rounded"
                              />
                              <div className="image-caption">
                                <i className="fas fa-camera"></i> Experience the charm of {selectedPlace.name}
                              </div>
                            </div>
                          </Col>
                        </Row>
                        
                        <div className="conclusion-section">
                          <h4><i className="fas fa-heart"></i> Why Visit {selectedPlace.name}</h4>
                          <p>{selectedPlace.fullDetails.conclusion}</p>
                        </div>
                      </div>
                    </Tab.Pane>
                    
                    {/* Practical Info Tab */}
                    <Tab.Pane eventKey="practical">
                      <h3 className="tab-title">Practical Information</h3>
                      <div className="practical-info">
                        <div className="info-section">
                          <h4><i className="fas fa-bed"></i> Accommodation</h4>
                          <p>{selectedPlace.fullDetails.accommodation}</p>
                        </div>
                        
                        <div className="info-section">
                          <h4><i className="fas fa-route"></i> How to Get There</h4>
                          <div className="transportation-options">
                            <div className="transport-option">
                              <i className="fas fa-car transport-icon"></i>
                              <div>
                                <h5>By Car</h5>
                                <p>2-3 hour drive from Colombo along the scenic Southern Expressway.</p>
                              </div>
                            </div>
                            <div className="transport-option">
                              <i className="fas fa-train transport-icon"></i>
                              <div>
                                <h5>By Train</h5>
                                <p>The coastal train from Colombo to Galle offers beautiful ocean views.</p>
                              </div>
                            </div>
                            <div className="transport-option">
                              <i className="fas fa-bus transport-icon"></i>
                              <div>
                                <h5>By Bus</h5>
                                <p>Regular buses operate between Colombo and Galle throughout the day.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="info-section">
                          <h4><i className="fas fa-clock"></i> Best Time to Visit</h4>
                          <p>The best time to visit Galle Fort is from December to April during the dry season when the weather is pleasant and ideal for exploring the fort. Early morning or late afternoon visits are recommended to avoid the midday heat.</p>
                        </div>
                        
                        <div className="info-section">
                          <h4><i className="fas fa-ticket-alt"></i> Entry Fees</h4>
                          <p>Entry to Galle Fort is free, but some attractions within the fort may charge an entrance fee.</p>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              )}
              
              {/* <div className="booking-section">
                <div className="plan-visit">
                  <h4>Plan Your Visit</h4>
                  <Button variant="primary" className="booking-btn">
                    <i className="fas fa-concierge-bell"></i> Book Tour Guide
                  </Button>
                </div>
              </div> */}
            </Modal.Body>
            
            <Modal.Footer>
              <div className="modal-actions">
              <Button 
  variant="outline-primary" 
  onClick={handleCloseModal} 
  className="action-btn rounded-pill px-4 py-2 shadow-sm border-2 hover:bg-blue-50 transition-all"
>
  <i className="fas fa-times-circle me-2"></i> Close
</Button>
              </div>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
}

export default Gallery;
