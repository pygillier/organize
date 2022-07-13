import graphene
from graphene import Field
from graphene_django import DjangoObjectType
from graphene_django.forms.mutation import DjangoModelFormMutation
import graphql_jwt
from graphql_jwt.decorators import login_required
from .models import Task
from .forms import TaskForm
from django.contrib.auth import get_user_model


class UserType(DjangoObjectType):
    class Meta:
        model = get_user_model()
        fields = ("username", "first_name", "last_name")


class TaskType(DjangoObjectType):
    class Meta:
        model = Task
        fields = ("id", "title", "description", "author")


class TaskMutation(DjangoModelFormMutation):
    task = Field(TaskType)

    class Meta:
        form_class = TaskForm


class Query(graphene.ObjectType):
    all_tasks = graphene.List(TaskType)
    me = graphene.Field(UserType)

    @staticmethod
    def resolve_all_tasks(root, info):
        return Task.objects.select_related("author").all()

    @login_required
    def resolve_me(root, info):
        return info.context.user


class Mutation(graphene.ObjectType):
    new_task = TaskMutation.Field(description="Create a new task")
    update_task = TaskMutation.Field(description="Update an existing task")

    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
