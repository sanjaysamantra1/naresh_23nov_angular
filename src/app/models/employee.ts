export class Employee {
   id: number;
   firstName: string;
   lastName: string;
   sal: number; // Structure

  constructor(id: number, firstName: string, lastName: string, sal: number) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.sal = sal;
  }
  getFullName(): string {
    return `${this.lastName} ${this.firstName} `;
  }
  getYearlySalary(): number {
    return 12 * this.sal+500;
  }
}

// Model Class
// Enforce Datatye/Define the structure
// Common Logic
