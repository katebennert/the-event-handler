class Client < User

    def self.all
        User.where(role: 'client')
    end

end