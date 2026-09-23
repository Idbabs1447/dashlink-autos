Modify ONLY the existing “IN STOCK RIGHT NOW” panel in the homepage hero.

Do NOT redesign the hero.
Do NOT change the left-side headline, buttons, background, navigation or other homepage sections.

Turn the current static vehicle list into a professional AUTOMATIC VEHICLE CAROUSEL.

==================================================
CAROUSEL BEHAVIOR
==================================================

Display ONE featured vehicle at a time inside the “IN STOCK RIGHT NOW” panel.

Each vehicle remains visible for approximately:

5 seconds.

After 5 seconds:

Smoothly slide the current vehicle LEFT and bring the next vehicle in from the RIGHT.

Continue automatically through the available inventory.

After the final vehicle:

Loop seamlessly back to the first vehicle.

Example sequence:

2015 Mercedes-Benz GLA 250
↓
2012 Toyota Camry
↓
2017 Hyundai Elantra GT
↓
2015 Toyota Camry SE
↓
2013 Lexus ES 350
↓
2016 Hyundai Tucson 1.6T
↓
continue through available inventory
↓
return to first vehicle.

Do not limit the carousel to only three vehicles.

Use available vehicle inventory dynamically.

==================================================
CARD DESIGN
==================================================

Because only ONE vehicle is displayed at a time, make the featured vehicle presentation larger and more visual than the current small list rows.

Panel structure:

IN STOCK RIGHT NOW

[ LARGE VEHICLE IMAGE ]

Small metadata:
2015 • FOREIGN USED

Vehicle name:
2015 Mercedes-Benz GLA 250

Price:
Contact for Price

CTA:
View Vehicle →

Keep the design dark and consistent with the existing hero.

The image should be prominent but should NOT make the overall panel significantly taller than the current hero.

Use the vehicle's actual primary image.

Do not generate replacement imagery for vehicles that already have supplied images.

==================================================
CAROUSEL CONTROLS
==================================================

Allow manual navigation.

Add subtle:

← Previous
→ Next

arrow controls.

These can be small circular arrow buttons over or beside the image.

Also add small pagination indicators near the bottom.

Example:

● ○ ○ ○ ○ ○

OR use small horizontal bars:

━ ─ ─ ─ ─ ─

The active indicator can use Dashlink red.

Keep controls understated.

==================================================
USER INTERACTION
==================================================

Users must be able to:

Click Previous
Click Next

On touch/mobile devices:

Swipe left → next vehicle.

Swipe right → previous vehicle.

When a user manually changes the vehicle:

Reset the 5-second autoplay timer.

Do not immediately auto-slide after manual interaction.

Pause autoplay while:

- User is hovering over the panel on desktop
- User is touching/interacting on mobile
- Browser tab is inactive where practical

Resume afterward.

==================================================
TRANSITION
==================================================

Use a smooth horizontal slide transition.

Approximate duration:

500–700ms.

Use professional easing.

Do NOT use:

Flashing
Spinning
3D rotation
Zoom explosions
Bounce
Fade-to-black
Overly dramatic transitions

The movement should feel like a premium dealership interface.

==================================================
CLICK BEHAVIOR
==================================================

The vehicle image, vehicle name and:

“View Vehicle →”

should all open that specific Vehicle Detail page.

Example:

2017 Hyundai Elantra GT
→ opens the 2017 Hyundai Elantra GT detail page.

Do not send every carousel item to the general Shop Cars page.

Keep:

“See all available cars →”

at the bottom of the panel.

That link opens:

Shop Cars.

==================================================
MOBILE
==================================================

Make the carousel responsive.

On mobile:

Keep only ONE vehicle visible inside this particular hero carousel.

IMPORTANT:

This does NOT change the main inventory requirement.

The Shop Cars page and Recently Added sections must STILL use:

TWO VEHICLE CARDS PER ROW

on normal mobile widths.

Only the hero “In Stock Right Now” feature uses one featured vehicle at a time.

Support finger swipe.

Keep the panel compact so it does not make the mobile hero excessively tall.

==================================================
ACCESSIBILITY
==================================================

Provide accessible labels:

“Previous vehicle”
“Next vehicle”

Respect:

prefers-reduced-motion

If reduced motion is enabled:

Disable automatic sliding animation or use an immediate/subtle transition while keeping manual controls available.

==================================================
FINAL RESULT
==================================================

The “IN STOCK RIGHT NOW” panel should feel like a small live showroom inside the homepage hero.

A visitor can stay on the hero and naturally see different available vehicles every 5 seconds without doing anything.

The carousel should add subtle life to the homepage without distracting from:

“Your Next Car Starts Here.”

or the main Browse / Pre-Order / WhatsApp actions.