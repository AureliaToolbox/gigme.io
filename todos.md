REMOVE GITTER MESSAGE JUNK

0. Restrict access and remove server rendered pages if not authenticated

1. Add service for creating wallets
  x. By user
    x User should get a new wallet created when signing up and verified
    x Display users wallet information on account home
      x. Show the wallet address
        x This should allow users to fill their wallet
  b. By development item

x. Add service for checking wallet balance
  a. Should be agnostic of coin type (btc, ltc, eth)
  x. Should have a get current price call to calculate USD

x. Make sure whenever we get wallet information we persist it

0. Publish out all current changes
  a. Go update the data references for the production instance

6. Remove company onboarding and have it be by request-only.

### ----

x.x. Create a new model for controlling_interest
  x. Reference to the company
  b. Display company owner information
  c. Display company wallet balance

7.5. When approving payment, use controlling_interest for approving the redistribution
  a. Superadmin has sole control to approve payment from this wallet

8. Add an approve payment workflow
  a. Add a list view of pending payment_requests
  a. Add approve button that
    - Marks the listing completed
    -
    - Initiates the transfer of the remainder of the listing wallet to the requesting_user's wallet


---

5. Refactor the listing to support development items for a company to start.
  a. Charge a transaction fee of $15 per listing
  a. Add a approval_link
  a. Add a scope to the listing to only return uncompleted listings
  a. Add a route for completing a listing
  a. Do not allow updating approval from client_side

7. Add ability to request to work on a listing
  a. User clicks to request to work on an issue
  b. Must be approved by company who created the listing
  c. Must be approved by admin
  d. If approved, assign the listing to the user
   - Should create a new transaction and return the url
      0. Create transaction from feature template
      1. Transaction should create a document from template as well
      2. Document should create new clauses -
        a. Introduction and list parties
        b. Description of feature
        c. Requirements / Acceptance Criteria
        d. Acceptance

8. Add ability to resolve development item
  a. Can only be done by assigned developer
  b. Mark status as fix proposed
  c. Once approved by company goes to final approval by admin
  d. Once admin approves, create entry to enable the transaction
  e. Admin view only, this should somehow be single-threaded if possible to prevent multiple movements.

4. Add ability to withdraw from personal wallet.  Creates a request to take the money out.
  a. Later
100. Update the landing pages and such to show what the service is doing


## Before beta

x. Allow creating / joining a company later
  x. Need to see why this isn't finding a company
  b. Working on accounts page, check onboarding

1. In message list, should be able to click to respond
  a. Possible also click to open user details

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
