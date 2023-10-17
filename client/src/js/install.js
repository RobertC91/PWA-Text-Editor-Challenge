const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the default browser install prompt
    event.preventDefault();
    // Store the event for later use
    window.deferredPrompt = event;
    // Show the install button to the user
    butInstall.classList.toggle('hidden', false)
});

// Add a click event listener to the "Install" button
butInstall.addEventListener('click', async () => {
    // Retrieve the deferred prompt event
    const promptEvent = window.deferredPrompt;
    // If there is no prompt event, exit the function
    if (!promptEvent) {
        return
    }
    // Trigger the PWA installation prompt
    promptEvent.prompt();
    // Reset the deferredPrompt to null after prompting
    window.deferredPrompt = null;
    // Hide the install button
    butInstall.classList.toggle('hidden', true)
});

// Listen for the 'appinstalled' event, which is triggered when the PWA is successfully installed
window.addEventListener('appinstalled', (event) => {
    // Reset the deferredPrompt to null upon successful installation
    window.deferredPrompt = null
});
