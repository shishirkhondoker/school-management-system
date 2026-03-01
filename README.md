# School Management System (MongoDB Backend)

A professionally structured School Management Backend built with **MongoDB, Node.js, Express, and Mongoose** for practicing real-world database design and REST API development.
This project demonstrates how to design scalable MongoDB schemas using proper ObjectId references (similar to foreign keys in SQL) and how collections relate to each other in a real-world system.
---
##  Project Overview

This system manages:

*  Parents
*  Teachers
*  Classes
*  Students (with profile image support)
*  Marks & Exam Results

The database is designed using **referencing (ObjectId relationships)** to simulate relational database behavior inside MongoDB.

---

##  Database Structure

###  Parents Collection

* Name
* Mobile (Unique)
* Address

###  Classes Collection

* Class Name
* Section

###  Teachers Collection

* Name
* Subject
* Assigned Class (Referenced)

###  Students Collection

* Name
* Profile Image
* Parent Reference
* Class Reference

###  Marks Collection

* Student Reference
* Exam Name
* Subject-wise Marks
* Total Marks
* Grade

---

##  Database Relationships

* Parent ➜ Students (One-to-Many)
* Class ➜ Students (One-to-Many)
* Class ➜ Teachers (One-to-Many)
* Student ➜ Marks (One-to-One / One-to-Many)

All relationships are implemented using MongoDB ObjectId references.

---

##  Tech Stack

* MongoDB
* Node.js
* Express.js
* Mongoose

---

##  Demo Data Included

The repository includes ready-to-import JSON files:

* parents.json
* classes.json
* teachers.json
* students.json (with image URLs)
* marks.json

##  Learning Objectives

* MongoDB Schema Design
* Referencing vs Embedding
* Mongoose Population
* REST API Development
* Aggregation Pipelines
* Backend Architecture Practice

---

## Future Improvements

* JWT Authentication
* Role-based Authorization (Admin/Teacher)
* Image Upload with Multer & Cloudinary
* React Admin Dashboard
* Result Publishing System
* Class-wise Leaderboard API

---

##  Author

Shishir Khondoker
MERN Stack Developer

