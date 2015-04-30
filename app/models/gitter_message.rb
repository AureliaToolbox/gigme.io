class GitterMessage
  include Mongoid::Document
  field :from_user, type: String
  field :text, type: String
  field :html, type: String
  field :sent, type: DateTime
  field :unread, type: Boolean
end
