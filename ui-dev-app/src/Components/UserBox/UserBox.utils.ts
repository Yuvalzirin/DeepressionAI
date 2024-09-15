import { PatientStatus, PatientStatuses, Post } from '../PatientsPanel/Patients.model'
import { statusSvgMap } from '../PatientPage/PatientPage.consts'

export const calculateAverageStatus = (posts: Post[]): number => {
  const totalPrediction = posts
    .map(post => post.prediction ? post.prediction >= 0 ? post.prediction : 0 : 0)
    .reduce((sum, prediction) => sum + prediction, 0);

  return (totalPrediction / posts.length) * 100;
}

export const calculateAverageStatusIcon = (posts: Post[]): string => {
  const averagePrediction = calculateAverageStatus(posts);
  let status = PatientStatuses.GOOD;

  if (averagePrediction > 60) {
    status = PatientStatuses.BAD;
  } else if (averagePrediction > 30) {
    status = PatientStatuses.MEDIUM;
  }

  return statusSvgMap[status];
}

export const calculateAverageStatusString = (posts: Post[]): PatientStatus => {
  const averagePrediction = calculateAverageStatus(posts);
  let status = PatientStatuses.GOOD;

  if (averagePrediction > 60) {
    status = PatientStatuses.BAD;
  } else if (averagePrediction > 30) {
    status = PatientStatuses.MEDIUM;
  }

  return status;
}