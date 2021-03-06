class User < ApplicationRecord
  belongs_to :place, required: false
  has_many :payments, inverse_of: :user

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  before_save :ensure_authentication_token

  def name
    pseudonym || email
  end

  def balance
    payments.where(status: 'wait').map(&:amount).sum
  end

  def ensure_authentication_token
    if authentication_token.blank?
      self.authentication_token = generate_authentication_token
    end
  end

  private

  def generate_authentication_token
    loop do
      token = Devise.friendly_token
      break token unless User.where(authentication_token: token).first
    end
  end
end
