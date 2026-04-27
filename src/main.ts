interface CourseInfo {
    code: string;
    name: string;
    progression: "A" | "B" | "C"; //värdet är något av dessa tre, inget annat
    syllabus: string;
}

const form: HTMLFormElement = document.querySelector("#kursinformation") as HTMLFormElement;
const codeInput: HTMLInputElement = document.querySelector("#kurskod") as HTMLInputElement;
const nameInput: HTMLInputElement = document.querySelector("#kursnamn") as HTMLInputElement;
const progressionSelect: HTMLSelectElement = document.querySelector("#progression") as HTMLSelectElement;
const syllabusInput: HTMLInputElement = document.querySelector("#syllabus") as HTMLInputElement;
const courseList: HTMLDivElement = document.querySelector("#kurslista") as HTMLDivElement;
