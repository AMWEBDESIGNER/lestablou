const details = {
  name: "L’Establou",
  category: "Restaurant traditionnel · spécialités montagnardes",
  address: "Galerie Bois d’Aurouze · RDC, Porte de Bure · 05250 Superdévoluy",
  phone: "04 92 58 85 76",
  hours: "Saisons hiver/été · horaires à confirmer",
  services: "Déjeuner, dîner, terrasse, traiteur et créations sucrées",
  map: "https://maps.google.com/?q=Restaurant+L%27Establou+Superd%C3%A9voluy",
  info: "infos.html",
};
const phoneHtml = details.phone
  ? '<a href="tel:' +
    details.phone.replace(/\s/g, "").replace(/^0/, "+33") +
    '">' +
    details.phone +
    "</a>"
  : "À confirmer par l’établissement";
const callHtml = details.phone
  ? '<a href="tel:' +
    details.phone.replace(/\s/g, "").replace(/^0/, "+33") +
    '">Appeler ' +
    details.name +
    " ↗</a>"
  : '<a href="' + details.info + '">Voir les infos pratiques ↗</a>';
const block =
  '<section class="site-details" aria-label="Informations pratiques"><div class="site-details-inner"><p class="site-details-kicker">Votre visite · informations utiles</p><h2>' +
  details.name.replace(" — ", "<br>") +
  '</h2><p class="site-details-intro">' +
  details.category +
  " à " +
  details.address +
  '. Toutes les informations publiques utiles réunies avant de venir.</p><div class="site-details-grid"><article class="site-details-card"><small>Adresse</small><strong>Sur place</strong><p>' +
  details.address +
  '</p></article><article class="site-details-card"><small>Horaires</small><strong>À vérifier</strong><p>' +
  details.hours +
  '</p></article><article class="site-details-card"><small>Services</small><strong>Ce qui vous attend</strong><p>' +
  details.services +
  '</p></article><article class="site-details-card"><small>Téléphone</small><strong>' +
  phoneHtml +
  '</strong><p>Un appel permet de confirmer le service du jour.</p></article></div><div class="site-details-actions"><a href="' +
  details.map +
  '" target="_blank" rel="noopener">Ouvrir l’itinéraire ↗</a>' +
  callHtml +
  '<a href="' +
  details.info +
  '">Toutes les informations ↗</a></div></div></section>';
const contact = document.querySelector(
  'main section[id="contact"],main section[id="venir"],main section[id="rendezvous"],main section[id="infos"],main section[id="practical"],main section.contact,main section:last-of-type',
);
if (contact && !document.querySelector(".site-details"))
  contact.insertAdjacentHTML("beforebegin", block);
const footer = document.querySelector("footer");
if (footer && !footer.querySelector(".footer-local"))
  footer.insertAdjacentHTML(
    "afterbegin",
    '<div class="footer-local"><div><strong>' +
      details.name +
      "</strong>" +
      details.category +
      "</div><div><strong>Adresse</strong>" +
      details.address +
      "</div><div><strong>Contact</strong>" +
      phoneHtml +
      "<br>" +
      details.hours +
      "</div></div>",
  );
