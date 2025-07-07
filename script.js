    const noc = 8; 
    const cardContainer = document.getElementById("cardContainer");

    for (let i = 0; i < noc; i++) {
      const card = `
        <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
          <img src="https://ik.imagekit.io/4z8covdo9/Full%20stack/em-ginger-fried-img.png" alt="Non-Veg Starters" class="w-full h-40 object-cover" />
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">Non-Veg Starters</h3>
            <p href="#" class="text-yellow-600 font-medium hover:underline flex items-center gap-1">
              View More →  </p> </div>   </div>`;
    cardContainer.innerHTML += card;
    }