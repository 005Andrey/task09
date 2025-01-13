const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameWomanJson: `{
    "count":10,
    "list": {
            "id_1": "Александра",
            "id_2": "Натали",
            "id_3": "Ольга",
            "id_4": "Светлана",
            "id_5": "Катерина",
            "id_6": "Никита",
            "id_7": "Клавдия",
            "id_8": "Зинаида",
            "id_9": "Серафима",
            "id_10": "Ангелина"
         }     
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`; // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function () {

        return this.randomValue(this.firstNameMaleJson);

    },

    randomGender: function () {
        let m = Math.random();
        if (m >= 0.5) { return this.GENDER_MALE; }

        else
            
        return this.GENDER_FEMALE ;

    },

    randomSurname: function () {
        //if ((this.randomGender())==this.GENDER_MALE)
        return this.randomValue(this.surnameJson);
        // else
        // return (this.randomValue(this.surnameJson))+'a';
    
        
    },
    randomFirstWomanName: function () {
        return this.randomValue(this.firstNameWomanJson);

    },
   
   
    randomBirthYear: function () {

   // случайный выбор года от 1957 до 2007
   let y = (1957 + Math.round(Math.random() * 50)) ;
   return y
},
      





   

 getPerson: function () {
        this.person = {};
        this.person.year = this.randomBirthYear();
        this.person.gender = this.randomGender();
        if ( this.person.gender ==this.GENDER_FEMALE)
          {this.person.firstName = this.randomFirstWomanName();
            this.person.surname = this.randomSurname()+'a';}
       
                 
         else
        {this.person.firstName = this.randomFirstName();
        this.person.surname= this.randomSurname();}
       // this.person.year = this.randomBirthYear();
        return this.person;
    }
}
