#!/bin/bash

# change path to home directory
cd $HOME

#create an empty folder named sample inside home directory 
mkdir -p sample

# change directory to sample
cd sample

#create sample.txt file
touch sample.txt

filename='sample.txt'

# Adding line to sample.txt
echo "Hi! This is just a sample text file created using shell script" >>  $filename

# printing occurence of 't' in sample.txt
cat $filename | grep -i -o 't' | wc -l

# change mode of file
chmod u+rwx sample.txt

# Appending line to file 
echo "This is just another sample text added to file" >> $filename

# Change mode to read only for groups
chmod g+r-wx sample.txt

# Change mode to restrict other user to access file
chmod o-rwx sample.txt

# created sample2.txt
touch sample2.txt

# Copy content of sample.txt to sample2.txt
cat sample.txt >>  sample2.txt

# Adding random 1000 lines
for i in {1..1000}
do
	echo "This line is numbered as $i" >> $filename
done

# Printing first 50 lines from start
head -50 sample.txt

# Printing last 50 lines from end
tail -50 sample.txt

# Created 5 files
touch prog1.txt prog2.txt program.txt info.txt code.txt

# Search for pattern prog in directory
ls | grep -i 'prog'

# Another way
#find . -name 'prog*'

# Creating alias using function 
func()
{
#echo "find . -name \'prog*\'"
ls | grep -i prog;
}

# Alias creation
alias list_prog="func"

#alias list_prog="find . -name $prog "

#alias

# Testing alias
${BASH_ALIASES[list_prog]}


# EOF
