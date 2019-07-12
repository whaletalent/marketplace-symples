import React, { Component } from 'react';
import {Field, Label, Control, Help, Select, Input, Button, Textarea, Checkbox} from 'rbx'

export default class FormModal extends Component {
  render() {
    return (
      <form>
        <Field>
          <Label>Nome do Evento</Label>
          <Control>
            <Input color="default-primary" type="text" placeholder="Nome do seu evento aqui" />
          </Control>
        </Field>
        <Field>
          <Label>Tipo</Label>
          <Control >
            <Input
              color="default-primary"
              placeholder="Tipo de evento"
              type="text"
            />
            
           
          </Control>
          
        </Field>

        <Field>
          <Label>Quando será o seu Evento?</Label>
          <Control >
            <Input
              color="default-primary"
              placeholder="data do evento"
              type="date"
            />
            
          </Control>
          
        </Field>
        <Field>
          <Label>Pra quantas pessoas?</Label>
          <Control >
            <Input
              color="default-primary"
              type="number"
            />
            
          </Control>
          
        </Field>


        <Field>
          <Label>Alguma Recomendação extra?</Label>
          <Control>
            <Textarea color="default-primary" placeholder="mensagem aqui" />
          </Control>
        </Field>

      </form>
    )
  }
}
