class UsersController < ApplicationController
    skip_before_action :authorized, only: :create
    skip_before_action :planner_auth

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        session[:user_role] = user.role
        render json: user, status: :created
    end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user, status: :ok
    end

    def edit_profile
        if params[:avatar]
            current_user.avatar.attach(params[:avatar])
        end
        byebug
        current_user.update!(user_params)
        render json: current_user, status: :accepted
    end

    private

    def user_params
        params.permit(:email, :name, :password, :password_confirmation, :image, :bio, :id, :role, :phone_number, :instagram_handle, :pinterest_profile, :pronouns, :location, :avatar)
    end

end
