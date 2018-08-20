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
      program_url
      app_url
      app_process
      apply_now_cta
    }
  }`
);

export const getServicesQuery = (args) => (
  `{
    trainings(id:${args}) {
      id
      career_id
      name
      subheading
      logo_url
      about
      financial_info
      location
      app_process
      apply_now_cta
      program_url
      program_length_total
      program_total_weekly
      program_class_times
      paid_to_learn
      federal_student_aid
      card_length
      card_location
      card_tuition
      page_title
      outcomes {
        id
        description
      }
      requirements {
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
    }
    career(id:${args}) {
      name
    }
  }`
);

export const addFormData = (args) => (
  `
  mutation {
    saveContactFormUser (
      first_name: "test",
      last_name: "test",
      email: "asddlfkj@;lkasjf",
      phone_number: "12341234123",
      page: "asdfasdf",
      career: "asdfasdf",
      message: "asdfasdf"
    ) {
      id
    }
  }
  `
);
