# Interactive image overlays

I'm hoping to earn interactivity with images and overlays.

## Notes

We need to set up a coordinate system:

- X-axis: 0 - 1024
- Y-axis: 0 - 1024
- SVG `viewbows`: `0 0 1024 1024`
- Image aspect ratio: 1:1

### Step One

1. Display the aerial image at the correct aspect ratio
2. Place an SVG overlay on top of it

> Once complete, draw the polygons using the exisiting `point` data

_The image stays static. Only the SVG changes._

> The wrapper container need to be `position: relative` and the layers `position: absolute`

#### SVG Transformation?

We need to transform both axes:
<p>x<sub>new</sub> = x<sub>old</sub> * (400 / 1024)<p>
<p>y<sub>new</sub> = y<sub>old</sub> * (400 / 1024)<p>

Suppose we have 1024 x 1024 SVG inside a 400 x 400 container.o
A vertex would have `(256, 512)`

The scale factor is 400/1024 = 0.390625 * 256: 100
The scale factor is 400/1024 = 0.390625 * 512: 200

SVG Polygons support event handlers but you'd need to make it accessible to assistive technologies by add:

1. `role='button'` or `link` to inform screen recorders of its purpose
2. `tabindex='0'` to make it focusable via keyboard nav
3. `onkeydown` (handling Enter or Space) alongside click handler

### Step Two

Parent-child communication through props & callback functions

Let's say we have three components:

- `PropertyMap.svelte`
- `LotDetails.svelte`
- `AvailableLots.svelte`

They need to communicate with each other somehow.

`+page.svelte` owns the selected lot state
`PropertyMap` receives the selected lot id and **report clicks**
`LotDetails` receives the selected lot's information
`AvailableLots` receives the selected lot id and report selections

This is called **lifting state up**

**Complete flow**

1. User clicks on lot 2
   - The polygon's onclick handler executes.

2. `PropertyMap` calls on `onSelect(2)`
   - It invokes the callback provided by the parent.

3. `+page.svelte` receives 2
   - `handleLotSelect(2)` updates `selectedLotId`

4. Svelte detects the state change
   - The parent and dependent components update

5. `PropertyMap` receives the new `selectedLotId`
   - Lot 2 now receives the `active` class

### Step Three

Creating the available lots to bring the interactive component full circle.

1. Display all available lots.
2. Show which lot is currently selected.
3. Notify the parent when someone selected a different lot.
