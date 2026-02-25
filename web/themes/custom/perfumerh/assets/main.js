import "./style.css";

// Alpine подцепится с CDN, он уже будет в window.Alpine.
window.megaMenu = function () {
  return {
    open: null,
    categories: {
      maison: [
        {
          title: "PAR TYPE",
          links: [
            { label: "Encens", url: "/collections/maison?type=encens" },
            { label: "Vaporisateurs d’intérieur", url: "/collections/maison?type=vaporisateurs" },
            { label: "Pot-pourri", url: "/collections/maison?type=pot-pourri" },
          ],
        },
        {
          title: "ACCESSOIRES",
          links: [
            { label: "Accessoires", url: "/collections/maison?type=accessoires" },
            { label: "Linen tote bags", url: "/collections/maison?type=tote-bags" },
          ],
        },
      ],

      cadeaux: [
        {
          title: "PAR TYPE",
          links: [
            { label: "Coffrets cadeaux", url: "/collections/cadeaux?type=coffrets" },
            { label: "Petites attentions", url: "/collections/cadeaux?type=petites-attentions" },
          ],
        },
        {
          title: "IDÉES",
          links: [
            { label: "Pour la maison", url: "/collections/cadeaux?type=maison" },
            { label: "Pour le bain", url: "/collections/cadeaux?type=bain" },
          ],
        },
      ],

      "garde-manger": [
        {
          title: "PAR TYPE",
          links: [
            { label: "Confitures", url: "/collections/garde-manger?type=confitures" },
            { label: "Conserves", url: "/collections/garde-manger?type=conserves" },
            { label: "Huiles & assaisonnements", url: "/collections/garde-manger?type=huiles" },
          ],
        },
      ],

      parfum: null,
      bougies: null,
      mains: null,
    },
  };
};
