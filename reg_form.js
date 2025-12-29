let form=document.getElementById("reg");

form.addEventListener("submit",function(event){
    event.preventDefault();

    let name=document.getElementById("nme").value;
    name=name.trim();

    if(name.length<2){
        alert("Invalid name, atmost 2 characters needed!!");
        return;
    }

    for(let i=0;i<name.length;i++){
        if((name[i]<'A'&&name[i]!=' ')||name[i]>'z'||(name[i]>'Z'&&name[i]<'a')){
            alert("Invalid Name!!!");
            return;
        }
    }

    let email=document.getElementById("ml").value;
    email=email.trim();
    email=email.toLowerCase();

    if(email.length==0){
        alert("Please enter E-mail!!!");
        return;
    }

    let e=0;
    while(e<email.length&&email[e]!='@'){
        if(!((email[e]>='a'&&email[e]<='z')||email[e]=='.'||email[e]=='_'||email[e]=='-'||(email[e]>='0'&&email[e]<='9'))){
            alert("Invalid Email!!");
            return;
        }
        e++;
    }

    let domain=email.slice(e);
    if(domain!="@gmail.com"&&domain!="@yahoo.com"){
        alert("Invalid Email!!");
        return;
    }

    let number=document.getElementById("contct").value;
    number=number.trim();

    if(number.length!==10){
        alert("Enter Valid Contact Number!!");
        return;
    }

    for(let i=0;i<number.length;i++){
        if(!(number[i]>='0'&&number[i]<='9')){
            alert("Enter Valid Contact Number!!");
            return;
        }
    }

    let dob=document.getElementById("dob").value;
    if(dob===""){
        alert("Enter Date!!!");
        return;
    }

    let selecteddate=new Date(dob);
    let today=new Date();
    if(selecteddate>today){
        alert("Select a Valid Date!!");
        return;
    }

    let Gender=document.querySelector('input[name="gender"]:checked');
    if(!Gender){
        alert("Select your Gender!!");
        return;
    }
    let gendervalue=Gender.value;

    let colg_name=document.getElementById("collg").value;
    colg_name=colg_name.trim();

    if(colg_name.length<5){
        alert("Invalid name, atmost 2 characters needed!!");
        return;
    }

    for(let i=0;i<colg_name.length;i++){
        if((colg_name[i]<'A'&&colg_name[i]!=' ')||colg_name[i]>'z'||(colg_name[i]>'Z'&&colg_name[i]<'a')){
            alert("Invalid Name!!!");
            return;
        }
    }

    let registrtn=document.getElementById("roll").value;
    registrtn=registrtn.trim();

    if(registrtn.length!==8){
        alert("Enter Valid Registration Number!!");
        return;
    }

    for(let i=0;i<registrtn.length;i++){
        if(!(registrtn[i]>='0'&&registrtn[i]<='9')){
            alert("Enter Valid registration Number!!");
            return;
        }
    }

    let degree=document.getElementById("deg").value;
    if(degree===""){
        alert("Please select your degree!!");
        return;
    }

    let branch=document.getElementById("brnch").value;
    if(branch===""){
        alert("Please select your branch!!");
        return;
    }

    let year=document.getElementById("yr").value;
    if(year===""){
        alert("Please select your current year!!");
        return;
    }

    let modeip=document.querySelector('input[name="mode"]:checked');
    if(!modeip){
        alert("Please select your mode of study ");
        return;
    }
    let study=modeip.value;

    let income=document.getElementById("incm").value;
    if(income===""){
        alert("Enter your income!! ");
        return;
    }

    const checkedBoxes=document.querySelectorAll('input[name="interest"]:checked');
    let interests=[];
    for(let i=0;i<checkedBoxes.length;i++){
        interests.push(checkedBoxes[i].value);
    }

    if(interests.length===0){
        alert("Please select at least one interest");
        return;
    }

    let address=document.getElementById("cit").value;
    if(address===""){
        alert("Please select your city!!");
        return;
    }

    let pincode=document.getElementById("pin").value;
    pincode=pincode.trim();

    if(pincode.length!==6){
        alert("Enter valid pincode!!");
        return;
    }

    for(let i=0;i<pincode.length;i++){
        if(!(pincode[i]>='0'&&pincode[i]<='9')){
            alert("Enter valid pincode!!");
            return;
        }
    }

    let username=document.getElementById("user").value;
    username=username.trim();

    if(username.length<4){
        alert("Invalid username, must have 4-15 characters!!");
        return;
    }

    if(!(username[0]>='a'&&username[0]<='z')){
        alert("Usename must start with lowercase character ");
        return;
    }

    for(let i=0;i<username.length;i++){
        if(!((username[i]>='a'&&username[i]<='z')||(username[i]>='0'&&username[i]<='9')||username[i]=='_'||username[i]=='.')){
            alert("Username can contain only letters, numbers, _ and .");
            return;
        }
    }

    let password=document.getElementById("pswrd").value;
    password=password.trim();

    if(password.length<8){
        alert("Password must atleast have 8 characters!!");
        return;
    }

    let hasupper=false,haslower=false,hasnumbr=false,hasspecl=false;
    for(let i=0;i<password.length;i++){
        if(password[i]>='A'&&password[i]<='Z'){
            hasupper=true;
        }
        else if(password[i]>='a'&&password[i]<='z'){
            haslower=true;
        }
        else if(password[i]>='0'&&password[i]<='9'){
            hasnumbr=true;
        }
        else if(password[i]==' '){
            alert("Invalid password!!");
            return;
        }
        else{
            hasspecl=true;
        }
    }

    if(!(hasupper==true&&haslower==true&&hasnumbr==true&&hasspecl==true)){
        alert("Invalid password, Must contain atleast 1 uppercase, lowercase, special character, number!!");
        return;
    }

    const student={
        name:name,
        email:email,
        contact:number,
        dob:dob,
        gender:gendervalue,
        degree:degree,
        branch:branch,
        year:year,
        mode:study,
        income:income,
        interests:interests,
        city:address,
        username:username,
        password:password
    };

    let students=JSON.parse(localStorage.getItem("students"))||[];
    students.push(student);
    localStorage.setItem("students",JSON.stringify(students));

    confirm("FORM SUBMITTED SUCCESSFULLY");
    form.reset();
});
