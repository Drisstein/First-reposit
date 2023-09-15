// Récupérer les éléments du formulaire
const form = document.querySelector('form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Écouter l'événement de soumission du formulaire
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Empêche la soumission par défaut du formulaire

  // Valider les champs du formulaire
  const usernameValue = usernameInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (usernameValue === '' || passwordValue === '') {
    alert('Veuillez remplir tous les champs.');
  } else {
    // Envoyer les données au serveur (vous pouvez implémenter cette partie)
    // Par exemple, vous pouvez utiliser fetch() pour effectuer une requête AJAX
    // et traiter la réponse du serveur.
    // fetch('submit.php', {
    //   method: 'POST',
    //   body: JSON.stringify({ username: usernameValue, password: passwordValue }),
    // })
    // .then(response => response.json())
    // .then(data => {
    //   // Traiter la réponse du serveur ici
    // })
    // .catch(error => {
    //   console.error('Erreur lors de l\'envoi des données :', error);
    // });

    // Pour cet exemple, nous allons simplement afficher un message de succès
    alert('Authentification réussie !');
    form.reset(); // Réinitialiser le formulaire
  }
});
