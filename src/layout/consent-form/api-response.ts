export interface authorName {
  name:string;
}
export interface reviewerName {
  name:string;
}
export interface reviewerStatus {
  name: string;
}
export interface reviewerAgreed {
  name: string;
}


export interface createData {
  author:string,
  reviewer:string,
  agreed :string,
   status :string,
   start_date:string,
   end_date :string,
}

