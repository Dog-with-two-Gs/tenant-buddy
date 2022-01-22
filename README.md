[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# tenant-buddy
https://github.com/Dog-with-two-Gs/tenant-buddy.git

https://tenant-buddy.herokuapp.com/

## Description

This app was created for property managers to offer services to renters, starting with a laundry machine reservation system. In future versions, tool borrowing and parking management will be available. We created a homepage which will allow the user to sign in or create an account. The user will then be able to select a service and view their reservation status, notifications and a message board. For the first version of this app, the laundry button and reservation board will be enabled. When selecting the laundry button, the user will be directed to a page which allows them to choose whether they would like to reserve a washer or a dryer as well a button they can click to manage existing reservations. When the user selects which machine type they would like to use, they will be directed to a page which shows them which washers/dryers are available. Then they will select their reservation times from drop down start time and end time menus and search if those times are available. 

# Usage

```md
GIVEN a CMS-style webpage,
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes a navigation bar which includes a logout button, as well as sign up and login buttons
WHEN I click on the Navigation bar
THEN Profile, Reservation and Contact tabs appear
WHEN I select the Profile tab
THEN I am directed to a page which displays my account information (name, contact info, etc.);
WHEN I select the Reservation tab
THEN I am directed to a New Reservation page
THEN I am presented with the options for washers and dryers available now and drop down menus to search start time for washers and dryers
WHEN I select a washer or dryer from washers/dryers available
THEN the selected washer/dryer will disappear from the page to confirm my reservation
WHEN I select start time from the drop down menus and click the search button
THEN the washers that are available at those times will be displayed and I may select one;
WHEN I select the Contact tab
THEN I am directed to the Contact Page which displays the complex's address and property management information;
WHEN I click on the sign up option
THEN I am prompted to create a username and password;
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see the dashboard page, which includes laundry, tool rental and parking management buttons and my reservation status, notifications and a message board. 
WHEN I click on the laundry button on the dashboard page
THEN I am directed to the Create Reservation page, which includes buttons to choose washers or dryers and a drop down menu for reservation times
WHEN I select a time and click on the Washer or Dryer button
THEN I am directed to the Available page which includes a list of machines available at/around the requested time; 
WHEN I select a washer or dryer from Machines Available Now on the Create Reservation page 
THEN the selected washer/dryer will disappear from the page to confirm my reservation
```



# Contribution Guidelines
Report bug and feature requests.

# Questions
If you have any questions, please contact us on https://github.com/Dog-with-two-Gs/tenant-buddy

# License 
Licensed under [MIT License](https://opensource.org/licenses/MIT).

