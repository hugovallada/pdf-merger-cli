# pdf-merger-cli

## Ferramenta para o merge pdfs em um mesmo diretório.

## Instruções de instalação: 
    1 - Fazer o download do projeto: 
        1.1 - Via ZIP: Extrair o diretório do arquivo zip
        1.2 - Via terminal: git clone https://github.com/hugovallada/pdf-merger-cli.git

    2 - Acessar o diretório do projeto e realizar a instalação das dependências
        1.1 - Via npm: npm install
        1.2 - Via yarn: yarn install

    3 - Executar o arquivo app.js
        3.1 - node ~/caminhoAtéAPasta/pdf-merger-cli/app.js
        3.2 - Opcional: Criar um alias:
            3.2.1 - bash: echo 'alias pdf="node ~/caminhoAtéAPasta/pdf-merger-cli/app.js" >> ~/.bashrc
            3.2.2 - zsh: echo 'alias pdf="node ~/caminhoAtéAPasta/pdf-merger-cli/app.js" >> ~/.zshrc

## Como funciona:
    ### Tag > Adiciona ou não uma tag que identifica o novo arquivo como um arquivo merged ou não.

    ### Tag Value (Opcional) > Caso tenha escolhido usar a tag, essa opção é chamada e o usuário pode escolher o valor da tag (Merge, _merged, merged).

    ### Diretório > O usuário deve indicar o caminho da pasta onde estão os arquivos pdfs a serem processados no merge.

    ### Novo Nome > O usuário deve digitar o nome do arquivo pdf que será gerado.

    ### Abrir o explorer(Linux) > O usuário pode escolher abrir a pasta no explorador de arquivos após a criação do novo arquivo pdf.
