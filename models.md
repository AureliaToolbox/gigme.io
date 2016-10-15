rails g model user first_name:string last_name:string dob:datetime email:string

rails g model company name:string website:string main_contact_id:integer user:references

rails g model listing_type name:string

rails g model listing title:string description:string company:references listing_type:references

rails g model message title:string body:string user:references from_user_id:integer to_user_id:integer created_date:datetime received_date:datetime reply_message_id:integer message:references
