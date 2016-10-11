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
