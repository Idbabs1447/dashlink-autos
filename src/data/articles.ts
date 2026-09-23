export interface Article {
  id: string;
  category: string;
  title: string;
  description: string;
  readTime: string;
  heroImage: string;
  relatedMakes?: string[];
  content: ArticleBlock[];
}

export type ArticleBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'callout'; text: string }
  | { type: 'divider' };

export const articles: Article[] = [
  {
    id: 'tokunbo-buying-checklist',
    category: 'Buying Guide',
    title: '5 Things to Check Before Buying a Tokunbo Car',
    description: 'A practical checklist for anyone considering a foreign-used vehicle in Nigeria.',
    readTime: '4 min read',
    heroImage: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=900',
    relatedMakes: ['Toyota', 'Honda', 'Hyundai'],
    content: [
      {
        type: 'paragraph',
        text: 'Buying a tokunbo (foreign-used) car can be an excellent decision - you often get a well-maintained vehicle with good features at a price that makes sense. But not every deal is as good as it looks. Going in prepared can save you from expensive surprises down the road.',
      },
      {
        type: 'heading',
        text: '1. Check the Exterior for Signs of Accident Repair',
      },
      {
        type: 'paragraph',
        text: 'Walk around the entire vehicle slowly and look for inconsistencies. Panel gaps that are uneven, doors or panels that don\'t sit flush, or paint that looks slightly different in shade or texture from panel to panel can all be signs that the car has been in an accident and repaired.',
      },
      {
        type: 'list',
        items: [
          'Open and close all doors - they should open and close smoothly without resistance',
          'Check the bonnet (hood) and boot lid - both should align evenly with the surrounding bodywork',
          'Look along the length of the car from the front or rear - waves or ripples in the bodywork can indicate filler work',
          'Check the sills (the panels below the doors) for rust or damage from scraping',
        ],
      },
      {
        type: 'heading',
        text: '2. Look Under the Bonnet',
      },
      {
        type: 'paragraph',
        text: 'You don\'t need to be a mechanic to do a basic engine bay check. Open the bonnet and look around calmly. A clean engine bay isn\'t necessarily better - some sellers steam-clean engines to hide problems. Look for more specific signs.',
      },
      {
        type: 'list',
        items: [
          'Check for oil leaks - look for dark, greasy patches on the engine or on the ground under the car',
          'Check the coolant reservoir - the fluid should be clear or green, not brown or rusty',
          'Look at the condition of belts and hoses - cracks or fraying are warning signs',
          'Check the oil dipstick - pull it out, wipe clean, re-insert, and check the level and colour',
        ],
      },
      {
        type: 'heading',
        text: '3. Inspect the Interior Thoroughly',
      },
      {
        type: 'paragraph',
        text: 'The interior tells you a lot about how the previous owner treated the car. Check seats for tears or unusual wear, test all electrical components including the air conditioning, windows, and any infotainment system. A musty smell can indicate water leaks, which can be costly to trace and fix.',
      },
      {
        type: 'heading',
        text: '4. Take It for a Test Drive',
      },
      {
        type: 'paragraph',
        text: 'If at all possible, drive the vehicle before committing. Listen for knocking sounds from the engine, grinding when braking, or vibrations that shouldn\'t be there. Test the brakes at low speed in a safe area. Note how the car handles and whether it pulls to one side.',
      },
      {
        type: 'heading',
        text: '5. Ask About Customs and Clearing Documents',
      },
      {
        type: 'paragraph',
        text: 'For imported vehicles, ask to see the clearing documents. These help confirm that the vehicle entered the country legitimately. A reputable dealer should be able to show you paperwork related to the importation. You don\'t have to be an expert - just ask, and pay attention to how comfortable the seller is with the question.',
      },
      {
        type: 'callout',
        text: 'Bringing your own mechanic to the inspection is always a good idea - any reputable dealer should welcome this.',
      },
    ],
  },
  {
    id: 'freshly-cleared-meaning',
    category: 'Buying Guide',
    title: 'What Does "Freshly Cleared" Mean When Buying a Car?',
    description: 'Understanding what freshly cleared actually means and what to look out for.',
    readTime: '3 min read',
    heroImage: 'https://images.unsplash.com/photo-1574023278969-abb7ab49945c?w=900',
    content: [
      {
        type: 'paragraph',
        text: 'You\'ll frequently see the phrase "freshly cleared" when browsing cars at Nigerian dealerships or on platforms like Cars45 and Jiji. It\'s a common term but one that buyers sometimes misunderstand - either expecting too much or being unnecessarily put off by it.',
      },
      {
        type: 'heading',
        text: 'What It Actually Means',
      },
      {
        type: 'paragraph',
        text: '"Freshly cleared" simply means the vehicle has recently completed the customs clearing process in Nigeria and has not yet undergone any servicing, detailing, or mechanical preparation after arrival. The car came in, paid its duties, cleared the port, and is now available for sale - essentially as it arrived.',
      },
      {
        type: 'heading',
        text: 'What to Expect from a Freshly Cleared Vehicle',
      },
      {
        type: 'paragraph',
        text: 'Vehicles that have been shipped and stored at a port can show cosmetic effects from the journey - dust, light surface marks, or a flat battery from sitting unused. This is entirely normal and not an indication of the car\'s mechanical condition or its history before export.',
      },
      {
        type: 'list',
        items: [
          'The exterior may need a proper wash and polish after clearing',
          'Tyres may have low pressure from sitting during transit',
          'The battery may need charging or replacing if the vehicle sat for a while',
          'The interior may need cleaning - this is routine pre-sale preparation',
        ],
      },
      {
        type: 'heading',
        text: 'It\'s Not a Negative Term',
      },
      {
        type: 'paragraph',
        text: 'Being "freshly cleared" is not a warning sign - it just sets expectations. It tells you the vehicle hasn\'t yet been prepared for sale. Some buyers actually prefer this, as it means they can inspect the car before any cosmetic work has been done.',
      },
      {
        type: 'heading',
        text: 'Questions to Ask the Dealer',
      },
      {
        type: 'paragraph',
        text: 'When a car is described as freshly cleared, it\'s reasonable to ask: What preparation has been or will be done before delivery? Will any servicing be carried out? Has the vehicle been inspected mechanically since clearing? A good dealer will have clear answers.',
      },
      {
        type: 'callout',
        text: 'Ask to see the clearing documents and confirm the vehicle\'s entry date.',
      },
    ],
  },
  {
    id: 'inspect-foreign-used-car',
    category: 'Inspection',
    title: 'How to Inspect a Foreign-Used Car Before Paying',
    description: 'A step-by-step guide to checking a foreign-used vehicle thoroughly before committing.',
    readTime: '5 min read',
    heroImage: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=900',
    relatedMakes: ['Toyota', 'Lexus', 'Mercedes-Benz'],
    content: [
      {
        type: 'paragraph',
        text: 'Inspecting a vehicle before you pay is one of the most important things you can do when buying a used car. It takes time, but it can protect you from costly problems. This guide walks you through a thorough inspection process.',
      },
      {
        type: 'callout',
        text: 'You are entitled to inspect any vehicle thoroughly before agreeing to purchase. A dealer who rushes you or refuses inspection is a red flag.',
      },
      {
        type: 'heading',
        text: 'Step 1: Exterior Walk-Around',
      },
      {
        type: 'paragraph',
        text: 'Begin outside the car. Walk around slowly and look at every panel. Crouch down to view the car from the side - this angle makes it easier to spot dents, ripples, or uneven surfaces that indicate previous bodywork. Check panel gaps on all four sides for consistency.',
      },
      {
        type: 'list',
        items: [
          'Look for paint colour or texture differences between panels',
          'Check for rust along the sills, wheel arches, and underneath the bumpers',
          'Open and close every door, the bonnet, and the boot to check alignment and hinge condition',
          'Inspect the windscreen for chips or cracks - replacements can be expensive',
        ],
      },
      {
        type: 'heading',
        text: 'Step 2: Underbonnet Check',
      },
      {
        type: 'paragraph',
        text: 'Open the bonnet and spend a few minutes looking around. You don\'t need to be a mechanic. Focus on obvious things: oil condition, coolant colour, signs of leaks, and the general tidiness of the engine bay.',
      },
      {
        type: 'list',
        items: [
          'Pull the oil dipstick - oil should be amber to dark brown, not milky (milky oil can indicate coolant mixing in, which is serious)',
          'Check the coolant reservoir - look for correct fluid level and colour',
          'Look for oily residue or dried fluid around hoses and gaskets',
          'Check fan belts and timing belt covers for obvious wear',
        ],
      },
      {
        type: 'heading',
        text: 'Step 3: Interior and Electronics',
      },
      {
        type: 'paragraph',
        text: 'Sit in each seat. Test the air conditioning - does it cool quickly? Check that all electric windows work. Test the central locking, interior lighting, and the infotainment system if present. Make sure the dashboard has no warning lights that won\'t clear.',
      },
      {
        type: 'heading',
        text: 'Step 4: Undercarriage Check (If Possible)',
      },
      {
        type: 'paragraph',
        text: 'If the ground clearance allows, crouch and look underneath. Look for rust on the chassis, fluid drips, or signs of damage. Some dealers have ramps - asking to use one is completely reasonable.',
      },
      {
        type: 'heading',
        text: 'Step 5: Test Drive',
      },
      {
        type: 'paragraph',
        text: 'Always request a test drive before completing a purchase. Drive at low speed, then at a higher speed if safe to do so. Listen carefully. Any knocking, grinding, rattling, or vibration that feels unusual warrants investigation before you commit.',
      },
      {
        type: 'heading',
        text: 'Step 6: Documentation Review',
      },
      {
        type: 'paragraph',
        text: 'Before agreeing to any price, ask to see what paperwork is available. For imported vehicles, customs and clearing documents are a key reference point. Ask about any service history the dealer may have.',
      },
      {
        type: 'divider',
      },
      {
        type: 'paragraph',
        text: 'Taking your time at this stage is always worth it. A thorough inspection done calmly before payment is far better than discovering problems after the car has left the dealer\'s yard.',
      },
    ],
  },
  {
    id: 'camry-vs-accord',
    category: 'Comparison',
    title: 'Toyota Camry vs Honda Accord: Which One Is Right for You?',
    description: 'Two of the most popular sedans in Nigeria compared side by side.',
    readTime: '6 min read',
    heroImage: 'https://images.unsplash.com/photo-1623869675781-80aa31012a5a?w=900',
    relatedMakes: ['Toyota', 'Honda'],
    content: [
      {
        type: 'paragraph',
        text: 'The Toyota Camry and Honda Accord are arguably the two most popular mid-size sedans on Nigerian roads. Walk into any busy market in Lagos and you\'ll spot both within seconds. If you\'re choosing between them, here\'s an honest, practical comparison.',
      },
      {
        type: 'callout',
        text: 'Parts for both Toyota and Honda are widely available in Lagos and across Nigeria - this is a key advantage for both models.',
      },
      {
        type: 'heading',
        text: 'Popularity and Parts Availability',
      },
      {
        type: 'paragraph',
        text: 'Both cars are extremely well-represented on Nigerian roads, which is a major practical advantage. Spare parts for both the Camry and Accord are sold at markets across Lagos - from Ladipo to Trade Fair and beyond. You\'re unlikely to be stranded waiting for parts with either car.',
      },
      {
        type: 'heading',
        text: 'Build Quality and Reliability',
      },
      {
        type: 'paragraph',
        text: 'Toyota has a long-standing global reputation for mechanical reliability. The Camry is often described as a car that simply keeps running with basic maintenance. The Honda Accord has an equally strong reliability record, though some owners find that it requires a bit more attention to maintenance schedules. Both are solid choices - this difference is more a matter of degree than a significant gap.',
      },
      {
        type: 'heading',
        text: 'Fuel Economy',
      },
      {
        type: 'paragraph',
        text: 'Both vehicles offer reasonable fuel economy for their size. Fuel consumption depends significantly on driving conditions - Lagos traffic being what it is, stop-and-go driving will affect any car. Generally, both are in a comparable range for similar engine sizes. If economy is a priority, look at the specific engine variant (4-cylinder options in both will use less fuel than the V6 versions).',
      },
      {
        type: 'heading',
        text: 'Interior Comfort and Space',
      },
      {
        type: 'paragraph',
        text: 'The Camry tends to have a slightly more refined, quieter cabin - good for long journeys. The Accord\'s interior often feels sportier and more driver-focused. Both offer good rear seat space for adult passengers. The Accord has historically offered a larger boot (trunk) in some model years.',
      },
      {
        type: 'heading',
        text: 'Resale Value',
      },
      {
        type: 'paragraph',
        text: 'Toyota vehicles, including the Camry, tend to hold their value well in the Nigerian used car market. The Accord also retains good value but Toyota\'s brand strength typically gives the Camry a slight edge here. This may matter to you if you plan to sell or trade in the car within a few years.',
      },
      {
        type: 'heading',
        text: 'Maintenance Costs',
      },
      {
        type: 'paragraph',
        text: 'Routine maintenance for both is affordable given how widely available parts are. Some mechanics are more familiar with Toyota systems, which can make diagnosis and servicing slightly easier in smaller towns outside Lagos. Both are well-understood cars in the Nigerian market.',
      },
      {
        type: 'divider',
      },
      {
        type: 'paragraph',
        text: 'Both are solid choices - the right one depends on your preference for ride feel, parts availability in your area, and your budget. If you\'re buying foreign-used, the specific year and condition of the individual car matters more than the brand difference. Inspect whichever you\'re considering carefully before committing.',
      },
    ],
  },
  {
    id: 'sedan-vs-suv',
    category: 'Buying Guide',
    title: 'Sedan vs SUV: Which Makes More Sense for You?',
    description: 'Thinking through the right body type for Nigerian roads and your lifestyle.',
    readTime: '4 min read',
    heroImage: 'https://images.unsplash.com/photo-1700884520248-92092bd21e63?w=900',
    relatedMakes: ['Toyota', 'Lexus', 'Hyundai'],
    content: [
      {
        type: 'paragraph',
        text: 'It\'s one of the most common questions when buying a car in Nigeria: should I go for a sedan or an SUV? Both have real advantages depending on how and where you drive. Here\'s a practical breakdown.',
      },
      {
        type: 'heading',
        text: 'Ground Clearance and Road Conditions',
      },
      {
        type: 'paragraph',
        text: 'This is often the deciding factor for many Nigerian buyers. SUVs sit higher off the ground, which gives you more clearance over speed bumps, potholes, and unpaved roads. If you regularly navigate rough streets, flooded areas in rainy season, or travel on inter-city roads that may not always be well-maintained, the extra ground clearance of an SUV is a genuine practical advantage.',
      },
      {
        type: 'callout',
        text: 'If you regularly navigate rough roads or travel between cities, an SUV\'s ground clearance can make a real difference.',
      },
      {
        type: 'heading',
        text: 'Fuel Consumption',
      },
      {
        type: 'paragraph',
        text: 'Sedans are generally more fuel-efficient than SUVs, especially in stop-and-go city traffic. If most of your driving is within Lagos or another city, a sedan\'s lower running costs can add up over time. SUVs - especially larger ones - typically have larger engines and carry more weight, both of which work against fuel economy.',
      },
      {
        type: 'heading',
        text: 'Family Size and Cargo',
      },
      {
        type: 'paragraph',
        text: 'If you have a large family or regularly carry significant cargo, an SUV gives you more space and flexibility. Many SUVs offer third-row seating or the ability to fold down rear seats for extra boot space. Sedans work well for individuals or smaller families who don\'t need the extra room.',
      },
      {
        type: 'heading',
        text: 'Parking in Lagos',
      },
      {
        type: 'paragraph',
        text: 'Sedans are easier to park in tight spaces - something that matters in Lagos where parking can be challenging. An SUV\'s larger footprint can make navigating narrow streets and fitting into parking spots more stressful.',
      },
      {
        type: 'heading',
        text: 'Maintenance Costs',
      },
      {
        type: 'paragraph',
        text: 'Sedans are generally cheaper to maintain. Tyres, brakes, and mechanical work on an SUV tend to cost more - tyres in particular, as SUVs use larger sizes. This ongoing cost difference is worth factoring in alongside the purchase price.',
      },
      {
        type: 'heading',
        text: 'Resale Value',
      },
      {
        type: 'paragraph',
        text: 'In the Nigerian market, popular SUV models from Toyota and Lexus tend to hold value well. However, so do popular sedans. Resale value depends more on the specific model, condition, and mileage than on body type alone.',
      },
      {
        type: 'divider',
      },
      {
        type: 'paragraph',
        text: 'Neither is universally better. A sedan makes sense if you\'re mostly in the city, value fuel efficiency, and don\'t need extra cargo space. An SUV makes sense if you have a larger family, travel on rougher roads, or simply prefer the higher seating position. The best choice is the one that fits your actual daily use.',
      },
    ],
  },
  {
    id: 'car-documents-nigeria',
    category: 'Documents',
    title: 'Documents to Check When Buying a Used Car in Nigeria',
    description: 'A practical guide to the paperwork you should ask for before completing any vehicle purchase.',
    readTime: '5 min read',
    heroImage: 'https://images.unsplash.com/photo-1593280405106-e438ebe93f5b?w=900',
    content: [
      {
        type: 'paragraph',
        text: 'One of the most important parts of buying a used car is verifying that the paperwork is in order. This guide covers the documents you should ask for and what to look out for. These are practical recommendations based on common practice in the Nigerian market - not legal advice. Verify current requirements with appropriate authorities, as rules can change.',
      },
      {
        type: 'callout',
        text: 'Always request documents in writing. If a seller cannot produce clearing papers for an imported vehicle, ask why and proceed with caution.',
      },
      {
        type: 'heading',
        text: 'Customs Duty / Clearing Papers (For Imported Vehicles)',
      },
      {
        type: 'paragraph',
        text: 'If you\'re buying a foreign-used (tokunbo) vehicle, ask to see the customs clearing documents. These papers relate to the importation and duty payment process when the vehicle entered Nigeria. They typically include a form that references the vehicle\'s details. This is a key document to request - a legitimate dealer should be able to provide it or explain clearly why it isn\'t available.',
      },
      {
        type: 'heading',
        text: 'Vehicle Registration Documents',
      },
      {
        type: 'paragraph',
        text: 'Ask about the vehicle\'s registration status in Nigeria. For vehicles that have been registered locally, the registration document confirms the vehicle\'s details and registered owner. If the vehicle is being sold before local registration, ask what the process will be and who is responsible for completing it.',
      },
      {
        type: 'heading',
        text: 'Bill of Sale or Receipt',
      },
      {
        type: 'paragraph',
        text: 'Always get a written receipt when you purchase a vehicle. This should include the vehicle details (make, model, year, VIN or chassis number), the agreed purchase price, and the seller\'s details. Keep this document safely - it\'s your proof of purchase.',
      },
      {
        type: 'heading',
        text: 'Proof of Ownership Chain',
      },
      {
        type: 'paragraph',
        text: 'For vehicles that have changed hands more than once in Nigeria, it can be helpful to ask about the ownership history. If the dealer purchased the vehicle from a previous owner, they should be able to show you the receipt from that transaction. A clear chain of ownership is reassuring.',
      },
      {
        type: 'callout',
        text: 'Confirm the price and payment details in writing - WhatsApp messages count - before transferring any money.',
      },
      {
        type: 'heading',
        text: 'A Note on Documentation Practices',
      },
      {
        type: 'paragraph',
        text: 'Documentation practices in the Nigerian used car market vary between dealers and regions. Some dealers maintain thorough records; others may have limited paperwork, particularly for older vehicles. Use your judgment: if a seller is evasive about documents or pressures you to buy quickly without reviewing paperwork, that warrants caution regardless of how good the car looks.',
      },
      {
        type: 'divider',
      },
      {
        type: 'paragraph',
        text: 'Buyers are advised to verify current documentation requirements with the relevant authorities, as regulations and common practices can change. When in doubt, seek guidance from someone familiar with vehicle transactions in your state.',
      },
    ],
  },
];
