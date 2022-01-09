const Engineer = require('../library/Engineer');


describe('Engineer', () => {

    describe('instantiation', () => {

        it('should pass and instantiate object correctly ', () => {
            //Arrange
            //Act
            const testEngineer = new Engineer('Harley Quinn', 1, 'HarleyQ123@gmail.com', 'HarleyQ');

            //Assert
            expect(testEngineer.github).toBe('HarleyQ')
        });
    });

    describe('getGithub', () => {
        
        it('should accurately return the github contact info. ', () => {
            //Arrange
            let testEngineer = new Engineer('Harley Quinn', 1, 'HarleyQ123@gmail.com', 'HarleyQ');
            //Act
            let github = testEngineer.getGithub()
            //Assert
            expect(github).toBe('HarleyQ');
        });
    });

    describe('getRole', () => {

        it('should accurately return the role. ', () => {
        //Arrange
        let testEngineer = new Engineer('Harley Quinn', 1, 'HarleyQ123@gmail.com', 'HarleyQ');
        //Act
        let role = testEngineer.getRole()
        //Assert
        expect(role).toBe('Engineer');
        });
    });
})