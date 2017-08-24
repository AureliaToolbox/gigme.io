REMOVE GITTER MESSAGE JUNK

8. Write out instructions for joining / participating
  a. Technology
    - Coinbase
    - Block.io
    - Hardware wallets - Trezor
    - Ruby on Rails
    - Aurelia
  b. Concepts
    - Permissions are mostly driven by inferring the user
      a. Most requests cannot be provided a wallet address or anything
      b. Controlling interest
  c. Joining
    - Instructions for setting up wallets
    - Instructions for joining CompleteContractCycle.com
      a. Explanation of Johns role
    - First task - only a beginner can do them
  c. Warnings disclaimers
    - All transactions must be approved by controlling interest
    - Not an exchange

6. Remove company onboarding and have it be by request-only.

### ----

x.x. Create a new model for controlling_interest
  x. Reference to the company
  b. Display company owner information
  c. Display company wallet balance

x. Add an approve payment workflow
  x. Add a list view of pending payment_requests
  x. Add approve button that
    x Marks the listing completed
    - Initiates the transfer of the remainder of the listing wallet to the requesting_user's wallet

9. Add service for checking network fees
  a. Show estimated network fee when requesting payment
    - RequestMoney dialog
  b. Show estimated network fee when sending money
    - SendMoney dialog

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
