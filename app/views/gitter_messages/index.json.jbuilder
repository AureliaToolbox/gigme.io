json.array!(@gitter_messages) do |gitter_message|
  json.extract! gitter_message, :id, :from_user, :text, :html, :sent, :unread
  json.url gitter_message_url(gitter_message, format: :json)
end
