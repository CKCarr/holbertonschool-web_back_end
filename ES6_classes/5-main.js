import Building from './5-building.js';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}

try {
    new TestBuilding(200)
}
catch(err) {
    console.log(err);
}

class OfficeBuilding extends Building {
    evacuationWarningMessage() {
      return 'Please evacuate the office building. Fire alarm activated.';
    }
  }
  
  const office = new OfficeBuilding(5000);
  console.log(office.sqft); // Get the sqft attribute
  console.log(office.evacuationWarningMessage()); // Call the evacuationWarningMessage() method
