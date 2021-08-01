var students=[];
function submit()
{
    temp1=document.getElementById("s1").value;
    temp2=document.getElementById("s2").value;
    temp3=document.getElementById("s3").value;
    temp4=document.getElementById("s4").value;

    students.push(temp1);
    students.push(temp1);
    students.push(temp1);
    students.push(temp1);

    document.getElementById("result").innerHTML=students;
    document.getElementById("bsubmit").style.display="none";
    document.getElementById("bsort").style.display="inline";
}