<p align="center">
    <h1 align="center">
        Shop
    </h1>
    <p align="center">μΌνλͺ° CRUD API<a href="https://github.com/dimsssss/shop"></a>.</p>
</p>

<p align="center">
    <a href="">
        <img alt="license" src="https://img.shields.io/github/license/dimsssss/toy-intergration-test">
    </a>
    <a href="">
        <img alt="npm" src="https://img.shields.io/node/v-lts/npm?label=npm&logo=npm">
    </a>
    <a href="https://expressjs.com/">
        <img alt="express" src="https://img.shields.io/node/v-lts/express?label=express&logo=express">
    </a>
    <a href="https://jestjs.io/">
        <img alt="jest" src="https://img.shields.io/node/v-lts/express?label=jest&logo=jest">
    </a>
    <a href="https://sequelize.org/">
        <img alt="sequelize" src="https://img.shields.io/node/v-lts/sequelize?label=sequelize&logo=sequelize">
    </a>
    <a href="https://dl.circleci.com/status-badge/redirect/gh/dimsssss/shop/tree/main">
        <img alt="travis" src="https://dl.circleci.com/status-badge/img/gh/dimsssss/shop/tree/main.svg?style=svg">
    </a>
</p>

## π μ€μΉ

### 1. λ°μ΄ν°λ² μ΄μ€ μ€μΉ

```shell
docker run --name=shop -e MYSQL_ROOT_PASSWORD=1234 -e MYSQL_DATABASE=shop -p 6603:3306 -d mysql:latest
```

### 2. μΉ μλ² μ€μΉ

```shell
git clone https://github.com/dimsssss/shop

cd shop

npm install
```

### 3. νκ²½ λ³μ μ€μ 

```
## .env μμ λ€μ΄κ° λ΄μ©
DATABASE_USER = dbκ³μ 
PASSWORD = db ν¨μ€μλ
DATABASE = shop(μμ)
HOST = db νΈμ€νΈ
DATABASE_PORT = db ν¬νΈ
DIALECT = μ¬μ©νλ db μ’λ₯
TIMEZONE = νμμ‘΄ μ€μ 
MIN = μ»€λ₯μ ν μ΅μ κ°―μ
MAX = μ»€λ₯μ ν μ΅λ κ°―μ
SALT_ROUND = ν¨μ€μλ salt λ³μ‘° νμ
SALT = salt κ°
```

### 4. λ°μ΄ν°λ² μ΄μ€ λ§μ΄κ·Έλ μ΄μ

```shell
# migration
npx sequelize-cli db:migrate
```

## π μ΄μ μ¬ν­λ€

https://www.notion.so/dimsss/Shop-API-56f165e2517f4ac9ae1dc01202920a94

## λ°μ΄ν°λ² μ΄μ€ μ€κ³λ

![](image/shop-erd.png)

## π API Document

coming soon

## π§Ύ μ€ν

```shell
npm run dev
```
