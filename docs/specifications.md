# INFO 442 Project Specifications
## Problem Statement:
**Problem from SDG: Goal 12: Responsible Consumption and Production**

*People want to recycle but have a difficult time understanding and identifying what items can be actually recycled.*

### Problem description:

Recycling is one of the easiest ways for us to work together to ensure that natural resources and energy are being saved and not going to waste. By reducing, reusing, and recycling correctly we can prevent environmental degradation, climate change, and landfill waste from occurring any further (SDG, 2022). There are a few challenges that make recycling difficult and unachievable for many. One of the biggest barriers that stops people from recycling is because they are unsure of what can be recycled. According to the World Economic Forum, SAP, and Qualtrics, the survey study revealed that many people felt confused when it comes to recycling. “Only about 35% of people actually recycle” (Thomas et. al, 2022). Recycling programs may be different since they vary from location to location. Due to these challenges, aspirational recycling easily occurs. 

92% of all plastics, 34% of paper and cardboard products, and 63% of all glass is improperly thrown away as garbage instead of recycling, due to lack of awareness or inaccessibility (March et al. 2022). This improper waste management ultimately leads to increased waste accumulation in landfills, which contributes to: 

- Environmental pollution: contaminating soil, water bodies, air, and wildlife. Landfills can become breeding grounds for dangerous diseases as well.
- Depletion of natural resources:  without reusing materials, we are depleting expensive natural resources and impacting our economy
- Habitat destruction: landfills take up space, leading to plant, animal, and marine death and lowering biodiversity.
- Increased greenhouse gas emissions: accelerates climate change.

Which ultimately exacerbates climate change and negatively impacts our sustainability (Group, 2022 & OSHA, 2023). Inconvenience is another common challenge in recycling (Wood, 2021). Not having access to recycling can be a struggle, which is one of the many reasons why people avoid recycling.  According to Jiaying Zhao, a professor that focuses on sustainability, believes that signs with images of recyclable items are more beneficial than simply having just text (McCue, 2019). If disposal signs or posters are not understood by people, this will create confusion and lead to aspirational recycling. 

Existing solutions and websites that target these common challenges in recycling mainly list the items that are recyclable and include basic questions and answers. Overall, the content may be there, but it is hard for users to navigate and understand the different types of items that can be recycled with very little images and photos. In addition, many websites do not provide recycling information and programs for certain locations, which is not useful for those who are in an unfamiliar area or individuals that are traveling.


## Solution Summary:
This web application encourages better recycling practices and teaches people to recycle correctly. Statistics, information, and reminders will be presented in sections to help users learn the importance of recycling. The game is an interactive activity where users sort items into the correct recycling bin with labeled signs, this will help them learn from their mistakes and avoid improper recycling. There will be a page of information on special recycling cases that provides a list of items that many people think are recyclable, but really are not. In addition, we will provide users with external resources to special case items including contact information for users to reach out to for further information. In the end, users should feel better equiped to properly categorize items as garbage, recycling, or compost in order to improve responsible consumption and production.

## Design:
#### *Home page*
<img title="homescreen" alt="screenshot of happy recycling homescreen, includes mission statement" src="/img/home.png">

Text and visual content:
- This page will be the home page of our website. In other words, the splash page, which is the information the user will first see before they use our website.
- The textual content is very brief with an introduction of what our website’s purpose is. This will be done with a heading followed by a paragraph.
- Right below the paragraph, it will have a “learn more” button that links to the Learn page.
- There will be only 1 image on the right side of the screen. 
- Content on this page will be static.
- Overall, this page includes a navigation bar, 1 button, 1 image, 1 heading, and 1 paragraph.

User interaction:
- Users can explore other pages by using the navbar

#### *Learn page*
<p align="middle">
<img title="learn1" alt="Top third scroll of the learn page" src="/img/learn1.png" width="320">
<img title="learn2" alt="Center of the learn page" src="/img/learn2.png" width="320">
<img title="learn3" alt="Last third scroll of the learn page" src="/img/learn3.png" width="320">
</p>

Text and visual content:
- The Learn Page is a continuous page.
- The “Recycling Statistics” section will include recycling facts and statistics. 
- The “What can I….” sections will display images and text of which items are compost, trash or recyclable.
- The Reduce, Reuse, and Recycle section will display images, recycling signs, with the words reduce, reuse, and recycle in between the images and the signs
- Content on this page will be static.
- Overall, this page includes a navigation bar and 5 sections: Recycling statistics, Waste/Compost/Recycling sections, and the reduce, reuse, recycle triad.

User interaction:
- Users can explore other pages by navigating to the other tabs on the navigation bar by clicking on one of the 4 tabs.
- Because this page is continuous, users will scroll through this page to explore and view the content on the learn page.

