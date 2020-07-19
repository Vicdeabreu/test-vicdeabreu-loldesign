const mysqlConnection = require('../database');
const express = require('express');
const router = express.Router();
const controller = {};


// Mostrando todos os produtos
controller.view = (req, res) => {
  mysqlConnection.query(`SELECT * FROM products`, (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
};

// Mostrando os produtos pelo id
controller.show = (req,res) => {
  const id = req.params.id;
  const product = mysqlConnection.query(`SELECT * FROM products WHERE id = ?`,[id],(err, rows, fields) => {
    if(!err){
      res.send(rows);
    } else {
      console.log(err);
    }
  });
}

//buscando um produto pelos parâmetros 
controller.search = (req,res) => {
  const origem = req.params.origem;
  const destino = req.params.destino;
  const duracao = req.params.duracao;
  const plano = req.params.plano;
  const product = mysqlConnection.query(`SELECT * FROM products WHERE origem = ? AND destino = ?`, [origem,destino],(err, rows, fields) => {
    if(!err){
      res.send(rows);
    } else {
      console.log(err);
    }
  });
    
  //valor com FaleMais
    if(duracao <= plano){
      var precoPlano = 0;
    } else {
      var precoPlano = (duracao - plano)*(product.valor*1.1);
      console.log(precoPlano);
    }
    
    //valor sem FaleMais
    var precoNormal = duracao * product.valor;
    
    //Montando a pesquisa
    const pesquisa = {
    semFaleMais: {
      origem: product.origem,
      destino: product.destino,
      duracao,
      preco: precoNormal,
    },
    comFaleMais: {
      origem: product.origem,
      destino: product.destino,
      duracao,
      preco: precoPlano,
    }
  }

  return res.json(pesquisa);

}

module.exports = controller;