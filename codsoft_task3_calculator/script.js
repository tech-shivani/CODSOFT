let input = document.getElementById("display");

let allBtns = document.querySelectorAll("button");

let str = '';
let arrBtn= Array.from(allBtns);

arrBtn.forEach(function(btn){
    btn.addEventListener('click',function(event){
        let btnValue = event.target.innerHTML;

        if(btnValue == '='){
            try {
                str = eval(str);
                input.value = str;
        } catch (e){
               input.value = "Error";
                str = '';
            }

         } else if (btnValue === 'AC') {
               str = '';
               input.value = str;
        }
         else if(btnValue === 'DEL') {
               str = str.substring(0, str.length-1);
               input.value = str;
        }
        else{
             str += btnValue;
             input.value = str;
             }

    });
});
