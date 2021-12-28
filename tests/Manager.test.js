const Manager = require('../library/Manager');


describe('Manager', () => {

    describe('instantiation', () => {

        it('should pass and instantiate object correctly ', () => {
            //Arrange
            //Act
            const testManager = new Manager('Harley Quinn', 1, 'HarleyQ123@gmail.com', 100);

            //Assert
            expect(testManager.officeNumber).toBe(100)
        });
    });

    describe('getRole', () => {

        it('should return the correct role. ', () => {
        //Arrange
        const testManager = new Manager('Harley Quinn', 1, 'HarleyQ123@gmail.com', 100);
        //Act
        const role = testManager.getRole()
        //Assert
        expect(role).toBe('Manager');
        });
    });
})
