class Message
  include Mongoid::Document
  include Mongoid::Timestamps

  field :title, type: String
  field :body, type: String
  field :from_user_id, type: String
  field :to_user_id, type: String
  field :received_date, type: Time
  field :reply_message_id, type: Integer

  belongs_to :from_user, class_name: 'User', inverse_of: :from_messages
  belongs_to :to_user, class_name: 'User', inverse_of: :to_messages

  def as_json(options={})
    super(:only => [ :_id, :title, :body, :from_user_id, :to_user_id, :received_date, :reply_message_id, :created_at ],
      :include => {
        :from_user => {:only => [:name]},
        :to_user => {:only => [:name]}
      }
    )
  end
end
