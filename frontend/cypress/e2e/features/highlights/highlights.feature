Feature: Em Alta

Scenario: Exibir informações sobre as músicas em alta
  Given o usuário está na página "/"
  When o usuário clica no "highlights"
  Then o usuário deve ser redirecionado à página "in-high" e visualizar a música "ballad of a homeschooled girl" e a música "'tis the damn season"