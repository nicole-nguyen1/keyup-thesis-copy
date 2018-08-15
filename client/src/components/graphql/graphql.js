export const getCareersQuery = `{
    careers {
      id
      industry_name
      name
      card_pro
      annual_salary
      training_length
      card_image_url
    }
  }`;

export const getIndustriesQuery = `{
    industries {
      id
      name
    }
  }`;

export const filterCareersQuery = (args) =>(`{
    careers (id: ${args}){
      id
      industry_name
      name
      card_pro
      annual_salary
      training_length
      card_image_url
    }
  }`);
