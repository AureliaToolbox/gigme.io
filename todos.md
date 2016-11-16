## Before beta

1. Add onboarding process that allows joining a company

1. Allow creating / joining a company later

1. Clicking on a message should show details and allow replying

1. In message list, should be able to click to respond
  a. Possible also click to open user details

x. Don't allow updating if not current user or admin
  a. Need to test

x. Don't allow sending messages if not logged in
  a. Check other things like this
  x. Need to test

x. Should have a reference from user/message/to and from back to a user
  x. Return a name label from the API
  x. Show the name in the message list

## Later

Clean up developer details
Clean up listing details
Add company details?

Add a virtual scroll

Consider not augmenting with JavaScript if user isn't logged in

Ellipsis the message in the view


# User

x. Ability to log in is priority one

x. User management to set profile settings
  x. Availability
  x. User info (everything in user.rb)
  c. Hidden status to go ghost-mode
  d. Specialities
  x. Experience
  x. Links

1. Add ability to rate previous company
x. Add ability to add links

# Developers

x. Click to read details
  x. Show dialog with info
  x. Ability to click interested button to send message
x. Can filter based on columns

# Listings

1. Allow logged in company user to add a listing

1. Can click to read details
  a. Show dialog with info
  b. Ability to click interested button to send message
x. Can filter based on columns
1. Add approval button for admins only
1. Add back-end check for authorization

# Company

1. Manage open listings
  a. Should only be able to edit their own listings
  a. Add listing info
  b. Close listing
  c. Can bump 1x per day
1. Add ability to rate previous user

# Admin

1. CRUD operations for all types
