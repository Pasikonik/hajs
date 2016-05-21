# Preview all emails at http://localhost:3000/rails/mailers/new_bill_mailer
class NewBillMailerPreview < ActionMailer::Preview
  def pronounce_preview
    NewBillMailer.pronounce(User.last.id, Bill.last.id)
  end
end
