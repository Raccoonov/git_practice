#!/bin/bash
###
### Loops and conditions
first_greeting="Nice to meet you!"
later_greeting="How are you?"
greeting_occasion=0

while [ $greeting_occasion -lt 3 ]
do

if [ $greeting_occasion -lt 1 ]
then
  echo $first_greeting
else
  echo $later_greeting
fi

  greeting_occasion=$((greeting_occasion + 1))

done
###
### Getting User input at READ
#!/bin/bash
first_greeting="Nice to meet you!"
later_greeting="How are you?"
greeting_occasion=0

echo "How many times should I greet?"

read greeting_limit

while [ $greeting_occasion -lt $greeting_limit ]
do
  if [ $greeting_occasion -lt 1 ]
  then
    echo $first_greeting
  else
    echo $later_greeting
  fi
  greeting_occasion=$((greeting_occasion + 1))
done
 ###
 ### SOURCE CODE BUILD SCRIPT
 #!/bin/bash
echo "Hello there!"

firstline=$(head -n 1 source/changelog.md)
read -a splitfirstline <<< $firstline
version=${splitfirstline[1]}

echo "You are building version" $version
echo 'Do you want to continue? (enter "1" for yes, "0" for no)'
read versioncontinue

if [ $versioncontinue -eq 1 ]
then
  echo "OK"
else
  echo "Please come back when you are ready"
fi

for filename in source/*
do
  echo $filename
done

if [ "$filename" == "source/secretinfo.md" ]
then
  echo "Not copying" $filename
else
  echo "Copying" $filename
  cp $filename build/.
fi

cd build/
echo "Build version $version contains:"
ls
cd ..

###
### NOTES:
#Copy secretinfo.md but replace “42” with “XX”.
#Zip the resulting build directory.
#Give the script more character with emojis.
#If you are familiar with git, commit the changes in the build directory.