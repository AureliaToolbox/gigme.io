TESTS HERE

0. Add ability to cancel a listing with zero balance
0. Add text about verifying Litecoin address
0. Add text about making sure to clear your own wallet out when requesting payment
0. Add flag for ifCharging fees if not already there

0. Add ability to reject a payment request
  a. Add a payment request status
    - created
    - approved
    - rejected

### ----

x.x. Create a new model for controlling_interest
  x. Reference to the company
  b. Display company owner information
  c. Display company wallet balance

x. Add an approve payment workflow
  x. Add a list view of pending payment_requests
  x. Add approve button that
    x Marks the listing completed
    x Initiates the transfer of the remainder of the listing wallet to the requesting_user's wallet

---

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
  a. Research allowing the user to set their own personal wallet instead
100. Update the landing pages and such to show what the service is doing
