listing.rb
  title: string
  description: string
  created_date: datetime
  updated_date: datetime
  company_id: integer
  type_id: integer

listing_type.rb
  name: string

user.rb
  first_name: string
  last_name: string
  dob: datetime
  email: string
  availability: listing_type lookup
  experience_level: experience_level lookup
  rating: float

company.rb
  name: string
  website: string
  main_contact_id: integer

message.rb
  title: string
  body: string
  from_user_id: integer
  to_user_id: integer
  created_date: datetime
  received_date: datetime
  reply_message_id: integer

## NEW

Availability (should be a listing type also?)
experience_level.rb
  name: string
