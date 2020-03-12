import * as core from "core-js/stable";
import * as regen from "regenerator-runtime";


export const fetchCurrentPlan = async (product) => {
   
  switch (product) {
  
    case "Support":
      return await $.ajax({
        url: "/api/current",
        type: "GET"
      });

    case "CRM":
      return await $.ajax({
        url: "/api/crm",
        type: "GET"
      });

    default:
      throw new Error('Invalid product type');

  }
}

export const fetchPreviousPlan = async (product) => {
  
  switch (product) {

    case "Support":
      return await $.ajax({
        url: "/api/previous",
        type: "GET"
      })

    case "CRM":
      return await $.ajax({
        url: "/api/crm/previous",
        type: "GET"
      });
    
    default:
      throw new Error('Invalid product type');

  }
}

export const fetchAvailablePlans = async (product) => {

  switch (product) {
  
    case "Support":
      return await $.ajax({
        url: "/api/support/plans",
        type: "GET"
      });

    case "CRM":
      return await $.ajax({
        url: "/api/crm/plans",
        type: "GET"
      });

    default:
      throw new Error('Invalid product type');

  }

}

export const fetchPlanPricing = async (product, plan, seats) => {
  
  switch (product) {
  
    case "Support":
      return await $.ajax({
        url: "/api/preview",
        type: "GET",
        data: { plan, seats }
      });

    case "CRM":
      return await $.ajax({
        url: "/api/crm/preview",
        type: "GET",
        data: { plan, seats }
      });

    default:
      throw new Error('Invalid product type')

  }
}

export const updateCurrentPlan = async (product, settings) => {
  
  switch (product) {

  case "Support":
    return await $.ajax({
      url: "/api/current",
      type: "PUT",
      data: { settings }
    });

  case "CRM":
    return await $.ajax({
    url: "/api/crm/current",
    type: "PUT",
    data: { settings }
    });

  default:
    throw new Error('Invalid product type')

  }
}