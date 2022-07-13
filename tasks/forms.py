from django import forms
from django.contrib.auth import get_user_model
from .models import Task


class TaskForm(forms.ModelForm):
    author = forms.CharField()

    def clean_author(self):
        user = get_user_model().objects.get(username=self.cleaned_data.get("author"))
        if not user:
            msg = "Unknown user"
            raise forms.ValidationError(msg)
        return user

    class Meta:
        model = Task
        fields = ("title", "description", "author")
