// HOME PAGE
// Only execute if the home page elements exist
let send = document.getElementById("send");
let cancel = document.getElementById("cancel");

if (send && cancel) {
    function userForm() {
        const f_name = document.getElementById("first_name");
        const l_name = document.getElementById("last_name");
        const email = document.getElementById("email");
        const address = document.getElementById("address");
        const city = document.getElementById("city");
        const province = document.getElementById("province");

        const name = `${f_name.value} ${l_name.value}`;
        const membership = document.querySelector('input[name="membership"]:checked').value;
        const full_address = `${address.value}, ${city.value}, ${province.value}`;

        const output = `
            <h2>User Information:</h2>
            <p><strong>Full Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email.value}</p>
            <p><strong>Address:</strong> ${full_address}</p>
            <p><strong>Membership:</strong> ${membership}</p>
        `;

        document.getElementById('output').innerHTML = output;
    }

    function cancelForm() {
        const form = document.getElementById("main-form");
        form.reset();

        // Resetting the membership to "Premium"
        document.getElementById('premium_memb').checked = true;

        // Clear the output
        document.getElementById('output').innerHTML = '';
    }

    send.addEventListener('click', userForm);
    cancel.addEventListener('click', cancelForm);
}


// EXCEL PAGE
// Only execute if the Excel page elements exist
let calculate = document.getElementById("calculate");

if (calculate) {
    function myExcelFuns() {
        const nbStr = document.getElementById("numbers").value;
        
        if (nbStr === "") {
            alert("You must enter numbers");
        } else {
            nbArr=nbStr.trim().split(" ");
            let finalnbArr = [];

            for (let i = 0; i < nbArr.length; i++) {
                const currentElement = nbArr[i];
        
                if (!isNaN(currentElement) && currentElement !== "" && currentElement !== ",") {
                    finalnbArr.push(Number(currentElement));
                }
            }



            let result = 0.0;

            if (document.getElementById("sum").checked){
                for (let i = 0; i < finalnbArr.length; i++){
                    result += finalnbArr[i];
                }
            }

            else if (document.getElementById("avg").checked){                
                let sum = 0
                for (let i = 0; i < finalnbArr.length; i++){
                    sum += finalnbArr[i];
                }
                result = sum/finalnbArr.length;
            }

            else if (document.getElementById("max").checked){
                result = Math.max(...finalnbArr);

            }

            else if (document.getElementById("min").checked){
                result = Math.min(...finalnbArr);
            }

            document.getElementById('result').value = result;
        }


        
    }


    //THEMES

    let purple=document.getElementById("purple");
    let yellow=document.getElementById("yellow");

    function setPurple(){
        document.getElementById("excel-form").className = "excelform purple-theme";
        document.getElementById("numbers").className = "purple-txt";
        document.getElementById("result").className = "purple-txt";
        document.getElementById("calculate").className = "purple-btn";
    }

    function setYellow(){
        document.getElementById("excel-form").className = "excelform yellow-theme";
        document.getElementById("numbers").className = "yellow-txt";
        document.getElementById("result").className = "yellow-txt";
        document.getElementById("calculate").className = "yellow-btn";
    }

    purple.addEventListener("click", setPurple);
    yellow.addEventListener("click", setYellow);

    calculate.addEventListener('click', myExcelFuns);

}