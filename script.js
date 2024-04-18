const counters = document.querySelectorAll(".fac-p-c1");
const container = document.querySelector("fac-p-n");

let activated = false;

window.addEventListener("scroll", ()=>{
    if (pageXOffset > container.offsetTop - container.offsetHeight - 200
        && activated === false) {
        counters.forEach(counter =>{
            counter.innerText = 0;
            let count = 0;

            function updateCount() {
                const target = parseInt(counter.dataset.count);
                if (count < target) {
                    count++;
                    counter.innerText = count;
                    setTimeout(updateCount, 10);
                } else{
                    counter.innerText = target;
                }
            }
            updateCount();
            activated = true;
        });
    }else if(
        pageXOffset < container.offsetTop - container.offsetHeight - 500
        || pageXOffset === 0
        && activated
    ) {
        counters.forEach(counter =>{
            counter.innerText = 0;
        });
        activated = false;
    }
});

