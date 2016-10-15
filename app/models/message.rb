class Message
  include Mongoid::Document
  include Mongoid::Timestamps

  field :title, type: String
  field :body, type: String
  field :from_user_id, type: Integer
  field :to_user_id, type: Integer
  field :created_date, type: Time
  field :received_date, type: Time
  field :reply_message_id, type: Integer
  embedded_in :user
  embedded_in :message
end
