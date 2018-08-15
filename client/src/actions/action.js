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
)

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
