<?php
declare(strict_types=1);

namespace App\Controller;

use App\Model\Entity\User;
use App\Model\Table\UsersTable;

class UsersController extends AppController {

  use AbstractApi;

  public function initialize(): void
  {
    parent::initialize();
    $this->elementName = 'user';
    $this->elementTable = $this->Users;

  }

  public function login(): void
  {
    $result = $this->Authentication->getResult();

    // If the user is logged in
    if ($result->isValid()) {



    }
  }

  public function logar(): void
  {

    $mensagem = 'usuário não logado';
    $requestData = $this->getRequest()->getData();
    $queryData = $this->Users->find('all')->select('password')->where(['email' =>$requestData['email']])->first();


   if ($requestData['password'] == $queryData->password) {

     $mensagem = 'usuario logado';
   }
     $this->set('mensagem', $mensagem);
     $this->viewBuilder()->setOption('serialize', 'mensagem');


    $response = $this->getResponse()->withAddedHeader('Access-Control-Allow-Origin', '*');

    $this->setResponse($response);

  }


}
