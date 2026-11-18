const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const chatModal = document.querySelector('#portfolio-chat');
const chatFrame = chatModal?.querySelector('iframe');
let lastChatTrigger = null;

function openChat(trigger) {
  if (!chatModal || !chatFrame) {
    window.open('https://chat-with-me.fastapicloud.dev', '_blank', 'noopener,noreferrer');
    return;
  }
  lastChatTrigger = trigger;
  if (!chatFrame.src) chatFrame.src = chatFrame.dataset.src;
  chatModal.hidden = false;
  chatModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('chat-open');
  chatModal.querySelector('.chat-close')?.focus();
}

function closeChat() {
  if (!chatModal) return;
  chatModal.hidden = true;
  chatModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('chat-open');
  lastChatTrigger?.focus();
}

document.querySelectorAll('[data-chat-open]').forEach((button) => {
  button.addEventListener('click', () => openChat(button));
});

document.querySelectorAll('[data-chat-close]').forEach((button) => {
  button.addEventListener('click', closeChat);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && chatModal && !chatModal.hidden) closeChat();
});
