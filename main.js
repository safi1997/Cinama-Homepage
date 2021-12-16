document.addEventListener('DOMContentLoaded', function () {

    const list = document.querySelector('#movie-list ul');
    const forms = document.forms;
    
    //delete Movie
    list.addEventListener('click', (e) => {
        if (e.target.className == 'delete') {
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        }
    });
  
    //add movie
    const addform = forms['add-movie'];
    addform.addEventListener('submit', function (e) {
        e.preventDefault();
        
        //creating element
        const value = addform.querySelector('input[type="text"]').value;
        const li = document.createElement('li');
        const movieName = document.createElement('sppan');
        const deleteBtn = document.createElement('span');

        // add text content
        movieName.textContent = value;
        deleteBtn.textContent = 'delete';

        //add Class
        movieName.classList.add('name');
        deleteBtn.classList.add('delete');
        //append to DOM
        li.appendChild(movieName);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    });

    
})

  