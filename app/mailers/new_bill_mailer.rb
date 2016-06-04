class NewBillMailer < ApplicationMailer
  default from: 'hajsapp@gmail.com'

  def pronounce(user_id, bill_id)
    @user = User.find(user_id)
    @bill = Bill.find(bill_id)
    mail(to: @user.email, subject: "Nowy Rachunek: #{@bill.concern}")
  end
end
