# motivation

>A “Motivation Pool” is a concept we created in our office. At the beginning of each month, we choose a goal that is countable (like running 1000 kilometers, losing 3kg, or reading 8 books). We then all “bet” 10000 japanese yen that we can complete our goals by the end of the month. If anyone fails to achieve their goals, then the money that they added to the motivation pool is used by the people who could achieve their goals.
The goals of the app are to:
1. Let people enter their goals, so that everyone can see what goals people have chosen. Also let people enter what the unit of their goal is such as  ‘kilometers’, ‘books’, or ‘kilograms’.
2. Let people update their progress so everyone can see it. Also calculate how many “units” such as ‘kilometers’ or ‘books’ are left for each person, and the remaining percentage.
3. Make it easy to see when someone has achieved 100% of their goal.

## Money Pool Implementation

Currently we are calculating the current pool value by fetching all goals. This implementation obviously non scalable as the calculation will take longer as the list grows bigger. I chose this solution because I can demonstrated in VueJs. The better implementation would be to store the value somewhere which we calculate based of a trigger.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
