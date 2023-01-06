let showMoreButton = null;
while ((showMoreButton = document.querySelector(".ShowMoreButton---bottomStyle---2wlTl button")) != null) {
    showMoreButton.click();
    console.log("waiting 5s"); 
    await new Promise(r => setTimeout(r, 5000));
}

let result = []
let buttons = document.querySelectorAll('.Paper---root---2-wGu button');
for (let button of buttons) {
    if (button.dataset && button.dataset.marker === 'ShareButton') {
        button.click();
        console.log("waiting 3s"); 
        await new Promise(r => setTimeout(r, 3000));
        result.push({
            'title': document.querySelector('.ThumbnailCard---thumbnailTitle---2Cw6T').textContent,
            'link': document.querySelector('#copyLinkArea').value
        });
        document.querySelector('#closeModalButton').click();
    }
}
console.log(JSON.stringify(result));
