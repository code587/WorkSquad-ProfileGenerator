const Engineer = require('../library/Engineer');


describe('Engineer', () => {

    describe('instantiation', () => {

        it('should pass and instantiate object correctly ', () => {
            //Arrange
            //Act
            const testEngineer = new Engineer('Harley Quinn', 1, 'HarleyQ123@gmail.com', 'HarleyQ');

            //Assert
            expect(testEngineer.Github).toBe('HarleyQ')
        });
    });

    describe('getGithub', () => {
        
        it('should return github contact info correctly. ', () => {
            //Arrange
            const testEngineer = new Engineer('Harley Quinn', 1, 'HarleyQ123@gmail.com', 'HarleyQ');
            //Act
            const github = testEngineer.getGithub()
            //Assert
            expect(github).toBe('HarleyQ');
        });
    });

    describe('getRole', () => {

        it('should return the correct role. ', () => {
        //Arrange
        const testEngineer = new Engineer('Harley Quinn', 1, 'HarleyQ123@gmail.com', 'HarleyQ');
        //Act
        const role = testEngineer.getRole()
        //Assert
        expect(role).toBe('Engineer');
        });
    });
})