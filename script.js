const Team = [
	{
		Name: 'Wayne Barnett',
		Posizion: 'Founder & CEO',
		Photo: 'wayne-barnett-founder-ceo.jpg',
	},

    {
		Name: 'Angela Caroll',
		Posizion: 'Chief Editor',
		Photo: 'angela-caroll-chief-editor.jpg',
	},

    {
		Name: 'Walter Gordon',
		Posizion: 'Office Manager',
		Photo: 'walter-gordon-office-manager.jpg',
	},

    {
		Name: 'Angela Lopez',
		Posizion: 'Social Media Manager',
		Photo: 'angela-lopez-social-media-manager.jpg',
	},

    {
		Name: 'Scott Estrada',
		Posizion: 'Developer',
		Photo: 'scott-estrada-developer.jpg',
	},

    {
		Name: 'Barbara Ramos',
		Posizion: 'Graphic Designer',
		Photo: 'barbara-ramos-graphic-designer.jpg',
	},
	
];

const eleList = document.querySelector('.big-container');


printTeamMemberHTML(Team, eleList);

function printTeamMember (arr) {
    for (let i = 0; i < arr.length; i++) {
        let employee = arr[i];
        console.log(employee.Name);
        console.log(employee.Posizion);
        console.log(employee.Photo);
    }
}

function printTeamMemberHTML (arr, eleContainer) {
    eleContainer.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        let employee = arr[i];
        eleContainer.innerHTML += 
            `<div class="container">
                <img src="img/${employee.Photo}" alt=""></img>
                <div class="name"> ${employee.Name} </div>
                <div class="posizion"> ${employee.Posizion} </div>
            </div> `
    }
}