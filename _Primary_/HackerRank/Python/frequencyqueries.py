from collections import defaultdict

def freqQuery(queries):
    answers = []
    integers = {}
    freq = defaultdict(lambda: 0)  # from collections lib; creates a 0 based dictionary.

    #O(n), for n = number of tuples in queries
    for q in queries:
        query = q[0]
        num = q[1]

        # insert
        if query == 1:
            if num in integers:
                integers[num] += 1
            else:
                integers[num] = 1

            curr_freq = integers[num]
            prev_freq = integers[num] - 1
            freq[curr_freq] += 1
            freq[prev_freq] = max(0, freq[prev_freq] - 1)

        # delete
        if query == 2:
            if num in integers and integers[num] > 0:
                integers[num] = integers[num] - 1
                curr_freq = integers[num]
                prev_freq = integers[num] + 1
                freq[curr_freq] += 1
                freq[prev_freq] = freq[prev_freq] - 1
                
        # check
        if query == 3:
            # print("query ", num)
            if num in freq and freq[num] > 0:
                answers.append(1)
            else:
                answers.append(0)
    print(answers)
    return answers

# COMPLETED, PASSES TESTS!
# freqQuery([[1,5],[1,6],[3,2],[1,10],[1,10],[1,6],[2,5],[3,2]])
# freqQuery([[1,1],[3,3],[2,2],[3,-1],[1,1],[1,1],[2,1],[1,2],[3,2]])
freqQuery([[1,100021],[3,3],[1,100043],[1,100062],[1,100089],[1,100007],[2,3],[3,4],[3,3],[3,4],[2,5],[1,100092],[3,5],[2,1],[3,1],[1,100091],[1,100053],[1,100044],[2,2],[3,3],[1,100063],[1,100068],[2,3],[1,100084],[2,2],[1,100004],[2,1],[3,5],[2,5],[3,3],[1,100077],[1,100080],[3,1],[1,100020],[1,100093],[3,1],[2,3],[3,2],[3,4],[2,5],[2,5],[2,5],[3,2],[3,4],[3,5],[2,2],[3,2],[3,2],[1,100056],[3,3],[2,4],[1,100070],[3,5],[3,3],[3,3],[3,1],[1,100038],[1,100026],[2,5],[3,2],[1,100043],[2,2],[3,3],[1,100080],[1,100073],[2,2],[1,100005],[2,5],[1,100078],[1,100085],[1,100070],[1,100077],[2,1],[3,3],[3,3],[1,100056],[3,1],[3,4],[3,4],[3,1],[3,1],[2,5],[1,100021],[3,1],[2,2],[3,5],[2,3],[3,2],[1,100050]])
