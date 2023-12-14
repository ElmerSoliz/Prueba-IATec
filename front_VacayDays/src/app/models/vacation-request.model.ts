import { UserClass } from "./user.model";

export interface VacationRequest {
    id: number;
    startDate: Date;
    endDate: Date;
    totalDays: number;
    userId: number;
    status: string;
    user? : UserClass;
    createdAt?: Date
  }
  
  export class VacationRequestClass implements VacationRequest {
    id: number;
    startDate: Date;
    endDate: Date;
    totalDays: number;
    userId: number;
    status: string;
    createdAt?: Date;
  
    constructor(user: VacationRequest) {
      this.id = user.id;
      this.startDate = user.startDate;
      this.endDate = user.endDate;
      this.totalDays = user.totalDays;
      this.userId = user.userId;
      this.status = user.status;
      this.createdAt = user.createdAt;
    }
}
  