class Movie < ApplicationRecord

  def next_id
    self.class.where('id > ? AND rating = ?', self.id, 0).pluck(:id).first
  end

  def previous_id
    self.class.where('id < ? AND rating = ?', self.id, 0).pluck(:id).last
  end

end
