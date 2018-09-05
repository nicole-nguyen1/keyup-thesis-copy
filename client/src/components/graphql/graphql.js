export const getCareersQuery = `{
    careers {
      id
      industry_name
      name
      card_pro
      annual_salary
      training_length
      card_image_url
      openings
    }
  }`;

export const getIndustriesQuery = `{
    industries {
      id
      name
    }
  }`;

export const filterCareersQuery = (args) => {
  return (`{
    careers (industry_ids: [${args.args}], paid_to_learn: ${args.paidToLearn}, free_training: ${args.freeTraining}){
      id
      industry_name
      name
      card_pro
      annual_salary
      training_length
      card_image_url
      openings
    }
  }`);
};

export const getCareerQuery = (args) => (
  `{
    career(id: ${args}) {
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

export const getServiceQuery = (args) => (
  `{
    training(id:${args}) {
      name
      subheading
      about
      logo_url
      financial_info
      career_name
      id
      pros {
        id
        description
      }
      cons {
        id
        description
      }
      location
      program_length_total
      program_total_weekly
      program_class_times
      requirements {
        id
        description
      }
      career_name
      outcomes {
        id
        description
      }
      app_type
      program_url
      app_url
      app_phone_number
      app_process
      apply_now_cta
    }
  }`
);

export const getServicesQuery = (args) => (
  `{
    trainings(career_id:${args}) {
      id
      career_id
      career_name
      name
      logo_url
      paid_to_learn
      federal_student_aid
      card_length
      card_location
      card_tuition
    }
  }`
);

export const addFormData = (args) => (
  `
  mutation {
    saveContactForm (
      first_name: ${args.first_name},
      last_name: ${args.last_name || null},
      email: ${args.email || null},
      phone_number: ${args.phone_number || null},
      page: ${args.page},
      career: ${args.career || null},
      training_service: ${args.training_service || null},
      financial_aid: ${args.financial_aid || null},
      app_process: ${args.app_process || null},
      talk_to_grad: ${args.talk_to_grad || null},
      talk_to_working: ${args.talk_to_working || null},
      other: ${args.other || null},
      message: ${args.message || null}
    ) {
      id
    }
  }
  `
);

export const signUp = ({ email, password, first_name, last_name, phone_number, zip }) => (
  `
  mutation {
    signUp (
      email: ${email},
      password: ${password},
      first_name: ${first_name}, 
      last_name: ${last_name},
      phone_number: ${phone_number || null},
      zip: ${zip || null}
    ) {
      token
    }
  }
  `
);

export const loginData = (args) => (
  `
  mutation {
    login (
      email: ${args.email},
      password: ${args.password}
    ) {
      token
    }
  }
  `
);

export const resetPassword = (args) => (
  `
  mutation {
    resetPassword(
      token: ${args.token},
      password: ${args.password}
    ) {
      token
    }
  }
  `
);

export const getFavoritesQuery = (args) => (
  `
  {
    favorites(token: ${args}) {
      id
      career_id
      service_id
    }
  }
  `
);

export const getLoggedInUser = token => (
  `
  {
    loggedInUser(token:${token}) {
      email
      first_name
      last_name
      phone_number,
      zip
    }
  }
  `
);

export const updateInfo = (args) => (
  `
  mutation {
    updateInfo(
      token: ${args.token},
      email: ${args.email},
      first_name: ${args.first_name},
      last_name: ${args.last_name},
      phone_number: ${args.phone_number},
      zip: ${args.zip}
    ) {
      email
      first_name
      last_name
      phone_number
      zip
    }
  }
  `
);

export const getCareerFave = (args) => (
  `{
    careers(career_ids: [${args}]) {
      id
      industry_name
      name
      card_pro
      annual_salary
      training_length
      card_image_url
      openings
    }
  }`
);

export const getTrainingFave = (args) => (
  `{
    trainings(service_ids: [${args}]) {
      id
      career_id
      career_name
      name
      logo_url
      paid_to_learn
      federal_student_aid
      card_length
      card_location
      card_tuition
    }
  }`
);

export const removeFavoriteFromList = (args) => (
  `
  mutation {
    removeFavorite (id: ${args}) {
      id
    }
  }
  `
);

export const addFavoriteToList = (args) => (`
  mutation {
    saveFavorite(
      token: ${args.token || null}
      career_id: ${args.careerID || null}
      service_id: ${args.serviceID || null}
    ){
      id
    }
  }
`);

export const logout = `
  mutation {
    logout {
      message
    }
  }

`;

export const findUserEmail = (args) => (
  `
  {
    userEmail(email: ${args}) {
      email
    }
  }
  `
);

export const checkToken = (args) => (
  `
  {
    token(token: ${args}) {
      email
    }
  }
  `
);