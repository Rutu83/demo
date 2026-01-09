// Products data
export const products = [
    {
        id: 'fixed-speed',
        name: 'Fixed Speed Screw Compressor',
        description: 'Reliable and efficient fixed speed air compressors for continuous industrial applications.',
        image: '/images/products/fixed-speed.jpg',
        category: 'oil-injected',
    },
    {
        id: 'variable-speed',
        name: 'Variable Speed Compressor',
        description: 'Energy-saving VSD compressors that adjust speed to match air demand.',
        image: '/images/products/variable-speed.jpg',
        category: 'oil-injected',
    },
    {
        id: 'oil-free',
        name: 'Oil-Free Screw Compressor',
        description: 'Clean, oil-free compressed air for sensitive applications.',
        image: '/images/products/oil-free.jpg',
        category: 'oil-free',
    },
    {
        id: 'two-stage',
        name: 'Two-Stage Compressor',
        description: 'High-efficiency two-stage compression for superior performance.',
        image: '/images/products/two-stage.jpg',
        category: 'oil-injected',
    },
    {
        id: 'low-pressure',
        name: 'Low Pressure Compressor',
        description: 'Optimized for low-pressure applications with maximum efficiency.',
        image: '/images/products/low-pressure.jpg',
        category: 'oil-injected',
    },
    {
        id: 'diesel-portable',
        name: 'Diesel Portable Compressor',
        description: 'Mobile diesel-powered compressors for outdoor and remote locations.',
        image: '/images/products/diesel-portable.jpg',
        category: 'portable',
    },
    {
        id: 'centrifugal',
        name: 'Centrifugal Compressor',
        description: 'High-volume centrifugal compressors for large-scale operations.',
        image: '/images/products/centrifugal.jpg',
        category: 'oil-free',
    },
    {
        id: 'integrated',
        name: 'Integrated Compressor',
        description: 'All-in-one solution with compressor, dryer, and tank integrated.',
        image: '/images/products/integrated.jpg',
        category: 'oil-injected',
    },
    {
        id: 'diaphragm',
        name: 'Diaphragm Compressor',
        description: 'Hermetically sealed compression for ultra-pure gas applications.',
        image: '/images/products/diaphragm.jpg',
        category: 'specialty',
    },
];

// Product categories
export const productCategories = [
    { id: 'oil-injected', name: 'Oil-Injected Screw', icon: '⚙️' },
    { id: 'oil-free', name: 'Oil-Free', icon: '💨' },
    { id: 'portable', name: 'Portable Air Compressor', icon: '🚛' },
    { id: 'specialty', name: 'Specialty Compressors', icon: '🔬' },
];

// Benefits/Why Choose Us
export const benefits = [
    { icon: '🏭', stat: '15,000', title: 'm² Production Workshop', description: 'State-of-the-art manufacturing facility' },
    { icon: '✅', stat: 'ISO', title: '9001:2000 Certification', description: 'International quality standards' },
    { icon: '🔧', stat: '4', title: 'Air Compressor Production Lines', description: 'Dedicated production capacity' },
    { icon: '📞', stat: '24/7', title: 'Engineer After-Sales Service', description: 'Round-the-clock technical support' },
    { icon: '💰', stat: '100%', title: 'Competitive Price & Quality', description: 'Best value for your investment' },
    { icon: '🌍', stat: '20+', title: 'Years Export Experience', description: 'Trusted by clients worldwide' },
    { icon: '🚀', stat: 'New', title: 'Continuous Development', description: 'Innovation-driven product updates' },
];

// Applications
export const applications = [
    { id: 1, title: 'Manufacturing', image: '/images/applications/manufacturing.jpg' },
    { id: 2, title: 'Construction', image: '/images/applications/construction.jpg' },
    { id: 3, title: 'Mining', image: '/images/applications/mining.jpg' },
    { id: 4, title: 'Pharmaceutical', image: '/images/applications/pharmaceutical.jpg' },
    { id: 5, title: 'Food & Beverage', image: '/images/applications/food.jpg' },
    { id: 6, title: 'Automotive', image: '/images/applications/automotive.jpg' },
    { id: 7, title: 'Textile', image: '/images/applications/textile.jpg' },
    { id: 8, title: 'Electronics', image: '/images/applications/electronics.jpg' },
];

