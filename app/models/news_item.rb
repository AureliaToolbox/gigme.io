class NewsItem
  include Mongoid::Document
  include Mongoid::Timestamps

  field :from_user, type: String
  field :name, type: String
  field :author, type: String
  field :text, type: String
  field :html, type: String
  field :views, type: Integer, default: 0
  field :posted, type: DateTime
  field :link, type: String

  embeds_many :likes
  embeds_many :news_contents
end
