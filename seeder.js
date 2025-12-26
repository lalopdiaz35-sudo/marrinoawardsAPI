
require('dotenv').config();
const mongoose = require('mongoose');
const colors = require('colors'); 
const Participant = require('./models/Participant'); 
const Category = require('./models/Category'); 
const { connectDB } = require('./config/db');

connectDB();

const categories = [
    { name: "Top Pendejito", description: "Premio para el marrino que comete mayor numero de pendejadas , deciciones y neta no vale madre en el año", imageUrl: "/category-1.jpg" },
    { name: "Marrino Academico", description: "Premia al marrino que mas se destaco en sus labores estudiantiles y crecimiento personal", imageUrl: "/category-2.jpg" },
    { name: "Percebe feo", description: "Reconoce al marrino con peor suerte del año", imageUrl: "/category-3.jpg" },
    { name: "1/michi", description: "Para el marrino que fue mas crack, osea lo contrario a ser michi", imageUrl: "/category-4.jpg" },
    { name: "Madil Atomico", description: "El marrino que lo mueve macizo su vieja", imageUrl: "/category-5.jpg" },
    { name: "Marrino benémerito", description: "Se premia el marrino que mas aporto a la comunidad marrina, sin embargo es de las categorias con mas corrupción", imageUrl: "/category-6.jpg" },
    { name: "Filo da puta", description: "Premia al marrino mas mamon del año marrino", imageUrl: "/category-7.jpg" },
    { name: "Chambea jala", description: "Marrino que mas le mete ganas a la chamba", imageUrl: "/category-8.jpg" },
    { name: "PELA GRACA DE DEUS", description: "Marrino con la mejor suerte del año en general", imageUrl: "/category-9.jpg" },
    { name: "Top Deja Abajo", description: "El marrino que nunca le cae a los planes marrinos", imageUrl: "/category-10.jpg" },
    { name: "Cbum", description: "Marrino mas guapo", imageUrl: "/category-11.jpg" },
    { name: "Top racista", description: "Reconoce a el marrino que mas ataco a minorias ya sea por su raza, religion, etnia, idioma, Nacionalidad, etc", imageUrl: "/category-12.jpg" },
    { name: "Top Rockerito/fifita", description: "El Marrino menos deconstruido, Mantiene una visión más tradicional sobre roles sociales, identidad y moralidad.", imageUrl: "/category-13.jpg" },
    { name: "Tazo dorado", description: "Marrino que mas ingiere sustancias no buenas para su salud", imageUrl: "/category-14.jpg" },
    { name: "Los 12 pasos", description: "Marrino que mas pistea", imageUrl: "/category-15.jpg" },
    { name: "Iván Aceves", description: "Marrino que esta mas puerco , pero puerco puerco", imageUrl: "/category-16.jpg" },
    { name: "Flacow", description: "El marrino mas enclenque que no le mete al gym", imageUrl: "/category-17.jpg" },
    { name: "Ronnie Coleman", description: "Marrino que mas le mete al gym y esta bien mamado ", imageUrl: "/category-18.png" },
    { name: "Chue en su prime", description: "Marrino que levanta mas minitas, con mas pegue", imageUrl: "/category-19.jpg" },
    { name: "Blow job", description: "El marrino que mas se la blow job , mejor desarrollo fisico del año", imageUrl: "/category-20.PNG" },
    { name: "Chue actual ", description: "El marrino que peor desarrollo disico tuvo en el año", imageUrl: "/category-21.jpg" },
    { name: "Marrino más esteril (aestetik)", description: "Premia al Marrino con mejor vestimenta o look del año", imageUrl: "/category-22.jpg" },
    { name: "N", description: "Premia al marrino con peor decision del año", imageUrl: "/category-23.jpg" },
    { name: "Marrino mas calvo", description: "Marrino mas fokin calvo", imageUrl: "/category-26.jpg" },
    { name: "Top pendejito externo", description: "Premia a una persona externa a la comunidad marrina que sea considerado pendejo o pendeja", imageUrl: "/category-24.jpg" },
    { name: "Mejor momento del año", description: "Mejor momento del año en general", imageUrl: "/category-25.jpg" },
];

const participants = [
    { name: "Eduardo Diaz", nickname: "Machete", occupation: "Backend Developer", specialAbility: "Hacerse bien wey", imageUrl: "/participant-1.jpg" },
    { name: "Ignacio Ponce", nickname: "Narco Ponce", occupation: "Ingeniero industrial (Mejor carrera del mundo)", specialAbility: "Dormirse/Correr a los marrinos", imageUrl: "/participant-2.jpg" },
    { name: "Edson Cabrera", nickname: "Mamera", occupation: "FrontEnd Developer", specialAbility: "Mandilear", imageUrl: "/participant-3.jpg" },
    { name: "Cesar Ivan", nickname: "N", occupation: "Matematico/remachador/pintor/asaltante", specialAbility: "10 proyectos de alto impacto", imageUrl: "/participant-4.jpg" },
    { name: "Axel Rico", nickname: "Marrino/Tino", occupation: "Ingeniero en Sistemas Computacionales", specialAbility: "Habilidad Especial 5", imageUrl: "/participant-5.jpg" },
    { name: "Fernando Camacho", nickname: "Michi", occupation: "Trabaja en el INE", specialAbility: "+1000 capturas pokemon go diario / pisar cabezas", imageUrl: "/participant-6.jpg" },
    { name: "Carlos Villaseñor", nickname: "Chue", occupation: "Ingeniero Mecatronico Supuestamente", specialAbility: "Absorber planetas", imageUrl: "/participant-7.jpg" },
    { name: "Ivan Prida", nickname: "Barto", occupation: "Desconocido", specialAbility: "-", imageUrl: "/participant-8.jpg" },
];


const importData = async () => {
    try {
        await Participant.deleteMany(); 
        await Category.deleteMany();
        
        await Category.insertMany(categories);
        await Participant.insertMany(participants); 

        console.log('✅ Datos importados correctamente!'.green.inverse);
        process.exit();
    } catch (error) {
        console.error(`🚨 Error al importar datos: ${error.message}`.red.inverse);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await Participant.deleteMany();
        await Category.deleteMany();
        console.log('🗑️ Datos destruidos correctamente!'.red.inverse);
        process.exit();
    } catch (error) {
        console.error(`🚨 Error al destruir datos: ${error.message}`.red.inverse);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    destroyData(); 
} else {
    importData(); 
}