// Testimonials
export const testimonials = [
    {
        id: 1,
        text: 'Sollant air compressors have been running flawlessly in our factory for over 5 years. The energy efficiency and reliability are exceptional. Their after-sales service is prompt and professional.',
        author: 'Michael Johnson',
        role: 'Factory Manager, USA',
        image: '/images/testimonials/client1.jpg',
    },
    {
        id: 2,
        text: 'We switched to Sollant compressors last year and have seen a 30% reduction in energy costs. The quality is outstanding and the technical support team is always available when needed.',
        author: 'Ahmed Hassan',
        role: 'Operations Director, UAE',
        image: '/images/testimonials/client2.jpg',
    },
    {
        id: 3,
        text: 'As a distributor, I have been working with Sollant for 10 years. Their products are reliable, competitively priced, and the partnership has been excellent for our business growth.',
        author: 'Carlos Rodriguez',
        role: 'CEO, Spain',
        image: '/images/testimonials/client3.jpg',
    },
    {
        id: 4,
        text: 'The oil-free compressors from Sollant are perfect for our pharmaceutical production. Zero contamination risk and consistent performance. Highly recommended for clean room applications.',
        author: 'Dr. Sarah Chen',
        role: 'Production Head, Singapore',
        image: '/images/testimonials/client4.jpg',
    },
];

// Blog posts
export const blogPosts = [
    {
        id: 1,
        title: 'How to Choose the Right Air Compressor for Your Business',
        excerpt: 'Learn the key factors to consider when selecting an industrial air compressor for your specific needs.',
        image: '/images/blog/post1.jpg',
        date: '2024-01-15',
        slug: 'choose-right-air-compressor',
    },
    {
        id: 2,
        title: 'Variable Speed vs Fixed Speed: Which is Better?',
        excerpt: 'Compare VSD and fixed speed compressors to understand which one offers better value for your application.',
        image: '/images/blog/post2.jpg',
        date: '2024-01-10',
        slug: 'vsd-vs-fixed-speed',
    },
    {
        id: 3,
        title: 'Complete Guide to Air Compressor Maintenance',
        excerpt: 'Essential maintenance tips to keep your air compressor running efficiently and extend its lifespan.',
        image: '/images/blog/post3.jpg',
        date: '2024-01-05',
        slug: 'air-compressor-maintenance-guide',
    },
];

// FAQs
export const faqs = [
    {
        question: 'Where is your factory located? Do you have agents in my country?',
        answer: 'Our factory is located in Shanghai, China. We have established partnerships and agents in over 50 countries worldwide including USA, Europe, Middle East, Southeast Asia, Africa, and South America. Contact us to find your local representative.',
    },
    {
        question: 'What is an air compressor and when should I use it?',
        answer: 'An air compressor is a device that converts power into potential energy stored in pressurized air. They are used in various industries including manufacturing, construction, mining, automotive, and more for powering pneumatic tools, spray painting, sandblasting, and general plant air supply.',
    },
    {
        question: 'How long is the delivery time and what is the minimum order quantity?',
        answer: 'Standard delivery time is 15-30 days depending on the product and quantity. For stock items, we can ship within 7 days. Minimum order quantity is typically 1 unit, but we offer better pricing for bulk orders.',
    },
    {
        question: 'What after-sales services do you provide?',
        answer: 'We provide comprehensive after-sales support including 24/7 technical consultation, spare parts supply, installation guidance, operator training, and on-site service for major maintenance. Our warranty covers 1-2 years depending on the product.',
    },
    {
        question: 'Do you offer OEM and customization services?',
        answer: 'Yes, we offer full OEM services including custom branding, color schemes, and technical specifications. We can customize products according to your specific requirements including voltage, pressure, and flow rate specifications.',
    },
    {
        question: 'How should I maintain my air compressor?',
        answer: 'Regular maintenance includes daily checks of oil level and air filters, weekly drainage of condensate, monthly filter cleaning/replacement, and annual professional servicing. We provide detailed maintenance schedules with every purchase.',
    },
    {
        question: 'How do I choose the right size compressor for my needs?',
        answer: 'Consider your total air demand (CFM), required pressure (PSI/bar), duty cycle, and future expansion plans. Our technical team can help you calculate the optimal size based on your specific application requirements.',
    },
    {
        question: 'What is your quality control process?',
        answer: 'We follow ISO 9001:2000 quality management system. Every compressor undergoes rigorous testing including performance testing, vibration testing, noise level measurement, and 48-hour continuous running tests before shipment.',
    },
    {
        question: 'What are the payment terms and shipping options?',
        answer: 'We accept T/T, L/C, and Western Union. Standard payment is 30% deposit and 70% before shipment. Shipping options include FOB Shanghai, CIF to your port, or door-to-door delivery via sea, air, or rail freight.',
    },
    {
        question: 'What is the operating temperature range of your compressors?',
        answer: 'Our standard compressors operate in ambient temperatures from -5°C to 45°C (23°F to 113°F). For extreme conditions, we offer special versions designed for tropical or cold climate applications.',
    },
];

