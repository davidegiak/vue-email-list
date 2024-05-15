const { createApp } = Vue

  createApp({
    data() {
      return {
        mail:[],
        indirizzo:"https://flynn.boolean.careers/exercises/api/random/mail"
      }
    },
    methods: {
        generatore() {
          for (let i = 0; i < 10; i++) {
            axios.get(this.indirizzo).then((result) => {
                let codiceRisposta = `${result.status}/${result.statusText}`;
                let datiRisposta = result.data;
                console.log("Ricevuta risposta", codiceRisposta, datiRisposta);
                this.mail.push(datiRisposta.response);
            
              })
          }


        }
    },
    mounted() {
        console.log("App montata");  
        // this.generatore();
        console.log(this.mail);
    }
  }).mount('#app')