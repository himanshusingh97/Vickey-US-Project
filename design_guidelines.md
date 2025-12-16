# Health & Wellness Coaching Website - Design Guidelines

## Design Approach

**Reference-Based Approach**: Drawing inspiration from premium wellness platforms (Headspace, Calm, Peloton) that prioritize emotional connection, trust-building, and serene user experiences. The design balances minimalism with warmth, creating a calming yet professional aesthetic that reflects holistic health philosophy.

**Core Principles:**
- Breath and space: Generous whitespace as a design element, not filler
- Natural flow: Organic shapes and soft transitions mirror wellness journey
- Authentic connection: Real imagery and personal storytelling over stock perfection
- Gentle guidance: Clear pathways without aggressive CTAs

---

## Typography System

**Primary Font**: 'Inter' or 'DM Sans' (Google Fonts) - clean, modern, highly readable
**Accent Font**: 'Lora' or 'Cormorant Garamond' - elegant serif for quotes and featured text

**Hierarchy:**
- Hero Headlines: 4xl to 6xl, font-weight 300-400 (light/normal) for calming presence
- Section Headers: 3xl to 4xl, font-weight 600 (semibold)
- Subheadings: xl to 2xl, font-weight 500 (medium)
- Body Text: base to lg, font-weight 400, line-height relaxed (1.75) for easy reading
- Captions/Meta: sm to base, font-weight 400, slightly muted

---

## Layout & Spacing System

**Tailwind Spacing Primitives**: Focus on 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Component padding: p-6 to p-8 (mobile), p-12 to p-16 (desktop)
- Section spacing: py-16 to py-20 (mobile), py-24 to py-32 (desktop)
- Content gaps: gap-6 to gap-8 (cards/grids), gap-12 to gap-16 (major sections)
- Container max-widths: max-w-7xl for full sections, max-w-4xl for text content

**Grid Philosophy**: Asymmetric and organic rather than rigid
- Two-column splits (60/40 or 55/45) for About page story sections
- Three-column grids for Services and Testimonials (responsive to single column mobile)
- Magazine-style blog layouts with varied card heights

---

## Page-Specific Layouts

### Home Page
**Hero Section** (80-90vh):
- Full-width background image (serene nature, yoga pose, or wellness activity)
- Centered overlay content with semi-transparent backdrop blur
- Large inspiring headline (3xl to 5xl)
- Subheadline with mission statement (lg to xl)
- Primary CTA button with subtle blur background
- Scroll indicator at bottom

**Trust Bar** (below hero):
- Single row showcasing credentials (e.g., "Certified Wellness Coach | 500+ Lives Transformed | 10+ Years Experience")
- Icons with short labels

**Philosophy Section**:
- Two-column layout (image left, text right or alternating)
- 2-3 core values/pillars with icons
- Soft rounded corners on image containers (rounded-2xl)

**Services Preview**:
- Three-column card grid
- Each card: icon, title, brief description, "Learn More" link
- Hover effect: subtle lift (transform translate-y)

**Testimonial Highlight**:
- Large featured testimonial with client photo
- Pull-quote typography using accent font
- Transformation metrics if available

**CTA Section**:
- Full-width section with subtle background treatment
- Centered headline + description
- Primary button: "Book Free Consultation"
- Secondary text: "Or explore our programs"

### About Page
**Hero**: Personal photo (full-width or split-screen with introduction text)

**Journey Section**:
- Timeline or story-based layout
- Alternating image/text blocks
- Personal narrative in first person

**Credentials Grid**:
- Four-column layout for certifications (responsive to 2-col on tablet, 1-col on mobile)
- Badge-style presentation

**Mission & Values**:
- Centered text block (max-w-3xl) with accent font for mission statement
- Three-column value cards below

### Services Page
**Overview Section**: Brief introduction to coaching philosophy

**Program Cards** (detailed):
- Two-column grid on desktop
- Each card includes: program name, duration, format (1-on-1, group), key benefits list, pricing indicator, CTA button
- Expandable accordion for full details

