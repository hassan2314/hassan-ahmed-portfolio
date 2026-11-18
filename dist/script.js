const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

document.querySelectorAll('[data-chat-open]').forEach((button) => {
  button.addEventListener('click', () => {
    const launcher = document.querySelector('[aria-label*="Ask Hassan"], [data-portfolio-chat-launcher], iframe[src*="chat-with-me"]');
    if (launcher instanceof HTMLElement) launcher.click();
    else window.open('https://chat-with-me.fastapicloud.dev', '_blank', 'noopener,noreferrer');
  });
});
