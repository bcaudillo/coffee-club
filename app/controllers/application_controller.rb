class ApplicationController < ActionController::API
  include ActionController::Cookies



  def current_user
    user_id = session[:user_id]
    user = User.find(user_id)
    return user
  end


  def authorized
    return render json:{error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
  end
end
