// CODE here for your Lambda Classes
class Person {
    constructor (att){
        this.name = att.name;
        this.age =att.age;
        this.location=att.location;
    }

speak(){
    return `Hello my name is ${this.name}, I am from ${this.location}`;
 }
}

class Instructor extends Person{
    constructor (att){
        super(att);
        this.specialty = att.specialty;
        this.favLanguage = att.favLanguage;
        this.catchPhrase = att.catchPhrase;
    }

demo(subject){
    return `Today we are learning about ${subject}.`;
  }

  grade(student, subject){
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

class Student extends Person{
    constructor(att){
      super(att);
      this.previousBackground = att.previousBackground;
      this.className = att.className;
      this.favSubjects = att.favSubjects;
    }

    listsSubjects(){
        for (let i = 0; i < this.favSubjects.length; i++) {
          return `One of ${this.name}'s favorite subject is ${this.favSubjects[i]}.`;
        }
      }

      PRAssignment(subject){
        return `${this.name} submitted a PR for ${subject}`;
      }
    
      sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
      }
    }

    class ProjectManager extends Instructor{
        constructor(att){
          super(att);
          this.gradClassName = att.gradClassName;
          this.favInstructor = att.favInstructor;
        }
      
        standUp(channel){
          return `${this.name} announces to ${channel}, @channel standy times!`;
        }
      
        debugsCode(student, subject){
          return `${this.name} debugs ${student.name}'s code on ${subject}`;
        }
      }

      const tom = new Person({
        age: '30',
        name: 'Tom',
        location: 'LA',
        gender: 'Male'
    });
    const dan = new Instructor({
        age: 32,
        name: 'Dan',
        location: 'Utah',
        gender: 'Male',
        specialty: 'playing the banjo!',
        favLanguage: 'Java',
        catchPhrase: 'Tomtom'
    });
    const steve = new Instructor({
        age: 31,
        name: 'Steve',
        location: 'Dallas',
        gender: 'Male',
        specialty: 'Coding',
        favLanguage: 'Javascript',
        catchPhrase: 'Hello World'
    });
    const tami = new Student({
        age: 23,
        name: 'Tami',
        location: 'Texas',
        gender: 'Female',
        specialty: 'HTML and CSS',
        favLanguage: 'HTML and CSS',
        catchPhrase: 'This is hard',
        previousBackground: 'Jobs',
        className: 'Web55',
        favSubjects: ['HTML', ' CSS', ' Javascript']
    })
    const joe = new Student({
        age: 40,
        name: 'Joe',
        location: 'New Orleans',
        gender: 'Male',
        specialty: 'HTML and Vue',
        favLanguage: 'HTML',
        catchPhrase: 'I love Lambda!',
        previousBackground: 'Computer Science',
        className: 'Web65',
        favSubjects: ['HTML ', 'CSS ']
    })
    const bob = new Student({
        age: 35,
        name: 'Bob',
        location: 'Hunduras',
        gender: 'Male',
        specialty: 'Love not war',
        favLanguage: 'All of them',
        catchPhrase: 'Lambda 4 lifffe!',
        previousBackground: 'construction worker',
        className: 'Web40',
        favSubjects: ['HTML ', 'CSS ', 'React ']
    })
    const bill = new ProjectManager({
        age: 26,
        name: 'Bill',
        location: 'Arizona',
        gender: 'Male',
        specialty: 'leading our group',
        favLanguage: 'HTML',
        catchPhrase: 'Shoes are cool',
        gradClassName: 'WEB28',
        favInstructor: 'Josh'
    });
    const fred = new ProjectManager({
        age: 66,
        name: 'Fred',
        location: 'Compton',
        gender: 'male',
        specialty: 'sleeping',
        favLanguage: 'HTML',
        catchPhrase: 'You da best',
        gradClassName: 'WEB33',
        favInstructor: 'Dan'
    });

    


