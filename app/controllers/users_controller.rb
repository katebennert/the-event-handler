class UsersController < ApplicationController
    skip_before_action :authorized, only: :create

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user, status: :ok
    end

    def set_avatar
        byebug
        if params[:avatar].present?
            begin 
                @current_user.avatar.attach(params[:avatar])
                @current_user.save!
                render json: @current_user, status: :ok
            rescue StandardError => e
                render json: {errors: ["Error uploading avatar: #{e.message}"]}, status: :internal_server_error
            end
        end
    end    

    private

    def user_params
        params.permit(:email, :password, :password_confirmation, :image, :bio, :avatar)
    end
end
