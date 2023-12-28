import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { VacationRequest } from 'src/app/models/vacation-request.model';
import { UserService } from 'src/app/services/user.service';
import { VcationRequestService } from 'src/app/services/vacation-request.service';
import { jsPDF } from 'jspdf';


@Component({
  selector: 'app-validation-request-register',
  templateUrl: './validation-request-register.component.html',
  styleUrls: ['./validation-request-register.component.scss']
})
export class ValidationRequestRegisterComponent {

  vacationRequests : VacationRequest[] = [];

  // userVacationRequests: any | VacationRequest[];
  users : User[] = [];
  user : User | any;
  selectedUserId: number = 0;
  vacationRequestData: VacationRequest = {
    id: 0, 
    startDate: new Date(), 
    endDate: new Date(), 
    createdAt:new Date(),
    status: "En espera", 
    userId: 0 , 
    totalDays: 0
  };

  vacationRegister = false;

  constructor(private vacationService: VcationRequestService, private userService: UserService) {}

  ngOnInit(){
    this.GetAll();
    this.GetAllUsers();
  }

  GetAll(){
    this.vacationService.getAllVacationRequests().subscribe(
      (data:VacationRequest[]) => {
        this.vacationRequests = data;
      },
      (error) => {
        console.error('Error fetching vacations request: ', error)
      }
    )
  }
  GetAllUsers(){
    this.userService.getAllUsers().subscribe(
      (data:User[]) => {
        this.users = data;
        
      },
      (error) => {
        console.error('Error fetching user: ', error)
      }
    )
  }

  calculateTotalDays(): void {
    if (this.vacationRequestData.startDate && this.vacationRequestData.endDate) {
      const start = new Date(this.vacationRequestData.startDate);
      const end = new Date(this.vacationRequestData.endDate);
      let totalDays = 0;

      while (start <= end) {
        start.setDate(start.getDate() + 1);

        if (start.getDay() !== 0) {
          totalDays++;
        }
      }

      this.vacationRequestData.totalDays = totalDays;
    }
  }

  registerVacation() {
    this.userService.getUserById(this.selectedUserId).subscribe(
      (data: any) => {
        this.user = data;
  
        this.vacationService.getVacationRequestsByUserId(this.selectedUserId).subscribe(
          (response: any) => {
            if (response.success && Array.isArray(response.data)) {
              const userVacationRequests: VacationRequest[] = response.data;
              const totalDaysSum = userVacationRequests.reduce((sum, request) => sum + request.totalDays, 0);
              const remainingDays =this.user.holidays - totalDaysSum;
              if (totalDaysSum + this.vacationRequestData.totalDays <= this.user.holidays) {
                this.handleUserAndVacation();
              } else {
                alert(`Los días totales superan las vacaciones disponibles ${remainingDays}`);
              }
            } else {
              console.error('The service response is not valid: ', response);
            }
          },
          error => {
            console.error('Error getting vacation requests: ', error);
          }
        );
      },
      error => {
        console.error('Error user not found:', error);
      }
    );
  }
  
  private handleUserAndVacation(): void {
    this.vacationRequestData.userId = this.selectedUserId;
    this.vacationService.createVacationRequest(this.vacationRequestData)
      .subscribe(
        () => {
          console.log('Vacation Request created successfully:');
          this.vacationRegister = false;
          this.GetAll();
        },
        error => {
          console.error('Error creating vacation Request:', error);
        }
      );
  }

  deleteVacationRequest(id: number) {
    
    this.vacationService.deleteVacationRequest(id).subscribe(
      () => {
        alert("Vacation request deleted");
        this.GetAll();
      },
      (error) => {
        console.error('Error when deleting Vacation Request:', error);
        alert("Error deleting Vacation Request");
      }
    );
  }
 
  generatePDF(vacationRequest: VacationRequest): void {
    const pdf = new jsPDF();
  
    pdf.text('Recibo de Solicitud de Vacaciones', 20, 10);
    pdf.text(`Nombre del solicitante: ${vacationRequest.user?.username}`, 20, 20);
    pdf.text(`Fecha de solicitud: ${vacationRequest.createdAt}`, 20, 30);
    pdf.text(`Días solicitados: ${vacationRequest.totalDays}`, 20, 40);
    pdf.text(`Fecha de inicio: ${vacationRequest.startDate}`, 20, 50);
    pdf.text(`Fecha de fin: ${vacationRequest.endDate}`, 20, 60);
  
    pdf.save(`Recibo_${vacationRequest.id}.pdf`);
  }
}
