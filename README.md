# Personal Portfolio Deployment Using Terraform & GCP

This project sets up and deploys a static personal portfolio website using **Terraform** and **Google Cloud Platform (GCP)**.

## ✅ What This Project Does
- Creates a Google Cloud Storage (GCS) bucket for hosting the site.
- Uploads HTML, CSS, and JS files to the bucket.
- Configures the bucket for public website hosting.
- Automatically provisions everything using Terraform.

## 📁 Folder Structure
```
terraform-deploy/
├── main.tf                # Terraform infrastructure definition
├── variables.tf           # Variable declarations
├── outputs.tf             # Output values
├── terraform.tfvars       # Variable values (credentials, project ID, bucket name)
├── dummy_website/         # Static website files renamed from 'website'
│   ├── index.html         # Main HTML file (updated with resume and assets section)
│   ├── style.css          # CSS styles
│   ├── script.js          # JavaScript interactions
│   └── assets/            # Directory for storing PnP-related content/media
├── .gitignore
└── README.md              # Project documentation

```

## 🌐 Live URL
Your website is live at:
```
http://sai-teja-portfolio-bucket.storage.googleapis.com
```
> You can share this link directly, even without a custom domain.

## 🚀 How to Deploy
### 1. Prerequisites
- Google Cloud project with billing enabled
- Service account key JSON file with Storage Admin access
- Terraform installed locally

### 2. Configure `terraform.tfvars`
```hcl
project          = "your-gcp-project-id"
credentials_file = "path/to/service-account-key.json"
bucket_name      = "your-unique-gcs-bucket-name"
```

### 3. Initialize and Apply Terraform
```bash
terraform init
terraform plan
terraform apply
```
> Type `yes` when prompted.

### 4. Verify Deployment
Visit the output URL to see your live site.

## 🧠 Notes
- All files inside `website/` are uploaded to GCS.
- Bucket is set to **public** with object viewer access.
- The site uses `index.html` as the main entry point.

## 🌍 Optional Git Setup
To version control and publish your code:
```bash
git clone https://github.com/your-username/your-repo-name.git
git init
git add .
git commit -m "updated code"
git push origin main
```
> Replace the GitHub URL with your own repo.

## 🌱 Future Improvements
- Add a custom domain
- Enable HTTPS with Cloud CDN or Firebase Hosting
- Set up CI/CD for automatic updates

---
Maintained by Sai Teja Dugyala

