# AF Soluciones Tecnológicas

Professional web presence and consulting services platform.

![AF Soluciones](/src/assets/hero.png) <!-- Update the hero.png image eventually if you'd like a thumbnail -->

## 🚀 Live Demo
**Website:** [https://d19pd88nsr6pae.cloudfront.net](https://d19pd88nsr6pae.cloudfront.net)

## 🛠 Tech Stack
- **Frontend Framework:** React 19 + Vite 6
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Cloud Infrastructure:** AWS S3 & CloudFront
- **Infrastructure as Code:** Terraform
- **CI/CD:** GitHub Actions

## 💻 Local Development

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Development Server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

## ☁️ Cloud Infrastructure (AWS)

The AWS infrastructure is provisioned using Terraform to adhere to the Well-Architected Framework (Cost Optimization & Performance Efficiency). It runs entirely on the AWS Free Tier.

### Modifying Infrastructure
1. Navigate to the `terraform/` directory.
2. Initialize and deploy:
   ```bash
   terraform init
   terraform apply
   ```

## 🔄 CI/CD Pipeline

This project uses **GitHub Actions** for Continuous Integration and Continuous Deployment (CI/CD). 

Any pushes or merges to the `main` branch will automatically:
1. Build the React application.
2. Sync the compiled `.js/.css/.html` files with the AWS S3 Bucket.
3. Invalidate the AWS CloudFront global CDN cache.

### Required GitHub Secrets
To perform the deployments, the following Repository Secrets are configured in GitHub:
- `ACCESS_KEY_ID`: AWS IAM User access key.
- `SECRET_ACCESS_KEY`: AWS IAM User secret key.
- `AWS_S3_BUCKET_NAME`: The target S3 Bucket (`afsolucionestech-assets-web-k561zz`)
- `AWS_CLOUDFRONT_DISTRIBUTION_ID`: The target CDN ID (`E1KL7OQSX0A7J8`)

## 📝 License
Copyright © AF Soluciones Tecnológicas. All rights reserved.
