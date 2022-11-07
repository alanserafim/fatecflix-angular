echo "Incializador do projeto"
echo "******************"
echo "atualizando o npm"
call npm update
echo "******************"
echo "Baixando dependências"
call npm install
echo "******************"
echo "Instalando angular cli"
call angular-cli
echo "******************"
echo "Instalando angular cli pages"
call angular-cli-pages
echo "******************"
echo "Git Config: Alan"
call git config
echo "******************"
echo "Faça deploy automático clicando em deploy-cli-pages.bat"
echo "******END************"
echo "Inicializando o Projeto"
call ng-serve
echo "******************"
PAUSE
