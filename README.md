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
