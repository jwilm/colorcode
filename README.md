colorcode
=========

Styling for Pygments markup

![Colorcode UI](https://f.cloud.github.com/assets/4285147/1844083/61286eac-74fc-11e3-9618-a80ee8b10fba.png)

Check out the demo [here](http://jwilm.github.io/colorcode/), and see the following sections for what works now and future plans for the project.

## What works
- Swap out predefined pygments themes
- Apply custom CSS at the top level

## What doesn't
- Sidebar sections for styling different types of tokens
- Drag and drop your own files for previewing a style. Setup a Node.js back end using [pygments-async](https://github.com/jwilm/pygments/async) to do the rendering.
- Output to CSS

### Long term plans
- LESS/SCSS support
    - Define colors at top and use in place of hex codes
    - Output to SCSS/LESS with variables
