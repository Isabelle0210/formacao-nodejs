async function connectToDatabase(user, password) {
  if (
    // Verifica se o usuário e senha passados são iguais as variáveis de ambiente do arquivo .env 
    user === process.env.USERDATABASE &&
    password === process.env.PASSWORDDATABASE
  ) {
    console.log("conexão com banco de dados estabelecida");
  } else {
    console.log(
      "Falha de login, não foi possível se conectar ao banco de dados"
    );
  }
}

export default connectToDatabase;
