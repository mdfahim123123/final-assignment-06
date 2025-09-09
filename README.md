## WELCOME TO ( সহজ সরল সিম্পল ) ASSIGNMENT-006

### 📅 Deadline For 60 marks: 9th September, 2025 (11:59 pm ⏱️)

### 📅 Deadline For 50 marks : 13th September , 2025 (6:00 pm⏱️)

### 📅 Deadline For 30 marks: Any time after 13the September , 2025 (6:01 pm⏱️).

---
# Green Earth


## Private Repository: https://classroom.github.com/a/nVZrg5R9 

## Alternative Private Repository: https://classroom.github.com/a/KCGI14ST 

## Alternative Private Repository: https://classroom.github.com/a/JMuIYqgK 


---
🌴 API Endpoints
---
1. Get 🌴All Plants
```bash
https://openapi.programming-hero.com/api/plants
```

2. Get 🌴All categories <br/>
```bash
https://openapi.programming-hero.com/api/categories
```


3. Get 🌴plants by categories <br/>
```bash
https://openapi.programming-hero.com/api/category/${id}
```

```bash
https://openapi.programming-hero.com/api/category/1
```

4. Get 🌴Plants Detail <br/>

```bash
https://openapi.programming-hero.com/api/plant/${id}
```

```bash
https://openapi.programming-hero.com/api/plant/1
```
---




## ✅ Main Requirements 

#### 1) Navbar

- Website **logo/name** on the **left**  
- **Menu items** in the **center** 
- **Plant a Tree button** on the **right** 

#### 2) Banner 
- A **background image**  
- A **title** and **subtitle**  
- A **centered button**  

#### 3) About Campaign
- **Section heading**  
- **Image on the left**, **text on the right**  

#### 4) Our Impact Section 
- Show **3 cards** with campaign **statistics**  

#### 5) Plant a Tree Today Section & Footer
- **Form**: Name, Email, Number of Trees  
- **Footer** with copyright info 

#### 6) Responsiveness 
- Website must be **mobile responsive**  

---
#### 7) Create a README file to answer the following question-


#### 1) What is the difference between var, let, and const?

১. var

Scope: function scoped (যে ফাংশনে ডিক্লেয়ার করা হয়, সেখানেই সীমাবদ্ধ)।

Re-declare করা যায়: হ্যাঁ  (একই নাম দিয়ে আবার declare করা যায়)।

Hoisting হয়: হ্যাঁ (ডিক্লেয়ারেশনের আগে ব্যবহার করলে value undefined আসবে)।



 ২. let

 block scoped ({} ব্লকের ভেতরে সীমাবদ্ধ)।

Re-declare করা যায় না (একই scope-এ আবার declare করা যাবে না)।

Re-assign করা যায় (value পরিবর্তন করা যাবে)।

Hoisting হয় না আগে ব্যবহার করলে error দিবে।

যখন আমাদের  value পরিবর্তন করার দরকার হয় তখন আমরা let ব্যবহার করি।


 ৩. const

এটিও let এর মতো block scoped.

Re-declar করা যায় না।

Re-assign  করা যাবে না।

Hoisting হয় না।

যখন আমরা  কখনো মান পরিবর্তন করব না তখন আমরা const ব্যবহার করব।


#### 2) What is the difference between map(), forEach(), and filter()? 

১. forEach()

শুধু array-এর প্রতিটি element এর উপর loop চালায়।

প্রতিটি element এর জন্য function execute করে।

কোনো নতুন array return করে না → সবসময় undefined return করে।

সাধারণত side effect এর জন্য (console log, calculation, push ইত্যাদি) ব্যবহার হয়।


২. map()

প্রতিটি element এর উপর function চালিয়ে একটি নতুন array return করে।

মূল array পরিবর্তন হয় না।

যখন transform করে নতুন array দরকার, তখন map() ব্যবহার হয়।


৩. filter()

প্রতিটি element এর উপর condition চেক করে।

যেগুলো condition true হয়, শুধু সেগুলো নিয়ে একটি নতুন array return করে।

