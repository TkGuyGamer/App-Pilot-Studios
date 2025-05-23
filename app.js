
fetch("./games.json",)
    .then(response=>response.json())
    .then(product=>{
        const game_list = document.getElementById('game_list');

        product.forEach(game=>{
            const gameLi = document.createElement('li');
            gameLi.classList.add('game');
            gameLi.innerHTML = 
                `
                <img src="${game.image}" alt="" class="game_img">
                <h2 class="game_title">${game.name}</h2>
                <h5 id="price">${game.price}</h5>
                <div class="credents">
                    <h6>200 Downloads</h6>
                    <h6>200 Views</h6>
                </div>
                <a href="" class="game_view_btn">View</a>
                `;
            game_list.appendChild(gameLi);
            
        });
    })

