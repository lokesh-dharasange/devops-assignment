# 🚀 DevOps Assignment - CI/CD Pipeline on AWS EC2

![AWS](https://img.shields.io/badge/AWS-EC2-orange?logo=amazonaws)
![Node.js](https://img.shields.io/badge/Node.js-Application-green?logo=node.js)
![GitHub Actions](https://img.shields.io/badge/GitHub-Actions-blue?logo=githubactions)
![Nginx](https://img.shields.io/badge/Nginx-Reverse%20Proxy-success?logo=nginx)
![PM2](https://img.shields.io/badge/PM2-Process%20Manager-red)
![CloudWatch](https://img.shields.io/badge/AWS-CloudWatch-yellow)
![SNS](https://img.shields.io/badge/AWS-SNS-blue)

---

# 📌 Project Overview

This project demonstrates a complete DevOps CI/CD pipeline by deploying a Node.js application on an AWS EC2 instance using GitHub Actions. The application is managed using PM2, served through Nginx as a reverse proxy, and monitored using Amazon CloudWatch with SNS email notifications.

---

# 🏗️ Architecture

```text
                Developer
                    │
                    ▼
           GitHub Repository
                    │
                    ▼
         GitHub Actions (CI/CD)
                    │
                    ▼
            AWS EC2 (Ubuntu)
                    │
        ┌───────────┴───────────┐
        ▼                       ▼
   Node.js Application        PM2
        │
        ▼
      Nginx (Reverse Proxy)
        │
        ▼
       End User

---------------- Monitoring ----------------

AWS CloudWatch Dashboard
            │
            ▼
CloudWatch Alarm (CPU > 80%)
            │
            ▼
 Amazon SNS Email Notification
```

---

# ⚙️ Technologies Used

- AWS EC2
- Ubuntu Linux
- Node.js
- PM2
- Nginx
- GitHub
- GitHub Actions
- Amazon CloudWatch
- Amazon SNS
- Linux CLI

---

# ✨ Features

- Automated CI/CD Pipeline
- Automatic Deployment using GitHub Actions
- Node.js Application Hosting
- PM2 Process Management
- Nginx Reverse Proxy
- CloudWatch Monitoring
- CPU Utilization Alarm
- SNS Email Notifications
- Zero Manual Deployment

---

# 🔄 CI/CD Workflow

1. Developer pushes code to GitHub.
2. GitHub Actions workflow starts automatically.
3. Code is deployed to AWS EC2.
4. PM2 restarts the application.
5. Nginx serves the application.
6. CloudWatch monitors the EC2 instance.
7. SNS sends an email notification if CPU usage exceeds the threshold.

---

# 📁 Project Structure

```text
devops-assignment/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── screenshots/
│   ├── 01-ec2-running.png
│   ├── 02-application-running.png
│   ├── 03-github-actions-success.png
│   ├── 04-pm2-status.png
│   ├── 05-nginx-running.png
│   ├── 06-cloudwatch-dashboard.png
│   ├── 07-cloudwatch-alarm.png
│   ├── 08-sns-confirmed.png
│
├── app.js
├── package.json
├── ecosystem.config.js
└── README.md
```

---

# 📸 Project Screenshots

## EC2 Running

![EC2]https://github.com/lokesh-dharasange/devops-assignment/blob/main/EC2.png)

---

## Application Running

![Application](https://github.com/lokesh-dharasange/devops-assignment/blob/main/Application%20Running.png)

---

## GitHub Actions

![GitHub Actions](screenshots/03-github-actions-success.png)

---

## PM2 Status

![PM2](https://github.com/lokesh-dharasange/devops-assignment/blob/main/PM2%20Status.png)

---

## Nginx Status

![Nginx](screenshots/05-nginx-running.png)

---

## CloudWatch Dashboard

![Dashboard](screenshots/06-cloudwatch-dashboard.png)

---

## CloudWatch Alarm

![Alarm](screenshots/07-cloudwatch-alarm.png)

---

## SNS Subscription

![SNS](screenshots/08-sns-confirmed.png)

---

# 🌐 Application

API Endpoint

```
http://13.218.103.82
```

Sample Response

```json
{
  "status": "ok",
  "message": "DevOps Assignment API - Updated via CI/CD!"
}
```

---

# 📊 Monitoring

- CloudWatch Dashboard
- CloudWatch Alarm
- Amazon SNS Email Notifications

---

# 👨‍💻 Author

**Lokesh Dharsange**

AWS & DevOps Engineer

GitHub:

https://github.com/lokesh-dharasange

---

# ⭐ If you like this project, don't forget to give it a Star.
