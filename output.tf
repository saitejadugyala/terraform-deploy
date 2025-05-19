output "website_url" {
  value = "http://${google_storage_bucket.portfolio_bucket.name}.storage.googleapis.com"
}