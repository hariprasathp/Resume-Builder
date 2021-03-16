import { makeAutoObservable } from "mobx";

export class Header {
  name: string = "Your Name";
  mobile: string = "Your Mobile Number";
  email: string = "Your Email";
  address: string = "Your Address";
  city: string = "City";
  state: string = "State";

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
  degree: string = "Your Degree";
  graduatedYear: number = new Date().getFullYear();
  institute: string = "Institute Studied";

  constructor() {
    makeAutoObservable(this);
  }

  public update(propName: string, value: string | number): void {
    ((this as unknown) as Record<string, string | number>)[propName] = value;
  }
}

export class Skills {
  skills: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }
  public update(value: string[]): void {
    this.skills = value;
  }
}

export class ResumeStore {
  header: Header = new Header();
  skills: Skills = new Skills();
  experience: Experience[] = [];
  education: Education[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  public addNewExperience() {
    this.experience.push(new Experience());
  }

  public addNewEducation() {
    this.education.push(new Education());
  }
}
