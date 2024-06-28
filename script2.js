document.addEventListener('DOMContentLoaded', () => {
    const ReserveButtons = document.querySelectorAll('.Reserve');
    
    ReserveButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Votre réservation a été complétée avec succès!');
        });
    });
});