# Excersie 4: 
# Using the loop of your choice, create a program that allows a user to add 
# a list of 5 car brands of their choice then display the full contents of the list 



# car_brands = []


# for i in range(5):
#     brand = input(f"Enter car brand {i+1}: ")
#     car_brands.append(brand) 


# print("\nHere are the car brands you entered:")
# for brand in car_brands:
#     print(brand)


car_brands = []
for i in range(5):
    brand = input("Enter car brand : ")
    car_brands.append(brand) 


print("Here are the car brands you entered:")
for brand in car_brands:
    print(brand)
    
    



car_brands = []

for i in range(5): 
    brand = input("Enter car brand " + str(i + 1) + ": ")
    car_brands.append(brand)

print("Your list of car brands:")
for brand in car_brands:
    print(brand)