class Bar < ApplicationRecord
  has_many :menus
  has_many :items, through: :menus
end
