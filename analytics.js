// 両サービスの最新コードで確認した共通GA4。ローカル確認では送信しない。
if (location.hostname === 'hirameki-gakari.github.io') {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', 'G-FGCJC3PJ6C');
  const tag = document.createElement('script');
  tag.async = true;
  tag.src = 'https://www.googletagmanager.com/gtag/js?id=G-FGCJC3PJ6C';
  document.head.appendChild(tag);
  document.querySelectorAll('[data-service]').forEach(link => {
    link.addEventListener('click', () => {
      window.gtag('event', 'select_service', {
        service_name: link.dataset.service,
        link_url: link.href,
        transport_type: 'beacon'
      });
    });
  });
}
