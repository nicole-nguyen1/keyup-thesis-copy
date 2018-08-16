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
    careers (industry_id: [${args.args}], paid_to_learn: ${args.paidToLearn}, free_training: ${args.freeTraining}){
      id
      industry_name
      name
      card_pro
      annual_salary
      training_length
      card_image_url
    }
  }`);

export const getCareerQuery = (args) => (
  `{
    career(id:${args}) {
      name
      profile_image_url
      industry_name
      description
      annual_salary
      hourly_pay
      openings
      tasks {
        id
        description
      }
      skills {
        id
        description
      }
      pros {
        id
        description
      }
      cons {
        id
        description
      }
      number_of_services
      training_length
      training_hours
      training_cost
    }
  }`
);
