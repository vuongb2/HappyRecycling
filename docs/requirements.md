# Phase 4: System/Design Requirements

## *Navbar (global asset)*
### Navbar is one section on *all* pages and must satisfy:
1. <sup> N1 </sup>   Brand logo and product title (complete, #29)
2. <sup> N2 </sup> Page navigation links to Home, Learn, Game, and Special Cases (complete, #35)
3. <sup> N3 </sup> Page navigation should reflect current page with an underline bar (complete, #35)
4. <sup> N4 </sup> Navigation bar is in a fixed position (top of page) (complete, #29)

## *Footer (global asset)*
### Footer is one section on *all* pages and must satisfy:
1. <sup> F1 </sup> Footer states "INFO 442 Project" (complete, #20)
2. <sup> F2 </sup> Footer has "Contact Us" link which is an a href = "mailto:" attribute (complete, #20)
3. <sup> F3 </sup> Footer contains copyright symbol (complete, #20)
## *Homepage*
### Home page is one section and must have:
1. <sup> H1 </sup> A top-level heading that says “It’s our planet.” (complete #29)
2. <sup> H2 </sup> A paragraph that contains our mission statement (complete #29)
3. <sup> H3 </sup> “Learn more” button that links to the Learn page  (complete #29)
4. <sup> H4 </sup> A photo related to our mission statement such as sustainability and responsible waste management (complete, #32)

## *Learn page*
### Learn page is divided into 5 sections (top to bottom):
#### L1: “Recycling statistics” (ALL L1 COMPLETE, #28 & #35)
1. <sup> L1a </sup> A paragraph containing statistics about recycling and waste consumption to generate empathy and motivation from the user in order to align them with our mission  
2. <sup> L1b </sup> A photo related to the statistic, such as littering or landfills  
3. <sup> L1c </sup> A top level-heading that says “Recycling Statistics”  
#### L2: “What can I compost?” (ALL L2 COMPLETE, #28 & #35)
- <sup> L2 </sup> Section should contain cards, cards should have:
  1. <sup> L2a </sup> A photo of a compostable item
  2. <sup> L2b </sup> Description/title of item
  3. <sup> L2c </sup> Should only have 4 cards per row
#### L3: “What can I trash” (ALL L3 COMPLETE, #28 & #35)
- <sup> L3 </sup> Section should contain cards, cards should have:
  1. <sup> L3a </sup> A photo of a trash item
  2. <sup> L3b </sup> Description/title of item
  3. <sup> L3c </sup> Should only have 4 cards per row
#### L4: “What can I recycle” (ALL L4 COMPLETE, #28 & #35)
- <sup> L4 </sup> Section should contain cards, cards should have:
  1. <sup> L4a </sup> A photo of a recyclable item
  2. <sup> L4b </sup> Description/title of item
  3. <sup> L4c </sup> Should only have 4 cards per row
#### L5: “Reduce, reuse, recycle” triad (ALL L5 COMPLETE, #28 & #35)
- <sup> L5 </sup> 3x3 table
  1. <sup> L5a </sup> Row 1 should contain 3 photos over 3 columns related to reduce, reuse, recycle
  2. <sup> L5b </sup> Row 2 should contain paragraphs of “reduce”,“reuse”, and “recycle” over 3 columns
  3. <sup> L5c </sup> Row 3 should contain an image of arrows displaying “ reduce”, “reuse”, and “recycle” over 3 columns
  4. <sup> L5d </sup> Title the table “Reduce, Reuse, Recycle”


## *Game page (interactive)*
### Game page has 3 total sections: Static header, interactive "play space", and responsive drop boxes
#### G1: Header should contain:
1. <sup> G1a </sup> Header title "Recycle Game" (Complete, #23)
2. <sup> G1b </sup> paragraph description of how to play the game/what the game is (Complete, #23)
#### G2: “Play space” should contain:
1. <sup> G2a </sup> a draggable card with
    - <sup> G2a.1 </sup> An image of the active game item (Complete, #23)
    - <sup> G2a.2 </sup> Description of the item below image (Complete, #23)
    - <sup> G2a.3 </sup> Kebab vector showing the card is manipulatable (Complete, #23)
    - <sup> G2a.4 </sup> Card should increase its drop-shadow when clicked (Complete, #23)
    - <sup> G2a.5 </sup> Card moves with the cursor if the user clicks and drags. (Complete, #23)
    - <sup> G2a.6 </sup> Card should snap back to its starting position unless dragged into the correct bin (Complete, #23)
2. <sup> G2b </sup> A button “new item” that once clicked changes the draggable card to the next active game item (Complete, #23)
#### G3: “Drop bins” should contain:
1. <sup> G3a </sup> Three responsive drop-bin sections (Complete, #33)
    - <sup> G3a.1 </sup> Recycle bin (Complete, #33)
    - <sup> G3a.2 </sup> Trash bin (Complete, #33)
    - <sup> G3a.3 </sup> Compost bin (Complete, #33)
2. <sup> G3b </sup> Each bin should respond to user interaction if they drag an item into the correct bin by:
    - <sup> G3b.1 </sup> If the item is dropped into the correct bin, overlay a “Correct” header and paragraph about why the user is correct (Complete, #33)
    - <sup> G3b.2 </sup> Hold the active item until user clicks “new item” button (Complete, #23)
    - <sup> G3b.3 </sup> Populate the native land with brand mascot and “great job” message (Complete, #33)
3. <sup> G3c </sup> If bin detects an incorrect answer:
    - <sup> G3c.1 </sup> If the item is dropped into the incorrect bin, overlay an “incorrect” header (Complete, #23)
    - <sup> G3c.2 </sup> Automatically repopulate the draggable element back to its starting position (Complete, #23)
    - <sup> G3c.3 </sup> The bin should no longer function and the message should remain until the user clicks “new item” (Complete, #23)

## *Special cases page*
### Special cases is divided into two sections: One permanent header section, and one repeating unit section
1. Special Cases header
    - <sup> S1a </sup> A top-level heading that says “Special Cases” (Complete, #34)
    - <sup> S1b </sup> a paragraph explaining the purpose of the page, which is to showcase the items that are special cases when it comes to responsible waste management (Complete, #34)
2. Actual special case item (repeating)
    - <sup> S2a </sup> Section divider spanning the full width of main-body flex box on top (Complete, #34)
    - <sup> S2b </sup> A level-three heading of the item name (Example: “batteries”, “light bulbs”, etc). (Complete, #34)
    - <sup> S2c </sup> List elements of the special instructions to dispose of the item responsibly (Complete, #34)
    - <sup> S2d </sup> List elements should be unordered (bullet points) (Complete, #34)
    - <sup> S2e </sup> List elements that contains emails or phone numbers should use the href = "mailto:" or "tel:" attribute (Complete, #34)

## *Non-functional requirements*
1. <sup> N-f1 </sup> All text passes the WCAG color:contrast rating with at least a AA rating
2. <sup> N-f2 </sup> All images have proper tags for screen reading accessibility
