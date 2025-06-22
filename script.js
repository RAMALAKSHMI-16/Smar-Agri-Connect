// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Language translation functionality
    const languageSelect = document.getElementById('language-select');
    let currentLanguage = 'en';
    
    // Translation dictionary
    const translations = {
        en: {
            // Header
            "header.title": "Smart Agri Connect",
            "nav.home": "Home",
            "nav.about": "About",
            "nav.services": "Services",
            "nav.marketplace": "Marketplace",
            "nav.contact": "Contact",
            "auth.login": "Login",
            "auth.register": "Register",
            
            // Hero
            "hero.title": "Bridging Farmers And Buyers Seamlessly",
            "hero.subtitle": "Empowering farmers with direct market access, fair prices, and sustainable growth opportunities.",
            "hero.sell_button": "Sell Your Products",
            "hero.buy_button": "Buy Products",
            
            // About
            "about.title": "About Smart Agri Connect",
            "about.text1": "Smart Agri Connect is a platform dedicated to solving the market access problem faced by village farmers. We eliminate middlemen, connect farmers directly with buyers, and ensure fair prices for high-quality produce.",
            "about.text2": "Our mission is to create a sustainable ecosystem where farmers can thrive while consumers get access to fresh, locally grown products.",
            "about.farmers": "Farmers Connected",
            "about.villages": "Villages Served",
            "about.income": "Higher Income for Farmers",
            
            // Services
            "services.title": "Our Services",
            "services.service1.title": "Direct Market Access",
            "services.service1.desc": "Connect directly with buyers without middlemen taking a cut of your profits.",
            "services.service2.title": "Fair Price Assurance",
            "services.service2.desc": "Get fair prices based on real-time market demand and quality of your produce.",
            "services.service3.title": "Market Trends",
            "services.service3.desc": "Access to market trends and demand forecasts to plan your crops better.",
            "services.service4.title": "Mobile Updates",
            "services.service4.desc": "Get order notifications and market updates directly on your mobile.",
            "services.service5.title": "Quality Training",
            "services.service5.desc": "Learn best practices to improve quality and fetch better prices.",
            "services.service6.title": "Micro Loans",
            "services.service6.desc": "Access to small loans for seeds, equipment, and farm improvements.",
            
            // Marketplace
            "marketplace.title": "Marketplace",
            "marketplace.all_products": "Available Products",
            "marketplace.vegetables": "Vegetables",
            "marketplace.fruits": "Fruits",
            "marketplace.grains": "Grains",
            "marketplace.dairy": "Dairy Products",
            "marketplace.spices": "Spices",
            "marketplace.pulses": "Pulses",
            "marketplace.flowers": "Flowers",
            "marketplace.livestock": "Livestock",
            "marketplace.organic": "Organic Produce",
            "marketplace.plants": "Nursery & Plants",
            "marketplace.all_locations": "Location",
            "marketplace.ellamachilli": "Ellamachilli",
            "marketplace.anakapalli": "Anakapalli",
            "marketplace.vizianagaram": "Vizianagaram",
            "marketplace.srikakulam": "Srikakulam",
            
            // Contact
            "contact.title": "Contact Us",
            "contact.address": "123 Agri Tech Park, Bangalore, India - 560001",
            "contact.phone": "+91 9876543210 (Farmers Helpline)",
            "contact.form.name": "Your Name",
            "contact.form.email": "Your Email",
            "contact.form.phone": "Your Phone",
            "contact.form.subject_default": "Select Subject",
            "contact.form.farmer": "I'm a Farmer",
            "contact.form.buyer": "I'm a Buyer",
            "contact.form.partner": "Partnership Inquiry",
            "contact.form.other": "Other",
            "contact.form.message": "Your Message",
            "contact.form.submit": "Send Message",
            
            // Footer
            "footer.title": "Smart Agri Connect",
            "footer.description": "Empowering farmers with direct market access and fair prices since 2020.",
            "footer.links_title": "Quick Links",
            "footer.resources_title": "Resources",
            "footer.guidelines": "Farmer Guidelines",
            "footer.standards": "Quality Standards",
            "footer.calculator": "Pricing Calculator",
            "footer.faq": "FAQs",
            "footer.newsletter": "Newsletter",
            "footer.newsletter_placeholder": "Your Email",
            "footer.subscribe": "Subscribe",
            "footer.copyright": "Smart Agri Connect. All Rights Reserved.",
            "footer.privacy": "Privacy Policy",
            "footer.terms": "Terms of Service"
        },
        te: {
            // Header
            "header.title": "స్మార్ట్ అగ్రి కనెక్ట్",
            "nav.home": "హోమ్",
            "nav.about": "గురించి",
            "nav.services": "సేవలు",
            "nav.marketplace": "మార్కెట్",
            "nav.contact": "సంప్రదించండి",
            "auth.login": "లాగిన్",
            "auth.register": "నమోదు",
            
            // Hero
            "hero.title": "రైతులు మరియు కొనుగోలుదారులను నిర్భంతంగా కలుపుతోంది",
            "hero.subtitle": "రైతులకు ప్రత్యక్ష మార్కెట్ ప్రాప్యత, న్యాయమైన ధరలు మరియు స్థిరమైన వృద్ధి అవకాశాలను అందిస్తోంది.",
            "hero.sell_button": "మీ ఉత్పత్తులను విక్రయించండి",
            "hero.buy_button": "ఉత్పత్తులను కొనండి",
            
            // About
            "about.title
