(() => {
  const encodedAddress = [
    115, 107, 114, 119, 114, 121, 108, 104, 122, 104, 117, 49, 118, 120, 115, 115, 114,
    117, 119, 67, 106, 112, 100, 108, 111, 49, 102, 114, 112
  ];

  const decodeAddress = () => String.fromCharCode(
    ...encodedAddress.map((characterCode) => characterCode - 3)
  );

  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-email-reveal]');

    if (!trigger) {
      return;
    }

    const address = decodeAddress();

    document.querySelectorAll('[data-email-reveal]').forEach((button) => {
      const link = document.createElement('a');

      link.href = `mailto:${address}`;
      link.textContent = address;
      link.className = [...button.classList]
        .filter((className) => className !== 'email-reveal')
        .join(' ');
      button.replaceWith(link);

      if (button === trigger) {
        link.focus();
      }
    });
  });
})();
