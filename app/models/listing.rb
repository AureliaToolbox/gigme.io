class Listing
  include Mongoid::Document
  include Mongoid::Timestamps

  field :title, type: String
  field :description, type: String
  field :company_id, type: String
  field :listing_type_id, type: String
  belongs_to :company
  belongs_to :listing_type
end
