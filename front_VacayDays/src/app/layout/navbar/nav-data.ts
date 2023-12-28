export const navbarData = [

    {
        routeLink: 'register',
        icon: 'fal fa-regular fa-user',
        label: 'Registrar Usuario'
    },
    {
        routeLink: 'vacationRequest',
        icon: 'far fa-folder-plus',
        label: 'Solicitud de Vacaciones'
    },
    {
        routeLink: '',
        icon: 'far fa-sign-out-alt',
        label: 'Logout',
        action: () => {
          localStorage.removeItem('token');
        }
      }
];