// Team members
export const teamMembers = [
    {
        name: 'David Zhang',
        position: 'General Manager',
        email: 'david@sollant.com',
        phone: '+86-15800679965',
    },
    {
        name: 'Lisa Wang',
        position: 'Sales Director',
        email: 'lisa@sollant.com',
        phone: '+86-15800679966',
    },
    {
        name: 'John Chen',
        position: 'Technical Director',
        email: 'john@sollant.com',
        phone: '+86-15800679967',
    },
    {
        name: 'Emily Liu',
        position: 'Customer Service Manager',
        email: 'emily@sollant.com',
        phone: '+86-15800679968',
    },
];

// Quality control measures
export const qualityMeasures = [
    'Vibration Test',
    'Pressure Dew Point Detection',
    'Temperature And Humidity Detection',
    'Balance Test',
    'Exhaust Pressure Test',
    'Measure Exhaust Flow',
    'Motor Type Test',
    'Oil Content Detection',
    'Inlet Flow Measurement',
    'Pipeline Flow Measurement',
    'Specific Power Measurement',
    'Air End Rotor Profile Measurement',
    'Dynamic Balance Test',
    'Total Power Measurement',
    'Shock Absorber Testing',
    'Voltage And Current Detection',
];

// Core values
export const coreValues = [
    {
        title: 'Passion and Innovation',
        description: 'We continuously invest in R&D to develop cutting-edge air compressor technology that meets evolving industry needs.',
    },
    {
        title: 'Customer Focus',
        description: 'Our customers success is our success. We provide personalized solutions and exceptional support to help businesses thrive.',
    },
    {
        title: 'People Centredness',
        description: 'We value our employees and partners, fostering a collaborative environment that promotes growth and excellence.',
    },
    {
        title: 'Integrity',
        description: 'We conduct business with honesty and transparency, building long-lasting relationships based on trust and mutual respect.',
    },
];

// Production process steps
export const productionSteps = [
    {
        step: 1,
        title: 'Purchase Accessories',
        description: 'Source high-quality components from certified suppliers worldwide.',
    },
    {
        step: 2,
        title: 'Re-inspect Accessories',
        description: 'Thorough quality inspection of all incoming materials and parts.',
    },
    {
        step: 3,
        title: 'Assembly Equipment',
        description: 'Precision assembly by skilled technicians following strict protocols.',
    },
    {
        step: 4,
        title: 'Testing Before Shipment',
        description: 'Comprehensive performance and safety testing of every unit.',
    },
    {
        step: 5,
        title: 'Packaging',
        description: 'Professional packaging to ensure safe transportation.',
    },
    {
        step: 6,
        title: 'Delivery and Shipment',
        description: 'Reliable logistics partners for timely worldwide delivery.',
    },
];

// Countries list for form
export const countries = [
    'United States',
    'United Kingdom',
    'Canada',
    'Australia',
    'Germany',
    'France',
    'Italy',
    'Spain',
    'Brazil',
    'Mexico',
    'India',
    'China',
    'Japan',
    'South Korea',
    'Singapore',
    'Malaysia',
    'Indonesia',
    'Thailand',
    'Vietnam',
    'Philippines',
    'UAE',
    'Saudi Arabia',
    'South Africa',
    'Nigeria',
    'Egypt',
    'Russia',
    'Turkey',
    'Poland',
    'Netherlands',
    'Belgium',
    'Other',
];
