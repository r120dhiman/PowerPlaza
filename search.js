document.addEventListener('DOMContentLoaded', function () {
    let list_available = ['fan', 'washing machine', 'freeze', 'electric iron', 'water pump', 'tube-light', 'air conditioner', 'bulb', 'electric Socket', 'electric switch board'];
    
    const inputbox = document.getElementById("inputbox");
    
    // Check if inputbox exists before attaching event listener
    if (inputbox) {
        inputbox.addEventListener('input', function(){
            let result = [];
            let input = inputbox.value;
            if (input.length) {
                result = list_available.filter((keyword) => keyword.toLowerCase().includes(input.toLowerCase()));
                console.log(result);
            }
        });
    } else {
        console.error("Element with id 'inputbox' not found.");
    }
    display(result)
});
function display(result){

    const content =result.map  ((list)=>{
        return"<li>" + list+"<li>";
    });
    resultbox.innerHTML     = "<ul>" + content +"</ul>";
}
