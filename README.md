# Rocont Test Project

This project is a test assignment to implement an adaptive layout based on a Figma design using Vue 3, SCSS and Vite. It is structured with scalability in mind, even though only a single page is implemented.

## Technologies Used

- Vue 3 with Composition API
- Vite (Development + Production)
- SCSS with RSCSS methodology
- HTML5 with semantic structure
- Responsive design and fluid layout
- Interactivity with Vanilla JS and Vue components

## Project Structure

rocont-entry-task/
├── index.html               # App entry point for Vite
├── vite.config.js
├── package.json
├── public/
│   └── assets/              # Static assets
└── src/
    ├── app/                 # Root application setup
    │   ├── App.vue
    │   └── main.js
    ├── assets/
    │   ├── styles/
    │   │   ├── base/
    │   │   │   ├── _reset.scss
    │   │   │   ├── _typography.scss
    │   │   ├── utils/       # variables, mixins, media
    │   │   │   ├── _variables.scss
    │   │   │   ├── _media.scss
    │   │   ├── global.scss
    │   │   └── page.scss
    ├── components/          # Reusable UI components
    ├── features/            # Functional modules
    │   ├── contact-form/
    │   │   ├── ContactForm.vue
    │   │   └── contact-form.scss
    │   └── slider/
    │       ├── Slider.vue
    │       └── slider.scss
    ├── pages/
    │   └── HomePage.vue
    └── router/             # Optional for future multi-page support
        └── index.js


## Installation

```bash
git clone https://github.com/your-username/rocont-test.git
cd rocont-test
npm install
npm run dev
```
The app will be available at http://localhost:5173.

## Build

To create a production build:

```bash
npm run build
```
Compiled files will appear in the dist/ directory.

## License

This is a non-commercial test assignment for skill evaluation only. The resulting work will not be used for any commercial purpose.