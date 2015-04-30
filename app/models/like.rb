class Like
  include Mongoid::Document
  include Mongoid::Timestamps

  field :user_id, type: String

  embedded_in :news_item
end
