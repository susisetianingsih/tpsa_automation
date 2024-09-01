## ✨ Project Descriptions 

<p>Third Party Security Assessment (TPSA) Automation is a project designed to be able to fill in assessments from third parties automatically based on pre-existing data. This project was created to increase efficiency during third party assessments because some of the questions are similar to each other.</p> 

## 🧠 Problem Solving Concept
<p>In formulating the solution, I used two approaches.</p>

🗝️ **Key-Value**
<p>This approach uses the concept of keys and values ​​contained in the database file. If there is a new question that has a keyword in the database, then output the value. Although this method is easy to implement, there are several disadvantages. For example, when there are several new questions that have the same words and different question intentions, this will produce the same value.</p>

🔢 **Token Similarity**
<p>This approach uses a concept where new questions will be converted into a collection of tokens. Next, these tokens will be seen for their similarity to the tokens in the database. Finally, the model will output the response results.</p>

## 👩‍💻 System Development
<p>Tools used in creating the system include:</p>

A. **Development environtment:** 
  - App script is used to provides a development environment.
  - Google Collaboratory was used to provide model creation.

B. **Database:** 
  - Google Drive is used to database management tool like saving an employee data file.

C. **Programming Language:** 
  - Java Script is used to build the program.
  - Python is used to train the classification model.

D. **Cloud Services/Deployment**: 
  - **Cloud Run** is used to deploy and manage containerized web applications on Google Cloud.
