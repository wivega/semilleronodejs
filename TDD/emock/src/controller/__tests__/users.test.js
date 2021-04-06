import { getUsers, getUserById } from '../user.js';

function foreach(items, callback){
    for(let index = 0; index < items.length; index++){
        callback(items[index]);
    }
}

describe('Test Users', () => {
    it('Obtener lista de Usuarios', async () => {
        const users = await getUsers();
        expect(users.length).toBeGreaterThan(0);
    });

    it('Obtener lista de Usuarios con promesa', done => {
        getUsers().then(result => {
            expect(result.length).toBeGreaterThan(0);
        });
    });

    it('Obtener un usuario', () => {
        return getUserById(1).then(result =>
            expect(result.id).toBe(1)
        );
    });

    it('Obtener un error cuando el usuario no se encuentra', async () =>{
        try {
            expect.assertions(1);
            const result = await getUserById();
        } catch (error) {
            expect(error.message).toMatch("code 404");
        }
    });

    it('Mock funcion foreach', ()=>{
        const mockCallback = jest.fn(x => x * 2);
        foreach([2, 3], mockCallback);
        expect(mockCallback.mock.calls.length).toBe(2);
        expect(mockCallback.mock.calls[0][0]).toBe(3); //Primer argumento en la primera llamada
        expect(mockCallback.mock.calls[1][0]).toBe(3); //Segundo argumento
        console.log(mockCallback.mock.calls); //Imprimiendo el objeto completo
    });

    jest.setTimeout(30000);
    

    it('mock valores retorno', () => {
        const mockCallback = jest.fn();
        console.log(mockCallback);
        mockCallback.mockReturnValueOnce(2).mockReturnValueOnce('algo');
    })
});