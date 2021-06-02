const tables = require('../business/tables')

class Tables{
    init(conexao){
         this.conexao=conexao;

         tables.forEach(table=>{
            this.createTable(table);
         })
         
    }

    createTable(table){
        var sql = `CREATE TABLE IF NOT EXISTS ${table.name} (`
        table.columns.forEach(column=>{
            sql += `${column},`;
        });
        sql+= `PRIMARY KEY(${table.primaryKey}))`
        
        this.conexao.query(sql, (error)=>{
            if (error) {
                console.log('error: ', error);
            } else {
                console.log('Tabela atendimentos criada com sucesso');
            }
        })
    }
}

module.exports = new Tables;