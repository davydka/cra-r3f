# CRA-R3F

# redux next steps
* ~~move keypress to store~~
  * ~~wire-up to Space -> isPlaying~~
  * debug scroll intertia when enabling/disabling orbitcontrols
    * disable scroll inertia on zoom only? (not panning)
  * wire-upp isPlaying to Spring animation (enable/disable)

# Next steps
* add second/helper camera
* make bezier curve component
  * https://www.twitch.tv/videos/1275586639
  * https://000680810.codepen.website/scripts/transformSVGPath.js
  * https://github.com/zz85/threejs-path-flow

---

## MP3 Encoding for good scrubbing/CDG sync
* `ffmpeg -i input.mp3 -vn -ar 44100 -ac 2 -b:a 192k output.mp3`

## MP4 Encoding for good playback
See https://ffmpeg.org/ffmpeg-all.html#Video-size
* `ffmpeg -i input.mov -an -s hd720 -movflags faststart output.mp4` // 1280x720
* `ffmpeg -i input.mov -an -s hd480 -movflags faststart output.mp4` // 852x480
* `ffmpeg -i input.mov -an -s '426x240' -movflags faststart output.mp4`
* `for i in *.mp4; do ffmpeg -i "$i" -an -s hd480 -movflags faststart "${i%.*}-rev-opt.mp4"; done`
* `for i in *.mp4; do ffmpeg -i "$i" -an -s '426x240' -movflags faststart "${i%.*}-rev-opt-ios.mp4"; done`

## Fix GLTF for Safari
* `npx @gltf-transform/cli prune ./public/assets/kid-all.gltf ./public/assets/kid-all-processed.gltf`

---

## Useful GLTF tool
This basically doesn't work for non-linea animations (NLA), but is shows some potential.
* https://github.com/pmndrs/gltfjsx
* also https://gltf.pmnd.rs/
    * cd `public/assets`
    * `npx gltfjsx stage.gltf --shadows`
    * `npx gltfjsx kid.gltf --shadows`
    * change file path to include `assets/`
    * rename to `jsx`
    * move to `components/canvas`

# Maybe later
AR/VR + THREE.js paid library (hobby license is free)
* https://my.zap.works/projects/

---



<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
