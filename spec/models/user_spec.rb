require 'rails_helper'

RSpec.describe User do
  describe 'is_current_user' do
    before(:each) do
      @current_user = User.new(id: 1)
    end

    it 'returns false when not user' do
      result = @current_user.is_current_user?(-1)
      expect(result).to eq(false)
    end

    it 'returns true when is user' do
      result = @current_user.is_current_user?(@current_user.id)
      expect(result).to eq(true)
    end
  end
end
