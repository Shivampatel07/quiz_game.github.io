/* 

1->     if we click on start/reset button 
        {
            if we are playing 
            {
                reload page
            }
            if we are not playing 
            {   
                score = 0
                show countdown box 
                reduce time by 1 sec 
                if time left
                {
                    continue
                }
                else{
                    game over
                }

                button changing to reset 
                generate new questions and mcq option
            }
        }

2->     if we click on answer box
        {
            if we are playing
            {
                if answer is correct
                {
                    score ++
                    show correct box for 1 sec
                    generate new questions and mcq option 
                }
                else
                {
                    try again box for 1 sec 
                }
            }
        }
*/