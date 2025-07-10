import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // NavigationBar
      "navbar.explore": "Explore",
      "navbar.weather": "Weather", 
      "navbar.events": "Events",
      "navbar.gallery": "Gallery",
      "navbar.liveCam": "Live Cam",
      
      // SpinningGlobe
      "globe.explore": "✨ EXPLORE",
      "globe.title": "Ruhpolding",
      "globe.subtitle": "Experience", 
      "globe.instruction": "Discover the Alps • Choose your adventure",
      "globe.location": "Ruhpolding, Bavaria",
      "globe.locationSubtitle": "Alpine Paradise",
      "globe.featuredToday": "⭐ Featured Today",
      "globe.latestNews": "📢 Latest News",
      "globe.currentTime": "Current Time",
      "globe.weather": "Weather",
      
      // Globe Menu Options
      "menu.activities": "Available Activities",
      "menu.activitiesDesc": "Explore mountain hiking, alpine lakes, and traditional Bavarian culture",
      "menu.stories": "Local Stories", 
      "menu.storiesDesc": "Discover the rich history and legends of Ruhpolding",
      "menu.video": "Discover Ruhpolding in Motion",
      "menu.videoDesc": "Watch our immersive video journey through the region",
      "menu.accommodation": "Find Accommodation & Services",
      "menu.accommodationDesc": "Hotels, restaurants, and additional services",
      "menu.contact": "Contact Us",
      "menu.contactDesc": "Get in touch for personalized recommendations",
      
      // Weather conditions
      "weather.partlyCloudy": "Partly Cloudy",
      "weather.sunny": "Sunny",
      "weather.lightSnow": "Light Snow", 
      "weather.clearSky": "Clear Sky",
      "weather.humidity": "Humidity",
      "weather.wind": "Wind",
      
      // Featured experiences
      "featured.alpineWinterHiking": "Alpine Winter Hiking",
      "featured.alpineWinterHikingDesc": "Experience magical snow-covered trails with expert local guides",
      "featured.springFestival": "Spring Festival 2025",
      "featured.springFestivalDesc": "Traditional Bavarian celebration - March 15-17",
      "featured.earlyBird": "Early Bird Special", 
      "featured.earlyBirdDesc": "Save 20% on guided tours booked this month",
      
      // News badges
      "news.new": "NEW",
      "news.offer": "OFFER",
      
      // Cuisine Page
      "cuisine.hero.title": "Traditional Bavarian Cuisine",
      "cuisine.hero.description": "Experience the authentic flavors of Bavaria through time-honored recipes, hearty dishes, and warm Alpine hospitality that has nourished generations.",
      "cuisine.hero.stats.recipes": "Traditional Recipes",
      "cuisine.hero.stats.restaurants": "Local Restaurants",
      "cuisine.hero.stats.tradition": "Years of Tradition",

      "cuisine.about.title": "Café Chiemgau - A Culinary Tradition",
      "cuisine.about.paragraph1": "Located in the heart of Ruhpolding, Café Chiemgau has been serving authentic Bavarian cuisine since 1952. Our family-run establishment combines traditional Alpine recipes with warm hospitality, creating an unforgettable dining experience that celebrates the rich culinary heritage of the Chiemgau region.",
      "cuisine.about.paragraph2": "From our famous homemade Apfelstrudel to hearty Schweinshaxe, every dish at Café Chiemgau tells the story of Bavaria. Our chefs use only the finest local ingredients, sourced from Alpine farms and traditional suppliers who have been part of our community for generations.",

      "cuisine.dishes.title": "Signature Bavarian Dishes",
      "cuisine.dishes.schnitzel.title": "Wiener Schnitzel",
      "cuisine.dishes.schnitzel.description": "Tender veal cutlet, perfectly breaded and golden-fried, served with lingonberry sauce and crispy potatoes.",
      "cuisine.dishes.schnitzel.price": "€18.50",
      "cuisine.dishes.weisswurst.title": "Weisswurst & Brezn",
      "cuisine.dishes.weisswurst.description": "Traditional Bavarian white sausage served with sweet mustard, fresh pretzel, and a wheat beer.",
      "cuisine.dishes.weisswurst.price": "€12.80",
      "cuisine.dishes.schweinshaxe.title": "Schweinshaxe",
      "cuisine.dishes.schweinshaxe.description": "Roasted pork knuckle with crispy skin, served with sauerkraut, potato dumplings, and dark beer gravy.",
      "cuisine.dishes.schweinshaxe.price": "€24.90",

      "cuisine.restaurant.badge": "Est. 1952",
      "cuisine.restaurant.title": "Café Chiemgau Experience",
      "cuisine.restaurant.description": "Step into Café Chiemgau and discover why we've been Ruhpolding's favorite dining destination for over 70 years. Our traditional Bavarian restaurant offers an authentic taste of Alpine culture, where every meal is a celebration of local flavors and warm hospitality.",
      "cuisine.restaurant.features.family": "Family-Owned Since 1952",
      "cuisine.restaurant.features.recipes": "Grandmother's Original Recipes",
      "cuisine.restaurant.features.brewery": "Local Chiemgau Brewery Partner",
      "cuisine.restaurant.features.ingredients": "Alpine Farm-Fresh Ingredients",
      "cuisine.restaurant.menuButton": "📖 Browse Café Chiemgau Menu",

      "cuisine.classes.title": "Café Chiemgau Culinary Workshops",
      "cuisine.classes.schnitzel.title": "Chef Franz's Schnitzel Class",
      "cuisine.classes.schnitzel.description": "Learn the secrets of our famous Wiener Schnitzel with Chef Franz Huber himself.",
      "cuisine.classes.pretzel.title": "Traditional Pretzel Workshop",
      "cuisine.classes.pretzel.description": "Master the art of hand-twisting authentic Bavarian Brezn in our kitchen.",
      "cuisine.classes.pairing.title": "Chiemgau Beer & Food Pairing",
      "cuisine.classes.pairing.description": "Discover perfect pairings with local Chiemgau brewery selections.",
      "cuisine.classes.strudel.title": "Oma's Apfelstrudel Secret",
      "cuisine.classes.strudel.description": "Create our legendary apple strudel using Grandmother Huber's 1952 recipe.",
      
      // Museum Page
      "museum.hero.title": "Heimatmuseum Ruhpolding",
      "museum.hero.description": "Discover the rich heritage and traditions of Bavarian Alpine culture through authentic artifacts and immersive storytelling.",
      "museum.hero.stats.artifacts": "Historic Artifacts",
      "museum.hero.stats.history": "Years of History",
      "museum.hero.stats.rooms": "Exhibition Rooms",

      "museum.about.title": "Cultural Discovery Experience",
      "museum.about.paragraph1": "For lovers seeking more than just a typical holiday, the Heimatmuseum Ruhpolding offers a meaningful and enriching experience. Located within Ruhpolding, this museum is meticulously curated to serve as an educational vehicle into the traditions, stories, and everyday life of Bavarian culture.",
      "museum.about.paragraph2": "Walking through the museum is like stepping through time, offering insight into traditional furniture and rustic garments. Every room tells a different tale of the people, their work, choices and existence in the heart of this charming town.",

      "museum.collections.title": "Museum Collections",
      "museum.collections.furniture.title": "Traditional Furniture",
      "museum.collections.furniture.description": "Authentic 18th-century Bavarian wardrobes and handcrafted wooden artifacts showcasing Alpine craftsmanship.",
      "museum.collections.ruralLife.title": "Rural Life & Traditions",
      "museum.collections.ruralLife.description": "Authentic room settings and household items showcasing how Alpine families lived through the centuries.",
      "museum.collections.crafts.title": "Traditional Crafts",
      "museum.collections.crafts.description": "Tools and techniques used by local craftsmen, from woodworking to traditional Alpine trades.",

      "museum.experience.badge": "Featured Experience",
      "museum.experience.title": "Virtual Museum Tour",
      "museum.experience.description": "Explore our traditional Bavarian wardrobe exhibition in an immersive 3D environment. Walk through an authentic Alpine room setting and discover the craftsmanship behind these historic pieces.",
      "museum.experience.features.room": "Authentic Room Setting",
      "museum.experience.features.objects": "Interactive 3D Objects",
      "museum.experience.features.mobile": "Mobile Compatible",
      "museum.experience.button": "Start Virtual Tour",

      "museum.visit.title": "Plan Your Visit",
      "museum.visit.location.title": "Location",
      "museum.visit.location.description": "Heimatmuseum Ruhpolding\nHistoric Town Center, Bavaria",
      "museum.visit.hours.title": "Hours",
      "museum.visit.hours.description": "Tuesday - Sunday\n9:00 AM - 5:00 PM\nClosed Mondays",
      "museum.visit.admission.title": "Admission",
      "museum.visit.admission.description": "Adults: €8\nStudents: €5\nChildren: Free",
      "museum.visit.info.title": "More Info",
      "museum.visit.info.link": "Official Website",
      
      // Footer
      "footer.tagline": "Discover the authentic heart of the Bavarian Alps, where pristine nature meets rich cultural heritage.",
      "footer.explore": "Explore",
      "footer.experience": "Experience", 
      "footer.visit": "Visit",
      "footer.connect": "Connect",
      "footer.mountainActivities": "Mountain Activities",
      "footer.expertGuides": "Expert Guides",
      "footer.culturalHeritage": "Cultural Heritage",
      "footer.localCuisine": "Local Cuisine",
      "footer.alpineHiking": "Alpine Hiking",
      "footer.crystalLakes": "Crystal Lakes",
      "footer.traditionalCrafts": "Traditional Crafts",
      "footer.seasonalEvents": "Seasonal Events",
      "footer.gettingHere": "Getting Here",
      "footer.whereToStay": "Where to Stay",
      "footer.weatherGuide": "Weather Guide", 
      "footer.safetyTips": "Safety Tips",
      "footer.address": "Ruhpolding Tourist Office",
      "footer.addressLine": "83324 Ruhpolding, Bavaria",
      "footer.hours": "Mon-Fri: 9:00-17:00",
      "footer.weekendHours": "Sat-Sun: 9:00-13:00",
      "footer.newsletter.title": "Stay Connected with Ruhpolding",
      "footer.newsletter.description": "Receive updates about seasonal activities, local events, and exclusive alpine experiences.",
      "footer.newsletter.placeholder": "Enter your email address",
      "footer.newsletter.button": "Subscribe",
      "footer.newsletter.privacy": "We respect your privacy. Unsubscribe at any time.",
      "footer.copyright": "© 2025 Ruhpolding Tourism. All rights reserved.",
      "footer.taglineBottom": "Authentic Bavarian Alps Experience",
      "footer.privacyPolicy": "Privacy Policy",
      "footer.termsOfService": "Terms of Service", 
      "footer.cookiePolicy": "Cookie Policy",
      "footer.accessibility": "Accessibility",
      
      // Menu Book
      "menuBook.cover": "🍽️ SPEISEKARTE",
      "menuBook.subtitle": "Bavarian Menu",
      "menuBook.traditional": "Traditional Alpine Cuisine",
      "menuBook.established": "Est. 1750",
      "menuBook.clickToOpen": "Click to open menu",
      "menuBook.cover_title": "Cover",
      "menuBook.backCover": "Back Cover",
      
      // Menu Categories  
      "menu.traditionalMains": "Traditional Mains",
      "menu.sausagesWursts": "Sausages & Wursts",
      "menu.alpineSpecialties": "Alpine Specialties",
      "menu.beverages": "Beverages",
      "menu.desserts": "Desserts",
      
      // Museum/WardrobeRoom
      "museum.title": "🏠 Bavarian Room",
      "museum.subtitle": "Navigate & explore artifacts",
      "museum.help": "💡 Help",
      "museum.back": "← Back",
      "museum.description": "Traditional Alpine room setting with authentic artifacts.",
      "museum.clickHelp": "Click objects for details • Use help for navigation",
      "museum.loadingRoom": "Loading Room",
      "museum.navigation.drag": "Drag",
      "museum.navigation.dragDesc": "Look around",
      "museum.navigation.scroll": "Scroll", 
      "museum.navigation.scrollDesc": "Zoom in/out",
      "museum.navigation.rightDrag": "Right drag",
      "museum.navigation.rightDragDesc": "Move view",
      "museum.navigation.click": "Click",
      "museum.navigation.clickDesc": "Object details",
      "museum.navigation.tip": "💡 Look for glowing objects to learn their history",
      "museum.navigation.startExploring": "Start Exploring",
      
      // Contact Form
      "contact.title": "📞 Contact Us",
      "contact.name": "Your Name",
      "contact.email": "Your Email", 
      "contact.message": "Your Message",
      "contact.send": "Send Message",
      
      // Activities Page
      "activities.hero.discover": "Discover",
      "activities.hero.ruhpolding": "Ruhpolding",
      "activities.hero.subtitle": "Where Alpine adventure meets Bavarian tradition",
      "activities.hero.description": "Immerse yourself in a world of endless possibilities in the heart of the Bavarian Alps. From challenging mountain peaks to serene lakeshores, every moment here is an invitation to explore, discover, and connect with nature's splendor.",
      "activities.stats.activities": "Activities",
      "activities.stats.daysOfAdventure": "Days of Adventure",
      "activities.stats.peakElevation": "Peak Elevation",
      "activities.scrollIndicator": "Explore Activities",
      "activities.sectionTitle": "Featured Activities",
      "activities.sectionSubtitle": "Choose your adventure from our carefully curated selection of experiences",
      "activities.difficulty": "Difficulty",
      "activities.duration": "Duration",
      "activities.season": "Season",
      "activities.whatToExpect": "What to Expect",
      "activities.discoverMore": "Discover More",
      "activities.comingSoon": "Coming Soon!",
      "activities.addImage": "Add Image",
      "activities.placeInAssets": "Place in /src/assets/",

      // Individual Activities
      "activities.alpineHiking.title": "Alpine Hiking",
      "activities.alpineHiking.description": "Explore breathtaking mountain trails with panoramic views of the Bavarian Alps. From gentle valley walks to challenging summit routes.",
      "activities.alpineHiking.difficulty": "Easy to Expert",
      "activities.alpineHiking.duration": "2-8 hours",
      "activities.alpineHiking.season": "Apr - Oct",
      "activities.alpineHiking.highlights": ["Viewpoints", "Alpine Flora", "Mountain Huts", "Photo Opportunities"],

      "activities.crystalLakes.title": "Crystal Clear Lakes",
      "activities.crystalLakes.description": "Discover pristine alpine lakes perfect for swimming, boating, or peaceful reflection surrounded by mountain peaks.",
      "activities.crystalLakes.difficulty": "Easy",
      "activities.crystalLakes.duration": "1-4 hours",
      "activities.crystalLakes.season": "May - Sep",
      "activities.crystalLakes.highlights": ["Swimming", "Boat Rentals", "Fishing", "Lakeside Cafés"],

      "activities.traditionalCulture.title": "Traditional Bavarian Culture",
      "activities.traditionalCulture.description": "Immerse yourself in authentic Bavarian traditions, from folk festivals to traditional crafts and local cuisine.",
      "activities.traditionalCulture.difficulty": "All Levels",
      "activities.traditionalCulture.duration": "2-6 hours",
      "activities.traditionalCulture.season": "Year-round",
      "activities.traditionalCulture.highlights": ["Folk Festivals", "Traditional Crafts", "Local Cuisine", "Historical Tours"],

      "activities.expertTours.title": "Expert Guided Tours",
      "activities.expertTours.description": "Discover hidden gems and local secrets with our knowledgeable guides who bring the history and culture of Ruhpolding to life through personalized tours.",
      "activities.expertTours.difficulty": "All Levels",
      "activities.expertTours.duration": "2-6 hours",
      "activities.expertTours.season": "Year-round",
      "activities.expertTours.highlights": ["Local Insights", "Historical Landmarks", "Photo Opportunities", "Small Groups"],

      "activities.traditionalCuisine.title": "Traditional Bavarian Cuisine",
      "activities.traditionalCuisine.description": "Savor authentic Alpine flavors through cooking classes, brewery tours, and tastings of regional specialties crafted by local artisans.",
      "activities.traditionalCuisine.difficulty": "All Levels",
      "activities.traditionalCuisine.duration": "2-4 hours",
      "activities.traditionalCuisine.season": "Year-round",
      "activities.traditionalCuisine.highlights": ["Cooking Workshops", "Brewery Visits", "Wine Tastings", "Local Delicacies"],

      "activities.culturalMuseums.title": "Cultural Museums & Heritage",
      "activities.culturalMuseums.description": "Immerse yourself in the region's rich heritage through curated museum visits showcasing traditional crafts, local history, and alpine culture.",
      "activities.culturalMuseums.difficulty": "All Levels",
      "activities.culturalMuseums.duration": "1-3 hours",
      "activities.culturalMuseums.season": "Year-round",
      "activities.culturalMuseums.highlights": ["Historical Exhibits", "Traditional Crafts", "Cultural Artifacts", "Interactive Displays"],

      // Guided Tours Page
      "guidedTours.hero.title": "Expert Guided Tours",
      "guidedTours.hero.description": "Discover hidden gems and local secrets with our knowledgeable guides who bring the history and culture of Ruhpolding to life through personalized tours.",
      "guidedTours.stats.tourRoutes": "Tour Routes",
      "guidedTours.stats.expertGuides": "Expert Guides",
      "guidedTours.stats.averageDuration": "Average Duration",

      // Guided Tours About Section
      "guidedTours.about.title": "Breathe Deep, Walk Slow, Feel Renewed",
      "guidedTours.about.paragraph1": "Trade screen time for mountain time and reconnect with what matters: fresh air, stunning views, and real human connection. Our guided hikes in Ruhpolding take your team through lush forests, alpine meadows, and tranquil valleys against the majestic backdrop of the Bavarian Alps.",
      "guidedTours.about.paragraph2": "Led by knowledgeable local guides, each hike is carefully designed to suit all fitness levels from relaxing nature walks to more challenging summit treks. Along the way, your group will experience quiet moments, shared laughter, and the powerful calm that only nature can offer.",

      // Guided Tours Map Section
      "guidedTours.map.title": "Interactive Tour Route",
      "guidedTours.map.legendTitle": "Tour Stops Legend",
      "guidedTours.map.loadingText": "Loading interactive map...",
      "guidedTours.map.hoverHint": "Hover over the numbered markers to explore each tour stop",
      "guidedTours.map.clickHint": "Click on the numbered markers to explore each tour stop",

      // Tour Stops
      "guidedTours.stops.townCenter.name": "Ruhpolding Town Center",
      "guidedTours.stops.townCenter.description": "Start your journey at the historic market square with traditional Bavarian architecture and local shops.",
      "guidedTours.stops.church.name": "Parish Church St. Georg",
      "guidedTours.stops.church.description": "Visit the beautiful baroque church with its iconic onion dome and stunning mountain backdrop.",
      "guidedTours.stops.cableCar.name": "Rauschberg Cable Car",
      "guidedTours.stops.cableCar.description": "Take the cable car up to breathtaking alpine views over the Chiemgau region.",
      "guidedTours.stops.trail.name": "Maiergschwendt Trail",
      "guidedTours.stops.trail.description": "Hike through pristine alpine meadows with panoramic views of the Bavarian Alps.",
      "guidedTours.stops.lake.name": "Weitsee Lake",
      "guidedTours.stops.lake.description": "Discover this serene mountain lake perfect for reflection and photography.",
      "guidedTours.stops.summit.name": "Unternberg Summit",
      "guidedTours.stops.summit.description": "Reach the summit for spectacular 360-degree views of the surrounding peaks.",

      // Gallery Section
      "guidedTours.gallery.title": "Tour Highlights Gallery",
      "guidedTours.gallery.historic.title": "Historic Architecture",
      "guidedTours.gallery.historic.description": "Discover centuries-old Bavarian buildings and traditional craftsmanship",
      "guidedTours.gallery.alpine.title": "Alpine Landscapes",
      "guidedTours.gallery.alpine.description": "Breathtaking mountain vistas and pristine natural beauty",
      "guidedTours.gallery.cultural.title": "Cultural Heritage",
      "guidedTours.gallery.cultural.description": "Experience authentic Bavarian traditions and local customs",
      "guidedTours.gallery.nature.title": "Nature Trails",
      "guidedTours.gallery.nature.description": "Peaceful walks through pristine forests and meadows",
      "guidedTours.gallery.mountain.title": "Mountain Adventures",
      "guidedTours.gallery.mountain.description": "Explore challenging peaks and scenic hiking routes",
      "guidedTours.gallery.local.title": "Local Experiences",
      "guidedTours.gallery.local.description": "Connect with local communities and traditional ways of life",
      "guidedTours.gallery.scenic.title": "Scenic Viewpoints",
      "guidedTours.gallery.scenic.description": "Capture stunning panoramic views from elevated lookouts",
      "guidedTours.gallery.hidden.title": "Hidden Gems",
      "guidedTours.gallery.hidden.description": "Discover secret spots known only to local guides",

      // Routes Section
      "guidedTours.routes.badge": "Premium Experience",
      "guidedTours.routes.title": "Guided Nature Adventures",
      "guidedTours.routes.description": "These outdoor adventures are more than just a physical activity, they're a reset for the mind and a boost for team morale. Time spent in nature has been shown to relieve stress, improve mood, and foster meaningful conversations, making it the perfect addition to any corporate retreat or wellness itinerary.",
      "guidedTours.routes.features.guides": "Professional Local Guides",
      "guidedTours.routes.features.routes": "Scenic Alpine Routes",
      "guidedTours.routes.features.photos": "Photo Opportunities",
      "guidedTours.routes.features.wildlife": "Wildlife & Flora Discovery",
      "guidedTours.routes.bookButton": "Book Your Adventure",

      // Highlights Section
      "guidedTours.highlights.title": "What Makes Our Tours Special",
      "guidedTours.highlights.smallGroups.title": "Small Groups",
      "guidedTours.highlights.smallGroups.description": "Maximum 8 people per tour for personalized attention and intimate experiences.",
      "guidedTours.highlights.expertise.title": "Expert Knowledge",
      "guidedTours.highlights.expertise.description": "Local guides with deep knowledge of history, culture, and natural heritage.",
      "guidedTours.highlights.allLevels.title": "All Skill Levels",
      "guidedTours.highlights.allLevels.description": "Routes designed for everyone from beginners to experienced hikers.",
      "guidedTours.highlights.hiddenGems.title": "Hidden Gems",
      "guidedTours.highlights.hiddenGems.description": "Access to secret spots and viewpoints known only to locals.",
      
      // Video Page
      "video.title": "🎬 Ruhpolding Video Library",
      "video.subtitle": "Discover our region through immersive video experiences",
      "video.backToGlobe": "Back to Globe",
      "video.views": "views",
      "video.videos": "Videos",
      "video.allVideos": "All Videos",

      // Video Categories
      "video.categories.title": "Categories",
      "video.categories.all": "All Videos",
      "video.categories.nature": "Nature & Landscapes",
      "video.categories.culture": "Culture & Heritage",
      "video.categories.activities": "Activities & Sports",
      "video.categories.seasonal": "Seasonal",
      "video.categories.tours": "Virtual Tours",

      // Video Actions
      "video.actions.watchNow": "Watch Now",
      "video.actions.saveForLater": "Save for Later",
      "video.actions.share": "Share",

      // Featured Video
      "video.featured.title": "Ruhpolding: A Journey Through Time",
      "video.featured.description": "Experience the complete beauty of Ruhpolding from ancient traditions to modern alpine adventures. This comprehensive journey showcases our region's most stunning landscapes, rich cultural heritage, and unforgettable experiences.",
      "video.featured.uploadDate": "2 weeks ago",

      // Video Collection - Nature & Landscapes
      "video.collection.alpineLakes.title": "Alpine Lakes in 4K: Crystal Waters of Bavaria",
      "video.collection.alpineLakes.description": "Dive into the pristine alpine lakes surrounding Ruhpolding",
      "video.collection.alpineLakes.uploadDate": "1 week ago",
      "video.collection.mountainPeaks.title": "Mountain Peaks: Sunrise Over the Alps",
      "video.collection.mountainPeaks.description": "Breathtaking sunrise views from the highest peaks",
      "video.collection.mountainPeaks.uploadDate": "3 days ago",
      "video.collection.waterfalls.title": "Hidden Waterfalls: Secret Gems of Ruhpolding",
      "video.collection.waterfalls.description": "Discover secluded waterfalls off the beaten path",
      "video.collection.waterfalls.uploadDate": "5 days ago",

      // Video Collection - Culture & Heritage
      "video.collection.festivals.title": "Traditional Bavarian Festivals: Living Heritage",
      "video.collection.festivals.description": "Experience authentic Bavarian celebrations and customs",
      "video.collection.festivals.uploadDate": "2 weeks ago",
      "video.collection.woodcarving.title": "Master Craftsmen: Woodcarving Traditions",
      "video.collection.woodcarving.description": "Meet local artisans preserving ancient woodcarving techniques",
      "video.collection.woodcarving.uploadDate": "1 week ago",
      "video.collection.churches.title": "Historic Churches: Sacred Architecture",
      "video.collection.churches.description": "Tour the region's most beautiful historic churches",
      "video.collection.churches.uploadDate": "4 days ago",

      // Video Collection - Activities & Sports
      "video.collection.hiking.title": "Alpine Hiking: Complete Trail Guide",
      "video.collection.hiking.description": "Essential hiking routes for every skill level",
      "video.collection.hiking.uploadDate": "1 month ago",
      "video.collection.winterSports.title": "Winter Sports Paradise: Skiing & More",
      "video.collection.winterSports.description": "Complete guide to winter activities in Ruhpolding",
      "video.collection.winterSports.uploadDate": "3 weeks ago",
      "video.collection.biking.title": "Mountain Biking Adventures",
      "video.collection.biking.description": "Thrilling bike trails through alpine terrain",
      "video.collection.biking.uploadDate": "6 days ago",

      // Video Collection - Seasonal
      "video.collection.spring.title": "Spring Awakening: Flowers & Wildlife",
      "video.collection.spring.description": "See Ruhpolding come alive in springtime",
      "video.collection.spring.uploadDate": "2 months ago",
      "video.collection.autumn.title": "Autumn Colors: Golden Alpine Splendor",
      "video.collection.autumn.description": "Fall foliage in the Bavarian Alps",
      "video.collection.autumn.uploadDate": "4 months ago",
      "video.collection.winter.title": "Winter Wonderland: Snow-Covered Paradise",
      "video.collection.winter.description": "Experience the magic of alpine winter",
      "video.collection.winter.uploadDate": "6 months ago",

      // Video Collection - Virtual Tours
      "video.collection.villageTour.title": "360° Village Tour: Walk Through Ruhpolding",
      "video.collection.villageTour.description": "Interactive virtual walk through our charming village",
      "video.collection.villageTour.uploadDate": "3 weeks ago",
      "video.collection.museum.title": "Museum Virtual Experience",
      "video.collection.museum.description": "Explore our heritage museum from home",
      "video.collection.museum.uploadDate": "1 week ago",
      "video.collection.cableCar.title": "Cable Car Journey: Sky-High Views",
      "video.collection.cableCar.description": "Ride the cable car to spectacular mountain vistas",
      "video.collection.cableCar.uploadDate": "10 days ago",
      
      // Common
      "common.loading": "Loading",
      "common.back": "Back",
      "common.help": "Help", 
      "common.close": "Close",
      "common.loadingTranslations": "Loading translations...",
      "common.startExploring": "Start Exploring"
    }
  },
  de: {
    translation: {
      // NavigationBar
      "navbar.explore": "Entdecken",
      "navbar.weather": "Wetter",
      "navbar.events": "Veranstaltungen", 
      "navbar.gallery": "Galerie",
      "navbar.liveCam": "Live Kamera",
      
      // SpinningGlobe
      "globe.explore": "✨ ENTDECKEN",
      "globe.title": "Ruhpolding", 
      "globe.subtitle": "Erlebnis",
      "globe.instruction": "Entdecke die Alpen • Wähle dein Abenteuer",
      "globe.location": "Ruhpolding, Bayern",
      "globe.locationSubtitle": "Alpenparadies",
      "globe.featuredToday": "⭐ Heute empfohlen",
      "globe.latestNews": "📢 Neueste Nachrichten",
      "globe.currentTime": "Aktuelle Zeit",
      "globe.weather": "Wetter",
      
      // Globe Menu Options
      "menu.activities": "Verfügbare Aktivitäten",
      "menu.activitiesDesc": "Erkunde Bergwanderungen, Alpenseen und traditionelle bayerische Kultur",
      "menu.stories": "Lokale Geschichten",
      "menu.storiesDesc": "Entdecke die reiche Geschichte und Legenden von Ruhpolding", 
      "menu.video": "Ruhpolding in Bewegung entdecken",
      "menu.videoDesc": "Schaue unsere immersive Videoreise durch die Region",
      "menu.accommodation": "Unterkunft & Services finden",
      "menu.accommodationDesc": "Hotels, Restaurants und zusätzliche Dienstleistungen",
      "menu.contact": "Kontakt",
      "menu.contactDesc": "Kontaktiere uns für persönliche Empfehlungen",
      
      // Weather conditions
      "weather.partlyCloudy": "Teilweise bewölkt",
      "weather.sunny": "Sonnig",
      "weather.lightSnow": "Leichter Schnee",
      "weather.clearSky": "Klarer Himmel", 
      "weather.humidity": "Luftfeuchtigkeit",
      "weather.wind": "Wind",
      
      // Featured experiences
      "featured.alpineWinterHiking": "Alpine Winterwanderung",
      "featured.alpineWinterHikingDesc": "Erlebe magische schneebedeckte Pfade mit erfahrenen lokalen Führern",
      "featured.springFestival": "Frühlingsfest 2025",
      "featured.springFestivalDesc": "Traditionelle bayerische Feier - 15.-17. März",
      "featured.earlyBird": "Frühbucher-Angebot",
      "featured.earlyBirdDesc": "Spare 20% bei geführten Touren, die diesen Monat gebucht werden",
      
      // News badges  
      "news.new": "NEU",
      "news.offer": "ANGEBOT",
      
      // Cuisine Page
      "cuisine.hero.title": "Traditionelle Bayerische Küche",
      "cuisine.hero.description": "Erlebe die authentischen Geschmäcker Bayerns durch bewährte Rezepte, herzhafte Gerichte und warme alpine Gastfreundschaft, die Generationen genährt hat.",
      "cuisine.hero.stats.recipes": "Traditionelle Rezepte",
      "cuisine.hero.stats.restaurants": "Lokale Restaurants",
      "cuisine.hero.stats.tradition": "Jahre Tradition",

      "cuisine.about.title": "Café Chiemgau - Eine kulinarische Tradition",
      "cuisine.about.paragraph1": "Im Herzen von Ruhpolding gelegen, serviert das Café Chiemgau seit 1952 authentische bayerische Küche. Unser familiengeführtes Restaurant verbindet traditionelle alpine Rezepte mit warmer Gastfreundschaft und schafft ein unvergessliches kulinarisches Erlebnis, das das reiche kulinarische Erbe der Chiemgau-Region feiert.",
      "cuisine.about.paragraph2": "Von unserem berühmten hausgemachten Apfelstrudel bis zur herzhaften Schweinshaxe erzählt jedes Gericht im Café Chiemgau die Geschichte Bayerns. Unsere Köche verwenden nur die feinsten lokalen Zutaten, bezogen von Alpenhöfen und traditionellen Lieferanten, die seit Generationen Teil unserer Gemeinschaft sind.",

      "cuisine.dishes.title": "Bayerische Spezialitäten",
      "cuisine.dishes.schnitzel.title": "Wiener Schnitzel",
      "cuisine.dishes.schnitzel.description": "Zartes Kalbsschnitzel, perfekt paniert und goldbraun gebraten, serviert mit Preiselbeersauce und knusprigen Kartoffeln.",
      "cuisine.dishes.schnitzel.price": "€18.50",
      "cuisine.dishes.weisswurst.title": "Weisswurst & Brezn",
      "cuisine.dishes.weisswurst.description": "Traditionelle bayerische Weisswurst serviert mit süßem Senf, frischer Brezel und einem Weißbier.",
      "cuisine.dishes.weisswurst.price": "€12.80",
      "cuisine.dishes.schweinshaxe.title": "Schweinshaxe",
      "cuisine.dishes.schweinshaxe.description": "Gebratene Schweinshaxe mit knuspriger Haut, serviert mit Sauerkraut, Kartoffelknödeln und dunkler Biersoße.",
      "cuisine.dishes.schweinshaxe.price": "€24.90",

      "cuisine.restaurant.badge": "Gegr. 1952",
      "cuisine.restaurant.title": "Café Chiemgau Erlebnis",
      "cuisine.restaurant.description": "Besuche das Café Chiemgau und entdecke, warum wir seit über 70 Jahren Ruhpoldings beliebtestes Gasthaus sind. Unser traditionelles bayerisches Restaurant bietet einen authentischen Geschmack der alpinen Kultur, wo jede Mahlzeit eine Feier lokaler Aromen und warmer Gastfreundschaft ist.",
      "cuisine.restaurant.features.family": "Familienbesitz seit 1952",
      "cuisine.restaurant.features.recipes": "Großmutters Original-Rezepte",
      "cuisine.restaurant.features.brewery": "Lokaler Chiemgau Brauerei-Partner",
      "cuisine.restaurant.features.ingredients": "Alpine Zutaten vom Bauernhof",
      "cuisine.restaurant.menuButton": "📖 Café Chiemgau Speisekarte durchblättern",

      "cuisine.classes.title": "Café Chiemgau Kochworkshops",
      "cuisine.classes.schnitzel.title": "Chef Franz's Schnitzel-Kurs",
      "cuisine.classes.schnitzel.description": "Lerne die Geheimnisse unseres berühmten Wiener Schnitzels mit Küchenchef Franz Huber persönlich.",
      "cuisine.classes.pretzel.title": "Traditioneller Brezel-Workshop",
      "cuisine.classes.pretzel.description": "Meistere die Kunst des Handdrehens authentischer bayerischer Brezn in unserer Küche.",
      "cuisine.classes.pairing.title": "Chiemgau Bier & Speisen Pairing",
      "cuisine.classes.pairing.description": "Entdecke perfekte Kombinationen mit lokalen Chiemgau Brauerei-Auswahlen.",
      "cuisine.classes.strudel.title": "Omas Apfelstrudel-Geheimnis",
      "cuisine.classes.strudel.description": "Kreiere unseren legendären Apfelstrudel mit Großmutter Hubers Rezept von 1952.",
      
      // Museum Page
      "museum.hero.title": "Heimatmuseum Ruhpolding",
      "museum.hero.description": "Entdecke das reiche Erbe und die Traditionen der bayerischen Alpenkultur durch authentische Artefakte und immersives Storytelling.",
      "museum.hero.stats.artifacts": "Historische Artefakte",
      "museum.hero.stats.history": "Jahre Geschichte",
      "museum.hero.stats.rooms": "Ausstellungsräume",

      "museum.about.title": "Kulturelle Entdeckungsreise",
      "museum.about.paragraph1": "Für Liebhaber, die mehr als nur einen typischen Urlaub suchen, bietet das Heimatmuseum Ruhpolding ein bedeutungsvolles und bereicherndes Erlebnis. Das Museum befindet sich in Ruhpolding und ist sorgfältig kuratiert, um als Bildungsmedium in die Traditionen, Geschichten und das Alltagsleben der bayerischen Kultur zu dienen.",
      "museum.about.paragraph2": "Ein Gang durch das Museum ist wie eine Reise durch die Zeit und bietet Einblicke in traditionelle Möbel und rustikale Gewänder. Jeder Raum erzählt eine andere Geschichte der Menschen, ihrer Arbeit, Entscheidungen und Existenz im Herzen dieser charmanten Stadt.",

      "museum.collections.title": "Museumssammlungen",
      "museum.collections.furniture.title": "Traditionelle Möbel",
      "museum.collections.furniture.description": "Authentische bayerische Schränke aus dem 18. Jahrhundert und handgefertigte Holzartefakte, die alpine Handwerkskunst zeigen.",
      "museum.collections.ruralLife.title": "Landleben & Traditionen",
      "museum.collections.ruralLife.description": "Authentische Raumausstattungen und Haushaltsartikel zeigen, wie Alpenfamilien durch die Jahrhunderte gelebt haben.",
      "museum.collections.crafts.title": "Traditionelles Handwerk",
      "museum.collections.crafts.description": "Werkzeuge und Techniken lokaler Handwerker, vom Holzarbeiten bis zu traditionellen alpinen Gewerben.",

      "museum.experience.badge": "Besonderes Erlebnis",
      "museum.experience.title": "Virtuelle Museumstour",
      "museum.experience.description": "Erkunde unsere traditionelle bayerische Schrank-Ausstellung in einer immersiven 3D-Umgebung. Gehe durch eine authentische alpine Raumausstattung und entdecke die Handwerkskunst hinter diesen historischen Stücken.",
      "museum.experience.features.room": "Authentische Raumausstattung",
      "museum.experience.features.objects": "Interaktive 3D-Objekte",
      "museum.experience.features.mobile": "Mobilkompatibel",
      "museum.experience.button": "Virtuelle Tour starten",

      "museum.visit.title": "Planen Sie Ihren Besuch",
      "museum.visit.location.title": "Standort",
      "museum.visit.location.description": "Heimatmuseum Ruhpolding\nHistorisches Stadtzentrum, Bayern",
      "museum.visit.hours.title": "Öffnungszeiten",
      "museum.visit.hours.description": "Dienstag - Sonntag\n9:00 - 17:00 Uhr\nMontags geschlossen",
      "museum.visit.admission.title": "Eintritt",
      "museum.visit.admission.description": "Erwachsene: €8\nStudenten: €5\nKinder: Kostenlos",
      "museum.visit.info.title": "Weitere Infos",
      "museum.visit.info.link": "Offizielle Website",
      
      // Footer
      "footer.tagline": "Entdecke das authentische Herz der Bayerischen Alpen, wo unberührte Natur auf reiches kulturelles Erbe trifft.",
      "footer.explore": "Entdecken",
      "footer.experience": "Erleben",
      "footer.visit": "Besuchen", 
      "footer.connect": "Verbinden",
      "footer.mountainActivities": "Bergaktivitäten",
      "footer.expertGuides": "Expertenführer",
      "footer.culturalHeritage": "Kulturelles Erbe",
      "footer.localCuisine": "Lokale Küche",
      "footer.alpineHiking": "Alpinwandern",
      "footer.crystalLakes": "Kristallseen",
      "footer.traditionalCrafts": "Traditionelles Handwerk",
      "footer.seasonalEvents": "Saisonale Veranstaltungen",
      "footer.gettingHere": "Anreise",
      "footer.whereToStay": "Übernachtung",
      "footer.weatherGuide": "Wetterführer",
      "footer.safetyTips": "Sicherheitstipps",
      "footer.address": "Ruhpolding Tourismusbüro",
      "footer.addressLine": "83324 Ruhpolding, Bayern",
      "footer.hours": "Mo-Fr: 9:00-17:00",
      "footer.weekendHours": "Sa-So: 9:00-13:00",
      "footer.newsletter.title": "Bleibe mit Ruhpolding verbunden",
      "footer.newsletter.description": "Erhalte Updates über saisonale Aktivitäten, lokale Veranstaltungen und exklusive Alpenerlebnisse.",
      "footer.newsletter.placeholder": "Gib deine E-Mail-Adresse ein",
      "footer.newsletter.button": "Abonnieren",
      "footer.newsletter.privacy": "Wir respektieren deine Privatsphäre. Jederzeit abbestellbar.",
      "footer.copyright": "© 2025 Ruhpolding Tourismus. Alle Rechte vorbehalten.",
      "footer.taglineBottom": "Authentisches Bayerisches Alpenerlebnis",
      "footer.privacyPolicy": "Datenschutzrichtlinie",
      "footer.termsOfService": "Nutzungsbedingungen",
      "footer.cookiePolicy": "Cookie-Richtlinie", 
      "footer.accessibility": "Barrierefreiheit",
      
      // Menu Book
      "menuBook.cover": "🍽️ SPEISEKARTE",
      "menuBook.subtitle": "Bayerisches Menü",
      "menuBook.traditional": "Traditionelle Alpenküche",
      "menuBook.established": "Gegr. 1750",
      "menuBook.clickToOpen": "Klicken zum Öffnen der Speisekarte",
      "menuBook.cover_title": "Deckblatt",
      "menuBook.backCover": "Rückseite",
      
      // Menu Categories
      "menu.traditionalMains": "Traditionelle Hauptgerichte",
      "menu.sausagesWursts": "Würste & Bratwurst",
      "menu.alpineSpecialties": "Alpine Spezialitäten", 
      "menu.beverages": "Getränke",
      "menu.desserts": "Nachspeisen",
      
      // Museum/WardrobeRoom
      "museum.title": "🏠 Bayerisches Zimmer",
      "museum.subtitle": "Navigieren & Artefakte erkunden",
      "museum.help": "💡 Hilfe",
      "museum.back": "← Zurück",
      "museum.description": "Traditionelle alpine Zimmerausstattung mit authentischen Artefakten.",
      "museum.clickHelp": "Objekte anklicken für Details • Hilfe für Navigation verwenden",
      "museum.loadingRoom": "Raum wird geladen",
      "museum.navigation.drag": "Ziehen",
      "museum.navigation.dragDesc": "Umschauen", 
      "museum.navigation.scroll": "Scrollen",
      "museum.navigation.scrollDesc": "Hinein-/Herauszoomen",
      "museum.navigation.rightDrag": "Rechts ziehen",
      "museum.navigation.rightDragDesc": "Ansicht bewegen",
      "museum.navigation.click": "Klicken",
      "museum.navigation.clickDesc": "Objektdetails",
      "museum.navigation.tip": "💡 Suche nach leuchtenden Objekten, um ihre Geschichte zu erfahren",
      "museum.navigation.startExploring": "Erkunden beginnen",
      
      // Contact Form
      "contact.title": "📞 Kontakt",
      "contact.name": "Ihr Name",
      "contact.email": "Ihre E-Mail",
      "contact.message": "Ihre Nachricht",
      "contact.send": "Nachricht senden",
      
      // Activities Page
      "activities.hero.discover": "Entdecke",
      "activities.hero.ruhpolding": "Ruhpolding",
      "activities.hero.subtitle": "Wo Alpenabenteuer auf bayerische Tradition treffen",
      "activities.hero.description": "Tauche ein in eine Welt endloser Möglichkeiten im Herzen der Bayerischen Alpen. Von herausfordernden Berggipfeln bis zu ruhigen Seeufern ist jeder Moment hier eine Einladung zu erkunden, zu entdecken und sich mit der Pracht der Natur zu verbinden.",
      "activities.stats.activities": "Aktivitäten",
      "activities.stats.daysOfAdventure": "Tage voller Abenteuer",
      "activities.stats.peakElevation": "Gipfelhöhe",
      "activities.scrollIndicator": "Aktivitäten erkunden",
      "activities.sectionTitle": "Empfohlene Aktivitäten",
      "activities.sectionSubtitle": "Wähle dein Abenteuer aus unserer sorgfältig kuratierten Auswahl an Erlebnissen",
      "activities.difficulty": "Schwierigkeit",
      "activities.duration": "Dauer",
      "activities.season": "Saison",
      "activities.whatToExpect": "Was dich erwartet",
      "activities.discoverMore": "Mehr entdecken",
      "activities.comingSoon": "Bald verfügbar!",
      "activities.addImage": "Bild hinzufügen",
      "activities.placeInAssets": "In /src/assets/ platzieren",

      // Individual Activities
      "activities.alpineHiking.title": "Alpinwandern",
      "activities.alpineHiking.description": "Erkunde atemberaubende Bergpfade mit Panoramablick auf die Bayerischen Alpen. Von sanften Talwanderungen bis zu herausfordernden Gipfeltouren.",
      "activities.alpineHiking.difficulty": "Einfach bis Experte",
      "activities.alpineHiking.duration": "2-8 Stunden",
      "activities.alpineHiking.season": "Apr - Okt",
      "activities.alpineHiking.highlights": ["Aussichtspunkte", "Alpenflora", "Berghütten", "Fotomöglichkeiten"],

      "activities.crystalLakes.title": "Kristallklare Seen",
      "activities.crystalLakes.description": "Entdecke unberührte Alpenseen, perfekt zum Schwimmen, Bootfahren oder zur friedlichen Besinnung umgeben von Berggipfeln.",
      "activities.crystalLakes.difficulty": "Einfach",
      "activities.crystalLakes.duration": "1-4 Stunden",
      "activities.crystalLakes.season": "Mai - Sep",
      "activities.crystalLakes.highlights": ["Schwimmen", "Bootverleih", "Angeln", "Seecafés"],

      "activities.traditionalCulture.title": "Traditionelle bayerische Kultur",
      "activities.traditionalCulture.description": "Tauche ein in authentische bayerische Traditionen, von Volksfesten bis zu traditionellen Handwerken und lokaler Gastronomie.",
      "activities.traditionalCulture.difficulty": "Alle Stufen",
      "activities.traditionalCulture.duration": "2-6 Stunden",
      "activities.traditionalCulture.season": "Ganzjährig",
      "activities.traditionalCulture.highlights": ["Volksfeste", "Traditionelles Handwerk", "Lokale Küche", "Historische Touren"],

      "activities.expertTours.title": "Expertengeführte Touren",
      "activities.expertTours.description": "Entdecke versteckte Juwelen und lokale Geheimnisse mit unseren sachkundigen Führern, die die Geschichte und Kultur von Ruhpolding durch personalisierte Touren zum Leben erwecken.",
      "activities.expertTours.difficulty": "Alle Stufen",
      "activities.expertTours.duration": "2-6 Stunden",
      "activities.expertTours.season": "Ganzjährig",
      "activities.expertTours.highlights": ["Lokale Einblicke", "Historische Wahrzeichen", "Fotomöglichkeiten", "Kleine Gruppen"],

      "activities.traditionalCuisine.title": "Traditionelle bayerische Küche",
      "activities.traditionalCuisine.description": "Genieße authentische Alpengeschmäcker durch Kochkurse, Brauereitouren und Verkostungen regionaler Spezialitäten, zubereitet von lokalen Handwerkern.",
      "activities.traditionalCuisine.difficulty": "Alle Stufen",
      "activities.traditionalCuisine.duration": "2-4 Stunden",
      "activities.traditionalCuisine.season": "Ganzjährig",
      "activities.traditionalCuisine.highlights": ["Kochworkshops", "Brauereibesuche", "Weinverkostungen", "Lokale Delikatessen"],

      "activities.culturalMuseums.title": "Kulturmuseen & Erbe",
      "activities.culturalMuseums.description": "Tauche ein in das reiche Erbe der Region durch kuratierte Museumsbesuche, die traditionelles Handwerk, lokale Geschichte und alpine Kultur präsentieren.",
      "activities.culturalMuseums.difficulty": "Alle Stufen",
      "activities.culturalMuseums.duration": "1-3 Stunden",
      "activities.culturalMuseums.season": "Ganzjährig",
      "activities.culturalMuseums.highlights": ["Historische Ausstellungen", "Traditionelles Handwerk", "Kulturartefakte", "Interaktive Displays"],

      // Guided Tours Page
      "guidedTours.hero.title": "Expertengeführte Touren",
      "guidedTours.hero.description": "Entdecke versteckte Juwelen und lokale Geheimnisse mit unseren sachkundigen Führern, die die Geschichte und Kultur von Ruhpolding durch personalisierte Touren zum Leben erwecken.",
      "guidedTours.stats.tourRoutes": "Tourrouten",
      "guidedTours.stats.expertGuides": "Expertenführer",
      "guidedTours.stats.averageDuration": "Durchschnittsdauer",

      // Guided Tours About Section
      "guidedTours.about.title": "Tief atmen, langsam gehen, sich erneuert fühlen",
      "guidedTours.about.paragraph1": "Tausche Bildschirmzeit gegen Bergzeit und verbinde dich wieder mit dem, was zählt: frische Luft, atemberaubende Aussichten und echte menschliche Verbindungen. Unsere geführten Wanderungen in Ruhpolding führen dein Team durch üppige Wälder, Almwiesen und ruhige Täler vor der majestätischen Kulisse der Bayerischen Alpen.",
      "guidedTours.about.paragraph2": "Geleitet von sachkundigen lokalen Führern ist jede Wanderung sorgfältig darauf ausgelegt, allen Fitnessniveaus gerecht zu werden - von entspannenden Naturwanderungen bis hin zu anspruchsvolleren Gipfeltouren. Unterwegs erlebt deine Gruppe ruhige Momente, geteiltes Lachen und die kraftvolle Ruhe, die nur die Natur bieten kann.",

      // Guided Tours Map Section
      "guidedTours.map.title": "Interaktive Tourroute",
      "guidedTours.map.legendTitle": "Tourstopps Legende",
      "guidedTours.map.loadingText": "Interaktive Karte wird geladen...",
      "guidedTours.map.hoverHint": "Fahre mit der Maus über die nummerierten Markierungen, um jeden Tourstopp zu erkunden",
      "guidedTours.map.clickHint": "Klicke auf die nummerierten Markierungen, um jeden Tourstopp zu erkunden",

      // Tour Stops
      "guidedTours.stops.townCenter.name": "Ruhpolding Ortszentrum",
      "guidedTours.stops.townCenter.description": "Beginne deine Reise am historischen Marktplatz mit traditioneller bayerischer Architektur und lokalen Geschäften.",
      "guidedTours.stops.church.name": "Pfarrkirche St. Georg",
      "guidedTours.stops.church.description": "Besuche die wunderschöne Barockkirche mit ihrer ikonischen Zwiebelkuppel und atemberaubender Bergkulisse.",
      "guidedTours.stops.cableCar.name": "Rauschberg Seilbahn",
      "guidedTours.stops.cableCar.description": "Fahre mit der Seilbahn hinauf zu atemberaubenden Alpenblicken über die Chiemgau-Region.",
      "guidedTours.stops.trail.name": "Maiergschwendt Wanderweg",
      "guidedTours.stops.trail.description": "Wandere durch unberührte Almwiesen mit Panoramablick auf die Bayerischen Alpen.",
      "guidedTours.stops.lake.name": "Weitsee",
      "guidedTours.stops.lake.description": "Entdecke diesen ruhigen Bergsee, perfekt für Besinnung und Fotografie.",
      "guidedTours.stops.summit.name": "Unternberg Gipfel",
      "guidedTours.stops.summit.description": "Erreiche den Gipfel für spektakuläre 360-Grad-Blicke auf die umliegenden Gipfel.",

      // Gallery Section
      "guidedTours.gallery.title": "Tour Highlights Galerie",
      "guidedTours.gallery.historic.title": "Historische Architektur",
      "guidedTours.gallery.historic.description": "Entdecke jahrhundertealte bayerische Gebäude und traditionelle Handwerkskunst",
      "guidedTours.gallery.alpine.title": "Alpine Landschaften",
      "guidedTours.gallery.alpine.description": "Atemberaubende Bergpanoramen und unberührte natürliche Schönheit",
      "guidedTours.gallery.cultural.title": "Kulturelles Erbe",
      "guidedTours.gallery.cultural.description": "Erlebe authentische bayerische Traditionen und lokale Bräuche",
      "guidedTours.gallery.nature.title": "Naturwege",
      "guidedTours.gallery.nature.description": "Friedliche Spaziergänge durch unberührte Wälder und Wiesen",
      "guidedTours.gallery.mountain.title": "Bergabenteuer",
      "guidedTours.gallery.mountain.description": "Erkunde herausfordernde Gipfel und malerische Wanderrouten",
      "guidedTours.gallery.local.title": "Lokale Erlebnisse",
      "guidedTours.gallery.local.description": "Verbinde dich mit lokalen Gemeinschaften und traditionellen Lebensweisen",
      "guidedTours.gallery.scenic.title": "Aussichtspunkte",
      "guidedTours.gallery.scenic.description": "Halte atemberaubende Panoramablicke von erhöhten Aussichtspunkten fest",
      "guidedTours.gallery.hidden.title": "Versteckte Juwelen",
      "guidedTours.gallery.hidden.description": "Entdecke geheime Orte, die nur lokale Führer kennen",

      // Routes Section
      "guidedTours.routes.badge": "Premium Erlebnis",
      "guidedTours.routes.title": "Geführte Naturabenteuer",
      "guidedTours.routes.description": "Diese Outdoor-Abenteuer sind mehr als nur körperliche Aktivität - sie sind eine Erholung für den Geist und ein Schub für die Teammoral. Zeit in der Natur hat nachweislich stressabbauende, stimmungsaufhellende Wirkung und fördert bedeutsame Gespräche, was sie zur perfekten Ergänzung für jeden Firmenretreat oder Wellness-Aufenthalt macht.",
      "guidedTours.routes.features.guides": "Professionelle lokale Führer",
      "guidedTours.routes.features.routes": "Malerische Alpenrouten",
      "guidedTours.routes.features.photos": "Fotomöglichkeiten",
      "guidedTours.routes.features.wildlife": "Wildtier- & Floraentdeckung",
      "guidedTours.routes.bookButton": "Buche dein Abenteuer",

      // Highlights Section
      "guidedTours.highlights.title": "Was unsere Touren besonders macht",
      "guidedTours.highlights.smallGroups.title": "Kleine Gruppen",
      "guidedTours.highlights.smallGroups.description": "Maximal 8 Personen pro Tour für persönliche Betreuung und intime Erlebnisse.",
      "guidedTours.highlights.expertise.title": "Expertenwissen",
      "guidedTours.highlights.expertise.description": "Lokale Führer mit tiefem Wissen über Geschichte, Kultur und Naturerbe.",
      "guidedTours.highlights.allLevels.title": "Alle Schwierigkeitsgrade",
      "guidedTours.highlights.allLevels.description": "Routen für jeden - von Anfängern bis zu erfahrenen Wanderern.",
      "guidedTours.highlights.hiddenGems.title": "Versteckte Juwelen",
      "guidedTours.highlights.hiddenGems.description": "Zugang zu geheimen Orten und Aussichtspunkten, die nur Einheimische kennen.",
      
      // Video Page
      "video.title": "🎬 Ruhpolding Video Bibliothek",
      "video.subtitle": "Entdecke unsere Region durch immersive Videoerlebnisse",
      "video.backToGlobe": "Zurück zum Globe",
      "video.views": "Aufrufe",
      "video.videos": "Videos",
      "video.allVideos": "Alle Videos",

      // Video Categories
      "video.categories.title": "Kategorien",
      "video.categories.all": "Alle Videos",
      "video.categories.nature": "Natur & Landschaften",
      "video.categories.culture": "Kultur & Erbe",
      "video.categories.activities": "Aktivitäten & Sport",
      "video.categories.seasonal": "Saisonal",
      "video.categories.tours": "Virtuelle Touren",

      // Video Actions
      "video.actions.watchNow": "Jetzt ansehen",
      "video.actions.saveForLater": "Für später speichern",
      "video.actions.share": "Teilen",

      // Featured Video
      "video.featured.title": "Ruhpolding: Eine Reise durch die Zeit",
      "video.featured.description": "Erlebe die vollständige Schönheit von Ruhpolding von alten Traditionen bis zu modernen Alpenabenteuern. Diese umfassende Reise zeigt unsere Region's atemberaubendste Landschaften, reiches kulturelles Erbe und unvergessliche Erlebnisse.",
      "video.featured.uploadDate": "vor 2 Wochen",

      // Video Collection - Nature & Landscapes
      "video.collection.alpineLakes.title": "Alpenseen in 4K: Kristallklare Gewässer Bayerns",
      "video.collection.alpineLakes.description": "Tauche ein in die unberührten Alpenseen rund um Ruhpolding",
      "video.collection.alpineLakes.uploadDate": "vor 1 Woche",
      "video.collection.mountainPeaks.title": "Berggipfel: Sonnenaufgang über den Alpen",
      "video.collection.mountainPeaks.description": "Atemberaubende Sonnenaufgangsblicke von den höchsten Gipfeln",
      "video.collection.mountainPeaks.uploadDate": "vor 3 Tagen",
      "video.collection.waterfalls.title": "Versteckte Wasserfälle: Geheime Juwelen von Ruhpolding",
      "video.collection.waterfalls.description": "Entdecke abgelegene Wasserfälle abseits der ausgetretenen Pfade",
      "video.collection.waterfalls.uploadDate": "vor 5 Tagen",

      // Video Collection - Culture & Heritage
      "video.collection.festivals.title": "Traditionelle Bayerische Feste: Lebendiges Erbe",
      "video.collection.festivals.description": "Erlebe authentische bayerische Feiern und Bräuche",
      "video.collection.festivals.uploadDate": "vor 2 Wochen",
      "video.collection.woodcarving.title": "Meisterhandwerker: Holzschnitztraditionen",
      "video.collection.woodcarving.description": "Begegne lokalen Handwerkern, die alte Holzschnitztechniken bewahren",
      "video.collection.woodcarving.uploadDate": "vor 1 Woche",
      "video.collection.churches.title": "Historische Kirchen: Sakrale Architektur",
      "video.collection.churches.description": "Besichtige die schönsten historischen Kirchen der Region",
      "video.collection.churches.uploadDate": "vor 4 Tagen",

      // Video Collection - Activities & Sports
      "video.collection.hiking.title": "Alpinwandern: Kompletter Wegführer",
      "video.collection.hiking.description": "Wesentliche Wanderrouten für jedes Können",
      "video.collection.hiking.uploadDate": "vor 1 Monat",
      "video.collection.winterSports.title": "Wintersport-Paradies: Skifahren & mehr",
      "video.collection.winterSports.description": "Kompletter Leitfaden für Winteraktivitäten in Ruhpolding",
      "video.collection.winterSports.uploadDate": "vor 3 Wochen",
      "video.collection.biking.title": "Mountainbike-Abenteuer",
      "video.collection.biking.description": "Aufregende Radwege durch alpines Gelände",
      "video.collection.biking.uploadDate": "vor 6 Tagen",

      // Video Collection - Seasonal
      "video.collection.spring.title": "Frühlingserwachen: Blumen & Wildtiere",
      "video.collection.spring.description": "Siehe Ruhpolding im Frühling zum Leben erwachen",
      "video.collection.spring.uploadDate": "vor 2 Monaten",
      "video.collection.autumn.title": "Herbstfarben: Goldene Alpenpracht",
      "video.collection.autumn.description": "Herbstlaub in den Bayerischen Alpen",
      "video.collection.autumn.uploadDate": "vor 4 Monaten",
      "video.collection.winter.title": "Winterwunderland: Schneebedecktes Paradies",
      "video.collection.winter.description": "Erlebe die Magie des alpinen Winters",
      "video.collection.winter.uploadDate": "vor 6 Monaten",

      // Video Collection - Virtual Tours
      "video.collection.villageTour.title": "360° Dorfrundgang: Spaziergang durch Ruhpolding",
      "video.collection.villageTour.description": "Interaktiver virtueller Rundgang durch unser charmantes Dorf",
      "video.collection.villageTour.uploadDate": "vor 3 Wochen",
      "video.collection.museum.title": "Virtuelles Museumserlebnis",
      "video.collection.museum.description": "Erkunde unser Heimatmuseum von zu Hause aus",
      "video.collection.museum.uploadDate": "vor 1 Woche",
      "video.collection.cableCar.title": "Seilbahnfahrt: Himmelhohe Aussichten",
      "video.collection.cableCar.description": "Fahre mit der Seilbahn zu spektakulären Bergblicken",
      "video.collection.cableCar.uploadDate": "vor 10 Tagen",
      
      // Common
      "common.loading": "Laden",
      "common.back": "Zurück",
      "common.help": "Hilfe",
      "common.close": "Schließen",
      "common.loadingTranslations": "Übersetzungen werden geladen...",
      "common.startExploring": "Erkunden beginnen"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;