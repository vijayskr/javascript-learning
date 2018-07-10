var markHeight, johnHeight;

var markWeight, johnWeight;

markHeight = prompt("Enter Mark's Height");
johnHeight = prompt("Enter John's Height");

markWeight = prompt("Enter Mark's Weight");
johnWeight = prompt("Enter John's Weight");

var markBMI, johnBMI;

markBMI = markWeight / (markHeight * markHeight);
johnBMI = johnWeight / (johnHeight * johnHeight);

if(markBMI > johnBMI)
{
    alert("Is Mark's BMI greater than John's?, TRUE");
}
else
{
    alert("Is Mark's BMI greater than John's?, FALSE");
}