class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> map;

        vector<int> temp;
        temp.push_back(-1);
        temp.push_back(-1);

        for (int i = 0; i < nums.size(); i++) {
            if (map.find(target - nums[i]) != map.end()) {
                temp[0] = map[target - nums[i]];
                temp[1] = i;
            } else {
                map[nums[i]] = i;
            }
        }

        return temp;
    }
};