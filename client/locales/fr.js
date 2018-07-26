export default {
    cities: {
      title: "Construisons les réseaux de transports du monde",
      search: 'Entrez une ville ou un pays',
      contributors: {
        one: '%(contributors)s contributeur',
        other: '%(contributors)s contributeurs',
        list: {
          title: 'Top des contributeurs',
          total: 'Depuis le début',
          last_month: 'Mois dernier'
        }
      },
      top_systems: 'Plus grands systèmes',
      support: 'Rejoignez notre',
      support_link: 'salon de discussion sur Gitter'
    },
    main: {
      title: "citylines.co",
      description: "Citylines.co est une plateforme de cartographie collaborative où is a collaborative où chacun peut créer les réseaux de transports du monde",
      log_in: 'Identification'
    },
    auth: {
      log_in_with_google: 'Identification avec Google',
      log_in_with_twitter: 'Identification avec Twitter',
      disclaimer: 'En vous inscrivant vous acceptez les',
      disclaimer_link: 'règles des contributeurs',
      privacy_disclaimer: 'et la',
      privacy_disclaimer_link: 'politique de confidentialité'
    },
    cookie_notice: {
      notice: 'Ce site utilise des cookies. Si vous continuez à utiliser ce site, vous acceptez les règles d utilisation des cookies.',
      accept: 'Accepter',
      info: 'Informations sur les règles d utilisation des cookies',
      text: {
        title: 'Règles d utilisation des cookies',
        p1: "Les cookies sont des petits bouts d'information enregsitrées dans votre navigateur et auxquels peuvent accéder un ou plusieurs sites web.",
        p2: "Citylines.co utilises ses propres cookies et des cookies de tiers dans le but d'améliorer l'expérience de l'utilisateur. Nous utilisons nos propres cookies pour nous souvenir de qui s'est connecté et pour savoir s'il a ou non cliqué sur le bouton Accepter de la bannière d'information sur les cookies. Concernant les cookies tiers, Google utilise des cookies sur ce site pour enregistrer des informations sur le Google Login et sur Google Analytics. Tous ces cookies sont persistents et ne sont utilisés que dans le domaine décrit.",
        p3: 'Vous pouvez désactiver les cookies sur ce site, mais cela pourra affecter cetaines fonctionnalités de Citilines.co.',
        p4: 'Vous pouvez trouver plus de renseignements sur les cookie sur <a target="_blank" class="c-link" href="http://www.aboutcookies.org">aboutcookies.org</a>, notamment des guides pour voir quels cookies sont installés sut votre navigateur, ou comment les désinstaller.'
    }
  },
  city: {
    title: 'Réseau de transports de %(city)s',
    system_title: '%(city)s %(system)s',
    description: 'Explorer les systèmes de transport de %(city)s, et leur historique, sur citylines.co — la plateforme de cartographie collaborative the collaborative des réseaux de transport.',
    edit: 'Modifier',
    stop_editing: 'Arrêter la modification',
    lines: 'Lignes',
    years: {
      config: {
        timeline_speed: 'Vitesse de défilement',
        show_transport_modes: 'Voir les moyens de transport'
      }
    },
    km_operative: 'En fonctionnement : %(km)s km',
    km_under_construction: 'En construction : %(km)s km',
    all_lines: "Toutes les lignes",
    popup: {
      station: 'Station %(name)s',
      unnamed_station: 'Station',
      track: 'Information sur la voie',
      buildstart: 'Début de la construction : %(year)s',
      opening: 'Ouverture : %(year)s',
      closure: 'Fermeture : %(year)s',
      length: 'Longueur approximative : %(km)s km'
    }
  },
  editor: {
    edit_features: 'Modifier les fonctionnalités',
    edit_lines: 'Modifier les lignes',
    feature_viewer: {
      selected_feature: 'Fonctionnalité sélectionnée',
      no_feature_selected: 'Aucune fonctionnalité sélectionnée',
      add_line: 'Ajouter une ligne',
      fields: {
        klasses_id: {
          section: 'Voie Id:%(id)s',
          station: 'Station Id:%(id)s'
        },
        name: 'Nom',
        opening: 'Ouverture',
        buildstart: 'Début de la construction',
        closure: 'Fermeture',
        osm_id: 'ID OSM',
        osm_tags: 'Tags OSM'
      }
    },
    modified_features: {
      title: 'Fonctionnalités modifiées',
      no_features_modified: 'Aucune fonctionnalité modifiée',
      types: {
        geo: '(Geo)',
        props: '(Props)',
        created: '(Nouveau)',
        removed: '(Supprimé)'
      },
      klasses: {
        section: 'Voie',
        station: 'Station'
      },
      save: 'Enregistrer',
      discard: 'Annuler',
      too_many_elements: "Trop d'éléments ! Vous ne pouvez pas enregistrer plus de 20 éléments à la fois"
    },
    lines_editor: {
      create: 'Créer',
      new_line_placeholder: 'Nouvelle ligne',
      new_system_placeholder: 'Nouveau système',
      unnamed_system: 'Système sans nom',
      save: 'Enregistrer',
      delete: 'Effacer',
      cancel: 'Annuler'
    },
    osm: {
      zoom: 'Import autorisé uniquement à un niveau de zoom de 13 et au-delà',
      import_button: 'Importer',
      relation: 'Relation',
      members: 'Membres:',
      ways: 'chemin',
      nodes: 'noeuds'
    },
    no_lines_alert: "Il n'y a pas de ligne. Les fonctionnalités doivent être appliquées à la ligne avant de pouvoir enregistrer"
  },
  terms: {
    title: "Conditions d'utilisation",
    license: {
      title: 'License',
      p1: "Citylines.co est un projet <i>open data</i> sous license <a class='c-link' href='http://opendatacommons.org/licenses/odbl/1.0/' target='_blank'> Open Database License</a> (ODbL). Tous les droits sur les contenus individuels de la base de donnée sont sous license <a href='http://opendatacommons.org/licenses/dbcl/1.0/' target='_blank' class='c-link'>Database Contents License</a> (DbCL).",
      p2: "Vous pouvez trouver un résumé de la license ODbL license <a href='https://opendatacommons.org/licenses/odbl/summary/' target='_blank' class='c-link'>here</a>."
    },
    contributor: {
      title: 'Règles des contributeurs',
      p1: "Votre contribution ne peut enfreindre la propriété intellectuelle de personne. Lorsque vous contribuez, vous indiquez que vous avez le droit d'autoriser Citylines.co à utiliser et distribuer ce contenu sous nos conditions de licenses actuelles.",
      p2: 'You hereby grant to Citylines.co a licence to do any act that is restricted by copyright, database right or any related right over anything within the contents you contributed.',
      p3: "Citylines.co s'engage à n'utiliser ou redistribuer le contenu auquel vous avez contribué que sous forme de base de onnée et sous les conditions de la license ODbL 1.0 pour la base de données et DbCL 1.0 pour les données individuelles de la base de données."
    },
    privacy: {
      title: 'Conditions de confidentialité et de protection des données',
      p1: "Citylines.co collecte votre nom, prénom, email et nom d'utilisateur (si applicable), collects your name, surname, email and screen name (if applicable), qui sont récupérés du système d'identification lorsque vous vous connectez avec Google ou Twitter.",
      p2: 'Citylines.co stocke ces données dans une base de données privée et sécurisée en ligne.',
      p3: "Citylines.co utilise vos informations dans un seul but d'identification ou pour envoyer des emails d'information ou de notification.",
      p4: "Citylines.co ne partagera vos informations avec personne d'autre.",
      p5: 'Par défaut, Citylines.co stockera vos informations tant que vous êtes enregistré comme utilisateur de Citylines.co.',
      p6: "En tant qu'individu, vous avez les droits suivants : droit d'information sur les données dont Citylines.co dispose sur vous, droit des les corriger et les mettre à jour, droit de les supprimer n'importe quand, droit de demander la limitation de leur utilisation, droit de demander le transfert des données à un autre lieu ou une autre organisation -tant que cela est techniquement possible-, droit de vous opposer à une future utilisation, droit de porter plainte auprès des autorités compétentes."
    }
  },
  data: {
    short_title: 'Données',
    title: "Nos données sont libres",
    license: "Les informations stockées dans la base de données <b>citylines.co</b> est sous la license <a class='c-link' href='http://opendatacommons.org/licenses/odbl/1.0/' target='_blank'> Open Database License</a> (ODbL)",
    see_terms_1: "Voir les",
    see_terms_2: "conditions d'utilisation",
    cities: 'Villes',
    systems: 'Systèmes',
    lines: 'Lignes',
    features: 'Voies',
    stations: 'Stations',
    section_lines: "Tracks' lines",
    station_lines: "Stations' lines",
    all_data: 'Toutes les données',
    data_by_city: 'Données par ville',
    select_city: 'Sélectionner une ville'
  },
  user: {
    my_cities: 'Mes villes',
    cities_of_user: 'Villes de %(name)s',
    table: {
      city: 'Ville',
      created_km: 'Km créés',
      created_stations: 'Stations crées',
      modified_or_deleted_elements: 'Éléments modifiées ou supprimées',
      caption: "Les villes sont triées par kilométrage et nombre d'élements modifiés"
    },
    you_never_contributed: "Vous n'avez contribué à aucune ville pour l'instant !",
    user_never_contributed: "%(name)s n'a contribué à aucune ville pour l'instant",
    see_cities: 'Voir les villes'
  },
  error: {
    title: "L'URL saisie ne correspond à aucune ville",
    subtitle: "L'URL peut avoir été mal saisie, ou nous n'avons pas encore préparé la ville que vous cherchez.",
    redirect: "Voir d'autres villes"
  },
  transport_modes: {
    default: 'Sélectionner un mode',
    high_speed_rail: 'Ligne grande vitesse',
    inter_city_rail: 'Ligne intercités',
    commuter_rail: 'TER & RER',
    heavy_rail: 'Heavy Rail',
    light_rail: 'Tramway',
    brt: 'BHNS',
    people_mover: 'Transport hectométrique',
    bus: 'Bus'
  }
}
