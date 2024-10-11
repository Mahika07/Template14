document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach((item) => {
        item.addEventListener("click", function () {
            navItems.forEach((navItem) => navItem.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('#navbarSupportedContent li a')

window.addEventListener('scroll', () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    })
    current = "#" + current
    navLi.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute("href") === current) {
            a.classList.add('active')
        }
    })
})



document.addEventListener("DOMContentLoaded", function () {
    const section1 = document.getElementById('section01');
    const section7 = document.getElementById('section07');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                section1.style.display = 'none';
            } else {
                section1.style.display = 'block';
            }
        });
    }, {
        root: null, // Use the viewport as the root
        threshold: 0.1 // Trigger when 10% of section7 is visible
    });
    observer.observe(section7);


});
document.addEventListener("DOMContentLoaded", () => {
    const progressCircles = document.querySelectorAll('.progress-circle');
    const number = 100;

    const progressValues = [90, 85, 95, 80, 90, 85, 95, 80];
    const speed = 5;
    const circleCircumference = 2 * Math.PI * 50; // Assuming the largest circle radius is 50

    progressCircles.forEach((circle, index) => {
        const radius = parseInt(circle.getAttribute('r'));
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (circumference * progressValues[index]) / 100;

        circle.style.strokeDasharray = circumference;
        circle.style.strokeDashoffset = circumference;

        setTimeout(() => {
            circle.style.transition = `stroke-dashoffset ${speed * progressValues[index] / 100}s`;
            circle.style.strokeDashoffset = offset;
        }, 100);
    });

    number.textContent = Math.max(...progressValues);
});