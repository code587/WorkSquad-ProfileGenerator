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
        
        it('should return the correct name. ', () => {
            //Arrange
            const testEmployee = new Employee('Harley Quinn', 1, 'HarleyQ123@gmail.com');
            //Act
            const name = testEmployee.getName()
            //Assert
            expect(name).toBe('Harley Quinn');
        });
    });
    describe('getId', () => {
        
        it('should return the correct id. ', () => {
            //Arrange
            const testEmployee = new Employee('Harley Quinn', 1, 'HarleyQ123@gmail.com');
            //Act
            const id = testEmployee.getId()
            //Assert
            expect(id).toEqual(1);
        });
    });

    describe('getEmail', () => {

        it('should return the correct email. ', () => {
        //Arrange
        const testEmployee = new Employee('Harley Quinn', 1, 'HarleyQ123@gmail.com');
        //Act
        const email = testEmployee.getEmail()
        //Assert
        expect(email).toBe('HarleyQ123@gmail.com');
        });
    });

    describe('getRole', () => {

        it('should return the correct role. ', () => {
        //Arrange
        const testEmployee = new Employee('Harley Quinn', 1, 'HarleyQ123@gmail.com');
        //Act
        const role = testEmployee.getRole()
        //Assert
        expect(role).toBe('Employee');
        });
    });
})


