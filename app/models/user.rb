class User < ApplicationRecord
    has_secure_password
    has_one_attached :avatar

    validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP, message: "must be a valid email address" }
    validates :password, length: { minimum: 8, maximum: 20 }
end
