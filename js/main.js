// IOS toggle
// Show or hide input when toggle ios checkbox

document.querySelector("#ios-toggle").addEventListener('click', function(){
    if (this.checked){
        document.querySelector('#bail-input').classList.remove('display-none');
    } else {
        document.querySelector('#bail-input').classList.add('display-none');
    }
})

