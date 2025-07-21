# Fillout test Obed Parlapiano

I'll explain all choices, technical and UX related in this document.

I chose the recommended stack of Next.js, TypeScript and Tailwind. It's a good stack I'm familiar with, and it's what Fillout uses, so I saw no reason to deviate from it.

The project was bootstrapped with `create-next-app`.

## Previewing the app

The live demo can be found in [Vercel here](https://fillout-test-eta.vercel.app/page/other). Vercel is as good a place as any to deploy a simple Next.js app.

First, run the development server:

```bash
npm run dev
```

- Each Form is rendered as a Next.js Page, which makes it easy to pull data for each individual page if needed.
  - The layout is handled by layout.tsx, since all pages share a header, sidebar, and the tabs navigation.
- When switching through the forms via the tabs, the view is updated via a Next.js route to keep the URL up-to-date.
- For state management, I'm using `Zustand`, and to mimic some type of backend, I added persistence through local storage. Zustand is great for both simple and complex projects.
- The dropdown is using `radix-ui`, it automatically handles positioning and edge cases.
  - I was not able to perfectly position the dropdown to be aligned against the left of the tab, since the "trigger" for the dropdown is the dots icon, which is on the right. I would investigate how to do this further with more time.
- I added the `clxs` library to simplify the Tailwind classes logic.
- Added a simple modal to enter data to create a page, also using `radix-ui`
- Drag and drop is handled by `dnd-kit`, which offers great ergonomics for creating drag-and-drop elements. A few things to note that make the UX better:
  - Only allow drags horizontally
  - Only allow it within the scroll container
  - I did not add keyboard drag controllers as it collides with selecting the tab with either enter or space. Selecting the form is more important than dragging it in my opinion. A solution to have both would be to use "Space" for dragging and "Enter" for selecting.
- The Tailwind theme is empty. Normally I'd keep this up to date with the rest of the app, so that custom colors or sizes are normalized across the app.
- Added `Prettier` and `Eslint` configs. Eslint config is very team-specific, so I added some simple defaults.
- Added some basic tests using `Jest` and `react-testing-library`

## Design choices

- The "+ Add page" button on the right of the tabs is outside of the scrollable area from the tabs.
  - From the Figma design it seemed like it was connected to the tabs, but if there are many forms, the button will be hidden all the way to the right, requiring to scroll.
- In order to make the app look better, I copied the header, sidebar, and form info from fillout.com and pasted it into this project. 