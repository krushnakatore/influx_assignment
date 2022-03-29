/// create a group for trip

class Trip {
  constructor(title) {
    this.trip_title = title;
    this.members = [];
    this.addMembers = function (member_name) {
      this.members.push(member_name);
    };
  }
}

let trip = new Trip("Krushna");

// adding memebers to the group.

class Members {
  constructor(member_name) {
    this.name_of_Member = member_name;
    this.expenses = 0;
  }
}

/// checking member already exists or not

function toCheckExistorNot(person) {
  let count = 0;
  for (let i = 0; i < trip.members.length; i++) {
    if (trip.members[i].name_of_Member === person.name_of_Member) {
      count++;
    }
  }
  if (count == 0) {
    trip.addMembers(person);
  } else {
    console.log(`${person.name_of_Member} exists`);
  }
}

// adding expenses to the group and checking the split value also

let whoTogiveWhom = [];

function valueSplit(person, expenses, members) {
  for (let i = 0; i < trip.members.length; i++) {
    if (trip.members[i].name_of_Member === person) {
      trip.members[i].expenses += expenses;
    } else {
      trip.members[i].expenses += expenses / members;
      whoTogiveWhom.push({
        [`${person}`]: `${trip.members[i].name_of_Member} has to give
        Amount as ${expenses / members}`,
      });
    }
  }
}

//calling main function to add

function mainFunction() {
  //adding members
  let m4 = new Members("Anthony");
  let m5 = new Members("Michael");
  let m6 = new Members("Rucha");
  let m7 = new Members("Rucha");
  // checking the members present already or not if not then adding
  toCheckExistorNot(m4);
  toCheckExistorNot(m5);
  toCheckExistorNot(m6);
  toCheckExistorNot(m7);
  // managing expenses
  valueSplit("Anthony", 30, 3);
  valueSplit("Michael", 30, 3);
  valueSplit("Rucha", 30, 3);
  // showing the output
  console.log(trip);
  console.log(whoTogiveWhom);
}

//calling main function to show all the output

mainFunction();
