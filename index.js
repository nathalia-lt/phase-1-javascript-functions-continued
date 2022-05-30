
function saturdayFun(action ='roller-skate'){

    return `This Saturday, I want to ${action}!`
}

function mondayWork(action2 ='go to the office'){
    return `This Monday, I will ${action2}.`
}


function wrapAdjective(special='*'){
    return function(action3 = 'a dedicated programmer'){
        return `You are ${special}${action3}${special}!`
    }
}

