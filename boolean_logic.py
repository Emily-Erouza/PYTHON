# if statement - introduce conditional login into our python programs
# Two types of errors
# 1) syntax Errors - voilate the rules of the program lang
# 2) Logic error  - errors due to incorrecr logic with generates a wrong result


a = 55
b = 55

if a < b: #conditional expression
    print ("A is less than B")
else:
    print("A is greater than B")
    
    name = "Joe"
    # ----------
    if name != "":
        print("Your name is : " + name )
        
        # elif - is shorthand for else if
        
        if a < b:
            print("A is less than B")
        elif a == b:
            print("A is equal to B")
        else:
            print("A is greater than B")
    

# conditional operator & user input
first_name = input('Enter your name:')
last_name = input('Enter you last name:')
print ('Your full name is: ' + first_name + "" + last_name)