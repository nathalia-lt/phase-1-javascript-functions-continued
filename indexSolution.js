function saturdayFun(activity='roller-skate'){
    if(activity == 'roller-skate'){
        return 'This Saturday, I want to roller-skate!'
    }
    if (activity == 'bathe my dog'){
        return 'This Saturday, I want to bathe my dog!'
    }

}

function mondayWork(activity= 'go to the office'){
    if (activity == 'go to the office'){
        return 'This Monday, I will go to the office.'
    }
    if (activity == 'work from home'){
        return 'This Monday, I will work from home.'
    }
}

function wrapAdjective(action){
    if(action == "*") {
        return function(text) {
            return "You are *" + text + "*!"
        }
    }

    if(action == "||") {
        return function(text) {
            return "You are ||" + text + "||!"
        }
    }
}