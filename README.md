# Expo Router : a file-based router

## 1. Creating a basic route:

- When a file is created in the app directory, it automatically becomes a route in the app. Add a `about.tsx` file inside the app and then add this file on th stack

## 2. Creating a extra new layout called settings:

- RootLayout(parent)
  - SettingLayout(child of root)
    - index and options (you can call them child of SettingLayout for better understanding)

Now all we need to do is that adding the childs to the parent. So

1. add the index and options to the SettingLayout as two stack screen
2. add the settings to the RootLayout . That's it.

-You Don't need to use extra folder if you don't need another layout . Just use the main Layout. If you need extra layout create a folder like settings and add a `_layout.tsx` there.

- create two file inside settings folder `index.tsx` and `options.tsx`
- add the stack screen on the `settings/_layout.tsx` file
- now add the settings in the mainLayout file (whatever we do we must add the new layout system to the parent layout. Here we are adding the setting to the mainLayout )
- now we can navigate to `/settings/options` and `/settings` i.e. the setting index from anywhere

## 3. Creating dynamic routes:

- RootLayout (parent)
  - ProductsLayout (child of root)
    - [id].tsx and index.tsx (children of ProductLayout)

1. Just start adding from below add [id].tsx and index.tsx in the productLayout stack.screen and add product in the rootLayout
2. just use map to view all the products and use link or router.push()
3. see the [id].tsx how to get the ids of each product and find them

## Adding some tabs on the bottom of the app:

1. create a folder called (tabs) or whatever you want. Inside this folder we can put some of the files and folder that we want to show as tabs on the bottom portion of the app.
2. keep the other folders and file out of the tabs folder
3. again tabs folder is a child of rootLayout so add it on the rootLayout
4. on the tabs layout add all the children of the tabs (files/folder)
