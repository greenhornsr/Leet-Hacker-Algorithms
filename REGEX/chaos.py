# PROBLEM SOURCE: https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=arrays&isFullScreen=true
# SOLUTION Source: https://www.martinkysel.com/hackerrank-new-year-chaos-solution/

def minimumBribes(q):
    moves = 0
    for pos, val in enumerate(q):
        print("\nval: ", val)
        # print("POS: ", pos)
        if (val-1) - pos > 2:
            print("Too chaotic")
        print("max: ", max(0, val-2))
        print("pos: ", pos, "\n")
        for j in range(max(0,val-2), pos):
            print("J is : ", j)
            if q[j] > val:
                moves+=1
    print(moves)
    return moves

# minimumBribes([1,2,5,3,7,8,6,4])
minimumBribes([2,1,5,3,4])
# minimumBribes([2,5,1,3,4])