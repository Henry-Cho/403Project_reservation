from django.urls import path
from .views import indexPageView, addPageView, loginPageView

urlpatterns = [
    path("", indexPageView, name="index"),
    path("login/", loginPageView, name="login"),
    path("add/", addPageView, name="add"),
]    