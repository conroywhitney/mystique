# Mystique
A prototype javascript tool for isolating the set of CSS attributes which are the minimum necessary to achieve the desired aesthetic of a given DOM element.

Given that all themes are simply variations on a basline; if it's possible to isolate exactly what's different about an element (padding, border, font, etc.), then it's possible to duplicate that theme. However, since CSS is, by definition, cascading, and through a myriad of selectors, it's difficult to figure out exactly what styles are affeting a given element. 

Additionally, the browser itself applies a core set of styles before applying the theme CSS on top. Therefore, not all attributes listed are relevant. To counter this, an empty IFRAME is used to represent the browser's base styles. Any additional styles are considered theme-relevant.

## Targetting an element
To change which element you are calculating the style for, you need to find its XPath:
 * Right-click on the element and select "Inspect Element"
 * In the DOM browser of the "Elements" tab, select "Copy XPath"
 * Paste that XPath into the `themes` JSON object under a parent relevant to the domain name (e.g., http://www.github.com would live under "github")

## Getting the applied CSS
After selecting the XPath from above: 
 * Paste the content of the JS file into the Developer Console in Chrome
 * Run everything above the "HOVER PART" of the script which includes variable definitions and a for loop
 * You should see a set of CSS attributes output in your `console.log`
 * Copy this into a valid CSS definition/selector and you should see the style applied

## Diff between baseline style and :hover
To see what styles change between baseline and :hover (or :active, or any other pseudo-class) state:
 * Run the above part to establish the baseline style
 * ["Force Element State"](https://stackoverflow.com/questions/4515124/see-hover-state-in-chrome-developer-tools) to the pseudo-class you want (e.g., :hover)
 * Run everything below the "HOVER PART" comment
 * You should see a handful of lines of CSS representing what attributes changed since the last run
 * If you see a giant array, that means there was nothing different detected

**Note:** As far as I can tell from researching, the consensus online is that it is not possible to programatically trigger a :hover pseudo-class state using normal JS/jQuery. This seems to be something in the browser, not in the DOM. Hence why it's necessary to cause it manually.

## Adding to the HTML example 100Buttons page
In order to display a website's button style on the 100Buttons.html page from `yoursite.com` you will need to:
 1. Copy the "EXAMPLE" part in the `<style>` tag at the top of the page
 2. Rename the root selector from `.example` to `.yoursite`
 3. Copy the 4 lines of HTML containing the `<div class="primary button">`
 4. Ensure that the root node has the same selector as from the `<style>` tag
 5. Add a JSON object for `yoursite: { buttons: { primary: '', secondary: ''}}`
 5. Run the above steps using the `themes.buttons.primary` xpath
 6. Run the above steps using the `themes.buttons.secondary` xpath


