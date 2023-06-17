class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {
        let added = [];
         candidates.forEach(candidate => {
            let [name, education, yearsExperience] = candidate.split('-');
            yearsExperience = Number(yearsExperience);
            let currCandidate = this.jobCandidates.find(x => x.name === name);
            if(currCandidate == undefined) {
                this.jobCandidates.push( { name, education, yearsExperience} )
            }else {
                if(currCandidate.yearsExperience < yearsExperience) {
                    currCandidate.yearsExperience = yearsExperience;
                }
            }
            if(!added.includes(name)) {
                added.push(name);
            }
            
         })
        return `You successfully added candidates: ${added.join(', ')}.`
    }
    jobOffer(chosenPerson) {
        let [name, minExperience] = chosenPerson.split('-');
        minExperience = Number(minExperience);

        let currCandidate = this.jobCandidates.find(x => x.name === name);
        if(currCandidate == undefined) {
            throw new Error (`${name} is not in the candidates list!`)
        }
        if(minExperience > currCandidate.yearsExperience) {
            throw new Error (`${name} does not have enough experience as ${this.position}, minimum requirement is ${minExperience} years.`)
        }
        currCandidate.yearsExperience = 'hired';

        return `Welcome aboard, our newest employee is ${name}.`
    }
    salaryBonus(name) {
        let currCandidate = this.jobCandidates.find(x => x.name === name);
        if(currCandidate == undefined) {
            throw new Error (`${name} is not in the candidates list!`)
        }
        if(currCandidate.education === 'Bachelor') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`
        }else if(currCandidate.education === 'Master') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`
        }else {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`
        }
    }
    candidatesDatabase() {
        if(this.jobCandidates.length == 0) {
            throw new Error(`Candidate Database is empty!`);
        }

        let sortedCandidates = this.jobCandidates.sort((a, b ) => a.name.localeCompare(b.name)).map(x => `${x.name}-${x.yearsExperience}`);
        return `Candidates list:` + '\n' + `${sortedCandidates.join('\n')}`
    }
}
let Jobs = new JobOffers ("Google", "Strategy Analyst");
 console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5","Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
 console.log(Jobs.jobOffer("John Doe-8"));
 console.log(Jobs.jobOffer("Peter Parker-4"));
 console.log(Jobs.jobOffer("Jordan Cole-4"));
 console.log(Jobs.salaryBonus("Jordan Cole"));
 console.log(Jobs.salaryBonus("John Doe"));
 console.log(Jobs.candidatesDatabase());



