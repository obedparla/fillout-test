# Fillout test Obed Parlapiano

I'll explain all choices, technical and UX related in this document.

I chose the recommended stack of Next.js, TypeScript and Tailwind. It's a good stack I'm familiar with, and it's what Fillout uses, so I saw no reason to deviate from it.

The project was bootstrapped with `create-next-app`.

## Previewing the app

The live demo can be found in Netlify here. I've been using Netlify for a while and it's as strong a candidate to deploy it as any other for a simple app.

First, run the development server:

```bash
npm run dev
```

## Technical decisions

- Each Form is rendered as a Next.js Page
- When switching through the forms via the tabs, update the view via a Next.js route, this way the URL updates, has navigation history, can be shared, etc.
- The dropdown is using `radix-ui`, it automatically handles positioning and edge cases
  - I was not able to perfectly position the dropdown to be flush against the left of the tab, since the "trigger" for the dropdown is the dots icon, which is on the right. I may have missed how to do this using Radix-ui.
- I added the `clxs` library to simplify the Tailwind classes logic.
- Added a simple modal to enter data to create a page, also using `radix-ui`
- Drag and drop is handled by `dnd-kit`, which offers great ergonomics for creating drag-and-drop elements A few things to note that make the UX better:
  - Only allow drags horizontally
  - Only allow it within the scroll container
  - Did not add keyboard drag controllers. It collides with selecting the tab with enter or space. Selecting the form is more important than dragging it in my opinion. A solution to have both would be to use "Space" for dragging and "Enter" for selecting.
- The tailwind theme is empty. Normally I'd keep this up to date with the rest of the app, so that custom colors or sizes are normalized across the app.
- Added `Prettier` and `Eslint` configs. Eslint config is very team-specific, so I added some simple defaults.
- Added some basic tests using `Jest` and `react-testing-library`

## Differences from the design

- The "+ Add page" button on the right of the tabs is outside of the scrollable area from the tabs.
  - From the Figma design it seemed like it was connected to the tabs, but if there are many forms, the button will be hidden all the right to the right, requiring to scroll.
