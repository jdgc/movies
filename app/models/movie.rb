class Movie < ApplicationRecord

  def next_id
    self.id + 1
  end

  def previous_id
    self.id - 1
  end

end
