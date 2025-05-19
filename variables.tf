variable "project" {
  description = "The GCP project ID"
  type        = string
}

variable "credentials_file" {
  description = "Path to the GCP credentials JSON file"
  type        = string
}

variable "bucket_name" {
  description = "Name of the GCS bucket"
  type        = string
}

