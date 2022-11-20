 const btnClose = document.querySelector("#close-modal");
 async function fetchTop(argument) {
    try{
         const res = await fetch("https://dummyjson.com/products/category/tops");
         const result = await res.json();
         renderTop(result.products);
    }
    catch{
       console.log(m)
    }
 }
 fetchTop();
 function renderTop(data) {
     let html = ``;
     for (const item of data) {
         console.log(data.thumbnail)
         console.log(data)
         html += `
			<div class="md:w-[23%] w-[49%] h-[300px] my-2 bg-slate-50 rounded-lg shadow">
                     <div class="w-full h-[150px] flex justify-center items-center"><img src="${item.thumbnail}" alt="" width="90px" height="90px"></div>
                     <div class="w-full h-[150px] flex flex-col justify-center p-4">
                         <p class="text-sm my-1 capitalize">${item.title}</p>
                         <p class="text-sm my-1"> $ ${item.price}</p>
                         <button class="text-sm px-3 py-1 bg-green-400 ml-auto rounded-full shadow text-white" onclick="detailTop(${item.id})">View More</button>
                     </div>
                </div>
            `;
     }
     document.querySelector("#tops-content").innerHTML = html;
 }

 async function detailTop(id) {
    try{
         openModal();
         const res = await fetch(`https://dummyjson.com/products/${id}`);
         const result = await res.json();
         renderDetailModal(result)
    }
    catch(m){
       console.log(m);
    }
 }

 function renderDetailModal(data) {
    let img=``;
    for(const item of data.images){
         img+=`<img src="${item}"  width="50px" height="50px" class="my-1" onclick="changeimage('${item}')">`;
    }
     html = `
         <img src="${data.images[0]}"  width="200px" height="100px" class="mx-auto my-2 block" id="parent-image">
         <div class="flex space-x-2 flex-wrap my-2">${img}</div>
        <p class="my-2 text-sm capitalize">${data.title}</p>
        <p class="my-2 text-sm capitalize">Price $ ${data.price}</p>
        <p class="my-2 text-sm capitalize">Brand ${data.brand}</p>
        <p class="my-2 text-sm capitalize">Stock ${data.stock}</p>
        <p class="my-2 text-sm capitalize"> ${data.description}</p>

 	`;
     document.querySelector("#modal-body").innerHTML = html;
 }
 function changeimage(src){
      document.querySelector('#parent-image').setAttribute('src',src);
 }
 function openModal() {
     document.querySelector("#modal").style.display = "block";
 }

 function closeModal() {
     document.querySelector("#modal").style.display = "none";
 }
 btnClose.addEventListener('click', closeModal);
