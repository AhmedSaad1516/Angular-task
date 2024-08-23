export class Database {
 public static authors=[
    {
      "name": "ahmed",
      "id": "a2df"
    },
    {
      "name": "mohamed",
      "id": "1677"
    },
    {
      "name": "ali",
      "id": "bc4c"
    },
    {
      "name": "samy",
      "id": "eb70"
    }
  ]

  public static reviewers= [
    {
      "name": "reviewerI",
      "id": "1419"
    },
    {
      "name": "reviewerII",
      "id": "0c0d"
    },
    {
      "name": "reviewerIII",
      "id": "90e1"
    },
    {
      "name": "reviewerIV",
      "id": "5074"
    }
  ]

  public static agreed = [
    {
      "name": "accountant",
      "id": "4e1a"
    },
    {
      "name": "manager",
      "id": "378b"
    },
    {
      "name": "employee",
      "id": "584f"
    },
    {
      "name": "viewso_nly",
      "id": "bcf3"
    }
  ]

  public static statusOptions = [
    { name: 'yes' },
    { name: 'No' }
  ];

  public static createDataSet = [
    {
      author: "",
      reviewer: "",
      status: "",
      agreed: "",
      start_date: "",
      end_date: ""
    }
  ];
}
