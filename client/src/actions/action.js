export const findCareers = (data) => (
  {
    type: 'CAREERS',
    payload: data
  }
);

export const getIndustries = (data) => (
  {
    type: 'INDUSTRIES',
    payload: data
  }
);

export const findCareer = (data) => (
  {
    type: 'CAREER',
    payload: data
  }
);

export const findServices = (data) => (
  {
    type: 'SERVICES',
    payload: data
  }
);

export const getPageTitle = (data) => (
  {
    type: 'PAGES',
    payload: data
  }
);

export const findService = (data) => (
  {
    type: 'SERVICE',
    payload: data
  }
);

export const findUser = (data) => (
  {
    type: 'USER',
    payload: data
  }
);

export const getFavorites = (data) => (
  {
    type: 'FAVORITE',
    payload: data
  }
);
