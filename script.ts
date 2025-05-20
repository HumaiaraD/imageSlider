

const listItem = document.querySelectorAll('ul li');

listItem.forEach(li => {
    li.addEventListener('click', () => {
        listItem.forEach(item => {
            item.classList.remove('expanded');
        })

        li.classList.add('expanded');
        
    })
})