**Comparison Table**:
- Side-by-side comparison of coaching tiers
- Sticky header on scroll

### Testimonials Page
**Featured Success Story**: Large hero-style showcase with before/after imagery (handled sensitively)

**Testimonial Grid**:
- Masonry-style layout (varying heights)
- Client photo, quote, name, transformation summary
- Filter by category (fitness, nutrition, mental wellness)

**Video Testimonials**: Embedded video grid (if available)

### Blog Page
**Featured Article**: Large card at top with hero image, title, excerpt, read time

**Article Grid**:
- Three-column card layout
- Each card: featured image, category tag, title, excerpt, author, date, read time
- Pagination or "Load More" button

### Contact Page
**Two-Column Layout**:
- Left: Contact form (name, email, phone, service interest dropdown, message)
- Right: Contact information, office hours, social media links, optional map embed

**Form Design**:
- Rounded input fields (rounded-lg)
- Floating labels or clear placeholders
- Generous padding (p-4)
- Submit button with confirmation feedback

**Newsletter Signup**: Separate section below with simple email capture

---

## Component Library

### Navigation
- Sticky header with subtle shadow on scroll
- Logo left, menu items center or right
- Transparent on hero, solid background after scroll
- Mobile: Hamburger menu with full-screen overlay navigation
- "Book Consultation" button prominently displayed

### Buttons
**Primary**: Rounded-full or rounded-lg, generous padding (px-8 py-4), medium font-weight
**Secondary**: Outline style with hover fill
**Text Links**: Underline on hover, arrow icon for external links

### Cards
- Soft shadows (shadow-lg)
- Rounded corners (rounded-2xl)
- Padding: p-6 to p-8
- Hover: subtle scale (scale-105) or shadow increase

### Forms
- Input fields with border, focus state with subtle glow
- Error states clearly indicated
- Success confirmation messages
- Calendar date picker for booking (use library like react-datepicker)

### Testimonial Component
- Card with rounded corners
- Client photo (circular, small)
- Quote in accent font (italic)
- Star rating
- Client name and transformation type

### Blog Post Card
- Featured image (16:9 ratio)
- Category badge (pill-shaped)
- Headline truncated to 2-3 lines
- Meta info (author, date, read time)
- Smooth hover interaction

---

## Images

**Required Images:**

1. **Home Hero**: Large inspiring image (yoga in nature, meditation, healthy lifestyle moment) - full-width, 1920x1080px minimum
2. **About Page Hero**: Professional headshot or action shot of the coach (1200x800px)
3. **Services Section**: 3-4 images representing different service types (individual coaching, group session, workshop setting)
4. **Testimonial Photos**: Multiple client photos (circular crop, 200x200px)
5. **Blog Featured Images**: Various wellness topic images (nutrition, fitness, mindfulness) - 800x600px
6. **About Journey**: 3-5 images from coach's personal journey
7. **Background Textures**: Subtle organic patterns or nature elements for section backgrounds

**Image Treatment**: Soft overlays where text appears, subtle vignette effects, warm filters maintaining natural tones

---

## Interactive Elements

**Appointment Booking**: Modal or dedicated form section with calendar integration (Google Calendar or simple date picker), time slot selection, service dropdown

**Newsletter**: Inline form in footer and dedicated section on homepage - email input with subscribe button

**Scroll Animations**: Very subtle - fade-in on scroll for section reveals (use Intersection Observer)

---

## Footer
**Multi-column layout**:
- Column 1: Logo, tagline, social icons
- Column 2: Quick links (About, Services, Blog, Contact)
- Column 3: Contact info (email, phone)
- Column 4: Newsletter signup

Bottom bar: Copyright, Privacy Policy, Terms of Service links

---

## Responsive Behavior

**Mobile-First Approach**:
- All multi-column layouts stack to single column on mobile
- Navigation collapses to hamburger menu
- Hero text sizes reduce (3xl to 2xl)
- Padding reduces (py-24 to py-12)
- Touch-friendly button sizes (minimum 44x44px tap targets)