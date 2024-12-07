function mesclarConfigs(configPadrao: Record<string, any>, configUsuario: Record<string, any>): Record<string, any> {
    const lista = { ...configPadrao, ...configUsuario };
    return lista

}

const configPadrao = { tema: "claro", notificacoes: true };
const configUsuario = { tema: "escuro" };

const configFinal = mesclarConfigs(configPadrao, configUsuario);
console.log(configFinal); // Resultado: { tema: "escuro", notificacoes: true }
