export const headerLinks = [
    {
      label: 'Home',
      route: '/',
    },
    {
      label: 'Events',
      route: '/events',
    },
    {
      label: 'About',
      route: '/about',
    },
    {
        label: 'Contact',
        route: '/about',
      },
      {
        label: 'Create Events',
        route: '/create/events',
      },
  ]
  
  export const eventDefaultValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
  }