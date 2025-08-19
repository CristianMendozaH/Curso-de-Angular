

const skills: string[] = ['JavaScript', 'TypeScript', 'React'];


//interface: es una forma de definir un tipo de objeto
//es una forma de definir la estructura de un objeto, sus propiedades y sus tipos
interface Character {
    name: string;
    hp: number;
    Skills: string[];
    hometown?: string| undefined;
}
/*? indica que la propiedad es opcional*/

//tipar un objeto con una interface
//es una forma de definir un tipo de objeto, sus propiedades y sus tipos

const cristian: Character = {
    name: 'Cristian',
    hp: 100,
    Skills: ['JavaScript', 'TypeScript', 'React'],
};                      


cristian.hometown = 'Madrid';   


console.table(cristian);

export{};