document.addEventListener('scroll', function() {
    const logo = document.querySelector('.logo');
    if (window.scrollY > 1) { 
        logo.classList.add('h-20', 'w-40'); 
        logo.classList.remove('h-28', 'w-52');
    } else {
        logo.classList.remove('h-20', 'w-40'); 
        logo.classList.add('h-28', 'w-52');
    }
});

function changeImage(newImageSrc) {
    document.getElementById('mainImage').src = newImageSrc;
}

document.addEventListener('DOMContentLoaded', () => {
    const detailOption1 = document.getElementById('detailOption1');
    const detailOption2 = document.getElementById('detailOption2');
    const detailOption3 = document.getElementById('detailOption3');
    const detailOption4 = document.getElementById('detailOption4');
    const informationDiv = document.getElementById('information');

    detailOption1.addEventListener('click', () => {
        informationDiv.innerHTML = `
            <p class="mt-2 text-lg font-medium">DRIZZLE: 500ML</p>
            <p class="mt-5 text-lg tracking-wider">Extra Virgin finishing oil made from olives that are picked early, when flavor is bold and antioxidants are highest. Made for eating, not heating.</p>
            <p class="mt-4 text-lg font-medium">SIZZLE: 750ML</p>
            <p class="mt-5 mb-1 text-lg tracking-wider">Extra Virgin cooking oil made from mature, mid-season olives that yield a more mellow flavor. Use it every day, in every way.</p>
        `;
    });

    detailOption2.addEventListener('click', () => {
        informationDiv.innerHTML = `
            <p class="mt-2 text-lg font-medium">DRIZZLE: </p>
            <p class="text-lg tracking-wider">Harvested in October, before the olives have ripened fully. Picked by hand because young olives need a firm yank to loosen up.</p>
            <p class="mt-4 text-lg font-medium">SIZZLE: </p>
            <p class="mb-1 text-lg tracking-wider">Harvested in November and December, when the olives are more mature. They're pretty laid back by this point, so it only takes a few shakes to get them off the branch.</p>
        `;
    });

    detailOption3.addEventListener('click', () => {
        informationDiv.innerHTML = `
            <p class="mt-2 text-lg font-medium">DRIZZLE: </p>
            <p class="text-lg tracking-wider">A little Drizzle goes a long way! Put it on your ice cream or popcorn, whip up a pesto or salad dressing, or drink it straight from a spoon (we won’t tell).</p>
            <p class="mt-4 text-lg font-medium">SIZZLE: </p>
            <p class="mb-1 text-lg tracking-wider">If you would put it in or on top of an oven, use Sizzle. Chicken cutlets, sheet pan veggies, fried rice, or even chocolate chip cookies! You name it, Sizzle Sizzles it.</p>
        `;
    });

    detailOption4.addEventListener('click', () => {
        informationDiv.innerHTML = `
            <p class="mt-2 text-lg font-medium">"DRIZZLE" REFILL CAN: 500ML</p>
            <p class="mt-4 text-lg font-medium">"SIZZLE" REFILL CAN: 750ML</p>
            <p class="mt-5 mb-1 text-lg tracking-wider">Perfectly portioned and 100% recyclable, our “beer can” refills are designed to keep your delicious olive oil super fresh. Just crack open, pour into a squeeze bottle (using a kitchen funnel!) and get cookin'.</p>
        `;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const detailOptions = document.querySelectorAll('#detailsSection div');

    function handleDetailClick(event) {
        detailOptions.forEach(option => {
            option.classList.remove('text-primary', 'bg-fontColor'); 
        });

        event.currentTarget.classList.add('text-primary', 'bg-fontColor'); 

    }

    detailOptions.forEach(option => {
        option.addEventListener('click', handleDetailClick);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    
    const setDivs = document.querySelectorAll('.set');

    function applySet1Styles(div) {
        
        setDivs.forEach(setDiv => {
            setDiv.classList.remove('bg-greenColor', 'border-b-2', 'border-fontColor', 'rounded-b-lg');
            setDiv.classList.add('hover:opacity-90');
        });

        div.classList.add('bg-greenColor', 'border-b-2', 'border-fontColor', 'rounded-b-lg');
        div.classList.remove('hover:opacity-90');
    }

    setDivs.forEach(div => {
        div.addEventListener('click', () => applySet1Styles(div));
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Select the divs for round1 and round2
    const round1Con = document.getElementById('round1Con');
    const round2Con = document.getElementById('round2Con');
    const round1 = document.getElementById('round1');
    const round2 = document.getElementById('round2');

    function toggleRoundStyles() {
        
        if (round1.classList.contains('bg-greenColor')) {
            
            round1.classList.remove('bg-greenColor');
            round2.classList.add('bg-greenColor');
        } else {

            round1.classList.add('bg-greenColor');
            round2.classList.remove('bg-greenColor');
        }
    }

    round1Con.addEventListener('click', toggleRoundStyles);
    round2Con.addEventListener('click', toggleRoundStyles);
});

document.addEventListener('DOMContentLoaded', () => {
    
    const round1Con = document.getElementById('round1Con');
    const round2Con = document.getElementById('round2Con');
    const payment = document.querySelector('.payment');

    function updateRound1Content() {
        payment.innerHTML = '<p>Add to Cart - $37</p>';
    }

    function updateRound2Content() {
        payment.innerHTML = '<p>Subscribe - $33.30</p>';
    }

    round1Con.addEventListener('click', updateRound1Content);
    round2Con.addEventListener('click', updateRound2Content);
});

function changeBorder(selectedElement) {
    // Get all imageOption elements
    const imageOptions = document.querySelectorAll('.imageOption');
    
    // Remove the 'border-fillColor' class from all imageOption elements
    imageOptions.forEach(option => {
        option.classList.remove('border-fillColor');
        option.classList.add('border-fontColor');
    });
    
    // Add the 'border-fillColor' class to the clicked imageOption element
    selectedElement.classList.remove('border-fontColor');
    selectedElement.classList.add('border-fillColor');
}
