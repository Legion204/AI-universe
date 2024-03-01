const cardsContainer = document.getElementById('cards-container');
const showAllBtn = document.getElementById('show-all');

// load all data
const loadAllData = async (isShowAll) => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
    const allData = data.data.tools;
    displayAllData(allData,isShowAll);

};

// load single data
const loadSingleData = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`);
    const data = await res.json();
    const allData = data.data;
    displaySingleData(allData);
}
loadSingleData()

// display data

const displayAllData = (allData,isShowAll) => {
    if(isShowAll){
        showAllBtn.classList.add('hidden');
    }
    else{
        allData = allData.slice(0, 6);
    }
    cardsContainer.innerHTML='';
    allData.forEach(data => {
        // console.log(data.id)
        const card = document.createElement('div');
        card.classList = ('card w-96 bg-base-100 shadow-xl justify-self-center')
        card.innerHTML = `<figure class="m-4"><img src="${data.image}" alt="AI" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">Features</h2>
            <ol>
                <li>${data.features[0]}</li>
                <li>${data.features[1]}</li>
                <li>${data.features[2]}</li>
            </ol>
            <hr>
            <h2 class="card-title">${data.name}</h2>
            <h4 class="flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
              </svg>
              <span>${data.published_in}</span></h4>
            <div class="card-actions justify-end">
                <button onclick="showSingleData('${data.id}',singleDataModal.showModal())"  id ="card-btn" class="btn btn-circle bg-[#FEF7F7] text-[#EB5757]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>

                </button>
            </div>
        </div>
        `
        cardsContainer.appendChild(card);
    });
}

// show all function
const showAll=(isShowAll)=>{
    loadAllData(true)
}
loadAllData(false);
 
const showSingleData = (id)=>{
    loadSingleData(id);
}

// display single data

const displaySingleData = (data)=>{
    const description= document.getElementById('description')
    description.innerText=`${data.description}`
}
