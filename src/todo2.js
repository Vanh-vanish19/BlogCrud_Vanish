
const fetchBlogs =  async () =>{
    const response = await fetch("http://localhost:8000/blogs")
    const data = await response.json();
    console.log(data)

    const tbody = document.querySelector('#blogTable tbody')

    if(data && data.length){
        data.forEach((blog,index)=>{
            tbody.innerHTML +=`
            <tr>
                <td>${blog.id}</td>
                <td>${blog.title}</td>
                <td>${blog.author}</td>
                <td>${blog.content}</td>
                <td> <button class="delete" data-id="${blog.id}">Xóa</button></td>
            </tr>
            `
        })
    }
}


const addNewBlogToEnd = (blog) =>{
    const tbody = document.querySelector('#blogTable tbody')
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td>${blog.id}</td>
        <td>${blog.title}</td>
        <td>${blog.author}</td>
        <td>${blog.content}</td>
        <td> <button class="delete" data-id="${blog.id}">Xóa</button></td>
    `
    tbody.appendChild(newRow);
}


const handleAddBlog = ()=>{
    const title = document.getElementById('title')
    const author = document.getElementById('author')
    const content = document.getElementById('content')

    const saveBtn = document.getElementById('saveBtn')

    saveBtn.addEventListener('click', async (e) =>{
        e.preventDefault();
        console.log(title.value,author.value,content.value)

        const rawResponse = await fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {  
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({title : title.value, 
            author : author.value,
            content : content.value
            })
        });
        const data = await rawResponse.json();
        addNewBlogToEnd(data);
        title.value = '';
        author.value = '';
        content.value = '';
        handleDeleteBlogBtn();
    });
}

const handleDeleteBlogBtn = async() =>{
    const btnDelete = document.querySelectorAll('.delete');
    btnDelete.forEach((btn,index)=>{
        btn.addEventListener('click',async ()=>{
            const id = btn.getAttribute('data-id');
            alert('Bạn có chắc muốn xóa blog có id là ' + id)
            const rawResponse = await fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE',
            headers: {  
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            });
            const data = await rawResponse.json();
            const row = btn.closest('tr')
            row.remove();
        })
    })
}
fetchBlogs().then(()=>{
    handleDeleteBlogBtn();
});
handleAddBlog();


