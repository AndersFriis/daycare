from django.contrib.auth.models import User
from django.core.mail import EmailMultiAlternatives
from django.conf import settings
from django.template.loader import get_template

def send_new_post_email(postemail):
    # Get all users that have an email address
    user_emails = (User.objects
        .exclude(email__isnull=True)
        .values_list('email', flat=True))

    # Get unique emails addresses
    user_emails = list(set(user_emails))

    # Get a text template to render
    text_template = get_template('core/new_email.txt')
    html_template = get_template('core/email.html')

    # Setup context for the emails, same as using templates to render a HTML page
    context = {
        'post': postemail,
    }

    subject, from_email = 'New post', settings.DEFAULT_FROM_EMAIL
    text_content = text_template.render(context)
    html_content = html_template.render(context)
    msg = EmailMultiAlternatives(subject, text_content, from_email, user_emails)
    msg.attach_alternative(html_content, "text/html")
    msg.send()




    