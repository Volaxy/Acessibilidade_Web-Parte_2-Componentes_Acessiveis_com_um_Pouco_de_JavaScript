# Acessibilidade Web - Parte 2 - Componentes Acessíveis com um Pouco de JavaScript

Curso da Alura sobre conceitos avançados de acessibilidade na criação de um site web.

## Objetivo Final &#x1F3AF;

Terminar o projeto da apeperia deixando a navegação do site o mais acessível possível usando **JavaScript**.

URL do curso -> [Acessibilidade Web - Parte 2 - Componentes Acessíveis com um Pouco de JavaScript](https://cursos.alura.com.br/course/acessibilidade-web-front-end-parte-2)

![Acessibilidade Web - Parte 2 - Componentes Acessíveis com um Pouco de JavaScript](https://www.alura.com.br/assets/api/share/curso-acessibilidade-web-front-end-parte-2.png)

## Links Úteis &#x1F517;
* [Projeto Base](https://github.com/designernatan/acessibilidade-web-front-end-2/archive/9c7502a6e11ae411d773c7046c2203ecec6143c8.zip) - Arquivos base para a criação do projeto.
* [Inert](https://github.com/WICG/inert) - Biblioteca JavaScript para controlar **dialogs**.
* [aria-labelledby](https://developer.mozilla.org/pt-BR/docs/orphaned/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute) - Documentação sobre o atributo `aria-labelledby`.
* [Ebay - Accessibility Patterns for the Web - Dialog](https://opensource.ebay.com/mindpatterns/messaging/alert-dialog/index.html) - Site do Ebay sobre o alert dialog.
* [W3C - dialg/modal](https://www.w3.org/WAI/ARIA/apg/#dialog_modal) - Modal de diálogo de acordo com a W3C.
* [Repositório Inert - WICG](https://www.w3.org/WAI/ARIA/apg/example-index/dialog-modal/dialog.html) - Repositório do **WICG** sobre a biblioteca **Inert**.
* [Repositório Inert - Google Chrome](https://github.com/GoogleChrome/inert-polyfill) - Biblioteca JS da **Google** que contem o **inert**.

## 01 - Melhorias Iniciais &#x1F516;
* Esconder elementos visualmente mas mostrar no leitor de tela que aquele elemento está ali.

### 01 - Feedbacks e Escondendo Visualmente
* Mudança de algumas tags no **HTML**.
* Esconder palavras visualmente mas deixar acessível pelo leitor de tela.


### 02 - Mais span e alts
* Colocar a palavra `plano` antes do tipo do plano para o leitor de tela identificar.

***

## 02 - Modal Acessível &#x1F516;
* Configurar a janela de diálogo.
* Adicionar a propriedade `aria-label`.
* Ajustar o foco quando uma janela de diálogo é aberta.

### 01 - Dialog Acessível
* Explicitando o papel da `dialog` no site.
* Associar o `label` com o `input`.

### 02 - Tirando o Foco
* Especificar o tipo de ação que o botão terá na página.
* Importar a biblioteca do **inert** no HTML.

### 03 - Foco Inconveniente
* Tirar o foco também do vídeo ao abrir a janela de diálogo.

### 04 - Fechar Modal
* Descrever o botão de fechar janela adicionando a propriedade `aria-label`.

### 05 - Fechando com ESC e Click
* Fechar a janela quando o usuário apertar ***ESC***.

***

## 03 - Carousel Acessível &#x1F516;
* Melhorar a acessibilidade do carousel.

### 01 - Sobre o Carousel
* Adicionar uma descrição sobre o que é o Carousel.

### 02 - Js do Carousel
* Adicionar descrição para cada item do carousel.

### 03 - Slide Atual
* Indicar qual noticia é o slide atual.