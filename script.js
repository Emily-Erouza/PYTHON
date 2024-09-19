1+1
2
>>> 5*6
30
>>> PI = 3.14
>>> PI
3.14
>>> a = 5
>>> b = 9
>>> a + b
14
>>> a
5
>>> b = 10
>>> a + b
15
>>> c = a + b 
>>> c
15
>>> x = 1 #integer
>>> y = 2.5 #decimal
>>> x = 4
>>> x * y
10.0
>>> y / x
0.625
>>> print (x)
4
>>> 22/7
3.142857142857143
>>> pi_value = 22/7
>>> print (pi_value)
3.142857142857143
>>> print(type(pi_value))
<class 'float'>
>>> name ='john'
>>> name
'john'
>>> print (type(name))
<class 'str'>
>>> surname ='Doe'
>>> surname
'Doe'
>>> name + surname
'johnDoe'
>>> name + "" + surname
'johnDoe'
>>> fullname = name + "" + surname
>>> z = True
>>> z
True
>>> y = false
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'false' is not defined. Did you mean: 'False'?
>>> y = False
>>> x = "False"
>>> type(y)
<class 'bool'>
>>> type(x)
<class 'str'>
>>> a = 67
>>> b = 45
>>> result = a > b
>>> result
True
>>> result = a < b
>>> result
False
>>> #Python list
>>> fruit_list = ["apple","banana","cheery"]
>>> fruit_list
['apple', 'banana', 'cheery']
>>> fruit_list[0]
'apple'
>>> fruit_list.apppend("pear")
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: 'list' object has no attribute 'apppend'. Did you mean: 'append'?
>>> fruit_list.append("pear")
>>> fruit_list
['apple', 'banana', 'cheery', 'pear']
>>> fruit_list.remove("banana")
>>> fruit_list
['apple', 'cheery', 'pear']
>>> len(fruit_list)
3
>>> 
KeyboardInterrupt
>>> print (name + "is " + str(age) + " years old") 
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'age' is not defined
>>> print (name + "is " + str(age) + "years old") 
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'age' is not defined
>>> fruit_list
['apple', 'cheery', 'pear']
>>> print ("My favourite fruit is" +  fruit_lis[2])
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'fruit_lis' is not defined. Did you mean: 'fruit_list'?
>>> print ("My favourite fruit is" +  fruit_lis[2])
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'fruit_lis' is not defined. Did you mean: 'fruit_list'?
>>> print ("My favourite fruit is" +  fruit_lis[2])
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'fruit_lis' is not defined. Did you mean: 'fruit_list'?
>>> print ("My favourite fruit is" +  fruit_lis[2])
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'fruit_lis' is not defined. Did you mean: 'fruit_list'?
>>> print ("My favourite fruit is" + fruit_list[1])
My favourite fruit ischeery
>>> my_input = input("Enter a number: ")
Enter a number: 45
>>> print(my_input)
45
>>> print(type(my_input))
<class 'str'>
>>> my_other_input = input("Enter a 2nd number: ")
Enter a 2nd number: 60
>>> print (my_input + my_other_input)
4560
>>> print (my_input + my_other_input)
4560
>>> print (int(my_input) + int(my_other_input))
105
>>> mini_atm = input("Enter opening balance: ")
Enter opening balance: 400
>>> print(mini_atm)
400
>>> my_mini_atm = input("Enter the amount you want to withdraw: ")
Enter the amount you want to withdraw: 800
>>> print(my_mini_atm)
800
>>> print(int(mini_atm) + int(my_mini_atm))
1200
>>> remaning_balance = mini_atm - my_mimi_atm
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'my_mimi_atm' is not defined. Did you mean: 'my_mini_atm'?
>>> print("remaining_balance" - int(mini_atm) - int(my_mini_atm))
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: unsupported operand type(s) for -: 'str' and 'int'
>>> print(int(mini_atm) - int(my_mini_atm))
-400
>>> remaining balance = mini_atm - my_mini_atm
  File "<stdin>", line 1
    remaining balance = mini_atm - my_mini_atm
              ^^^^^^^
SyntaxError: invalid syntax
>>> remaining_balance = mini_atm - my_mini_atm
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: unsupported operand type(s) for -: 'str' and 'str'
>>> print


