import { makeAutoObservable } from "mobx";

export class Header {
  name: string = "";
  mobile: string = "";
  email: string = "";
  address: string = "";
  city: string = "";
  state: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  public update(propName: string, value: string | number): void {
    ((this as unknown) as Record<string, string | number>)[propName] = value;
  }
}

export class Experience {
  company: string = "Your Company";
  designation: string = "Your Designation";
  yearStart: number = new Date().getFullYear();
  yearEnd: number = new Date().getFullYear();

  constructor() {
    makeAutoObservable(this);
  }

  public update(propName: string, value: string | number): void {
    ((this as unknown) as Record<string, string | number>)[propName] = value;
  }
}

export class Education {
  degree: string = "";
  graduatedYear: number = new Date().getFullYear();
  institute: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  public update(propName: string, value: string | number): void {
    ((this as unknown) as Record<string, string | number>)[propName] = value;
  }
}
export class ResumeStore {
  header: Header = new Header();
  skills: string[] = [];
  experience: Experience[] = [];
  education: Education[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  public addNewExperience() {
    this.experience.push(new Experience());
  }
}
