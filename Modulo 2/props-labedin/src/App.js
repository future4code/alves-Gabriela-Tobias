import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fcpq14-1.fna.fbcdn.net/v/t39.30808-6/241253171_4264541163614261_167915827505653479_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=8BHFwbCaD8oAX94SWTa&_nc_ht=scontent.fcpq14-1.fna&oh=00_AT8oH0ec9EbrMKwNofXfQbLf1V9EcnFZSjSycpXX3LHvHg&oe=62A4EA9A"
          nome="Gabi" 
          descricao="Oi, eu sou a Gabriela, aluna da Labenu! Tenho 30 anos e trabalhei no comércio, estou estudando muito para me tornar uma Dev de dar orgulho! também tenho dois doguinhos lindos e um marido que me apoia <3"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div className="DadosPessoais">
         <CardPequeno
         email='./components/img/emailzinho.jpg'
         texto= "E-mail: fulanodetal@fulabenu.com.br"
         />
         <CardPequeno
         endereco = './components/img/derecozinho.jpg'
         texto= "Endereço: Casa da mãe Joana"
        />
      </div>


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
