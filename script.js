let obj = [
    {
        id: 1,
        work: "Dry Cleaning",
        link: "https://img.icons8.com/external-konkapp-outline-color-konkapp/64/external-dry-cleaning-laundry-konkapp-outline-color-konkapp.png" ,
        price: 200,
        isAdded: false
    },
    {
        id: 2,
        work: "Wash & Fold",
        link: "https://img.icons8.com/color-glass/48/wash-by-hand.png",
        price: 100,
        isAdded: false
    },
    {
        id: 3,
        work: "Ironing",
        link: "https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/external-ironing-stay-at-home-flatart-icons-flat-flatarticons.png",
        price: 30,
        isAdded: false
    },
    {
        id: 4,
        work: "Stain Removal",
        link: "https://img.icons8.com/external-obvious-flat-kerismaker/48/external-clean-clothes-laundry-flat-obvious-flat-kerismaker.png",
        price: 500,
        isAdded: false
    },
    {
        id: 5,
        work: "Stain Removal",
        link: "https://img.icons8.com/external-obvious-flat-kerismaker/48/external-clean-clothes-laundry-flat-obvious-flat-kerismaker.png",
        price: 999,
        isAdded: false
    },
    {
        id: 6,
        work: "Wedding Dress Cleaning",
        link: "https://img.icons8.com/external-obvious-flat-kerismaker/48/external-clean-clothes-laundry-flat-obvious-flat-kerismaker.png",
        price: 2800,
        isAdded: false
    }

]

             
function update() {
    let ui = "";

    obj.forEach((item) => {
        ui += `
            <div class="dry-cleaning service-item">
                <span>
                    <img width="24" height="24" src="${item.link}" />
                    ${item.work}
                </span>
                <span class="price">${item.price}</span>
                <button class="add-item">Add Item <span class="plus">+</span></button>
            </div>
        `;
    });

    document.querySelector('#service-list').innerHTML = ui;
}

update();

document.querySelector('#service-list').addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;

    if (btn.classList.contains('add-item')) {
        console.log("added");
        btn.classList.remove('add-item');
        btn.classList.add('remove-item');
        btn.innerHTML = 'Remove Item <span class="minus">-</span>';
        obj.e.isAdded = true;
    } 
    else if (btn.classList.contains('remove-item')) {
        console.log("removed");
        btn.classList.remove('remove-item');
        btn.classList.add('add-item');
        btn.innerHTML = 'Add Item <span class="plus">+</span>';
        obj.e.isAdded = true;

    }
});


function updatecart() {
    let ui2 = " ";
    var cnt = 1;

    obj.forEach((item) =>{
    
                if(item.isAdded == true){
                    ui2 += `
                    <div style="display: flex;">
                        <span style="width: 13%;">${cnt}</span>
                        <span style="width: 75%;">${item.work}</span>
                        <span class="price">${item.price}</span>
                    </div>
                    `
                }

        cnt++;
        })

    document.querySelector('#cart-list').innerHTML = ui2;
}

updatecart();




document.querySelector('.book-now').addEventListener('click', ()=>{
    const name = document.querySelector('#Naam');
    const email = document.querySelector('#email_id');
    const phone = document.querySelector('#contact_no');

    if(name.checkValidity() && email.checkValidity() && phone.checkValidity()){
        var book = document.querySelector('.btn-book-now');
        book.innerHTML += `<span style="color:rgb(32 186 16);">🛈 Email has been sent successfully</span>`;
        alert('Thankyou for booking!');
    }
    else{
        name.reportValidity();
        email.reportValidity();
        phone.reportValidity();
    }
    
})
