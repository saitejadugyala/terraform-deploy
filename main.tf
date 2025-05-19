provider "google" {
  project     = "blissful-acumen-459721-v1"
  region      = "us-central1"
  credentials = file("C:/Users/saiteja/downloads/blissful-acumen-459721-v1-ec0c63a3866d.json")
}

resource "google_storage_bucket" "portfolio_bucket" {
  name          = var.bucket_name
  location      = "US"
  force_destroy = true

  website {
    main_page_suffix = "index.html"
    not_found_page   = "404.html"
  }
}

resource "google_storage_bucket_iam_binding" "public_access" {
  bucket = google_storage_bucket.portfolio_bucket.name

  role    = "roles/storage.objectViewer"
  members = ["allUsers"]
}

resource "google_storage_bucket_object" "index" {
  name         = "index.html"
  bucket       = google_storage_bucket.portfolio_bucket.name
  source       = "website/index.html"
  content_type = "text/html"
}

resource "google_storage_bucket_object" "css" {
  name         = "style.css"
  bucket       = google_storage_bucket.portfolio_bucket.name
  source       = "website/style.css"
  content_type = "text/css"
}

resource "google_storage_bucket_object" "js" {
  name         = "script.js"
  bucket       = google_storage_bucket.portfolio_bucket.name
  source       = "website/script.js"
  content_type = "application/javascript"
}
