import { ApiClient } from "./client";

// Get petsitters
export const getPetsitters = () => {
  return ApiClient.get("/petsitters/all");
};
