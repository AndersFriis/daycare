from .base import *

DEBUG = True

BASE_URL = 'http://localhost:8000'

# Email Settings
EMAIL_BACKEND = "sgbackend.SendGridBackend"
SENDGRID_API_KEY = os.environ['SENDGRID_API_KEY']