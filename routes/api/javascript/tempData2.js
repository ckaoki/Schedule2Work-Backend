var weeklySchedule = [
  { Date: '2019-07-29',
    Shifts:[
      { StartTime:'8:00',
        EndTime: '12:00',
        Role: 'grill',
        EmployeeID: 1,
        FirstName: 'Jon',
        LastName: 'Doe',
      },
      { StartTime:'8:00',
        EndTime: '12:00',
        Role: 'fry',
        EmployeeID: 2,
        FirstName: 'Jane',
        LastName: 'Doe',
      },
      { StartTime:'10:00',
        EndTime: '14:00',
        Role: 'supervisor',
        EmployeeID: 3,
        FirstName: 'Bill',
        LastName: 'Gates',
      }
    ]
  },
  { Date: '2019-07-30',
    Shifts:[
      { StartTime:'8:00',
        EndTime: '12:00',
        Role: 'grill',
        EmployeeID: 2,
        FirstName: 'Jon',
        LastName: 'Doe',
      },
      { StartTime:'8:00',
        EndTime: '12:00',
        Role: 'fry',
        EmployeeID: 2,
        FirstName: 'Jane',
        LastName: 'Doe',
      },
      { StartTime:'10:00',
        EndTime: '14:00',
        Role: 'supervisor',
        EmployeeID: 3,
        FirstName: 'Bill',
        LastName: 'Gates',
      }
    ]
  }  
]

module.exports = {weeklySchedule};