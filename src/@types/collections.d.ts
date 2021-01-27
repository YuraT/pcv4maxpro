import { User as UserType } from './user.d';
// eslint-disable-next-line import/prefer-default-export
export enum Collection {
  User = 'User',
  AdminPortfolio = 'AdminPortfolio',
  EmployerPortfolio = 'EmployerPortfolio',
  StudentPortfolio = 'StudentPortfolio',
  TeacherPortfolio = 'TeacherPortfolio',
  SchoolPortfolio = 'SchoolPortfolio',
  ParentPortfolio = 'ParentPortfolio',
  Program = 'Program',
  Team = 'Team',
  Participant = 'Participant',
  Transaction = 'Transaction'
}
export type getCollectionType<T extends keyof typeof Collection> = T extends 'User'
  ? UserType
  : any;
