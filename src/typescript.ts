let letra:string = 'a'
// letra = = 1
const number:number = 1
const boolean:boolean = true
const nulo:null = null

function funcion(numero1:number, saludo:string):string {
  return saludo + ' a ' + numero1
}

type typeId = number | string

const idEndpoint:typeId = '1'

type Persona = {
  nombre: string,
  apellido: string,
  edad: number,
  casado: boolean
}

interface PersonaI {
  nombre: string,
  apellido: string,
  edad: number,
  casado: boolean
  parientes?: Persona[] | null
}

const persona:PersonaI = {
  nombre: 'luis',
  apellido: 'jimenes',
  edad: 2,
  casado: false,
  parientes: [
    {
      nombre: 'luis',
      apellido: 'jimenes',
      edad: 2,
      casado: false,
    }
  ]
}

persona.apellido = 'ramires'

const persona2:PersonaI = {
  nombre: 'luis',
  apellido: 'jimenes',
  edad: 2,
  casado: false,
}


const imprimirPersona = (persona:PersonaI ) => {
  console.log(persona)
}

type direcciones = 'top' | 'left' | 'right' | 'bottom' 

const direction:direcciones = 'left'

enum Status {
  open = 'abierto',
  close = 'cerrado',
  inProgress = 'En progreso',
}

Status.inProgress