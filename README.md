# Recuperação de Senha

**RF**
- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;
**RNF**
- Utilizar `Mailtrap` para testar envios em ambiente de dev;
- Utilizar `Amazon SES` para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job) também conhecido como fila;
**RN**
- O link enviado para o e-mail para resetar senha deve expirar em 2h;
- O usuario precisa confirmar a nova senha ao resetá-la;

# Atualização do Perfil

**RF**
- O usuário deve poder atualizar seu perfil (nome, e-mail e senha);
**RN**
- O usuário não pode alterar seu e-mail para um e-mail já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

# Agendamento de Serviços

**RF**
- O usuário deve poder listar todos prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;
**RN**
- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h (primeiro horário às 8h, último horário às 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário passado;
- O usuário não pode agendar serviços consigo mesmo;
**RNF**
- A listagem de prestadores deve ser armazenada em `cache`;

# Painel do Prestador

**RF**
- O usuário deve poder listar todos os seus agendamentos para um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;
**RN**
- A notificação deve ter um status de lida/não lida para que o prestador possa controlar;
**RNF**
- Os agendamentos no prestador no dia devem ser armazenados em `cache`;
- As notificações do prestador devem ser armazenadas no `MongoDB`;
- As notificações do prestador devem ser enviadas em tempo real utilizando `Socket.io`;
