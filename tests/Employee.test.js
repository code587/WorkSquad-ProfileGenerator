const Employee = require('../library/Employee');


describe('Employee', () => {
    
    describe('instantiation', () => {

        it('should pass and instantiate object correctly ', () => {
            //Arrange
            //Act
            const testEmployee = new Employee('Harley Quinn', 1, 'HarleyQ123@gmail.com');

            //Assert
            expect(testEmployee.name).toBe('Harley Quinn')
            expect(testEmployee.id).toEqual(1)
            expect(testEmployee.email).toBe('HarleyQ123@gmail.com')
            
        });
    });

    describe('getName', () => {
        
        it('should accurately return the name. ', () => {
            //Arrange
            let testEmployee = new Employee('Harley Quinn', 1, 'HarleyQ123@gmail.com');
            //Act
            let name = testEmployee.getName()
            //Assert
            expect(name).toBe('Harley Quinn');
        });
    });
    describe('getId', () => {
        
        it('should accurately return the id. ', () => {
            //Arrange
            let testEmployee = new Employee('Harley Quinn', 1, 'HarleyQ123@gmail.com');
            //Act
            let id = testEmployee.getId()
            //Assert
            expect(id).toEqual(1);
        });
    });

    describe('getEmail', () => {

        it('should accurately return the email. ', () => {
        //Arrange
        let testEmployee = new Employee('Harley Quinn', 1, 'HarleyQ123@gmail.com');
        //Act
        let email = testEmployee.getEmail()
        //Assert
        expect(email).toBe('HarleyQ123@gmail.com');
        });
    });

    describe('getRole', () => {

        it('should return the correct role. ', () => {
        //Arrange
        let testEmployee = new Employee('Harley Quinn', 1, 'HarleyQ123@gmail.com');
        //Act
        let role = testEmployee.getRole()
        //Assert
        expect(role).toBe('Employee');
        });
    });
})


