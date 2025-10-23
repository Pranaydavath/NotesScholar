#include<bits/stdc++.h>
#define mod 1000000007
using namespace std;
int solve(vector<int>arr,int a,int b)
{
unordered_set<int>set2;
unordered_map<int,int> mp;
int t=a;
int c=1;
while(true)
{
if(mp.find(t)!=mp.end())break;
if(t==-1)break;
mp[t]=c++;
t=arr[t];
}

t=b;
int j=0;
int min=INT_MAX;
int ans=-1;
while(true)
{
    if(set2.find(t)!=set2.end())break;
    if(t==-1)break;
    if(mp[t]==0){
        j++;
        set2.insert(t);
        t=arr[t];
        continue;
    }
    int sum=mp[t]+j++;
    if(sum<min)
    {
        min=sum;
        ans=t;
    }
    set2.insert(t);
    t=arr[t];
}
return ans;
}
int main()
{
int n;
cin>>n;
vector<int>arr(n);
for(int i=0;i<n;i++)
cin>>arr[i];
int a,b;
cin>>a>>b;
cout<<solve(arr,a,b);
return 0;
}