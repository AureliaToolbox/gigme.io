require 'test_helper'

class GitterMessagesControllerTest < ActionController::TestCase
  setup do
    @gitter_message = gitter_messages(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:gitter_messages)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create gitter_message" do
    assert_difference('GitterMessage.count') do
      post :create, gitter_message: { from_user: @gitter_message.from_user, html: @gitter_message.html, sent: @gitter_message.sent, text: @gitter_message.text, unread: @gitter_message.unread }
    end

    assert_redirected_to gitter_message_path(assigns(:gitter_message))
  end

  test "should show gitter_message" do
    get :show, id: @gitter_message
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @gitter_message
    assert_response :success
  end

  test "should update gitter_message" do
    patch :update, id: @gitter_message, gitter_message: { from_user: @gitter_message.from_user, html: @gitter_message.html, sent: @gitter_message.sent, text: @gitter_message.text, unread: @gitter_message.unread }
    assert_redirected_to gitter_message_path(assigns(:gitter_message))
  end

  test "should destroy gitter_message" do
    assert_difference('GitterMessage.count', -1) do
      delete :destroy, id: @gitter_message
    end

    assert_redirected_to gitter_messages_path
  end
end
