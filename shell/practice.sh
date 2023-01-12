#!/bin/bash

# variable declaration
name="sheetal"
age=23
echo My name is $name and my age is $age






# reading user input 
echo what is your name??
read user

echo Hello $user






# if else 
echo what is your age ?
read age

if [ $age -ge 18 ]
then
    echo "You are eligible to vote"
else
    echo "Sorry !! you can't vote"
fi






# Switch 
echo Hello user
echo "1. Show date"
echo "2. Show all files"
echo "3. Show current working directory"

read choice

case $choice in
    1)date;;
    2)ls -ltr;;
    3)pwd;;
    *) echo "Invalid choice"

esac






# for loop
for x in {1..10}
do 
echo Number is $x
done


# while loop 
count=1
limit=10

while [ $count -le $limit ]
do 
    # let $count*$limit
    echo Hello $count
    let count++
done






# Iterate inside a file 
names='/home/deq/shell'

for item in $(cat $names/new_test)
do 
echo Items are $item
done