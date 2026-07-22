# DESIGN.md — Hero Section for 3D Learning Platform

## 1. Objective
Create an inviting, modern hero section that immediately communicates the platform's purpose: a beginner-friendly browser tool for building 3D projects. The design should feel approachable yet professional, encouraging users to start learning instantly.

## 2. Product Context
- **What the product does:** A browser-based tool for creating 3D models, circuits, and projects
- **Who it's for:** Students, educators, and curious creators new to 3D modeling
- **Adjacent brands (feel like these):** Tinkercad, Canva, Figma
- **Distant brand (do not feel like this):** Blender (too technical/intimidating)
- **Cultural register:** Playful-professional — approachable without being childish

## 3. Visual Foundations

### 3a. Color
- **Neutral scale:** `--n-50: #FFFFFF, --n-100: #F8FAFC, --n-200: #E2E8F0, --n-800: #1E293B, --n-900: #0F172A`
- **Accent(s):** `--accent-primary: #FBBF24` (warm yellow for highlights), `--accent-secondary: #3B82F6` (blue for CTAs)
- **Semantic:** `--success: #22C55E, --warning: #F59E0B, --error: #EF4444`
- **Usage rules:** Yellow highlights key words ("Share", "Minutes."), blue used for primary CTA background

### 3b. Typography
- **Display face:** Inter, weights: 700 (bold)
- **Body face:** Inter, weights: 400 (regular)
- **Fallback stack:** system-ui, -apple-system, sans-serif
- **Type scale:** 16 / 18 / 20 / 24 / 32 / 40 / 48
- **Weight discipline:** Bold for headlines, regular for body text

### 3c. Spacing & rhythm
- **Base unit:** 4px
- **Spacing scale:** 4, 8, 12, 16, 24, 32, 48, 64, 96
- **What "generous" whitespace means:** Section padding ≥ 64px on desktop

### 3d. Component seeds
- **Button:** 2 variants - Primary (blue fill, white text, rounded), Secondary (transparent, white text, rounded)
- **Card / container:** Not used in hero section
- **Iconography:** Play icon for video demo

## 4. Accessibility
- **Text contrast:** Body text 4.5:1 min against background
- **Motion:** Video auto-plays but respects prefers-reduced-motion
- **Focus indicators:** Visible focus ring on interactive elements
- **Alt text policy:** Descriptive alt for 3D model image

## 5. Voice & Tone
- **Register:** Conversational-friendly
- **Sentence rhythm:** Short, punchy headlines with longer explanatory subtext
- **Words this brand uses:** Create, Learn, Share, Build, Explore
- **Words this brand refuses:** Complex, Difficult, Advanced, Professional, Enterprise
- **Address:** "you" — directly addressing the user

## 6. Implementation Practices
- **Token format:** CSS variables with Tailwind theme extension
- **Component library convention:** Bespoke components matching provided design
- **Image treatment rules:** 3D rendered models on gradient backgrounds
- **Grid system:** Flexbox with left text, right visual layout
- **Motion rules:** Subtle video playback, no entrance animations

## 7. Anti-Patterns
- **No generic tech imagery.** Use actual 3D models from the platform
- **No overwhelming color palette.** Stick to blue-yellow-white scheme
- **No tiny text.** Headlines must be large and impactful
- **No cluttered CTAs.** Keep to two clear actions

## 8. Decision-Making
1. **Clarity over creativity.** The value proposition must be understood in 3 seconds
2. **Approachability over sophistication.** Target audience is beginners
3. **Visual hierarchy first.** Headline → subtext → CTAs → 3D model
4. **Performance balance.** Video should autoplay but not degrade performance

## 9. Workflow
1. Analyze current Hero.tsx structure
2. Compare with target image design
3. Update layout to match left-text, right-visual arrangement
4. Adjust typography and colors to match image
5. Ensure responsive behavior across screen sizes
6. Test video playback and 3D model positioning
7. Verify accessibility requirements