#### *Game page*
<p align="middle">
<img title="game1" alt="Start state of the game page" src="/img/game1.png" width="480">
<img title="game2" alt="End state of the game page after user submits an answer" src="/img/game2.png" width="480">
</p>


Text and visual content:
- The Game Page will be the main feature of our web application. This page contains an interactive activity where users drag and drop an item into one of the 3 bins (recycle, trash, and compost).
- Above the 3 bins contains a rectangular box, this is where the items that can be dragged and dropped will be generated.
- Next to the rectangular box, there is a button called “New Item”. 
- Overall, this page includes a navigation bar, 3 bins with recycling signage, one button, a rectangle box where the item is being generated, messages for both correct and incorrect (error) that appears inside of the bins.

User interaction:
- Users can explore other pages by navigating to the other tabs on the navigation bar by clicking on one of the 4 tabs.
- Users will be able to drag and drop the item to one of the 3 bins (recycle, trash, and compost) .
- If the user clicks on “New Item”, it will generate a new item in the game.
- If the user drags and places the item where it does not fall into one of the bins, the item will return to its original state (rectangular box with 6 blue dots).
- If the user drops it in the correct bin, it will show all the right and wrong answers. In addition, the right answers should provide a description as to why it is correct.
- For example: If the user drags the item into a correct bin:
  -  Our logo will appear and say “Great Job”.
  -  The bins that were incorrect will say “Incorrect!”
  -  The bins that are correct will say “Correct!” and provide a description as to why it is.

Error state:
- If the user drags and drops it in the incorrect bin, then the item will return to its original state (rectangular box with 6 blue dots) where users can try again. An error message of “Incorrect” will appear in the incorrect bin that the user dragged and dropped it into.

#### *Special cases page*
<img title="Special cases page" alt="Screenshot of the special cases page" src="/img/scases.png">

Textual and visual content:
- The Special Cases Page is a continuous page that describes items that are not recyclable. In addition, some items will have contact information such as phone numbers and email addresses for users to contact.
- The images should be placed on the left. Item name should be centered. Details and descriptions of the item should be in a bulleted list.
- Overall, this page includes a navigation bar, images, bulleted list, paragraphs, lines, and links. 

User Interaction:
- Users can explore other pages by navigating to the other tabs on the navigation bar by clicking on one of the 4 tabs.
- Because this page is continuous, users will scroll through this page to explore and view the content on the special cases page.
- If a user clicks on the phone number, it should allow users to make a phone call
- If a user clicks on an email link, it should allow users to send an email to the address.

## Stretch Goals
- If our team has time, a stretch goal that we have in mind is to implement a functionality where users can look up recycling programs and rules by county. (FAQ page)

### Citations

- Group, C. M. E., & Smith, H. (2022, January 4). How improper waste disposal affects the environment. Clean Management Environmental Group, Inc. https://cleanmanagement.com/blog/how-improper-waste-disposal-affects-the-environment/ 

- Improper waste disposal: Effects on humans and the environment. Improper Waste Disposal: Effects on Humans & Environment. (2023, April 20). https://www.osha.com/blog/improper-waste-disposal 

- Kinejara, A. (2022, December 7). Why do people not recycle anymore?. Reel. https://reelpaper.com/blogs/reel-talk/why-do-people-not-recycle-anymore

- Lappin, T. (2023, June 28). Paper recycling. Flickr. https://www.flickr.com/photos/telstar/754414541 

- McCue, D. (2019, April 21). Blame the signs: When recycling is confusing, we avoid it | CBC radio. CBCnews. https://www.cbc.ca/radio/checkup/blame-the-signs-when-recycling-is-confusing-we-avoid-it-1.5105683

- Republic Services. (n.d.). https://www.republicservices.com/blog/5-signs-youre-an-aspirational-recycler

- 13, R. C. |March, Cho, R., Piazza, J., Villegas, V., Gordon, D., B, E., kuemin, J., Anonymous, L, P., Doe, J., Barry, U, L., Thaler, J., Fecht, S., S, D., Forest, D., Bill, Smith, A. R., M, L., … sr, R. S. H. (2022, October 18). Recycling in the U.S. is broken. how do we fix it?. State of the Planet. https://news.climate.columbia.edu/2020/03/13/fix-recycling-america/ 

- Thomas, D., Lattimer, D., & Wire, N. M. (2022, December 11). New survey discovers why most people don’t recycle. WATE 6 On Your Side. https://www.wate.com/news/new-survey-discovers-why-most-people-dont-recycle-2/#:~:text=But%20only%20about%2035%25%20of,a%20lack%20of%20convenient%20access

- United Nations. (2022). - SDG indicators. United Nations. https://unstats.un.org/sdgs/report/2022/goal-12/

- Wood, J. (2021, November 18). This is what stops people from recycling more, finds a global survey. World Economic Forum. https://www.weforum.org/agenda/2021/11/barriers-to-recycling-sustainability-survey/

