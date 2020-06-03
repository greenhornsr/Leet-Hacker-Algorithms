# Source: https://leetcode.com/problems/min-stack/
# Sean Chen did this during a Whiteboard Practice Session

# Every operation needs to be in constant time 
class MinStack:
    def __init__(self):
        """
        initialize your data structure here.
        """
        # what are we going to use for the underlying storage 
        # of elements? 
        # can a normal list work?
        # can a dict work? dict's not (generally) ordered by 
        # when elements are inserted
        self.storage = []
        self.mins = []
    def push(self, x: int) -> None:
        # push x onto the storage stack 
        self.storage.append(x)
        # check if self.mins is empty or if 
        # x < self.mins[-1]
        if len(self.mins) == 0 or x <= self.mins[-1]:
            self.mins.append(x)
    # pop doesn't return the removed element 
    # just removes the top element but doesn't return it 
    def pop(self) -> None:
        # check if the top element in our storage stack == top of mins 
        # if it is
        if self.storage[-1] == self.mins[-1]:
            # pop from both 
            self.storage.pop()
            self.mins.pop()
        # otherwise just pop from main stack 
        else:
            self.storage.pop()
    def top(self) -> int:
        if len(self.storage) > 0:
            return self.storage[-1]
        return None
    # getMin doesn't remove the min element, just fetches it and
    # returns it without affecting the state of the stack 
    def getMin(self) -> int:
        if len(self.mins) > 0:
            return self.mins[-1]
        return None
        # how do we retrieve the min element from a list in constant time? 
        # 1.
        # let's keep track of the min element with a variable and 
        # update it 
        # 2.
        # create a copy of the array first 
        # sort the list so that we know where the min element is in the 
        # stack and so we can just return it 
        # 3. time: constant for all the methods 
        #    space: linear 
        # instead of a variable to keep track of the min, 
        # use another list to keep track of the min values 
        # if a new min value comes in, we'll add it to the top of our 
        # min list 
        # so when we call getMin, we'll just return the top value of 
        # the min list 
        # when we pop, check if the top of the main stack == the top 
        # of the min stack 
        # if they match, pop from both lists 
        # otherwise, just pop from the main stack 
# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(x)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()

# COMPLETED, PASSES!
