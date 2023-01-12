#!/bin/bash


cd $HOME
mkdir -p sample
cd sample
touch sample.txt
filename='sample.txt'

echo "Hi! This is just a sample text file created using shell script" >>  $filename
count=0

if [ sample.txt  ]
then
cat $filename | grep -i -o 't' | wc -l
fi

chmod u+rwx sample.txt
echo "This is just another sample text added to file" >> $filename
chmod g+r-wx sample.txt
chmod o-rwx sample.txt
touch sample2.txt
cat sample.txt >>  sample2.txt

for i in {1..1000}
do
	echo "This line is numbered as $i" >> $filename
done
head -50 sample.txt
tail -50 sample.txt

touch prog1.txt prog2.txt program.txt info.txt code.txt
ls | grep -i 'prog'

func()
{
echo 'ls | grep -i prog'
}
alias list_prog="$(func)"

alias
${BASH_ALIASES[list_prog]}


