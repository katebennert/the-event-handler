class User < ApplicationRecord
    has_secure_password
    has_one_attached :avatar, service: :cloudinary
    has_many :comments

    self.inheritance_column = :role

    validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP, message: "must be a valid email address" }
    validates :password, length: { minimum: 8, maximum: 20 }, on: :create
    validates :role, inclusion: { in: ["Client", "Planner"], message: "must be 'Client' or 'Planner'" }
    validates :name, presence: true, on: :update
    validates :location, presence: true, on: :update
    validates :phone_number, presence: true, on: :update

end
