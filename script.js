document.addEventListener("DOMContentLoaded", function() {

    // ១. មុខងារនៅពេលចុចបន្ថែមទំនិញទៅក្នុងកន្ត្រក (ទំព័រ Category)
    const buyButtons = document.querySelectorAll(".btn-buy");
    buyButtons.forEach(button => {
        button.addEventListener("click", function() {
            alert("🛒 ផលិតផលនេះត្រូវបានបញ្ចូលទៅក្នុងកន្ត្រកទិញអីវ៉ាន់របស់អ្នកជោគជ័យ!");
        });
    });

    // ២. មុខងារត្រួតពិនិត្យ និងបញ្ជូនទម្រង់ Login (ទំព័រ Login)
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const user = document.getElementById("username").value;
            alert("🎉 ស្វាគមន៍ការត្រឡប់មកវិញដ៏រីករាយ, " + user + "!");
            loginForm.reset();
        });
    }

    // ៣. មុខងារបញ្ជូនសារទាក់ទង (ទំព័រ Contact)
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("📧 សាររបស់អ្នកត្រូវបានផ្ញើទៅកាន់ក្រុមការងាររួចរាល់ហើយ! យើងនឹងទាក់ទងទៅវិញឆាប់ៗ។");
            contactForm.reset();
        });
    }
});