import random

def game(player):
    global score
    rand = random.randint(1,3)
    if player == 's' or player == 'S':
        player = 1
    elif player == 'p' or player == 'P':
        player = 2
    elif player == 'x' or player == 'X':
        player = 3
    else:
        return "Invalid Input!"
    if (player == 1 and rand == 1) or (player == 2 and rand == 2) or (player == 3 and rand == 3):
        return "Draw", 0
    elif (player == 2 and rand == 1) or (player == 3 and rand == 2) or (player == 1 and rand == 3):
        return "You Won!", 1
    elif (player == 1 and rand == 2) or (player == 2 and rand == 3) or (player == 3 and rand == 1):
        return "You Lost!", -1





