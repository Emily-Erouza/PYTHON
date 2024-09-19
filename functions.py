# functions help you  to package your code into re-usable block of code
# that can be excuted as  a unit

# Step 1 - Define the function (no arguments)
def display_person_details():
    first_name = "Farai" # hardcoded values
    last_name = "Mutero"  # hardcoded values
    full_name = first_name + " " + last_name
    print("Your name is : " + full_name)
 
# Step 2 - Execute the function
display_person_details()
    
    # -------------
    #  define functions with arguments
def display_user_details(name, surname):
    first_name = name
    last_name = surname
    full_name = first_name + " " + last_name
    print("Your name is : " + full_name)
 
# Step 2 - Execute the function
display_user_details("Feria", "Ndlovu")