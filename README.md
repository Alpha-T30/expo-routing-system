# Expo Router : a file-based router

## 1. Creating a basic route:

- When a file is created in the app directory, it automatically becomes a route in the app. Add a `about.tsx` file inside the app and then add this file on th stack

## 2. Creating a extra new layout called settings:

- Don't need to use extra folder if you don't need another layout . Just use the main Layout. If you need extra layout create a folder like settings and add a `_layout.tsx` there.
- create two file inside settings folder `index.tsx` and `options.tsx`
- add the stack screen on the `settings/_layout.tsx` file
- now add the setting in the main layout file (whatever we do we must add the new layout system to the parent layout. Here we are adding the setting to the mainLayout)
- now we can navigate to `/settings/options` and `/settings` i.e. the setting index from anywhere
