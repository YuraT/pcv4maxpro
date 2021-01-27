import * as BSON from 'bson';

export enum UserTypes {
  student,
  stakeholder,
  organizer
}
export interface User {
  _id: BSON.ObjectID;
  firstName: string;
  lastName: string;
  email: string;
  userTypes: string[];
  phone?: string;
  birthday?: Date;
  gender?: string;
  culture?: string;
  terms?: boolean;
  verifiedPhone?: Date;
  participantProgram_ids?: BSON.ObjectID[];
  stakeholderProgram_ids?: BSON.ObjectID[];
  organizerProgram_ids?: BSON.ObjectID[];
}
