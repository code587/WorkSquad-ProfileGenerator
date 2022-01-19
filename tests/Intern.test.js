const Intern = require('../library/Intern');


describe('Intern', () => {

    describe('instantiation', () => {

        it('should pass and instantiate object correctly ', () => {
            //Arrange
            //Act
            const testIntern = new Intern('Harley Quinn', 1, 'HarleyQ123@gmail.com', 'Crinkle University');

            //Assert
            expect(testIntern.school).toBe('Crinkle University')
        });
    });

    describe('getSchool', () => {
        
        it('should return name of school correctly. ', () => {
            //Arrange
            const testIntern = new Intern('Harley Quinn', 1, 'HarleyQ123@gmail.com', 'Crinkle University');
            //Act
            const school = testIntern.getSchool()
            //Assert
            expect(school).toBe('Crinkle University');
        });
    });

    describe('getRole', () => {

        it('should return the correct role. ', () => {
        //Arrange
        const testIntern = new Intern('Harley Quinn', 1, 'HarleyQ123@gmail.com', 'Crinkle University');
        //Act
        const role = testIntern.getRole()
        //Assert
        expect(role).toBe('Intern');
        });
    });
})