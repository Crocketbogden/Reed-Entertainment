
// Services page dynamic functionality
document.addEventListener('DOMContentLoaded', () => {
    console.log('Services page loaded successfully!');
    const services = document.querySelectorAll('.service-item');
    services.forEach(service => {
        service.addEventListener('mouseover', () => {
            service.style.backgroundColor = '#f0f0f0';
        });
        service.addEventListener('mouseout', () => {
            service.style.backgroundColor = '#ffffff';
        });
    });
});
