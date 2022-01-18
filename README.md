# Facebook Messenger Bot (NodeJS)

## Built with : 
- [ExpressJS](https://expressjs.com/)
- [NodeJS](https://nodejs.org/en/)
- [Sequelize ORM](https://sequelize.org/)

---

## Getting Started
### Prerequisites
- npm  
  ```
  npm install npm@latest -g
  ```
- yarn  
  ```
  npm install -g yarn
  ```


### Installation
1. Clone repository  
   ```
   git clone https://github.com/felixyunianto/facebook-messenger-bot-nodejs.git
   ```
  
2. Install dependencies  
   With Yarn 
   ```
   yarn
   ```
   With NPM
   ```
   npm install
   ```

3. Create facebook page  
   ![Facebook Page](./assets/facebook_page.png)
4. Setting facebook app
   ![Facebook App](./assets/facebook_app.png)

    Next, head to **Messenger Widget** then find access token and add new page to create PAGE_ACCESS_TOKEN
    ![Messager](./assets/messenger.png)

    Setting Webhook
    ![Webhook](./assets/webhook.png)

5. Create database (exmaple : facebook-bot)
6. Copy the .env.example file to .env and fill it in.  
   | Name                   | Desc                                                          | 
   | -----                  | ----                                                          |
   | DB_USERNAME            | Database Username                                             |    
   | DB_PASSWORD            | Database Password                                             |
   | DB_HOST                | Database Host                                                 |
   | DB_DATABASE            | Database Name                                                 |
   | PAGE_ACCESS_TOKEN      | Page Acces Token Facebook                                     |
   | VERIFY_TOKEN           | the token that is in the settings in the facebook application |

7. Migrate all tables to database
   ```
      npx sequelize db:migrate
   ```

8. Run the project   
   ```
    yarn server or npm run dev
   ```


## RESULT

### Messenger

|                          |                          |
:-------------------------:|:-------------------------:
|![](./assets/result-1.png) | ![](./assets/result-2.png)|
|![](./assets/result-3.png) | ![](./assets/result-4.png)|
|![](./assets/result-5.png) | ![](./assets/result-6.png)|

### REST API
| ENDPOINT                 | DESC|
|-------------------------|-------------------------|
|`/messages` | that list all messages received from users|
|`/messages/:id` | view single message by its ID |
|`/summary` | view this data exact data|

#### All messages
![](./assets/rest-1.png)

#### Message by ID
![](./assets/rest-2.png)

#### Summary
![](./assets/rest-3.png)

### TEST
![](./assets/test.png)