যখন array থেকে কিছু element বাদ দিতে বা বেছে নিতে হয়, তখন ব্যবহার হয়।

#### 3) What are arrow functions in ES6?

Arrow function হলো JavaScript এর একটি নতুন ধরণের function লেখার শর্টকাট সিনট্যাক্স, যেটা ES6 এ এসেছে।

সাধারণ ফাংশান আর এরে ফাংশানের পার্থক্য নিচে দেওয়া হলো-
 
সাধারণ function
function add(a, b) {
  return a + b;
}

Arrow function
const add = (a, b) => {
  return a + b;
};

একই কাজ আরও ছোট আকারে লেখা যায়।
যদি function এর ভিতরে শুধু একটি স্টেটমেন্ট return হয়, তবে আর return লিখতে হয় না।

Arrow Function এর সুবিধা--
ছোট ও পরিষ্কার কোড লেখা যায়।
this আলাদা করে bind করতে হয় না → arrow function parent এর this ব্যবহার করে।
Callback functions (যেমন map(), forEach(), filter()) এ খুব কাজে লাগে।

Arrow Function এর সীমাবদ্ধতা---
this এর মান সবসময় parent scope থেকে নেয় → object method হিসেবে ব্যবহার করলে সমস্যা হতে পারে।
arguments object পাওয়া যায় না।
Constructor function হিসেবে ব্যবহার করা যায় না।

#### 4) How does destructuring assignment work in ES6?

Destructuring হলো একটি শর্টকাট পদ্ধতি, যেটা দিয়ে আমরা array বা object থেকে একাধিক মান আলাদা করে variable এ assign করতে পারি।

 ১. Array Destructuring
 ২. Object Destructuring
 ৩. Default Value দেওয়া
 ৪. Nested Destructuring
 ৫. Function Parameter এ Destructuring

Array Destructuring = index অনুযায়ী মান বের করা।
Object Destructuring = key অনুযায়ী মান বের করা।


#### 5) Explain template literals in ES6. How are they different from string concatenation?

Template Literals হলো ES6 এ আসা একটি নতুন string লেখার পদ্ধতি, যেখানে
আমরা backtick (`) ব্যবহার করি,


Concatenation ও Template Literals এর মধ্যে পার্থক্য-----


 Template Literals 
১.সিনটেক্স ${ } ব্যবহার হয়
২.সহজে multi-line লেখা যায়
৩.সরাসরি ${ } এর ভেতরে লেখা যায়
৪.কোড ছোট ও পরিষ্কার হয় 

Concatenation
১. + দিয়ে variable জোড়া লাগে
২. Multi-line লেখার জন্য \n দিতে হয়
৩. আগে হিসাব করে string এ যোগ করতে হয়
৪. কোড অনেক লম্বা ও জটিল হয।



		
		
	

## ⚙️ Functionalities 

1) Category Loading 
Load Tree Categories dynamically on the left side.

2) Category Click → Tree Data 
On clicking a category: load trees of that category.

Display in a 3-column card layout.

3) Card Contents 
 Each card includes:

        - Image

        -  Name

        - Short description

        - Category

        - Price

        - Add to Cart button

4) Modal on Card Click 
Clicking a tree name on a card opens a modal with full tree details.


##  🧪 Challenges 


    1) Add to Cart 
    Clicking Add to Cart: - Adds the tree to Cart List
                          - Shows tree name 

    2) Total Calculation 
    Calculate total price of trees in cart.

    3) Remove from Cart 
    Clicking ❌ removes tree and deducts price from total.

    4) Loading Spinner
    Show spinner while data is loading.

    5) Active Button State 
    Highlight active category button when selected.



🧰 Technology Stack:
        
        HTML

        CSS (Vanilla / Tailwind / DaisyUI)

        JavaScript (Vanilla only, no frameworks)

📌 Rules
✅ At least 5 meaningful commits

❌ No dummy text or Lorem Ipsum — must use relevant content





## 🔗 Submission
- **Live Link :** YOUR_DEPLOYED_URL_HERE  
- **GitHub Private Repository:** YOUR_REPO_URL_HERE  

---