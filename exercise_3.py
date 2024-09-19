# Excerise 3 - create a mini-ATM program that requires 
# the user to provide:
# 1) opening Balance
# 2) Amount to widthdraw
 # and the calculate the remaning balance
 #using conditonal logic, demonstrate how the program can prevent the user from overdrawing form their bank account( negative balance)



opening_balance = float(input("Enter your opening balance: "))

withdrawal_amount = float(input("Enter the amount you want to withdraw: "))

if withdrawal_amount > opening_balance:
    
    print("Insufficient funds! You cannot withdraw more than your current balance.")
else:
    
    remaining_balance = opening_balance - withdrawal_amount
    print(f"Transaction successful! Your remaining balance is: {remaining_balance:.2f}")
