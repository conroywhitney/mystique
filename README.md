# Mystique
A prototype javascript tool for inspecting which styles affect a given
element. Paste script into Chrome Developer JS Console to see style
attributes and values.

Configure which element you are selecting by an xpath (see examples).
Select element, right-click "Copy XPath".

Run everything above the "HOVER PART" of the script to see relevant
CSS styles.

Click on element again, select "Force Element State", and choose
":hover" to cause element to act as though :hover pseudo-class was
happening (no other way to programatically do this, as far as I can
tell).

Run the loop after the "HOVER PART" a second time to output *only* the
CSS which has changed since the :hover happened.

Copy this CSS into the HTML file. When you have the DOM set up
correctly, you will see these styles applied.

