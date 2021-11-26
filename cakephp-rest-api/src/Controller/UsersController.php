<?php
declare(strict_types=1);

namespace App\Controller;

use Cake\Utility\Security;
use Firebase\JWT\JWT;

/**
 * Users Controller
 *
 * @property \App\Model\Table\UsersTable $Users
 * @method \App\Model\Entity\User[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class UsersController extends AppController
{
    public function initialize(): void
    {
        parent::initialize();
        $this->elementName = 'user';
        $this->elementTable = $this->Users;

        // in a controller beforeFilter or initialize
        // Make view and index not require a logged in user.
        //$this->Authentication->allowUnauthenticated(['view', 'index', 'login']);

         $this->Authentication->allowUnauthenticated(['login', 'index', 'add']);


    }

    //  use AbstractApi;

    /**
     * Index method
     *
     * @return \Cake\Http\Response|null|void Renders view
     */
    public function index()
    {
        // $users = $this->paginate($this->Users);
        // $this->set(compact('users'));

        $identity = $this->Authentication->getIdentity();

        $json = ['user' => $identity->getOriginalData()];

        $this->set(compact('json'));
        $this->viewBuilder()->setOption('serialize', 'json');
    }

    /**
     * View method
     *
     * @param string|null $id User id.
     * @return \Cake\Http\Response|null|void Renders view
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $user = $this->Users->get($id, [
            'contain' => ['UserRole'],
        ]);

        $this->set(compact('user'));
    }

    /**
     * Add method
     *
     * @return \Cake\Http\Response|null|void Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $user = $this->Users->newEmptyEntity();
        if ($this->request->is('post')) {
            $user = $this->Users->patchEntity($user, $this->request->getData());
            if ($this->Users->save($user)) {
                $this->Flash->success(__('The user has been saved.'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The user could not be saved. Please, try again.'));
        }
        $this->set(compact('user'));
    }

    /**
     * Edit method
     *
     * @param string|null $id User id.
     * @return \Cake\Http\Response|null|void Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $user = $this->Users->get($id, [
            'contain' => [],
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $user = $this->Users->patchEntity($user, $this->request->getData());
            if ($this->Users->save($user)) {
                $this->Flash->success(__('The user has been saved.'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The user could not be saved. Please, try again.'));
        }
        $this->set(compact('user'));
    }

    /**
     * Delete method
     *
     * @param string|null $id User id.
     * @return \Cake\Http\Response|null|void Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $user = $this->Users->get($id);
        if ($this->Users->delete($user)) {
            $this->Flash->success(__('The user has been deleted.'));
        } else {
            $this->Flash->error(__('The user could not be deleted. Please, try again.'));
        }

        return $this->redirect(['action' => 'index']);
    }

    public function login()
    {
        
        

            $result = $this->Authentication->getResult();
            if ($result->isValid()) {
                $user = $result->getData();
                $payload = [
                    'sub' => $user->id,
                    'exp' => time() + 86400,
                ];

                $json = [
                    'token' => JWT::encode($payload, Security::getSalt(), 'HS256'),
                ];
            } else {
                $this->response = $this->response->withStatus(401);
                $json = [];
            }

        $this->set(compact('json'));
        $this->viewBuilder()->setOption('serialize', 'json');
        $this->setCors();

    

        

        
    }

    public function logout()
    {
        $json = [];

        $this->Authentication->logout();

        $this->set(compact('json'));
        $this->viewBuilder()->setOption('serialize', 'json');

        $this->setCors();
    }

    public function logar(): void
    {

        $mensagem = 'usuário não logado';
        $requestData = $this->getRequest()->getData();
        $queryData = $this->Users->find('all')->select('password')->where(['email' => $requestData['email']])->first();


        if ($requestData['password'] == $queryData->password) {

            $mensagem = 'usuario logado';
        }
        $this->set('mensagem', $mensagem);
        $this->viewBuilder()->setOption('serialize', 'mensagem');


        $response = $this->getResponse()->withAddedHeader('Access-Control-Allow-Origin', '*');

        $this->setResponse($response);

    }

    public function setCors(): void
  {
    $response = $this->getResponse()->withAddedHeader('Access-Control-Allow-Origin', '*');
    $this->setResponse($response);
  }
}
