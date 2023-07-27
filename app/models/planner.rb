class Planner < User

    def self.all
        User.where(role: 'planner')
    end

end