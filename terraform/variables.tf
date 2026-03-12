variable "aws_region" {
  description = "The AWS region to deploy resources in"
  type        = string
  default     = "us-east-1"
}

variable "domain_name" {
  description = "The custom domain name for the website or a unique bucket prefix"
  type        = string
  default     = "afsolucionestech-assets-web" # Fallback unique name
}
