class Wallet
  include Mongoid::Document
  include Mongoid::Timestamps

  field :label, type: String
  field :total_value, type: Float, default: 0.0
  field :total_available_balance, type: Float, default: 0.0
  field :total_pending_received_balance, type: Float, default: 0.0
  field :network, type: String, default: 'ltc'

  belongs_to :user
  belongs_to :company
  has_many :addresses

  def create_address(label = nil)
    if (label.blank?)
      owner_id = user.present? ? user.id : company.id
      time = Time.now.getutc.to_i
      label = "#{owner_id}@#{time}"
    end

    address_info = BlockIoWrapper.get_new_address :label => label

    address_data = (address_info['data'] || address_info[:data])

    address = Address.create(address_data)
    address.wallet = self
    address.save!
    address
  end
end
