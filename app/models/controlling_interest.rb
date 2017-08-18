class ControllingInterest
  include Mongoid::Document
  include Mongoid::Timestamps

  belongs_to :company
end
