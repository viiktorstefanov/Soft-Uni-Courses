function constructionCrew(obj) {

    if(obj.dizziness === true) {
        let water = (0.1 * obj.weight) * obj.experience;

        obj.levelOfHydrated += water;
        obj.dizziness = false;
    }
return obj;
}
constructionCrew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  )
  constructionCrew({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  )
  constructionCrew({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
  )

  function modifyWorker(worker) {
    if (worker.dizziness) {
      return {
        ...worker,
        levelOfHydratedWorker: worker.weight * 0.1 * worker.experience,
        dizziness: false,
      };
    }
  
    return { ...worker };
  }
  