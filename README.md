# Cimas_Constructions_Patologies_2
## Projeto em colaboração com FAP(Formação Acelerada em Programação), IFPE(Instituto Federal de Ciencia e Tecnologia-PE)
Sistema de detecção de patologias em represas utilizando  drones.

# Como Rodar um Projeto Flask Clonado do GitHub

Este guia irá ensiná-lo a configurar e executar um projeto Flask que foi clonado do GitHub. Siga os passos abaixo para garantir que tudo esteja funcionando corretamente.

## Passo 1: Clonar o Repositório

Primeiro, abra seu terminal e clone o repositório do GitHub com o seguinte comando:

```bash
git clone https://github.com/LuizBuarqueDev/Cimas_Constructions_Patologies_2.git
```

## Passo 2: Navegar até o Diretório do Projeto

Depois de clonar o repositório, entre no diretório do projeto:

```bash
cd .\Cimas_Constructions_Patologies_2\Projeto\
```

## Passo 3: Criar um Ambiente Virtual

Para evitar conflitos de dependências, crie um ambiente virtual para o projeto. Isso pode ser feito com o comando:

```bash
python -m venv venv
```

## Passo 4: Ativar o Ambiente Virtual

Agora, ative o ambiente virtual:

- **Linux/macOS**:

  ```bash
  source venv/bin/activate
  ```

- **Windows**:

  ```bash
  venv\Scripts\activate
  ```

Depois de ativar o ambiente, você deve ver algo como `(venv)` antes do prompt no terminal, indicando que o ambiente virtual está ativo.

## Passo 5: Instale as dependências do requirements.txt

Depois de ativar o ambiente, instale todas as dependências que são utilizadas no projeto:

```bash
pip install -r requirements.txt
```

## Passo 6: Executar o Projeto Flask

Depois de instalar as dependências, você pode rodar o servidor Flask com o comando:

```bash
flask run
```

## Passo 7: Acessar o Projeto

Depois de executar o comando `flask run`, o servidor deve estar rodando em `http://127.0.0.1:5000/`. Abra seu navegador e acesse esse endereço para visualizar o projeto.

---
