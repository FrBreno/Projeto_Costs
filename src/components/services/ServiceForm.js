import { useState } from 'react';
import styles from '../project/ProjectForm.module.css'

import Input from '../form/Input/Input';
import SubmitButton from '../form/SubmitButton/SubmitButton';

function ServiceForm({ handleSubmit, btnText, projectData }) {

    const [service, setServices] = useState({});


    function submit(event) {
        event.preventDefault();
        projectData.services.push(service);
        handleSubmit(projectData);
    }

    function handleChange(event) {
        setServices({...service, [event.target.name]: event.target.value});
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type="text"
                text="Nome do serviço"
                name="name"
                placeholder="Insira o nome do serviço"
                handleOnChange={handleChange}
            />
            <Input 
                type="number"
                text="Custo do serviço"
                name="cost"
                placeholder="Insira o valor total"
                handleOnChange={handleChange}
            />
            <Input 
                type="text"
                text="Descrição do serviço"
                name="description"
                placeholder="Descreva o serviço"
                handleOnChange={handleChange}
            />
            <SubmitButton text={btnText}/>
        </form>
    );
}

export default ServiceForm;