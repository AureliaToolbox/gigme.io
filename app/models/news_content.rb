class NewsContent
  include Mongoid::Document

  field :name, type: String
  field :link, type: String

  embedded_in :news_item
end
